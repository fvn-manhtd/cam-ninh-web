import clsx from "clsx";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React, { Fragment } from "react";


export interface CarouselProps {
  children: React.ReactNode;
  naturalSlideWidth?: number;
  naturalSlideHeight?: number;
  totalSlides?: number;
  visibleSlides?: number;
  currentSlide?: number;
  isIntrinsicHeight?: boolean;
  hasMasterSpinner?: boolean;
  infinite?: boolean;
  autoPlay?: boolean;
  step?: number;
  interval?: number;
  showDots?: boolean;
  showArrow?: boolean;
  showArrowOnHover?: boolean;
  dotClass?: string;
  dotColor?: string;
  dotGroupMarginTop?: string;
  spacing?: string;
  arrowButtonColor?: any;
  arrowButtonClass?: string;
  leftButtonClass?: string;
  rightButtonClass?: string;
  leftButtonStyle?: any;
  rightButtonStyle?: any;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  naturalSlideWidth,
  naturalSlideHeight,
  totalSlides,
  visibleSlides,
  currentSlide,
  isIntrinsicHeight,
  hasMasterSpinner,
  infinite,
  autoPlay,
  step,
  interval,
  showDots,
  showArrow,
  showArrowOnHover,
  dotClass,
  dotColor,
  dotGroupMarginTop,
  spacing,
  arrowButtonClass,
  arrowButtonColor,
  leftButtonClass,
  rightButtonClass,
  leftButtonStyle,
  rightButtonStyle,
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={naturalSlideWidth as number}
      naturalSlideHeight={naturalSlideHeight as number}
      totalSlides={totalSlides as number}
      visibleSlides={visibleSlides as number}
      isIntrinsicHeight={isIntrinsicHeight}
      hasMasterSpinner={hasMasterSpinner}
      infinite={infinite}
      isPlaying={autoPlay}
      step={step}
      interval={interval}
      // dotColor={dotColor}
      // dotGroupMarginTop={dotGroupMarginTop}
      // spacing={spacing}
      // showDots={showDots}
      currentSlide={currentSlide}
      // showArrowOnHover={showArrowOnHover}
    >
      <Slider className="custom-slider">
        {React.Children.map(children, (child, ind) => (
          <Slide index={ind}>{child}</Slide>
        ))}
      </Slider>

      {showDots && (
        <DotGroup
          className={`custom-dot ${dotClass}`}
          renderDots={(props: any) => renderDots({ ...props, step}) as any}
        />
      )}

      {showArrow && (
        <Fragment>
          <div
            className={`arrow-button left-arrow-class ${arrowButtonClass} ${leftButtonClass}`}

            color={arrowButtonColor}
            style={leftButtonStyle || {}}
          >
            <div>
              arrow-left
            </div>
          </div>
          <div
            className={`arrow-button right-arrow-class ${arrowButtonClass} ${rightButtonClass}`}
      
            color={arrowButtonColor}
            style={rightButtonStyle || {}}
          >
            <div >
              arrow-right
            </div>
          </div>
        </Fragment>
      )}
    </CarouselProvider>
  );
};

const renderDots = ({
  step,
  currentSlide,
  visibleSlides,
  totalSlides,
  carouselStore,
} : any) => {
  const dots = [];
  const total = totalSlides - visibleSlides + 1;

  for (let i = 0; i < total; i += step) {
    dots.push(
      <div
        key={i}
        className={clsx({
          dot: true,
          "dot-active": currentSlide === i,
        })}
        onClick={() =>
          carouselStore.setStoreState({
            currentSlide: i,
            autoPlay: false,
          })
        }
      />
    );

    if (total - i - 1 < step && total - i - 1 !== 0) {
      dots.push(
        <div
          key={i + total}
          className={clsx({
            dot: true,
            "dot-active": currentSlide === totalSlides - visibleSlides,
          })}
          onClick={() =>
            carouselStore.setStoreState({
              currentSlide: totalSlides - visibleSlides,
              autoPlay: false,
            })
          }
        />
      );
    }
  }
  return dots;
};

Carousel.defaultProps = {
  naturalSlideWidth: 100,
  naturalSlideHeight: 125,
  totalSlides: 10,
  visibleSlides: 5,
  isIntrinsicHeight: true,
  hasMasterSpinner: false,
  infinite: false,
  autoPlay: false,
  step: 1,
  interval: 2000,
  showDots: false,
  showArrow: true,
  dotGroupMarginTop: "2rem",
  spacing: "1.5rem",
  arrowButtonColor: "secondary",
};
