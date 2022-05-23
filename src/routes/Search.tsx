import axios from 'axios'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Masonry from 'react-masonry-css'
import { useSearchParams } from 'react-router-dom'

import LoaderGIF from '../assets/loader.gif'
import GalleryContainer from '../components/GalleryContainer'
import ImageCard from '../components/ImageCard'
import SearchBar from '../components/SearchBar'
import { useStateContext } from '../context/StateContext'
import { fetchPhotos, searchPhotos } from '../utils/api'
import { masonryBreakPoints } from '../utils/masonryBreakpoint'

const Search = () => {
  const { state, dispatch } = useStateContext()
  const [page, setPage] = useState(1)
  const [searchParams, _] = useSearchParams()

  const searchNewQuery = async (searchTerm: string, pageNum: number = 1) => {
    try {
      if (pageNum > 1) {
        setPage(1)
        pageNum = 1
      }
      const { data } = await axios.get(searchPhotos(searchTerm, pageNum))
      dispatch({ type: 'ADD_PHOTOS', payload: data.results })
    } catch (err: any) {
      console.error(err.message)
    }
  }
  const searchNextQuery = async (pageNum: number = 2) => {
    try {
      if (pageNum === 1) {
        setPage(2)
        pageNum = 2
      }
      const searchTerm = searchParams.get('q') as string
      const { data } = await axios.get(searchPhotos(searchTerm, pageNum))
      dispatch({ type: 'ADD_NEW_PHOTOS', payload: data.results })
      setPage(prevVal => prevVal + 1)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const fetchNewPhotos = async (pageNum: number = 1) => {
    try {
      if (pageNum > 1) {
        setPage(1)
        pageNum = 1
      }
      const { data } = await axios.get(fetchPhotos(pageNum))
      dispatch({ type: 'ADD_PHOTOS', payload: data })
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const fetchNextPhotos = async (pageNum: number = 2) => {
    try {
      if (pageNum === 1) {
        setPage(2)
        pageNum = 2
      }
      const { data } = await axios.get(fetchPhotos(pageNum))
      dispatch({ type: 'ADD_NEW_PHOTOS', payload: data })
      setPage(prevVal => prevVal + 1)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const addNextPhotos = () => {
    const queryParam = searchParams.get('q')
    if (queryParam) searchNextQuery(page)
    else fetchNextPhotos(page)
  }

  useEffect(() => {
    const queryParam = searchParams.get('q')
    if (queryParam) searchNewQuery(queryParam)
    else fetchNewPhotos()
  }, [searchParams])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
    })
  }, [])

  return (
    <GalleryContainer>
      <SearchBar />
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
    </GalleryContainer>
  )
}

export default Search
