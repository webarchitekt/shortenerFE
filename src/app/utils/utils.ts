import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class Utils {

  constructor(
    public snackBar: MatSnackBar,
  ) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, "",{duration: 2000, panelClass: 'error-snack', horizontalPosition: "center"});
  }

  openSuccessSnackBar(message: string) {
    this.snackBar.open(message, "",{duration: 2000, panelClass: 'success-snack', horizontalPosition: "center"});
  }

}
