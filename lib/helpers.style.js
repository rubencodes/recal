"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefixedUserSelect = exports.prefixedBoxShadow = exports.prefixedTransition = exports.prefixedTransform = exports.prefixedFlexDirection = exports.prefixedFlex = exports.prefixedJustifyContent = exports.prefixedAlignItems = exports.prefixedJustifySelf = exports.prefixedAlignSelf = exports.prefixedGridGap = exports.prefixedGridTemplate = exports.prefixedDisplay = exports.isSafariBrowser = exports.isMSBrowser = void 0;
var isMSBrowser = navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1;
exports.isMSBrowser = isMSBrowser;
var isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
exports.isSafariBrowser = isSafariBrowser;

var prefixedDisplay = function prefixedDisplay(value) {
  if (value === 'flex') {
    if (isMSBrowser) {
      return {
        display: '-ms-flexbox'
      };
    }

    if (isSafariBrowser) {
      return {
        display: '-webkit-box'
      };
    }
  }

  if (value === 'grid') {
    if (isMSBrowser) {
      return {
        display: '-ms-grid'
      };
    }
  }

  return {
    display: value
  };
};

exports.prefixedDisplay = prefixedDisplay;

var prefixedGridTemplate = function prefixedGridTemplate(value) {
  return {
    msGridTemplate: value,
    gridTemplate: value
  };
};

exports.prefixedGridTemplate = prefixedGridTemplate;

var prefixedGridGap = function prefixedGridGap(value) {
  return {
    msGridGap: value,
    gridGap: value
  };
};

exports.prefixedGridGap = prefixedGridGap;

var prefixedAlignSelf = function prefixedAlignSelf(value) {
  return {
    msFlexItemAlign: value,
    msGridRowAlign: value,
    alignSelf: value
  };
};

exports.prefixedAlignSelf = prefixedAlignSelf;

var prefixedJustifySelf = function prefixedJustifySelf(value) {
  return {
    msGridColumnAlign: value,
    justifySelf: value
  };
};

exports.prefixedJustifySelf = prefixedJustifySelf;

var prefixedAlignItems = function prefixedAlignItems(value) {
  return {
    WebkitBoxAlign: value,
    msFlexAlign: value,
    alignItems: value
  };
};

exports.prefixedAlignItems = prefixedAlignItems;

var prefixedJustifyContent = function prefixedJustifyContent(value) {
  return {
    WebkitBoxPack: value,
    msFlexPack: value,
    justifyContent: value
  };
};

exports.prefixedJustifyContent = prefixedJustifyContent;

var prefixedFlex = function prefixedFlex(value) {
  return {
    WebkitBoxFlex: value,
    msFlex: value,
    flex: value
  };
};

exports.prefixedFlex = prefixedFlex;

var prefixedFlexDirection = function prefixedFlexDirection(value) {
  return {
    WebkitBoxOrient: value === 'column' ? 'vertical' : 'horizontal',
    WebkitBoxDirection: value,
    flexDirection: value
  };
};

exports.prefixedFlexDirection = prefixedFlexDirection;

var prefixedTransform = function prefixedTransform(value) {
  return {
    WebkitTransform: value,
    transform: value
  };
};

exports.prefixedTransform = prefixedTransform;

var prefixedTransition = function prefixedTransition(value) {
  return {
    WebkitTransition: value,
    transition: value
  };
};

exports.prefixedTransition = prefixedTransition;

var prefixedBoxShadow = function prefixedBoxShadow(value) {
  return {
    WebkitBoxShadow: value,
    boxShadow: value
  };
};

exports.prefixedBoxShadow = prefixedBoxShadow;

var prefixedUserSelect = function prefixedUserSelect(value) {
  return {
    WebkitUserSelect: value,
    MozUserSelect: value,
    msUserSelect: value,
    userSelect: value
  };
};

exports.prefixedUserSelect = prefixedUserSelect;