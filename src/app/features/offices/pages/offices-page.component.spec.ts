import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

// @ts-ignore
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'
import { OfficesPageComponent } from './offices-page.component'

describe('OfficesPageComponent', () => {
  let component: OfficesPageComponent
  let fixture: ComponentFixture<OfficesPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        OfficesPageComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
