import styled from 'styled-components';

export const DescriptionStyles = styled.div`
  text-align: center;
`;

export const WrapperImgStyles = styled.div`
  position: relative;
  margin-bottom: 48px;
  width: 202px;
  margin: 0 auto;
`;

export const CircleStyles = styled.img`
  position: absolute;
  left: 0;
  transform: rotateZ(${(props) => props.rotate});
`;

export const TitleStyles = styled.h3`
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 32px;
`;

export const ParaStyles = styled.p`
  font-size: 16px;
  line-height: 26px;
`;
