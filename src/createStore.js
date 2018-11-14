export default function createStore(reducer) {
  // add your code here
  let state;

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState() {
    if (state){
      return state;
    }else{
      return reducer(state, {type: "init"})
    }
  }

  return {
    dispatch,
    getState
  };
}

function render() {
  const container = document.getElementById('container');
}
