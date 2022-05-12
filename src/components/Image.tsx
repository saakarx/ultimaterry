import { useReducer } from 'react'
import reducer, { initialState } from '../reducer/reducer'

interface Props {
  src: string
  altText: string
  border?: boolean
  className?: string
  forModal?: boolean
}

const Image = ({ src, altText, border, className, forModal }: Props) => {
  const [_, dispatch] = useReducer(reducer, initialState)

  const updateModalImg = (imgSrc: string) => {
    if (!forModal) return

    dispatch({ type: 'UPDATE_MODAL_IMAGE', payload: imgSrc })
  }

  return (
    <img
      className={`border-c-green ${border && 'border-2'} ${className}`}
      src={src}
      alt={altText}
      onClick={() => updateModalImg(src)}
    />
  )
}

export default Image
