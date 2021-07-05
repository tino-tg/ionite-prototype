import { TestBed } from '@angular/core/testing'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { SpectatorService, createServiceFactory } from '@ngneat/spectator'

import { testUiState } from '../types'
import { UiFacadeService } from './ui.facade.service'

describe('Ui Facade Service', () => {
  let spectator: SpectatorService<UiFacadeService>
  let store: MockStore

  const createService = createServiceFactory({
    service: UiFacadeService,
    providers: [
      UiFacadeService,
      provideMockStore({
        initialState: testUiState,
      }),
    ],
  })

  beforeEach(() => {
    spectator = createService()
    store = TestBed.inject(MockStore)
  })

  it('should be created', () => {
    expect(spectator.service).toBeDefined()
  })
})
