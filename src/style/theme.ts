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
  },

  shadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
};

export default theme;
