import React from 'react';
import {
  DescriptionStyles,
  TitleStyles,
  ParaStyles,
  WrapperImgStyles,
  CircleStyles
} from './DescriptionStyles';

const Description = ({ data }: any) => {
  return (
    <DescriptionStyles>
      <WrapperImgStyles>
        <CircleStyles
          rotate={data.rotate}
          src="assets/home/desktop/bg-pattern-hero-home.svg"
        />
        <img src={data.img} alt={data.title} />
      </WrapperImgStyles>
      <TitleStyles>{data.title}</TitleStyles>
      <ParaStyles>{data.description}</ParaStyles>
    </DescriptionStyles>
  );
};

export default Description;
