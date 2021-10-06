import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recepto-aprasas',
  templateUrl: './recepto-aprasas.component.html',
  styleUrls: ['./recepto-aprasas.component.css']
})
export class ReceptoAprasasComponent implements OnInit {

  constructor(private route:ActivatedRoute , private dataService:DataService ) { }
receptai;
receptas;
id;
ingredientai;

ingredientName;
ingredientUnits;
ingredientAmount;

addIngredient(name, units, amount){

  this.ingredientai.push({name, units, amount});

  console.log(this.ingredientai);
  
  
}

  ngOnInit(): void {
    this.receptai = this.dataService.receptai;
    this.id = this.route.snapshot.params['id'];
    this.receptas = this.receptai[this.id];
    this.ingredientai = this.receptas.ingredients

    console.log(this.ingredientai);
    
    

  }

}
