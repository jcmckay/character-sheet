const skills = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return [ ...state, { name: action.name, type: action.attribute }  ]
    default:
      return state
  }
}

export default skills