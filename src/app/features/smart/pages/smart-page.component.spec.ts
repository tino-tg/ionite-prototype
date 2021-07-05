import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SmartPageComponent } from './smart-page.component'

describe('SmartPageComponent', () => {
  let component: SmartPageComponent
  let fixture: ComponentFixture<SmartPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SmartPageComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
