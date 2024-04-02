import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'contacts', component: ListComponent },
  { path: 'contacts/new', component: NewComponent},
  { path: 'contacts/:id', component: ViewComponent},
  { path: 'contacts/:id/edit', component: EditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
