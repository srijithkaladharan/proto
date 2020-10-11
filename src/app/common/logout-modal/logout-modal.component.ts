import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.scss']
})
export class LogoutModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LogoutModalComponent>, private router: Router) { }

  ngOnInit(): void {
  }

  actionFunction() {
    this.router.navigate(['/login']);
    // alert("You have logged out!!");
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
