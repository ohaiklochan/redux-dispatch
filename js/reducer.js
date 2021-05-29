let state = {count: 0};

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count
}

function dispach(action){
  state = changeState(state, action)
  render()
}


dispach({type: 'INCREASE_COUNT'})
dispach({type: 'INCREASE_COUNT'})