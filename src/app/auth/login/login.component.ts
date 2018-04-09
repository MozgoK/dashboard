import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'dash-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.userService.getUserByName(formData.username)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            console.log('Ура!');
          } else {
            this.showMessage('Пароль неверен!');
          }
        } else {
          this.showMessage('Такого пользователя не существует!');
        }
      });
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text);
    setTimeout(() => this.message.text = '', 5000);
  }

}
