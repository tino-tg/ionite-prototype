import { TestBed } from '@angular/core/testing'
import { provideMockStore } from '@ngrx/store/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'

import { AppModule } from '../app.module'
import { AppComponent } from './app.component'
import { testAppState } from '../core/core.state'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideMockStore({
          initialState: testAppState,
        }),
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'ionite'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('I/O.nite')
  })

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    const compiled = fixture.nativeElement
    expect(compiled.querySelector('.sidenav__logo__title').textContent).toContain('I/O.nite')
  })
})
