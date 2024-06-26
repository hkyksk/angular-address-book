import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { ListComponent } from './list/list.component'
import { NewComponent } from './new/new.component'
import { ViewComponent } from './view/view.component'
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
