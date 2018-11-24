import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

function createStore(reducer) {
  let state

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  // @@INIT is the string literal used by convention, but this could be any string that does not have a corresponding type
  dispatch({ type: '@@init' })

  return({
    getState,
    dispatch
  })

}

function render() {
  const container = document.getElementById('container')
}

export default createStore
