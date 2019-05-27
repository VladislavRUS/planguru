import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Portal } from 'react-portal';
import { PoseGroup } from 'react-pose';
import { Wrapper } from './Dropdown.styles';

interface IDropdownProps {
  attachTo: React.RefObject<HTMLElement>;
  width?: number;
  isCentered?: boolean;
}

interface IDropdownState {
  isVisible: boolean;
  left: number;
  top: number;
  width: number;
}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  private dropdownWrapperRef: HTMLElement | null = null;

  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      left: 0,
      top: 0,
      width: 0,
      isVisible: false,
    };
  }

  public componentDidMount() {
    if (this.props.attachTo.current) {
      this.props.attachTo.current.addEventListener('click', this.onClick);
    }
  }

  public componentWillUnmount() {
    if (this.props.attachTo.current) {
      this.props.attachTo.current.removeEventListener('click', this.onClick);
    }

    window.removeEventListener('scroll', this.onClick);
  }

  public render() {
    const { isVisible, left, top, width } = this.state;

    return (
      <Portal>
        <OutsideClickHandler
          onOutsideClick={this.onOutsideClick}
          disabled={!isVisible}
        >
          <PoseGroup>
            {isVisible && (
              <Wrapper
                key={'wrapper'}
                left={left}
                top={top}
                width={width}
                ref={this.handleWrapperRef}
              >
                {this.props.children}
              </Wrapper>
            )}
          </PoseGroup>
        </OutsideClickHandler>
      </Portal>
    );
  }

  private handleWrapperRef = (element: any) => {
    this.dropdownWrapperRef = element;
  };

  private onClick = () => {
    if (this.state.isVisible) {
      this.setState({
        isVisible: false,
      });
      window.removeEventListener('wheel', this.onWheel);
    } else if (this.props.attachTo.current) {
      const rect = this.props.attachTo.current.getBoundingClientRect();

      const top = rect.top + rect.height + 10;
      const width = this.props.width || rect.width;
      let left = rect.left;

      if (this.props.isCentered) {
        left = rect.left - width / 2 + rect.width / 2;
      }

      this.setState({
        left,
        top,
        width,
        isVisible: true,
      });

      window.addEventListener('wheel', this.onWheel);
    }
  };

  private onWheel = (event: any) => {
    if (
      this.dropdownWrapperRef &&
      (this.dropdownWrapperRef === event.target ||
        this.dropdownWrapperRef.contains(event.target))
    ) {
      return;
    }

    this.onClick();
  };

  private onOutsideClick = () => {
    this.setState({
      isVisible: false,
    });
  };
}

export default Dropdown;
