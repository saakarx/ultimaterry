import { useState } from 'react'
import axios from 'axios'
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroll-component'

import ImageCard from './ImageCard'
import LoaderGIF from '../assets/loader.gif'
import { useStateContext } from '../context/StateContext'
import { fetchPhotos } from '../utils/api'

const Gallery = () => {
  const { state } = useStateContext()
  const [page, setPage] = useState(1)

  const masonryBreakPoints = { default: 4, 1024: 3, 768: 2, 575: 1 }

  const addNextPhotos = () => {
    setPage(prevVal => prevVal + 1)
    const fetchNewPagePhotos = async () => {
      try {
        const { data } = await axios.get(fetchPhotos(page))
        console.log(data)
      } catch (err: any) {
        console.error(err.message)
      }
    }
    fetchNewPagePhotos()
    // dispatch({ type: 'ADD_PHOTOS', payload: [] })
  }

  return (
    <div className="max-w-6xl mx-auto">
      <InfiniteScroll
        dataLength={state.images.length}
        hasMore={true}
        next={addNextPhotos}
        loader={<img src={LoaderGIF} className="w-18 h-18 mx-auto mt-12" />}>
        <Masonry
          className="flex gap-5"
          columnClassName="flex flex-col gap-5"
          breakpointCols={masonryBreakPoints}>
          {state.images.map((image, idx) => (
            <ImageCard src={image.urls.regular} key={idx} index={idx} />
          ))}
        </Masonry>
      </InfiniteScroll>
    </div>
  )
}

export default Gallery
