import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

first=''
last=''
dob=''
email=''
mobile=''
address=''
getfname=''
getlname=''
getdob=''
getemail=''
getmobile=''
getaddress=''

css="background-color:green"

  constructor() { }

  ngOnInit(): void {
  }
changename(){
  this.first=this.getfname;
  this.last=this.getlname;
  this.dob=this.getdob;
  this.email=this.getemail;
  this.mobile=this.getmobile;
  this.address=this.getaddress;
}
cancle(){
 this.first=''
 this.last=''
 this.dob=''
 this.email=''
 this.mobile=''
 this.address=''
 this.getfname=''
 this.getlname=''
 this.getdob=''
 this.getemail=''
 this.getmobile=''
 this.getaddress=''
}
}
