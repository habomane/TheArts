import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
import { ModalService } from './modal.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { DgalleryComponent } from './pages/sub/dgallery/dgallery.component';
import { AgalleryComponent } from './pages/sub/agallery/agallery.component';
import { CardsComponent } from './pages/sub/cards/cards.component';
import { PopupComponent } from './pages/sub/popup/popup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'art', component: AgalleryComponent},
  {path: 'desserts', component: DgalleryComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BrowseComponent,
    ContactComponent,
    AboutComponent,
    DgalleryComponent,
    AgalleryComponent,
    CardsComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailService, ModalService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
