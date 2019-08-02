import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {

  
  constructor(public dialog: MatDialog) { }


  closeDialog(){
    this.dialog.closeAll();
  }

  ngOnInit() {
  }

}
