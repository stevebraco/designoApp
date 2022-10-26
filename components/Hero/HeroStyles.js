import styled from 'styled-components';
import design from '../../theme/desginSystem';

export const HeroStylesStyles = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  background: ${design.colors.primary[0]};
  color: ${design.colors.primary[2]};
  padding-top: 80px;
  overflow: hidden;
  z-index: 1;
`;
export const CircleStyles = styled.div`
  position: relative;
  width: 100%;
  width: 640px;

  & div {
    overflow: hidden;
  }

  & img {
    position: absolute;
    top: 25px;
    left: 0;
    z-index: -1;
  }
`;

export const WrapperContentStyles = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
`;

export const TitleStyles = styled.h1`
  font-size: 32px;
  line-height: 36px;
  margin-bottom: 14px;
`;
export const SubTitleStyles = styled.p`
  font-size: 15px;
  line-height: 25px;
  margin: 0 auto;
  margin-bottom: 24px;
`;

export const WrapperImgStyles = styled.div`
  /* transform: translateY(-50px); */
  position: relative;
  z-index: -3;
`;
