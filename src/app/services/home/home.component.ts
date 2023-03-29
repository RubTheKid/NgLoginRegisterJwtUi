import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  getusername(){
    this.AuthService.getUserName().subscribe((name: string) =>{
      console.log(name);
      
    });
  }
}
