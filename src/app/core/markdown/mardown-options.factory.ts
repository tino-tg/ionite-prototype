import { MarkedOptions, MarkedRenderer } from 'ngx-markdown'

export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer()

  renderer.heading = (text, level): string => {
    return `<h${level} class="mat-h${level}">${text}</h${level}>`
  }

  return {
    renderer: renderer,
    gfm: false,
    breaks: false,
    pedantic: false,
    smartLists: true,
    smartypants: true,
  }
}
