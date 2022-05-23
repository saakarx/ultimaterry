import { forwardRef } from 'react'

interface Props {
  children: React.ReactChild | React.ReactChild[]
}
type Ref = HTMLElement

const GalleryContainer = forwardRef<Ref, Props>(({ children }, ref) => {
  return (
    <section ref={ref} className="py-20 md:py-32 px-5">
      {children}
    </section>
  )
})

export default GalleryContainer
