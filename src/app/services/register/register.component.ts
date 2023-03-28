import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   title = 'register';
  user = new User();

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

register(user: User){
    this.AuthService.register(user).subscribe();
  }

}
