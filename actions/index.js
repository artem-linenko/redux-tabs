import serverApi from "../serverApi";

const chooseTabContent = (choosedTab) => {
  return {
    type: 'CHOOSE_TAB_CONTENT',
    choosedTab
  }
}

const receiveServerData = (data) => {
  return {
    type: 'SERVER_DATA_RECEIVED',
    data
  }
}

export const switchTab = (visibleTab) => {
  return {
    type: 'SWITCH_TAB',
    visibleTab
  }
}

export const fetchData = (choosedTab) => {
  return dispatch => {
    dispatch(chooseTabContent(choosedTab));

    serverApi.getTabContentResponse(choosedTab)
      .then((data) => {
        dispatch(receiveServerData(data));
      })
      .catch((err) => {
        console.log(err);
      })
  }
}