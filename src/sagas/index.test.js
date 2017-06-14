import {put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {startInstructions} from './index.js'

test('start instructions triggers action', ()=> {
  const gen = startInstructions()
  expect( gen.next().value ).toEqual( put({type: "DO_INSTRUCTION"}))
})

test('...then waits for a second', ()=> {
  const gen = startInstructions()
  gen.next()
  expect( gen.next().value ).toEqual( call(delay, 1000) )
})

test('... then finishes the instruction', ()=> {
  const gen = startInstructions()
  gen.next()
  gen.next()
  expect( gen.next().value ).toEqual( put({type: "FINISH_INSTRUCTION"}) )
})
