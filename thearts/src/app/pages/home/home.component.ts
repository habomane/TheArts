import { Component } from '@angular/core';
import GalleryCard from 'src/app/GalleryCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  homeGallery: GalleryCard[] = [
    new GalleryCard("Mini Cupcakes", 'assets/images/cupcakes.jpg', "Mini cupcakes with rosettes and leaves. Choice of flavor or frosting can be requested.", ['assets/images/cupcakes.jpg']),
    new GalleryCard("Seek Your Dream and You Will Reach It.", 'assets/images/seekdream.jpg', "“Reach your dream and you will reach it” painted in gold leaf in both Arabic calligraphy and english. The background features a beautiful green smokey design with gold detail.", ['assets/images/seekdream.jpg']),
    new GalleryCard("Standing Cake", 'assets/images/standingcake-2.jpg', "3/4th standing cake with floral design and chocolate drip, choice of flavor or frosting can be requested.", ['assets/images/standingcake-2.jpg']),
    new GalleryCard("Never Give Up", 'assets/images/nevergiveup.jpg', "“Never Give Up” in gold leaf with gold cloudy detail.", ['assets/images/nevergiveup.jpg']),
    new GalleryCard("Honeycomb", 'assets/images/bread.jpg', "Fluffy bread balls in the shape of a honeycomb, filled with cream cheese and topped with roasted sesame seeds Can be covered in syrup glaze at request.", ['assets/images/bread.jpg']),
    new GalleryCard("And if You Are Grateful, I Will Give You More", 'assets/images/ifgrateful.jpg', "“And if you are grateful, I will give you more” in gold leaf with beautiful abstract design at the bottom.", ['assets/images/ifgrateful.jpg'])
  ]
}
