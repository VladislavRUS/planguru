import styled from 'styled-components';
import { ScrollBarStyleMixin } from '../../constants/StyleMixins';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export const Content = styled.div`
  padding-top: 108px;
  flex-grow: 1;
  overflow-x: scroll;
  ${ScrollBarStyleMixin};
`;
