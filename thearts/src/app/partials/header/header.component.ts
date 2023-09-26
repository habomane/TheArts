import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarvisible!: boolean;
  hiddenBrowse:  boolean = true;

  DisplayNav() : void {
    this.navbarvisible = !this.navbarvisible;
  }

  openBrowse(): void {
    this.hiddenBrowse = !this.hiddenBrowse;
  }

  closeBrowse()
  {
    this.hiddenBrowse = !this.hiddenBrowse;
    this.navbarvisible = !this.navbarvisible;
  }

  closeNav()
  {
    this.navbarvisible = !this.navbarvisible;

  }

}
