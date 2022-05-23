import { useReducer } from 'react'
import reducer, { initialState } from '../reducer/reducer'

interface Props {
  src: string
  altText: string
  className?: string
}

const Image = ({ src, altText, className }: Props) => {
  const [_, dispatch] = useReducer(reducer, initialState)

  return (
    <img
      className={`border-c-green border-2 ${className}`}
      src={src}
      alt={altText}
    />
  )
}

export default Image
