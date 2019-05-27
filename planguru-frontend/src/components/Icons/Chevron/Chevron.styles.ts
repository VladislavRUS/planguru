import styled from 'styled-components';
import chevronImage from '../../../assets/images/chevron_down.png';

interface IChevronIconImageProps {
  width: number;
  height: number;
}

export const ChevronIconImage = styled.div<IChevronIconImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url(${chevronImage});
  background-size: contain;
  background-repeat: no-repeat;
`;
