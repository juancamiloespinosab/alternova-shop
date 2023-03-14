import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResponsiveService } from './responsive.service';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(
    private snackBar: MatSnackBar,
    private responsiveService: ResponsiveService
  ) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      verticalPosition: this.responsiveService.isMobile ? 'bottom' : 'top',
    });
  }
}
