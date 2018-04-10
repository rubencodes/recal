export const isMSBrowser = navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1;
export const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


export const prefixedDisplay = (value) => {
  if(value === 'flex') {
    if(isMSBrowser) {
      return {
        display: '-ms-flexbox'
      };
    }
    if(isSafariBrowser) {
      return {
        display: '-webkit-box'
      };
    }
  }
  if(value === 'grid') {
    if(isMSBrowser) {
      return {
        display: '-ms-grid'
      };
    }
  }

  return {
    display: value
  };
};
export const prefixedGridTemplate = (value) => {
  return {
    msGridTemplate: value,
    gridTemplate: value
  };
};
export const prefixedGridGap = (value) => {
  return {
    msGridGap: value,
    gridGap: value
  };
};
export const prefixedAlignSelf = (value) => {
  return {
    msFlexItemAlign: value,
    msGridRowAlign: value,
    alignSelf: value
  };
};
export const prefixedJustifySelf = (value) => {
  return {
    msGridColumnAlign: value,
    justifySelf: value
  };
};
export const prefixedAlignItems = (value) => {
  return {
    WebkitBoxAlign: value,
    msFlexAlign: value,
    alignItems: value
  };
};
export const prefixedJustifyContent = (value) => {
  return {
    WebkitBoxPack: value,
    msFlexPack: value,
    justifyContent: value
  };
};
export const prefixedFlex = (value) => {
  return {
    WebkitBoxFlex: value,
    msFlex: value,
    flex: value
  };
};
export const prefixedFlexDirection = (value) => {
  return {
    WebkitBoxOrient: value === 'column' ? 'vertical' : 'horizontal',
    WebkitBoxDirection: value,
    flexDirection: value
  };
};


export const prefixedTransform = (value) => {
  return {
    WebkitTransform: value,
    transform: value
  };
};
export const prefixedTransition = (value) => {
  return {
    WebkitTransition: value,
    transition: value
  };
};
export const prefixedBoxShadow = (value) => {
  return {
    WebkitBoxShadow: value,
    boxShadow: value
  };
};
export const prefixedUserSelect = (value) => {
  return {
    WebkitUserSelect: value,
		MozUserSelect: value,
		msUserSelect: value,
		userSelect: value
  };
};