import React from 'react';

const Separator = (x) => {
  if(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else {
    return 0;
  }
}

export default Separator;