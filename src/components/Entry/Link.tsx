import { entries } from "../../../entries"

interface IProps {
  id: keyof typeof entries
  text?: string
}

export default function Link({ id, text }: IProps) {
  return <a href={`/${id}`}>{text || entries[id].title}</a>
}
