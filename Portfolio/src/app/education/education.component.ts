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

    // project Contents

    Projects : {Title : string, Description : string, image : string, Projectlink:string}[] = [
      {
        Title : "TIK TAC TOE",
        Description : "A project solely to test out the TypeScript Programming Language in Action and along with very normal css stylings.",
        image : "../../assets/Experiance_Projects/tictactow.jpg",
        Projectlink : "https://rishwanth-tic-tac-toe.netlify.app"
      },
      {
        Title : "To Do",
        Description : "A project solely to test out the TypeScript Programming Language in Action and along with very normal css stylings.",
        image : "../../assets/Experiance_Projects/to_do.jpg",
        // image : "../../assets/Experiance_Projects/tictactow.jpg",
        Projectlink : "https://rishwanth-todo.netlify.app"
      },
      {
        Title : "FaceRecognition",
        Description : "Project which is made with Python Programming Language along with OpenCV by training the datamodel and dentifying or confirming an individual's identity using their face",
        image : "../../assets/Experiance_Projects/FaceRecognition.jpg",
        Projectlink : "https://github.com/Rishikathron/Face-Recognization.git"
      },
      {
        Title : "FR-Attandance",
        Description : "Advanced application of the Face Recognition project which marks attendance automatically with Excel on frequent intervals and update the Assessors through E-Mail.",
        image : "../../assets/Experiance_Projects/Attendance.png",
        Projectlink : "https://github.com/Rishikathron/Attendance-Management-System-in-Image-Processing.git"
      },
      {
        Title : "E-Commerce",
        Description : "An Undergoing Project project solely to focuss out the Api's, TypeScript and JavaScript and other Frameworks related to E-Commerce and learn core fundamentals through it.",
        image : "../../assets/Experiance_Projects/E-Commerce.jpg",
        // image : "../../assets/Experiance_Projects/tictactow.jpg",
        Projectlink : "https://img.freepik.com/free-vector/construction-landing-page-template_52683-11358.jpg?w=1060&t=st=1691670519~exp=1691671119~hmac=599a323d0643baaf0b1fd2610d23778202119c6368e9d572884518c2cb647520"
      },
    ]

}
