import { useStateContext } from '../context/StateContext'

interface Props {
  src: string
  index: number
}

const ImageCard = ({ src, index }: Props) => {
  const { dispatch } = useStateContext()

  return (
    <figure className="flex flex-col shadow-card">
      <img
        src={src}
        alt="Image"
        className="flex w-full object-center object-cover rounded-2xl border-2 border-c-green"
        onClick={() =>
          dispatch({ type: 'OPEN_MODAL_IMAGE', payload: { src, index } })
        }
      />

      <div className="flex justify-between">
        <span className="sr-only relative">Owner Name</span>
      </div>
    </figure>
  )
}

export default ImageCard
