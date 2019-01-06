declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent

  export interface IMeta {
    title: string
    description: string
    publishedAt: string
    modifiedAt?: string
    ogImage?: string
    backgroundColor?: string
    backgroundImage?: string
  }

  export const meta: IMeta
}
