import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MarkdownModule, MarkdownService } from 'ngx-markdown'

import { AboutComponent } from './about.component'

describe('ChartsComponent', () => {
  let component: AboutComponent
  let fixture: ComponentFixture<AboutComponent>
  let markdownService: MarkdownService

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [
        MarkdownModule.forRoot(),
      ],
    }).compileComponents()
  }))

  beforeEach(() => {
    markdownService = TestBed.inject(MarkdownService)
    fixture = TestBed.createComponent(AboutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
