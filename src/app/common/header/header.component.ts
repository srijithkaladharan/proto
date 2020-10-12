import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "250px";
    dialogConfig.width = "400px";

    const modalDialog = this.matDialog.open(LogoutModalComponent, dialogConfig);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToPage(pageName: string) {
    this.router.navigate[pageName];
  }

}
