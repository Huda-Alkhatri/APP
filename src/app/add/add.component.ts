import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-addt',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert: boolean = false;
  addcom = new FormGroup({
    Id: new FormControl (''),
    name: new FormControl(''),
    Adress: new FormControl(''),
    email: new FormControl('')
  })
  constructor(private resto: CommonService) { }

  ngOnInit(): void {
  }


  craeteResto() {
    console.log(this.addcom.value);
    this.resto.addResto(this.addcom.value).subscribe((result) => {
      this.alert = true;
      this.addcom.reset({});
      console.log("Get Data From Service", result)
    })
  }
  closeAlert() {
    this.alert = false;
  }

}