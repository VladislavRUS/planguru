import styled from 'styled-components';
import { ScrollBarStyleMixin } from '../../../constants/StyleMixins';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 0;
  width: 500px;
  min-width: 500px;
  border-left: 1px solid rgb(241, 241, 245);
`;

export const List = styled.div`
  padding: 0 32px 32px 32px;
  flex-grow: 1;
  overflow-y: scroll;
  ${ScrollBarStyleMixin};
`;

export const Header = styled.div`
  padding: 32px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Title = styled.div`
  margin-right: 10px;
  color: rgb(37, 38, 94);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 26px;
`;

export const SwitchWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SwitchText = styled.div`
  margin-right: 10px;
  color: rgb(120, 121, 147);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.35px;
`;
