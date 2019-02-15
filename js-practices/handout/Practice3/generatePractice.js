'use strict'

function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm

  target=Math.floor(Math.random()*(Math.max.apply(null,testLengthArray)-Math.min.apply(null,testLengthArray))+Math.min.apply(null,testLengthArray));
  
  testObj={
    "input"  : testLengthArray,
    "Target" : target,
    "output" : null,
  };
  for(i=0;i<testLengthArray.length;i++){
    if(testLengthArray[i]==target){
      if(testLengthArray.length<4)
        {
          testObj['output']=i;
          return testObj();
        }
      else {
        if(i==0) console.log('first index');
        else if(i==testLengthArray.length-1) console.log('last index');
        else console.log('middle index');
        return ;
      }
    }
  }
  console.log('Not found');
  return ;

  

}

module.exports = generate
