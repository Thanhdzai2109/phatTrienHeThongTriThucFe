import { Component } from '@angular/core';
import {FethApiService} from "../../../common/api/feth-api.service";
import {OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit  {

  constructor(
    private api: FethApiService,
    private fb: FormBuilder
  ) { }
  ngOnInit() {

  }

}
