import { Injectable } from '@angular/core'

const cookiesPrefix = 'ionite-'
const expirationDefault = 1

@Injectable()
export class CookiesService {
  constructor() {
  }

  check(key: string): boolean {
    key = encodeURIComponent(key)

    const regExp: RegExp = this.getCookieRegExp(key)
    return regExp.test(document.cookie)
  }

  getItem(name: string): string {
    if (this.check(`${cookiesPrefix}${name}`)) {
      name = encodeURIComponent(`${cookiesPrefix}${name}`)

      const regExp: RegExp = this.getCookieRegExp(name)
      const result: RegExpExecArray | null = regExp.exec(document.cookie)

      if (result && result.length) {
        return decodeURIComponent(result[1])
      }

      return ''
    }

    return ''
  }

  setItem(
    name: string,
    value: string | number | boolean,
    expires?: number | Date,
    path?: string | undefined,
    domain?: string | undefined,
    secure?: undefined,
    sameSite?: string | undefined,
  ) {
    let cookieString: string = encodeURIComponent(`${cookiesPrefix}${name}`) + '=' + encodeURIComponent(value) + ';'

    expires = expires || expirationDefault
    if (typeof expires === 'number') {
      const dateExpires: Date = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24)

      cookieString += 'expires=' + dateExpires.toUTCString() + ';'
    } else {
      cookieString += 'expires=' + expires.toUTCString() + ';'
    }

    path = path || '/'
    cookieString += 'path=' + path + ';'

    domain = domain || window.document.domain
    cookieString += 'domain=' + domain + ';'

    if (secure) {
      cookieString += 'secure;'
    }

    if (sameSite) {
      cookieString += 'sameSite=' + sameSite + ';'
    }

    document.cookie = cookieString
  }

  removeItem(name: string) {
    this.setItem(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'))
  }

  private getCookieRegExp(name: string): RegExp {
    const escapedName: string = name.replace(/([\[\]{}()|=;+?,.*^$])/ig, '\\$1')

    return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g')
  }
}
