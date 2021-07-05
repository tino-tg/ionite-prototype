import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '@shared/shared.module'
import { AboutRoutingModule } from './about-routing.module'
import { AboutPageComponent } from './pages/about-page'
import { AboutComponent } from './components/about'
import { MarkdownModule } from 'ngx-markdown'

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,

    // shared resources
    SharedModule,

    // markdown rendering support for feature module
    MarkdownModule.forChild(),
  ],
  declarations: [
    AboutPageComponent,
    AboutComponent,
  ],
})
export class AboutModule {}
