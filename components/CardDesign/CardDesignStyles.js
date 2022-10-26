import styled from 'styled-components';

export const CardStyles = styled.div`
  width: 327px;
  height: 250px;
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  background: #00000080;

  &:hover {
    background: rgb(231 129 107 / 70%);
  }
`;

export const WrapperImgStyles = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const TitleStyles = styled.h2`
  font-style: normal;
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 10px;
`;
export const LinkStyles = styled.p`
  font-size: 15px;
  line-height: 22px;
`;
