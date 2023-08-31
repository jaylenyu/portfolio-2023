const theme = {
  mobile: '(max-width: 767px)',
  tablet: '(max-width: 1279px)',
  gray: '#333',
  lightGray: '#86868b',

  flexBox: (justify?: string, alignItem?: string, direction?: string) => {
    let flexString = 'display: flex;';

    if (justify !== undefined) flexString += `justify-content: ${justify};`;
    if (alignItem !== undefined) flexString += `align-items: ${alignItem};`;
    if (direction !== undefined) flexString += `flex-direction: ${direction};`;

    return flexString;
  }
};

export default theme;
