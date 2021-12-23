import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shared-details-dialog',
  templateUrl: './shared-details-dialog.component.html',
  styleUrls: ['./shared-details-dialog.component.css']
})
export class SharedDetailsDialogComponent implements OnInit {

  template: number = 0;
  entity: any;

  constructor(public dialog: MatDialog
              ,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.template = this.data.templateId;
    this.entity = this.data.entity;
  }



}
