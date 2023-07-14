import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingListRouterModule } from './shopping-list-router.module';
import { DropdownDirective } from '../shared/dropdown.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [RouterModule, CommonModule, FormsModule, ShoppingListRouterModule],
  exports: [ShoppingListComponent, ShoppingEditComponent],
})
export class ShoppingListModule {}
