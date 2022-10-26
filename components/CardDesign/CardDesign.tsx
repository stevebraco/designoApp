/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  CardStyles,
  LinkStyles,
  TitleStyles,
  WrapperImgStyles
} from './CardDesignStyles';

const CardDesign = ({ title, img }: { title: string; img: string }) => {
  return (
    <CardStyles>
      <TitleStyles>{title} design</TitleStyles>
      <LinkStyles>View Projects {'>'} </LinkStyles>
      <WrapperImgStyles>
        <img src={img} alt={title} />
      </WrapperImgStyles>
    </CardStyles>
  );
};

export default CardDesign;
