import { Injectable } from '@angular/core';
import GalleryCard from './GalleryCard';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  currentCard!: GalleryCard;
  constructor() { }

  
}
