import styled from 'styled-components';
import { ScrollBarStyleMixin } from '../../../constants/StyleMixins';

export const SCHEDULE_TOP_PADDING = 50;

export const Wrapper = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const MeetingsZone = styled.div`
  padding-top: ${SCHEDULE_TOP_PADDING}px;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  ${ScrollBarStyleMixin};
  min-width: 800px;
`;

export const TIME_INTERVAL_HEIGHT_IN_PX = 100;

export const TimeInterval = styled.div`
  height: ${TIME_INTERVAL_HEIGHT_IN_PX}px;
  display: flex;
`;

export const StartTime = styled.div`
  position: relative;
  top: -7px;
  width: 153px;
  text-align: center;
  color: rgb(120, 121, 147);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FreeSpace = styled.div`
  margin-right: 24px;
  height: 100%;
  flex-grow: 1;
  border-top: 1px solid rgb(241, 241, 245);
`;

interface ICurrentTimeLineProps {
  top: number;
}

export const CurrentTimeLine = styled.div<ICurrentTimeLineProps>`
  position: absolute;
  left: 137px;
  right: 24px;
  top: ${props => props.top}px;
  height: 2px;
  box-shadow: 0 4px 6px rgba(117, 64, 238, 0.2);
  background-color: rgb(117, 64, 238);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(117, 64, 238, 0.2);
    background-color: rgb(117, 64, 238);
  }
`;
