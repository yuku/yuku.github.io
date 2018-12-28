declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element
  export default MDXComponent

  export interface IMeta {
    title: string
    publishedAt: string
    backgroundColor?: string
    backgroundImage?: string
  }

  export const meta: IMeta
}
