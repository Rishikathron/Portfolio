import { Component,Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(@Inject (DOCUMENT) document: Document){
    document.getElementById('el');
  }

  menuClick : boolean = true;
  
  
  OnMenuClick(){
    this.menuClick = !this.menuClick;
    if(this.menuClick == true){
      
      const navbar = document.getElementById("Menu")  
      console.log(navbar?.style);      
      if(navbar?.style["display"] == "block"){
          console.log("its none");          
      }
    }
    
  }

}
