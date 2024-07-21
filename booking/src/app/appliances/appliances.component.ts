import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent {
  constructor( private authservice: AuthService, private router: Router) {}


 applianceRep =new FormGroup(
  {
  userId:new FormControl(19),
  category_id:new FormControl(5),
  time_selected:new FormControl()
   }

  )

  submitForm(): void {
    console.log(this.applianceRep.value)
    this.authservice.sendBooking(this.applianceRep.value).subscribe((val)=>
     {
 console.log(val)  
 console.log("DONE!!") 
  })  }

}
