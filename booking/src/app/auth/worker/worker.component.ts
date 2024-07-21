import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['worker.component.css']
})
export class WorkerComponent {

  constructor(private router:Router, private authservice:AuthService)
  {
    
  }

  registerWorker=new FormGroup(
    {
      name:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      contact_number:new FormControl(),
      category:new FormControl(),
      document:new FormControl()

   }
  )

  submitForm(): void {
    console.log(this.registerWorker.value)
    this.authservice.registerWorker(this.registerWorker.value).subscribe((val)=>
     {
 console.log(val)  
 console.log("DONE!!") 
  })  }

}

