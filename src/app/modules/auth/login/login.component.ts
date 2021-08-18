import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, FormGroupDirective, Validators, NgForm, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { LoginModel } from '../../../shared/models/login.model';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responseError: String;
  form: FormGroup;
  model: LoginModel;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.authenticationService.logout();
    this.createForm();
    this.onValueChanges();
  }

  onSubmit(): void {
    this.authenticationService.login(this.model)
      .subscribe((res) => {
        this._snackBar.open("Logged in successfully", "Ok", {
          duration: 3000
        });
        this.router.navigate(['/']);
      }, (error) => {
        this.handleError(error);
      }
      );
  }

  handleLoginResponse() {
    this.router.navigate(['/']);
  }

  handleError(error: any) {
    this.setServerErrors(error);
  }

  createForm() {
    this.model = new LoginModel();

    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.required)
    });
  }

  hasError(controlName: string, errorName: string) {
    var formControl = this.getFormControl(controlName);
    var test = formControl && (formControl.dirty || formControl.touched) && formControl.hasError(errorName);
    return formControl && (formControl.dirty || formControl.touched) && formControl.hasError(errorName);
  }

  getError(controlName: string, errorName: string) {
    var formControl = this.getFormControl(controlName);
    return formControl?.errors?.[errorName];
  }

  setServerErrors(error: any) {
    var ttt = typeof(error.error);
    if(error.hasOwnProperty('error')){
      if(error.error instanceof ProgressEvent)
        this.responseError = this.prepareResponseMessage();
      else if (error['error'].hasOwnProperty('errorCode')) {
        this.responseError = this.prepareResponseMessage(error['error']['errorCode']);
      }
      else
        Object.keys(error['error']).forEach(prop => {
          var formControl = this.getFormControl(prop.toLowerCase());
          if (formControl) {
            // activate the error message
            formControl.setErrors({
              serverError: error['error'][prop]
            });
          }
        });
    }
    
  }

  hasResponseError() {
    return this.responseError !== null;
  }

  prepareResponseMessage(code?: String) : String{
    var result = null;
    switch(code){
      case 'NotFound': 
        result = "The provided e-mail or password is incorrect";
        break;
      default:
        result = "Something went wrong. Please try again later.";
        break;
    }

    return result;
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }

  onValueChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.model = val;
    })
  }
}
