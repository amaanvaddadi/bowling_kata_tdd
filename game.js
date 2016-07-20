var scoreFrame = function(frame, nextFrame){
  if(nextFrame){
    return frame[0]+ frame[1] + nextFrame[0];
  }
  return frame[0]+ frame[1];
}

module.exports ={

  scoreFrame: scoreFrame


}
