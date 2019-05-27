export const ButtonStyleMixin = `
  cursor: pointer;
  transition: opacity .2s ease;
  
  &:hover, &:focus {
    opacity: 0.7;
  }
`;

export const ScrollBarStyleMixin = `
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;
