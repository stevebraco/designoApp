/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Button from '../Button/Button';
import dataHero from './HeroProps';

import {
  CircleStyles,
  HeroStylesStyles,
  SubTitleStyles,
  TitleStyles,
  WrapperContentStyles,
  WrapperImgStyles
} from './HeroStyles';

const Hero = () => {
  const {
    title,
    subTitle,
    button,
    images: { phoneFrame, circle }
  } = dataHero;

  return (
    <HeroStylesStyles>
      <CircleStyles>
        <div>
          <img src={circle.src} />
        </div>
      </CircleStyles>
      <WrapperContentStyles>
        <TitleStyles>{title}</TitleStyles>
        <SubTitleStyles>{subTitle}</SubTitleStyles>
        <Button>{button}</Button>
      </WrapperContentStyles>
      <WrapperImgStyles>
        <img src={phoneFrame.src} alt={phoneFrame.alt} />
      </WrapperImgStyles>
    </HeroStylesStyles>
  );
};

export default Hero;
