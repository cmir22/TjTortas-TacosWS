import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


//---------------METHOD DIALOG-----------------------------------------------
  openDialogTacos() {
    this.dialog.open(DialogTacosMenu, {
      width: '550px',
      height: '520px',
      panelClass: 'dialog-design'
    });
  }

  openDialogBurritos() {
    this.dialog.open(DialogBurritosMenu, {
      width: '550px',
      height: '650px',
      panelClass: 'dialog-design'
    });
  }

  openDialogTortas() {
    this.dialog.open(DialogTortasMenu, {
      width: '550px',
      height: '830px',
      panelClass: 'dialog-design'
    });
  }

  openDialogMulitas() {
    this.dialog.open(DialogMulitasMenu, {
      width: '550px',
      height: '520px',
      panelClass: 'dialog-design'
    });
  }

  openDialogQuesadillas() {
    this.dialog.open(DialogQuesadillasMenu, {
      width: '550px',
      height: '520px',
      panelClass: 'dialog-design'
    });
  }

  openDialogVegetarian() {
    this.dialog.open(DialogVegetarianMenu, {
      width: '550px',
      height: '400px',
      panelClass: 'dialog-design'
    });
  }

  openDialogBirria() {
    this.dialog.open(DialogBirriaMenu, {
      width: '550px',
      height: '400px',
      panelClass: 'dialog-design'
    });
  }

  openDialogFish() {
    this.dialog.open(DialogFishMenu, {
      width: '550px',
      height: '400px',
      panelClass: 'dialog-design'
    });
  }

  openDialogExtra() {
    this.dialog.open(DialogExtraMenu, {
      width: '550px',
      height: '700px',
      panelClass: 'dialog-design'
    });
  }

//---------------METHOD DIALOG-----------------------------------------------

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

//---------------BURRITOS DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Burritos-Menu',
  templateUrl: 'Dialog-Burritos-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogBurritosMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogBurritosMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------TORTAS DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Tortas-Menu',
  templateUrl: 'Dialog-Tortas-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogTortasMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogTortasMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------MULITAS DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Mulitas-Menu',
  templateUrl: 'Dialog-Mulitas-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogMulitasMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogMulitasMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------QUESADILLAS DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Quesadillas-Menu',
  templateUrl: 'Dialog-Quesadillas-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogQuesadillasMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogQuesadillasMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------VEGETARIAN DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Vegetarian-Menu',
  templateUrl: 'Dialog-Vegetarian-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogVegetarianMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogVegetarianMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------VEGETARIAN DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Birria-Menu',
  templateUrl: 'Dialog-Birria-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogBirriaMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogBirriaMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------VEGETARIAN DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Fish-Menu',
  templateUrl: 'Dialog-Fish-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogFishMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogFishMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

//---------------VEGETARIAN DIALOG-----------------------------------------------
@Component({
  selector: 'Dialog-Extra-Menu',
  templateUrl: 'Dialog-Extra-Menu.html',
  styleUrls: ['./Dialog-Menu.scss']
})
export class DialogExtraMenu {

  constructor(
    public dialogRef: MatDialogRef<DialogExtraMenu>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}