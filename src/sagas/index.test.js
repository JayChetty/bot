import {put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {startInstructions} from './index.js'

const dummyInstructions = ["move", "move"]
test('start instructions triggers action', ()=> {
  const gen = startInstructions({instructions: dummyInstructions})
  expect( gen.next().value ).toEqual( put({type: "DO_INSTRUCTION"}))
})

test('...then waits for a second', ()=> {
  const gen = startInstructions({instructions: dummyInstructions})
  gen.next()
  expect( gen.next().value ).toEqual( call(delay, 1000) )
})

test('... then finishes the instruction', ()=> {
  const gen = startInstructions({instructions: dummyInstructions})
  gen.next()
  gen.next()
  expect( gen.next().value ).toEqual( put({type: "FINISH_INSTRUCTION"}) )
})

test('... then starts next instruction', ()=> {
  const gen = startInstructions({instructions: dummyInstructions})
  gen.next()
  gen.next()
  gen.next()
  expect( gen.next().value ).toEqual( put({type: "DO_INSTRUCTION"}) )
})
