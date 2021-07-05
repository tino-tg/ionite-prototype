import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

// @ts-ignore
import { CoreModule } from '@core/core.module'
import { SharedModule } from '@shared/shared.module'
import { ProductionsModule } from '@features/productions/productions.module'

import { ProductionsPageComponent } from './productions-page.component'

describe('ProductionsPageComponent', () => {
  let component: ProductionsPageComponent
  let fixture: ComponentFixture<ProductionsPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
        SharedModule,
        ProductionsModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      declarations: [
        ProductionsPageComponent,
      ],
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionsPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
