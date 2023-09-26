import { Component,  ElementRef,  OnInit, ViewChild} from '@angular/core';
import { SubmissionForm } from 'src/app/form';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  shakeinput: boolean = false;
  fullname!: string;
  email!: string;
  phonenumber!: number;
  message!: string;
  type: string = "Art";

  constructor(private emailService: EmailService) {}

  ngOnInit(): void
  {

    
  }

  onSelected(input: any): void {
    this.type = input;
    console.log(input)
  }

  async submitForm() {
    if(this.validateFields())
    {
    let form = new SubmissionForm(this.fullname, this.type, this.email, this.phonenumber,this.message);

    let response = await this.emailService.sendEmail(form);
    
    if(response.status === 200)
    {
    alert("Form submitted successfully")
    this.fullname = '';
    this.email = '';
    this.message ='';
    this.type = 'Art';
    this.phonenumber = 0;
    } else {
      alert("Error. Please try again")
    }
  }

    
  }

  validateFields(): boolean {
    if(this.fullname == null)
    {
      alert('Name field must be filled out')
      return false;
    }

    else if(this.message == null)
    {
      alert('Please include a message')
      return false
    }

    else if(!this.validateEmail(this.email)) {
      this.shakeinput = !this.shakeinput;
    }
    else {
      return true;
    }
    return false;
  }

  validateEmail(email: string): boolean {
    // Regular expression for a basic email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
}
