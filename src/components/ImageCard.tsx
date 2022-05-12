import { useState } from 'react'

import { ReactComponent as HeartIcon } from '../assets/Heart.svg'
import Image from './Image'

interface Props {
  src: string
}
const ImageCard = ({ src }: Props) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  return (
    <figure className="flex flex-col px-4 py-4 bg-c-white rounded-2xl shadow-card">
      <Image
        src={src}
        altText="image"
        className="flex-1 rounded-xl object-center object-cover"
        forModal
      />

      <div className="mt-4 flex justify-between">
        <span className="sr-only relative">Owner Name</span>
        <button className="mr-4" onClick={() => setIsLiked(prev => !prev)}>
          <HeartIcon className="w-6 h-6 stroke-c-black" />
        </button>
      </div>
    </figure>
  )
}

export default ImageCard
