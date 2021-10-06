import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReceptuSarasasComponent } from './receptu-sarasas/receptu-sarasas.component';
import { ReceptoAprasasComponent } from './recepto-aprasas/recepto-aprasas.component';
import { PridetiIngredientaComponent } from './recepto-aprasas/prideti-ingredienta/prideti-ingredienta.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:"", component:ReceptuSarasasComponent},
  {path:"receptas/:id", component:ReceptoAprasasComponent},
  {path:"receptas/:id/prideti", component:PridetiIngredientaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ReceptuSarasasComponent,
    ReceptoAprasasComponent,
    PridetiIngredientaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
