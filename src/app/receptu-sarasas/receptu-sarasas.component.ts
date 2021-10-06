import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receptu-sarasas',
  templateUrl: './receptu-sarasas.component.html',
  styleUrls: ['./receptu-sarasas.component.css']
})
export class ReceptuSarasasComponent implements OnInit {
  receptai;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.receptai = this.dataService.receptai
  }

}
