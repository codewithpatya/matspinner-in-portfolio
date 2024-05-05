import { Component} from '@angular/core';
import { ContactService } from '../backend/contact.service';
import { NgForm } from '@angular/forms';
import { Contact } from '../interface/contact';
@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component  {

  loader:boolean = false
  
  constructor (private contact:ContactService) {}

  Contacts:Contact = {name:"",email:"",contact:0,message:"",}

  handleSave(Cform:NgForm){
    this.loader = true
    this.contact.postContact(Cform.value).subscribe((data:any)=>{
      console.log("POSTED DATA:",data);
      alert("Send Sucessfully!!")
      this.loader = false
    })
    this.cls()
  }


  cls(){
    this.Contacts._id = "";
    this.Contacts.name = "";
    this.Contacts.email = "";
    this.Contacts.message = "";
    this.Contacts.contact = 0;
  }

}
