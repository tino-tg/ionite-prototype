import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { CodeSnippetComponent } from './code-snippet.component'

describe('CodeSnippetComponent', () => {
  let component: CodeSnippetComponent
  let fixture: ComponentFixture<CodeSnippetComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
      ],
      declarations: [
        CodeSnippetComponent,
      ],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSnippetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
