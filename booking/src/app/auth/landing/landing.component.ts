import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent {
  constructor( private router: Router){}


  // naviToLogin():void
  // {
  //   this.router.navigate(["/login"])
  // }

 navigateToCleaning():void
 {
  this.router.navigate(['/cleaning'])
 }

 navigateToCarpentry():void
 {
   this.router.navigate(['/carpentry'])
 }

 navigateToPlumbing():void
 {
   this.router.navigate(['/plumbing'])
 }

 navigateToPainting():void
 {
  this.router.navigate(['/painting'])
 }

 navigateToAppliances():void
 {
  this.router.navigate(['/appliances'])
 }

}
