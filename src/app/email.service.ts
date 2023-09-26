import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubmissionForm } from './form';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = ""
  constructor(private http: HttpClient){}

  async sendEmail(form: SubmissionForm) : Promise<EmailJSResponseStatus>
  {
    emailjs.init('N8g_-HFI09hy6JrPc')
    console.log(form.name);
    console.log(form.type);
    console.log(form.email)
    console.log(form.message)
    console.log(form.number)

    let response = await emailjs.send("service_h6na04r","template_gpq7ddr",{
      name: form.name,
      ordertype: form.type,
      phonenumber: form.number,
      message: form.message,
      useremail: form.email,
      });

    return response;

  }
  
}
