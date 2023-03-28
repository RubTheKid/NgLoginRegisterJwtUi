import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   title = 'login';
  user = new User();

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
register(user: User){
    this.AuthService.register(user).subscribe();
  }

  login(user: User){
    this.AuthService.login(user).subscribe((token: string) => {
      localStorage.setItem('authToken', token);
    });
  }

  getusername(){
    this.AuthService.getUserName().subscribe((name: string) =>{
      console.log(name);
    });
  }


}
