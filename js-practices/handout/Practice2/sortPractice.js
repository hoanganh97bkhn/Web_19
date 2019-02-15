'use strict'

function sort(input) {
  for(i=0;i<input.length-1;i++){
    for(j=0;j<input.length-1-i;j++){
      if(input[j]>input[j+1]) swap(input[j],input[j+1]);
    }
  }
  return input;
  // Remove this line and change to your own algorithm
}

module.exports = sort
