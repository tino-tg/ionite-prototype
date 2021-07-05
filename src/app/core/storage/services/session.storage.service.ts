import { Injectable } from '@angular/core'

const sessionStoragePrefix = 'ionite-'

@Injectable()
export class SessionStorageService {
  constructor() {
  }

  setItem(key: string, value: any) {
    sessionStorage.setItem(`${sessionStoragePrefix}${key}`, JSON.stringify(value))
  }

  getItem(key: string) {
    return JSON.parse(<string>sessionStorage.getItem(`${sessionStoragePrefix}${key}`))
  }

  removeItem(key: string) {
    sessionStorage.removeItem(`${sessionStoragePrefix}${key}`)
  }
}
