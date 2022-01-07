import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './anime-list/anime-list.component'
import { AnimeDetailComponent } from './anime-detail/anime-detail.component'
import {StudioDetailComponent} from "./studio-detail/studio-detail.component";
import {StudioListComponent} from "./studio-list/studio-list.component";

const routes: Routes = [
  {path: '', component: AnimeListComponent},
  {path: 'anime/detail', component: AnimeDetailComponent},
  {path: 'studio-list', component: StudioListComponent},
  {path: 'studio/detail', component: StudioDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
