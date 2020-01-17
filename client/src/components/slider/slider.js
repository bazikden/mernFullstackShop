
import {food,kitchen,chemicals} from '../../images/images'

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src:food,
    altText: 'Food',
    caption: 'Food'
  },
  {
    id: 2,
    src:kitchen,
    altText: 'Kitchen',
    caption: 'Kitchen'
  },
  {
    id: 3,
    src:chemicals,
    altText: 'Chemicals',
    caption: 'Chemicals'
  }
];

const styles = {
    img:{
        maxWidth:'300px',
        height:'100%',
        margin:'0 auto',

    }
}

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      > 
        <div style={styles.img}>
            <img style={{width:'100%',height:'100%'}} src={item.src} alt={item.altText} />  
            <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.caption} />
        </div>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 200px;
              background: #fff;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Slider