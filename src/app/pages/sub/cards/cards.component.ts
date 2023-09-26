import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import GalleryCard from 'src/app/GalleryCard';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input('item') card!: GalleryCard;
  popupnotvisible: boolean = false;
  recipe: GalleryCard = this.card;

  constructor(private modalService: ModalService) {}

  openPopUp(): void {

    this.popupnotvisible = !this.popupnotvisible;
    this.modalService.currentCard = this.card;
  }


  closeModal(event : any) {
    this.popupnotvisible = event;
  }
}
