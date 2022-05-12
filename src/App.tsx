import { useRef, useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import ImageCardContainer from './components/ImageCardContainer'
import Modal from './components/Modal'
import SearchBar from './components/SearchBar'
// import LoaderGIF from './assets/loader.gif'

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const gallerySectionRef = useRef<HTMLElement>(null)

  const gallerySectionIntoView = () => {
    if (!gallerySectionRef) return

    gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero btnOnClick={gallerySectionIntoView} />

      <section ref={gallerySectionRef} className="py-20 md:py-32 px-5">
        <SearchBar />

        <ImageCardContainer />

        {/* {isLoading && (
          <img src={LoaderGIF} alt='Loader' className='w-18 mx-auto mt-11' />
        )} */}
      </section>

      <Modal />
    </>
  )
}

export default App
