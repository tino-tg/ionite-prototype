import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChartsPageComponent } from './charts-page.component'

describe('ChartsPageComponent', () => {
  let component: ChartsPageComponent
  let fixture: ComponentFixture<ChartsPageComponent>

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
