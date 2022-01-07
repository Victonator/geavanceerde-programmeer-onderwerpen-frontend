import { Component, OnInit } from '@angular/core';
import {Serie} from "../models/serie";
import {Subject, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {Studio} from "../models/studio";
import {StudioService} from "../services/studio.service";

@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.scss']
})
export class StudioDetailComponent implements OnInit {

  studioName: string = "";

  series: Serie[] = [];
  studio: Studio = {id: 0, name: "", seriesAmount:0 ,series: this.series};


  studio$: Subscription = new Subscription();

  //Datatables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private studioService: StudioService,
              private router: Router,) {

    this.studioName = this.router.getCurrentNavigation()?.extras.state?.studioName;
    this.getStudio()
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthChange: true,
      lengthMenu: [5,10,15,20],
      order: [],
    };
  }

  ngOnDestroy(): void {
    this.studio$.unsubscribe();
  }


  detail(name: string) {
    this.router.navigate(['anime/detail'], {state: {animeName: name}});
  }

  async getStudio(){
    if (this.studioName != null && this.studioName != "") {
      this.studio$ = await this.studioService.getStudioByName(this.studioName).subscribe(result => {
        this.studio = result
      });

    }
  }
}
