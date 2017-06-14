import reducer from './index.js'

it("starts with instruction 0 and doingInstruction false", ()=>{
  expect( reducer(undefined, {}) ).toEqual( {instruction:0, doingInstruction: false} )
})

it("can do instruction", ()=>{
  expect( reducer(undefined, {type: "DO_INSTRUCTION"}) ).toEqual( {instruction:0, doingInstruction: true} )
})

it("can finish instruction incrementing to next", ()=>{
  expect( reducer({instruction:0, doingInstruction: true}, {type: "FINISH_INSTRUCTION"}) ).toEqual( {instruction:1, doingInstruction: false} )
})

it("wont try to finish instruction not started", ()=>{
  expect( reducer({instruction:0, doingInstruction: false}, {type: "FINISH_INSTRUCTION"}) ).toEqual( {instruction:0, doingInstruction: false} )
})
