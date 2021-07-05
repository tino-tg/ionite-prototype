import { Injectable } from '@angular/core'

export const localStoragePrefix = 'ionite-'

@Injectable()
export class LocalStorageService {
  constructor() {
  }

  static loadInitialState() {
    return Object.keys(localStorage).reduce((state: any, storageKey) => {
      if (storageKey.includes(localStoragePrefix)) {
        const stateKeys = storageKey
          .replace(localStoragePrefix, '')
          .toLowerCase()
          .split('.')
          .map(key =>
            key
              .split('-')
              .map(
                (token, index) =>
                  index === 0
                    ? token
                    : token.charAt(0).toUpperCase() + token.slice(1),
              )
              .join(''),
          )
        let currentStateRef = state
        stateKeys.forEach((key, index) => {
          if (index === stateKeys.length - 1) {
            currentStateRef[key] = JSON.parse(<string>localStorage.getItem(storageKey))
            return
          }
          currentStateRef[key] = currentStateRef[key] || {}
          currentStateRef = currentStateRef[key]
        })
      }
      return state
    }, {})
  }

  getItem(key: string) {
    return JSON.parse(<string>localStorage.getItem(`${localStoragePrefix}${key}`))
  }

  setItem(key: string, value: any) {
    localStorage.setItem(`${localStoragePrefix}${key}`, JSON.stringify(value))
  }

  removeItem(key: string) {
    localStorage.removeItem(`${localStoragePrefix}${key}`)
  }
}
