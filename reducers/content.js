const content = (state = [], action) => {

	switch (action.type) {

		case "CHOOSE_TAB_CONTENT":

      return Object.assign({}, state, {
      	status: "UPLOADING"
      })

    case "SERVER_DATA_RECEIVED":

      return Object.assign({}, state, {
      	status: "UPLOADED",
      	text: action.data
      })

  default:
	  	return state
	}
}



export default content;