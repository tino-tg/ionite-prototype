import { MatSnackBar } from '@angular/material/snack-bar'
import { Overlay } from '@angular/cdk/overlay'
import { provideMockStore } from '@ngrx/store/testing'
import { SpectatorService, SpyObject, createServiceFactory } from '@ngneat/spectator'

import { testUiState } from '../types'
import { NotificationService } from './notification.service'
import { UiFacadeService } from './ui.facade.service'

describe('Notifications Service', () => {
  let spectator: SpectatorService<NotificationService>
  let snackBar: SpyObject<MatSnackBar>

  const createService = createServiceFactory({
    service: NotificationService,
    providers: [
      NotificationService,
      UiFacadeService,
      MatSnackBar,
      Overlay,
      provideMockStore({
        initialState: testUiState,
      }),
    ],
    mocks: [
      MatSnackBar,
    ],
  })

  beforeEach(() => {
    spectator = createService()
    snackBar = spectator.inject<MatSnackBar>(MatSnackBar)
  })

  it('should be created', () => {
    expect(spectator.service).toBeDefined()
  })

  it('default method should be executable', () => {
    spectator.service.default('test default message')
    expect(snackBar.open).toHaveBeenCalledWith(
      'test default message',
      undefined,
      {
        duration: 2000,
        panelClass: 'default-notification-overlay',
        verticalPosition: 'top',
      },
    )
  })

  it('info method should be executable', () => {
    spectator.service.info('test info message')
    expect(snackBar.open).toHaveBeenCalledWith(
      'test info message',
      undefined,
      {
        duration: 2000,
        panelClass: 'info-notification-overlay',
        verticalPosition: 'top',
      },
    )
  })

  it('success method should be executable', () => {
    spectator.service.success('test success message')
    expect(snackBar.open).toHaveBeenCalledWith(
      'test success message',
      undefined,
      {
        duration: 3000,
        panelClass: 'success-notification-overlay',
        verticalPosition: 'top',
      },
    )
  })

  it('warning method should be executable', () => {
    spectator.service.warning('test warning message')
    expect(snackBar.open).toHaveBeenCalledWith(
      'test warning message',
      undefined,
      {
        duration: 3000,
        panelClass: 'warning-notification-overlay',
        verticalPosition: 'top',
      },
    )
  })

  it('error method should be executable', () => {
    spectator.service.error('test error message')
    expect(snackBar.open).toHaveBeenCalledWith(
      'test error message',
      undefined,
      {
        duration: 3000,
        panelClass: 'error-notification-overlay',
        verticalPosition: 'top',
      },
    )
  })
})
