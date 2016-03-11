const tabSwitched = (state, action) => {
	switch (action.type) {
		case "SWITCH_TAB":
			state.tabName != action.visibleTab ? state.visible = false : state.visible = true

  default:
	  	return state
	}
}

// const tabContentChoosed = (state, action) => {
// 	switch (action.type) {
// 		case "CHOOSE_TAB_CONTENT":
// 			state.tabName == action.choosedTab ? state.status = "CHOOSED" : state.status = "NONE"

//   default:
// 	  	return state
// 	}

// }

const tabs = (state = [], action) => {
	switch (action.type) {
		case "SWITCH_TAB":
      return state.map(t =>
        tabSwitched(t, action)
      )

  default:
	  	return state
	}
}



export default tabs;
