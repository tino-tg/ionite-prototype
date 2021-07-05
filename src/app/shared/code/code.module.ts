import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HighlightModule } from 'ngx-highlightjs'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'

import { CodeExampleComponent } from './components/code-example'
import { CodeSnippetComponent } from './components/code-snippet'


@NgModule({
  declarations: [
    CodeExampleComponent,
    CodeSnippetComponent,
  ],
  imports: [
    CommonModule,
    HighlightModule,
    ClipboardModule,

    // shared angular material resources
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
  ],

  exports: [
    CodeExampleComponent,
    CodeSnippetComponent,

    // shared angular material resources
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
  ],

  providers: [],
})
export class CodeModule { }
