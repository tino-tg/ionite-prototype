import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'

import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module'
import { AppBadgeDialogComponent, AppComponent } from './app/app.component'

@NgModule({
  declarations: [
    AppComponent,
    AppBadgeDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // core resources
    CoreModule,

    // core angular material resources
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
