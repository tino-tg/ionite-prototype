import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { MarkdownModule, MarkdownService } from 'ngx-markdown'

import { AboutPageComponent } from './about-page.component'

describe('AboutPageComponent', () => {
  let component: AboutPageComponent
  let fixture: ComponentFixture<AboutPageComponent>
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
    fixture = TestBed.createComponent(AboutPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
