import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
    Education : {year : string , degree : string , about : string}[] = [ 
      {year : "2015 - 2017", degree : "SSLC" , about : "With Biology as the field of domain Secured 85% in StateBoard." },
      {year : "2017 - 2021", degree : "Bachelors in Engineering" , about : "Pursued Computer Science and Engineering in with CGPA of 8.1 in Sri Sairam Engineering College, Tambaram, TamilNadu"},
    ];

    Experiance : {year : string , role : string , about:String}[] = [
      {year : "2021 August - 2022 March" , role : "Data Engineer" , about:"Learnt and Applied Python Programming Language along with DataStructures to create and develop Application from backend while maintaining the Data in SQL Server."},
      {year : "2022 March - 2023 March" , role : "Application Development Associate" , about:"Created and Maintaining the Application with BackEnd Technologies like .Net, C#,Linq Queries, PL/SQL along with ORM-FrameWorks such as Entity Framework and Communicating to UserInterface using RESTFULL API'S with Front-End Technologies like Angular,HTML,CSS,Java Script."},
    ]
}
