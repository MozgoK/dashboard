import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { Message } from '../../shared/models/message.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'dash-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.message = new Message('', '', true);

    this.route.queryParams
      .subscribe((params: Params) => {
        if (params['nowCanLogin']) {
          this.showMessage('Теперь вы можете зайти в систему', 'success');
        }
      });

    this.form = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;

    this.loading = true;
    this.userService.getUserByName(formData.username)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            this.message.closed = true;
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            // this.router.navigate(['']);
          } else {
            this.showMessage('Пароль неверен!');
          }
        } else {
          this.showMessage('Такого пользователя не существует!');
        }
        this.loading = false;
      },
      (error) => {
        this.showMessage('Ошибка соединия с сервером');
        this.loading = false;
      },
    );
  }

  showMessage(text: string, type: string = 'danger') {
    this.message = new Message(type, text, false);
    // setTimeout(() => this.messages = [], 5000);
  }

}
