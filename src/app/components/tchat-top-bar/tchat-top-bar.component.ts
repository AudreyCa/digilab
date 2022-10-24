import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tchat-top-bar',
  templateUrl: './tchat-top-bar.component.html',
  styleUrls: ['./tchat-top-bar.component.scss']
})
export class TchatTopBarComponent implements OnInit {

  data!:any;
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserCurrent().subscribe((response:User) =>{
      console.log(response)
      this.data = response
    })
  }

}
