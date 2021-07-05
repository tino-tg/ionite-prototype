import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from "@angular/material/card"
import { MatListModule } from "@angular/material/list"
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatChipsModule } from '@angular/material/chips'

import { CardComponent } from './components/card/card.component'
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component'
import { CodeModule } from './code/code.module'

@NgModule({
  declarations: [
    // custom ui elements
    CardComponent,
    ComingSoonComponent,
  ],
  imports: [
    CommonModule,

    // code module
    CodeModule,

    // basic shared angular material resources
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,
  ],

  exports: [
    // code module
    CodeModule,

    // basic shared angular material resources
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatTableModule,

    // custom ui elements
    CardComponent,
    ComingSoonComponent,
  ],
})
export class SharedModule { }
