import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
// import { User } from 'src/app/shared/interfaces/user.interfaces';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit
{
  
  
  
  registerform!:FormGroup
// UserData!:User;



constructor(private authservice:AuthService,private router:Router)
{

}


ngOnInit():void{
  this.createForm();


  // this.authservice.getUsers().subscribe((data)=>
  // {
  //   console.log(data)
  //   this.UserData=data;  
  // }
  // )
}

createForm():void
{

  this.registerform=new FormGroup
    (
  {username :new FormControl(),
  password :new FormControl(),
  email :new FormControl(),
  fullname :new FormControl(),
  mobile :new FormControl()
})
  
}


submit():void{
  console.log(this.registerform.value)

  this.authservice.register(this.registerform.value).subscribe((value)=>
  {
console.log("REGISTERED!!") 
this.router.navigate(["/landing"])
  })

}


}