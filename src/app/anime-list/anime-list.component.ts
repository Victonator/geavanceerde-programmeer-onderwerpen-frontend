import { Component, OnInit } from '@angular/core';
import {SerieService} from "../services/serie.service"
import {Serie} from "../models/serie";
import {Subject} from "rxjs";
import {DataTablesModule} from 'angular-datatables';
import {Router} from "@angular/router";

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {

  series: Serie[] = []

  //Datatables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private serieService:SerieService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    console.log('test1')
    this.getSeries();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: true,
      lengthMenu: [5,10,15,20],
      order: [],
    };
  }


  async getSeries(){
    console.log('test1')
    await this.serieService.getSeries().subscribe(data => {
      this.series = data;
      this.dtTrigger.next();
    });
  }

  detail(name: string) {
    console.log(name)
    this.router.navigate(['anime/detail'], {state: {animeName: name}});
  }
}
