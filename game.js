var scoreFrame = function(frame){
  var baseScore = 0;
  var currentFrame = 0;
  // var frameScore = frame[0] + frame[1];
//   if(nextFrame && lastFrame){
//     return baseScore + nextFrame[0] + lastFrame[0]
//   }
//   if(nextFrame){
//     return baseScore + nextFrame[0];
//   }
//   return baseScore;


  for (var i =0; i < frame.length-1; i++){
    baseScore += frame[i][0] + frame[i][1];
    currentFrame = frame[i][0] + frame[i][1];
    console.log('This is the base score ', baseScore)
    if (currentFrame === 10 && frame[i][1] !== 0){
      baseScore += frame[i+1][0];
      console.log('This is the spare score ', baseScore)
    }
    if (frame[i][0] === 10){

      baseScore += frame[i+1][0] + frame[i+1][1];
      console.log('This is the strike score ', baseScore)
      if ( frame[i+1][1] === 0){
        baseScore += frame[i+2][0]
        console.log('This is the strike score + 2 ', baseScore)

      }
    }
  }
  currentScore = 0;
    if (frame[9][0] === 10){
      baseScore += frame[9][0] + frame[9][1] + frame[9][2]
    }
    baseScore += frame[9][0] + frame[9][1]
  console.log('This is the final score ', baseScore)
  return baseScore;
}

// function isSpare (frame){
//   if (currrentFrame === 10){
//     basescore +=
//   }
// }

module.exports ={

  scoreFrame: scoreFrame


}

var frame = [[0,0], [2,3], [6,4], [3,2], [10,0], [10,0], [2,5], [5,3], [2,6], [5,5]];
