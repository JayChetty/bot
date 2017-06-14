const startState = {
  instruction: 0,
  doingInstruction: false
}
export default function index(state = startState, action){
  switch (action.type) {
    case "DO_INSTRUCTION":
      return Object.assign({}, state, {doingInstruction: true})
    case "FINISH_INSTRUCTION":
      if(!state.doingInstruction){ return state }
      return Object.assign({}, state, {doingInstruction: false, instruction: state.instruction + 1})
    default:
      return state
  }
}
