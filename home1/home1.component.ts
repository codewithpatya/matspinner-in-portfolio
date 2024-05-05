import { Component,OnInit} from '@angular/core';
import { FeedbackService } from '../backend/feedback.service';
import { Interface } from '../interface/interface';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
ngOnInit(): void {
  this.getData()
}

constructor (private feed:FeedbackService) {}

feedbacks:Interface[] = [];

getData(){
  this.feed.getFeedback().subscribe((data:any)=>{
    console.log("BACKEND DATA:",data);
    this.feedbacks = data.data;
  })
}
}
