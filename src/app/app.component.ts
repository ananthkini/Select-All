import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Select All'; // name of the app
  selectAll:boolean;
  checklist:any;

  constructor(){
      this.selectAll = false;
      this.checklist = [
        {id:1,value:'Agree to terms and conditions',isChecked:false},
        {id:2,value:'Send anonymous data to us for better experience',isChecked:false},
        {id:3,value:'Stay connected',isChecked:false}
      ];
  }

  fn_selectAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isChecked = this.selectAll;
    }
  }

  fn_isAllSelected() {
    this.selectAll = this.checklist.every(function(item:any) {
      return item.isChecked == true;
    })
  }

}
