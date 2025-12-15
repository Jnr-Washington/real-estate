import React from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from '@/components/ui/EmblaCarouselDotButton'
import '@/css/embla.css'
import '@/css/base.css'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/ui/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
//Defining type for image Data
type ImageSlide  = {
    url: string;
    alt: string;
};

interface PropType  {
  slides: ImageSlide[]; //slides will be an array of Images
  options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slideData,index) => (
            <div className="embla__slide" key={index}>
                <img 
                className='embla__slide__img  lg:w-fill border-1 rounded-lg p-2 '
                src={slideData.url}
                alt={slideData.alt}
                 />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

export function Rooms(){
const OPTIONS: EmblaOptionsType = { slidesToScroll: 'auto', loop: true }
//Test Images for the rooms
const SLIDE_IMAGES: ImageSlide[] = [
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
    {url: './src/assets/react.svg', alt: 'Slide 1: SunsetView'},
];
    return(
        <>
        <EmblaCarousel slides={SLIDE_IMAGES} options={OPTIONS} />
        </>
    );
}

