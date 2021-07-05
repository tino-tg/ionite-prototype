import { Injectable, NgZone } from '@angular/core'
import { Subscription } from 'rxjs'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

import { UiFacadeService } from './ui.facade.service'

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

	isMobile: boolean | undefined
	isMobile$ = this.uiFacadeService.isMobile$
	isMobileSubscription: Subscription

	constructor(
		private readonly snackBar: MatSnackBar,
		private readonly zone: NgZone,
		private uiFacadeService: UiFacadeService,
	) {
	  this.isMobileSubscription = this.isMobile$.subscribe((isMobile: boolean) => {
	    this.isMobile = isMobile
	  })
	}

	default(message: string, duration: number = 2000) {
	  this.show(message, {
	    duration,
	    panelClass: 'default-notification-overlay',
	  })
	}

	info(message: string, duration: number = 2000) {
	  this.show(message, {
	    duration,
	    panelClass: 'info-notification-overlay',
	  })
	}

	success(message: string, duration: number = 3000) {
	  this.show(message, {
	    duration,
	    panelClass: 'success-notification-overlay',
	  })
	}

	warning(message: string, duration: number = 3000) {
	  this.show(message, {
	    duration,
	    panelClass: 'warning-notification-overlay',
	  })
	}

	error(message: string, duration: number = 3000) {
	  this.show(message, {
	    duration,
	    panelClass: 'error-notification-overlay',
	  })
	}

	private show(message: string, configuration: MatSnackBarConfig) {
	  if (!this.isMobile) {
	    configuration.verticalPosition = 'top'
	  }

	  // Need to open snackBar from Angular zone to prevent issues with its position per
	  // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
	  this.zone.run(() => this.snackBar.open(message, undefined, configuration))
	}
}
