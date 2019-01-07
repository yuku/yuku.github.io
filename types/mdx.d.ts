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
    /**
     * Insert <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
     * to document body in componentDidMount().
     */
    loadTwitterWidget?: boolean
  }

  export const meta: IMeta
}
