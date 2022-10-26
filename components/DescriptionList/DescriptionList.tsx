import React from 'react';
import Description from '../Description/Description';

import dataDescription from './DescriptionListProps';

import { DescriptionListStyles } from './DescriptionListStyles';

const DescriptionList = () => {
  return (
    <DescriptionListStyles>
      {dataDescription.map((data: any) => (
        <Description key={data.id} data={data} />
      ))}
    </DescriptionListStyles>
  );
};

export default DescriptionList;
