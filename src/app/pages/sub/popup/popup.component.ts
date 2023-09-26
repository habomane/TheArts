import { Component , EventEmitter, Output, Input, OnInit} from '@angular/core';
import GalleryCard from 'src/app/GalleryCard';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
@Input('recipe') recipe!: GalleryCard;
 @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>()
 currentImageLocation: number = 0;
displayedImage!: string;

 constructor(private modalService: ModalService){}
 closeModal() {
    this.close.emit(false);
  }

  changeImage(num: number)
  {
    this.currentImageLocation += num;

    //input logic to check length of images array 

    this.displayedImage = this.recipe.images[this.currentImageLocation]

  }



  ngOnInit() {
   this.recipe = this.modalService.currentCard
   this.displayedImage = this.recipe.images[this.currentImageLocation]
  }

}
