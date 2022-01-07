import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioDetailComponent } from './studio-detail/studio-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    NavigationComponent,
    AnimeDetailComponent,
    StudioListComponent,
    StudioDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
