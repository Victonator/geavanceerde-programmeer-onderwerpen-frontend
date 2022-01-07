import { Component, OnInit } from '@angular/core';
import {SerieService} from "../services/serie.service";
import {Subject, Subscription} from "rxjs";
import {Serie} from "../models/serie";
import {Character} from "../models/character";
import {Router} from "@angular/router";
import {Gender} from "../models/gender";

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss']
})
export class AnimeDetailComponent implements OnInit {
  animeName: string = "";

  characters: Character[] = [];
  anime: Serie = {id: "", studio: "", name: "", genre: "", movie: false, episodes: 0, season: 0, yearAired: 0,characters: this.characters};


  anime$: Subscription = new Subscription();
  characters$: Subscription = new Subscription();

  //Datatables
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  Gender = Gender;

  constructor(private serieService: SerieService,
              private router: Router,) {

    this.animeName = this.router.getCurrentNavigation()?.extras.state?.animeName;
    console.log(this.animeName)
    this.getAnime()
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
    this.anime$.unsubscribe();
    this.characters$.unsubscribe();
  }


  async getAnime(){
    if (this.animeName != null && this.animeName != "") {
      console.log(this.animeName)
      this.anime$ = await this.serieService.getSerieByName(this.animeName).subscribe(result => {
        this.anime = result
        console.log(result)
        console.log(this.anime)
      });

    }
  }
}
