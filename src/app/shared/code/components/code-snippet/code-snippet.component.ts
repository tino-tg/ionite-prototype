import { Component, Input } from '@angular/core'
import { Clipboard } from '@angular/cdk/clipboard'

import { copyAnimation } from '../../animations/copy.animations'

@Component({
  selector: "app-code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrls: [
    './code-snippet.component.scss',
  ],
  animations: [
    copyAnimation,
  ],
})
export class CodeSnippetComponent {
  @Input() codeText: string

  copied: boolean = false

  constructor(
    private clipboard: Clipboard,
  ) {}

  onCopyCodeClick(): void {
    this.copied = this.clipboard.copy(this.codeText)
    setTimeout(() => this.copied = false, 3000)
  }
}
