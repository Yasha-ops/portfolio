import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "~/styles/Carousel.css";

export const CarouselItem = ({ children }: any) => {
  return (
    <div className="carousel-item px-5 h-full" data-name='carousel-item'>
      {children}
    </div>
  );
};

const Carousel = ({ children }: any) => {

  const Indicator = (props: any) => {
    return <div className={`rounded-full h-4 aspect-square bg-background ${props.index == props.currentIndex ? 'bg-opacity-100' : 'bg-opacity-20'}`}></div>
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);


    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div {...handlers} className="carousel flex flex-col gap-7" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} data-name='carousel' >
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child);
        })}
      </div>
      <div className="w-full flex justify-center items-center" data-name='indicators'>
        <div className="flex gap-3">
          {
            React.Children.map(children, (child, index) => {
              return <Indicator index={index} currentIndex={activeIndex} />
            })}
        </div>
      </div>
    </div>
  );
};


interface GridCarouselProps {
  children: any,
  rows: number,
  cols: number,
  gap: number,
  isHorizontal: boolean
}



// TODO: Add continuos animation
export class GridCarousel extends React.Component<GridCarouselProps, any>{

  static defaultProps = {
    isHorizontal: false,
    rows: 1,
    cols: 1,
  }

  convertArray(array: any, n: number) {
    const result = [];
    for (let i = 0; i < array.length; i += n) {
      const row = [];
      for (let j = i; j < i + n && j < array.length; j++) {
        row.push(array[j]);
      }
      result.push(row);
    }
    return result;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      childrenArray: this.convertArray(React.Children.toArray(this.props.children),
        this.props.cols * this.props.rows)
    }
  }

  render() {
    return (
      <Carousel>
        {
          this.state.childrenArray.map((rows: any) => {
            const customClass = !this.props.isHorizontal
              ? `grid grid-cols-${this.props.cols} grid-rows-${this.props.rows} gap-${this.props.gap} w-full whitespace-normal`
              : `flex justify-between gap-${this.props.gap}`;
            return (
              <CarouselItem>
                <div className={customClass}>
                  {
                    rows.map((elt: any) => {
                      return elt
                    })
                  }
                </div>
              </CarouselItem>)
          })
        }
      </Carousel>
    )
  }

}


export default Carousel;
