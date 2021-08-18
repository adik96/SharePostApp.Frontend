import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout().subscribe((res) => {
      this._snackBar.open("Logged out successfully", "Ok", {
        duration: 3000
      });
    }, (error) => {}
    );
    
  }

}
