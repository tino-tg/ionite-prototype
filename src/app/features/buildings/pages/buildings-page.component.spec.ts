import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BuildingsPageComponent } from './buildings-page.component'

describe('BuildingsPageComponent', () => {
  let component: BuildingsPageComponent
  let fixture: ComponentFixture<BuildingsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BuildingsPageComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
