import Image from './Image'

interface Props {
  src: string
}

const ImageCard = ({ src }: Props) => {
  return (
    <figure className="flex flex-col shadow-card">
      <Image
        src={src}
        altText="image"
        border
        className="flex-1 rounded-sm object-center object-cover"
      />

      <div className="flex justify-between">
        <span className="sr-only relative">Owner Name</span>
      </div>
    </figure>
  )
}

export default ImageCard
