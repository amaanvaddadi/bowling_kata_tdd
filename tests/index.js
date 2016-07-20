var test = require('tape')
var game = require('../game')

test('test setup working', function(t) {
  t.equal(1, 1)
  t.end()
})

test('scores a gutterball frame', function(t) {
  var frame = [0, 0]
  var score = game.scoreFrame(frame)
  t.equals(score, 0)
  t.end()
})

test('scores a normal frame', function(t) {
  var frame = [2, 3]
  var score = game.scoreFrame(frame)
  t.equals(score, 5)
  t.end()
})

test('scores a spare frame', function(t) {
var frame = [6,4]
var nextFrame = [3,2]
var score = game.scoreFrame(frame, nextFrame)

t.equals(score,13)
t.end()
})
