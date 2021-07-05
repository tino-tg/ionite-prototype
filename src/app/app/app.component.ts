import { Component } from '@angular/core'
import { NavigationItem } from "./types/navigation"
import {
  actionSettingsChangeTheme,
  actionSettingsToggleNavigationCollapse,
  SettingsFacadeService,
  Theme,
} from '../core/settings'
import { UiFacadeService } from '../core/ui'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
})
export class AppComponent {
  title = 'I/O.nite'

  isMobile$ = this.uiFacadeService.isMobile$

  theme$ = this.settingsFacadeService.theme$
  isDarkTheme: boolean = false
  themeSubscription: Subscription

  navigationCollapsed$ = this.settingsFacadeService.navigationCollapsed$
  sideNavCollapsed: boolean = true
  navigationCollapseSubscription: Subscription

  constructor(
    private settingsFacadeService: SettingsFacadeService,
    private uiFacadeService: UiFacadeService,
  ) {
    this.themeSubscription = this.theme$.subscribe((theme: Theme) => {
      this.isDarkTheme = theme === 'dark'
    })

    this.navigationCollapseSubscription = this.navigationCollapsed$.subscribe((collapsed: boolean) => {
      this.sideNavCollapsed = collapsed
    })
  }

  navigationItems: NavigationItem[] = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: 'space_dashboard',
    },
    {
      path: '/smart',
      label: 'Smart Building',
      icon: 'home',
    },
    {
      path: '/offices',
      label: 'Offices',
      icon: 'room_preferences',
    },
    {
      path: '/buildings',
      label: 'Buildings',
      icon: 'camera_outdoor',
    },
    {
      path: '/productions',
      label: 'Productions',
      icon: 'emoji_transportation',
    },
  ]

  onThemeToggle() {
    const theme: Theme = this.isDarkTheme ? 'default' : 'dark'

    this.settingsFacadeService.dispatch(actionSettingsChangeTheme({ theme }))
  }

  onNavigationCollapseToggle() {
    const navigationCollapsed: boolean = !this.sideNavCollapsed

    this.settingsFacadeService.dispatch(actionSettingsToggleNavigationCollapse({ navigationCollapsed }))
  }
}
