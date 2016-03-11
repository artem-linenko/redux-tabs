import { connect } from 'react-redux'
import { switchTab } from '../actions'
import Tabs from '../components/Tabs'

const mapStateToProps = (state) => {
  return {
    tabs: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (tabName) => {
      dispatch(switchTab(tabName))
    }
  }
}

const VisibleTab = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default VisibleTab