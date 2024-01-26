
import React from 'react';

const CapitalizeFirst = ({ text }) => {
  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return <span>{capitalizeFirstLetter(text)}</span>;
};

export default CapitalizeFirst;