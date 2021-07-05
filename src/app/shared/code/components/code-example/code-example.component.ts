import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core'

import { ComponentExample } from '@shared/code'

@Component({
  selector: "app-code-example",
  templateUrl: "./code-example.component.html",
  styleUrls: [
    './code-example.component.scss',
  ],
})
export class CodeExampleComponent implements AfterContentInit {
  @Input() componentTitle!: string
  @ContentChildren(ComponentExample) items!: QueryList<ComponentExample>

  expansionIsOpen: boolean = false
  componentTemplate: ComponentExample

  ngAfterContentInit(): void {
    this.componentTemplate = this.items.first
  }
}
