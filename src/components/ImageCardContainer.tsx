import Masonry from 'react-masonry-css'

import ImageCard from './ImageCard'

const ImageCardContainer = () => {
  const masonryBreakPoints = { default: 4, 1024: 3, 768: 2, 575: 1 }

  const imgSrcs = [
    'https://images.unsplash.com/photo-1650896362792-111302da6fc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1650710690675-4372920a299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1650729802117-00f3296bcdc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1650719214211-659245a3ff41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1650542918398-b2c88205d6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1650912967019-6adee95d5540?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <Masonry
        className="flex gap-5"
        columnClassName="flex flex-col gap-5"
        breakpointCols={masonryBreakPoints}>
        {imgSrcs.map((src, idx) => (
          <ImageCard src={src} key={idx} />
        ))}
      </Masonry>
    </div>
  )
}

export default ImageCardContainer
