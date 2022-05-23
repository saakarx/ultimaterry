import { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'

import LoaderGIF from '../assets/loader.gif'
import GalleryContainer from '../components/GalleryContainer'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import ImageCard from '../components/ImageCard'
import { useStateContext } from '../context/StateContext'
import { masonryBreakPoints } from '../utils/masonryBreakpoint'
import axios from 'axios'
import { fetchPhotos } from '../utils/api'

const Home = () => {
  const { state, dispatch } = useStateContext()
  const gallerySectionRef = useRef<HTMLElement>(null)
  const [page, setPage] = useState(1)

  const gallerySectionIntoView = () => {
    if (!gallerySectionRef) return
    gallerySectionRef.current?.scrollIntoView()
  }

  const homePhotos = async (page: number = 1) => {
    try {
      const { data } = await axios.get(fetchPhotos(page))

      let actionType: 'ADD_PHOTOS' | 'ADD_NEW_PHOTOS'
      if (page === 1) actionType = 'ADD_PHOTOS'
      else actionType = 'ADD_NEW_PHOTOS'

      dispatch({ type: actionType, payload: data })
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const addNextHomePhotos = () => {
    homePhotos(page)
    setPage(prevVal => prevVal + 1)
  }

  useEffect(() => {
    homePhotos(page)
    setPage(prevVal => prevVal + 1)
  }, [])

  return (
    <>
      <Hero btnOnClick={gallerySectionIntoView} />
      <GalleryContainer ref={gallerySectionRef}>
        <SearchBar />
        <div className="max-w-6xl mx-auto">
          <InfiniteScroll
            dataLength={state.images.length}
            hasMore={true}
            next={addNextHomePhotos}
            loader={
              <img src={LoaderGIF} className="w-18 h-18 mx-auto mt-12" />
            }>
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
      </GalleryContainer>
    </>
  )
}

export default Home
