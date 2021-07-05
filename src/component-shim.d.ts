/**
 * Enable import of any component file type
 * including
 */
declare module '*.html' {
  const content: string
  export default content
}

declare module '*.example.js' {
  const content: string
  export default content
}

declare module '*.scss' {
  const content: string
  export default content
}
