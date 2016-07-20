var scoreFrame = function(frame, nextFrame, lastFrame){
var baseScore = frame[0]+ frame[1] ;
  if(nextFrame && lastFrame){
    return baseScore + nextFrame[0] + lastFrame[0]
  }
  if(nextFrame){
    return baseScore + nextFrame[0];
  }
  return baseScore;
}

module.exports ={

  scoreFrame: scoreFrame


}
