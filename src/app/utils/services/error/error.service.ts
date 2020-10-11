import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private snackbar: MatSnackBar,
    private zone: NgZone
  ) { }

  private open(message, action = "success", duration = 4000) {
    this.zone.run(() => {
      this.snackbar.open(message, action, { duration });
    })
  }

  public handleError(error: HttpErrorResponse | any) {
    this.open(error, 'error');
    return throwError(error);
  }
}
