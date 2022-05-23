import Image from './Image'
import { ReactComponent as RightArrowIcon } from '../assets/right-arrow.svg'

interface Props {
  btnOnClick: () => void
}

const Hero = ({ btnOnClick }: Props) => {
  const headingImage =
    'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const heroImage2 =
    'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  const heroImage1 =
    'https://images.unsplash.com/photo-1490365728022-deae76380607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'

  return (
    <header className="bg-c-green-light md:bg-c-white text-c-black min-h-screen md:px-6">
      <div className="relative max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-hero relative min-h-screen">
        <div className="flex flex-col gap-12 h-full justify-end z-10 p-6 pb-14 bg-c-green-light">
          <Image
            src={headingImage}
            altText="hero-image"
            className="flex h-[332px] md:h-72 object-cover object-center rounded-2xl"
          />

          <div className="space-y-4 md:space-y-6">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl tracking-[6px]">
              Ultimaterry
            </h1>
            <p>The ultimate image gallery</p>
            <button
              className="flex items-center gap-3 bg-c-green px-6 py-3 shadow-card rounded-2xl outline-none focus:ring-2 ring-c-green-light"
              onClick={btnOnClick}>
              Browse <RightArrowIcon className="stroke-c-black" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center lg:col-start-3 lg:col-end-4">
          <div className="grid grid-cols-1 grid-rows-heroImage">
            <Image
              src={heroImage1}
              altText="image"
              className="w-hero-image h-hero-image object-cover object-center col-start-1 row-start-1 self-start justify-self-start order-3 rounded-2xl"
            />

            <span className="block w-hero-image h-hero-image border-2 border-c-green col-start-1 row-start-1 self-center justify-self-center order-2 rounded-2xl"></span>

            <Image
              src={heroImage2}
              altText="image"
              className="w-hero-image h-hero-image object-cover object-center col-start-1 row-start-1 self-end justify-self-end order-1 rounded-2xl"
            />
          </div>
        </div>

        <span className="hidden lg:inline-block absolute -right-24 top-1/2 -translate-y-1/2 uppercase tracking-widest rotate-90">
          Scroll Down &rarr;
        </span>
      </div>
    </header>
  )
}

export default Hero
