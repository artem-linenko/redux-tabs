import { connect } from 'react-redux'
import { fetchData } from '../actions'
import Tabs from '../components/Content'

const getChosenTab = (tabs) => {
  let tab;

  tabs.forEach(t => {
    if (t.visible) tab = t
  })

  return tab;
}

const mapStateToProps = (state) => {
  return {
    tab: getChosenTab(state.tabs),
    content: state.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChooseClick: (tabName) => {
      dispatch(fetchData(tabName))
    }
  }
}

const VisibleTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default VisibleTab