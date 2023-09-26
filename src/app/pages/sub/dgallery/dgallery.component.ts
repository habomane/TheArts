import { Component } from '@angular/core';
import GalleryCard from 'src/app/GalleryCard';

@Component({
  selector: 'app-dgallery',
  templateUrl: './dgallery.component.html',
  styleUrls: ['./dgallery.component.scss']
})
export class DgalleryComponent {

  dessertGallery: GalleryCard[] = 
  [
    //food 
    new GalleryCard("Honeycomb", 'assets/images/bread.jpg', "Fluffy bread balls in the shape of a honeycomb, filled with cream cheese and topped with roasted sesame seeds Can be covered in syrup glaze at request.", ['assets/images/bread.jpg', 'assets/images/bread-2.jpg']),
    new GalleryCard("Standing Cake", 'assets/images/standingcake-2.jpg', "3/4th standing cake with floral design and chocolate drip, choice of flavor or frosting can be requested.", ['assets/images/standingcake-2.jpg', 'assets/images/standingcake.jpg']),
    new GalleryCard("Mini Cupcakes", 'assets/images/cupcakes.jpg', "Mini cupcakes with rosettes and leaves. Choice of flavor or frosting can be requested.", ['assets/images/cupcakes.jpg']),
    new GalleryCard("Lotus Dessert Cup", 'assets/images/biscotti.jpg', "Lotus cookies crust with lotus cream spread, topped with a layer of lotus spread and chocolate design.", ['assets/images/biscotti.jpg', 'assets/images/lotus-2.JPG']),
    new GalleryCard("Yemeni Cake", 'assets/images/blackcake.jpg', "Traditional yemeni design with bakhoor decor on top and same theme flowers on the side. Design uses fondant.", ['assets/images/blackcake.jpg', 'assets/images/yemeni-2.jpg']),
    new GalleryCard("Engagement Cake", 'assets/images/cutecake.jpg', "Elegant and classic white cake with border on bottom and top with beautiful roses in the back. Custom cake topper available at small additional cost.", ['assets/images/cutecake.jpg', 'assets/images/engagement-2.jpg']),
    new GalleryCard("Wedding Cake", 'assets/images/rusticcake.jpg', "Simple naked cake, three tiered (not too large) with floral design elegantly placed. Custom cake topper available at small additional cost.", ['assets/images/rusticcake.jpg', 'assets/images/wedding-2.JPG']),
    new GalleryCard("Ombre Cake", 'assets/images/ombre-main.JPG', "Ombre effect with candle effect drip, borders on the top and bottom with elegant effect. Flowers at the side and top of the cake. Custom cake topper available at small additional cost.", ['assets/images/ombre-main.JPG', 'assets/images/pinkcake.jpg', 'assets/images/ombre-1.JPG']),
    new GalleryCard("Aqeeqah Cake", 'assets/images/alaa-1.jpg', "Onesie shaped cake in pink or blue with name of child and bordered, with rosettes and leaves (can be replaced with different design as requested).", ['assets/images/alaa-1.jpg', 'assets/images/alaa-2.jpg', 'assets/images/alaa-3.jpg'])


  ]


  
}
