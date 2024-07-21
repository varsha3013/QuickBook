import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cleaning',
  templateUrl: './cleaning.component.html',
  styleUrls: ['./cleaning.component.css']
})
export class CleaningComponent  {

  bedsOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // Array for beds select options
  bathsOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1); // Array for baths select options
  constructor( private authservice: AuthService, private router: Router) {}

  
  cleaningForm =new FormGroup(
   {
  userId:new FormControl(24),
  category_id:new FormControl(1),
  time_selected:new FormControl()
    }


  )

  submitForm(): void {
   console.log(this.cleaningForm.value)
   this.authservice.sendBooking(this.cleaningForm.value).subscribe((val)=>
    {
console.log(val)  
console.log("DONE!!") 
 })  }
   
}
