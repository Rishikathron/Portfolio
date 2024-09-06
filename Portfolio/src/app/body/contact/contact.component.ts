import { Component } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  phnumber : any = '';
  name : any = '';
  subject : any = '';
  message : any = '';
  email : any = '';
 

  onsendmessage(){
   
    setTimeout( function ( ) { alert('Email Sent! Thanks for reaching me out'); }, 1000 ); 
    setTimeout( 
      function ( ) {         
        alert('For any immediate queries, feel free to call me — I promise I don\'t bite (unless you\'re a spam call, then all bets are off)! 😊📞'); 
      }, 1200 );
      this.phnumber = '';
      this.name  = '';
      this.subject  = '';
      this.message  = '';
      this.email = '';
  }
}
