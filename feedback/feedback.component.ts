import { Component } from '@angular/core';
import { FeedbackService } from '../backend/feedback.service';
import { Interface } from '../interface/interface';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  loader:boolean = false
  review:boolean = false
  constructor (private feed:FeedbackService,private router:Router) {}

  Feedbacks:Interface = {name:"",email:"",message:""}

  handleSave(Fform:NgForm){
    this.loader = true
    this.feed.postFeedbackontact(Fform.value).subscribe((data:any)=>{
      console.log("POSTED DATA:",data);
      alert("Send Sucessfully!!")
        this.loader = false
        this.review = true  
    })
    this.cls()
  }

  
  cls(){
    this.Feedbacks._id = "";
    this.Feedbacks.name = "";
    this.Feedbacks.email = "";
    this.Feedbacks.message = "";
  }
}
