import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public collection: any = [];
  alert: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection)
    });
  }
  deleteResto(resto: any) {
    this.collection.splice(resto.Id, -1)
    this.commonService.deleteResto(resto).subscribe((result) => {
      console.log("Data is Deleted Successfull !", result)
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }

}