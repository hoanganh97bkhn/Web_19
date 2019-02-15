'use strict'

function search(input, target) {
  for(i=0;i<input.length;i++){
    if(input[i]==target) return i;
  }  // Remove this line and change to your own algorithm
}

module.exports = search
