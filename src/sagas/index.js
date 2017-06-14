import {put, call, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga'


export function* startInstructions(action){
  for (let _ of action.instructions) {
    yield put( { type: "DO_INSTRUCTION" } )
    yield call(delay, 1000)
    yield put( { type: "FINISH_INSTRUCTION" } )
  }
}

export function* watchStartInstructions(){
  yield takeEvery("START_INSTRUCTIONS", startInstructions)
}

export default function* rootSaga(){
  yield[
    watchStartInstructions()
  ]
}
