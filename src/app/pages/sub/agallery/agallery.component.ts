import { Component } from '@angular/core';
import GalleryCard from 'src/app/GalleryCard';


@Component({
  selector: 'app-agallery',
  templateUrl: './agallery.component.html',
  styleUrls: ['./agallery.component.scss']
})
export class AgalleryComponent {

  artGallery: GalleryCard[] = 
  [
    new GalleryCard("Seek Your Dream and You Will Reach It.", 'assets/images/seekdream.jpg', "“Reach your dream and you will reach it” painted in gold leaf in both Arabic calligraphy and english. The background features a beautiful green smokey design with gold detail.", ['assets/images/seekdream.jpg', 'assets/images/seek-2.jpg', 'assets/images/seek-3.jpg']),
    new GalleryCard("Never Give Up", 'assets/images/nevergiveup.jpg', "“Never Give Up” in gold leaf with gold cloudy detail.", ['assets/images/nevergiveup.jpg', 'assets/images/nevergiveup-2.JPG', 'assets/images/nevergiveup-3.jpg']),
    new GalleryCard("Tawakkul", 'assets/images/tawakkul.jpg', "Tawakul written in arabic calligraphy using gold leaf, with beautiful roses and flower decor. ", ['assets/images/tawakkul.jpg', 'assets/images/tawakkul-2.jpg', 'assets/images/tawakkul-3.jpg', 'assets/images/tawakkul-4.jpg']),
    new GalleryCard("Shahaddah", 'assets/images/shahada.jpg', "The shahaddah in the shape of two circles opposite and diagonal to each other, in beautiful gold leaf.", ['assets/images/shahada.jpg', 'assets/images/shahada-2.jpg', 'assets/images/shahada-3.jpg']),
    new GalleryCard("And if You Are Grateful, I Will Give You More", 'assets/images/ifgrateful.jpg', "“And if you are grateful, I will give you more” in gold leaf with beautiful abstract design at the bottom.", ['assets/images/ifgrateful.jpg'])

  ]





}
