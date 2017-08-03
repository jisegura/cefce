import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ScefceExitDialogComponent } from 'app/scefce-exit-dialog/scefce-exit-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'app works!';
  selectedOption: string;

  constructor(public dialog: MdDialog) {}

  kiosk = {
    toggle() {
      const { remote } = electron;
      let window = remote.getCurrentWindow();
      if (window.isKiosk()) {
        window.setKiosk(false);
      } else {
        window.setKiosk(true);
      }
    }
  }

  openDialog() {
    this.dialog.open(ScefceExitDialogComponent);
  }
}
