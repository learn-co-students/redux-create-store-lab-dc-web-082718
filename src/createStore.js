
//
export default function createStore(reducer) {
  let state;

 let action = {type: '@@INIT'};

  // so that updates to state are permanent
  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
 
  //state for rendering
  function getState() {
    return state;
  };

  dispatch(action);
 
  return {
    dispatch,
    getState
  };


}

//render to DOM
function render() {
  const container = document.getElementById('container');
}
