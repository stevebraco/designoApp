import React from 'react';
import CardDesign from '../CardDesign/CardDesign';
import { CardsDesignsStyles } from './CardsDesignsStyles';

const CardsDesigns = () => {
  return (
    <CardsDesignsStyles>
      <CardDesign title="web " img="assets/home/mobile/image-web-design.jpg" />
      <CardDesign title="app " img="assets/home/mobile/image-web-design.jpg" />
      <CardDesign
        title="graphic "
        img="assets/home/mobile/image-web-design.jpg"
      />
    </CardsDesignsStyles>
  );
};

export default CardsDesigns;
