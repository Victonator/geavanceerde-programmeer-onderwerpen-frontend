import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {StudioService} from "../services/studio.service";
import {Studio} from "../models/studio";

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.scss']
})
export class StudioListComponent implements OnInit {

  studios: Studio[] = []

  //Datatables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private studioService:StudioService,
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
    await this.studioService.getStudios().subscribe(data => {
      this.studios = data;
      this.dtTrigger.next();
    });
  }

  detail(name: string) {
    this.router.navigate(['studio/detail'], {state: {studioName: name}});
  }

}
