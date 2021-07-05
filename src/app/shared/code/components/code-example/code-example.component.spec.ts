import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CodeExampleComponent } from './code-example.component'

describe('CodeExampleComponent', () => {
  let component: CodeExampleComponent
  let fixture: ComponentFixture<CodeExampleComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeExampleComponent,
      ],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExampleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
