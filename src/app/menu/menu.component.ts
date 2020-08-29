import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  openDialog() {
    this.dialog.open(DialogTacosMenu, {
      width: '400px',
      height: '540px',
      panelClass: 'dialog-design'
    });
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}


//---------------TACOS DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Tacos-Menu',
  templateUrl: 'Dialog-Tacos-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogTacosMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogTacosMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
