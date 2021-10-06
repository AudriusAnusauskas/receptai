import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from './../../data.service';

@Component({
  selector: 'app-prideti-ingredienta',
  templateUrl: './prideti-ingredienta.component.html',
  styleUrls: ['./prideti-ingredienta.component.css']
})
export class PridetiIngredientaComponent implements OnInit {

  //@Input() ingredientai;
  //@Output() ingredientaiEmitter = new EventEmitter<{ingNname:string, units:string, amount:number}>();

  
  constructor(private dataService:DataService, private route:ActivatedRoute, private router:Router) { }
  receptai;
  id;
  ingredientName = "";
  ingredientUnits = "";
  ingredientAmount = "";

  addIngredient(ingName, units, amount){
    this.receptai[this.id].ingredients.push({
      name:ingName,
      units:units,
      amount:amount
    });
    this.router.navigate(['/receptas',this.id]);

    //this.ingredientai.push(ingName.value, units.value, amount);

    //console.log(this.ingredientai);
    
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.receptai=this.dataService.receptai;
  }

}
