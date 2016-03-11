import React, { PropTypes } from 'react'

const Content = ({tab, onChooseClick}) => (
	<div className="content-container">
		{tab.content}
		<button className="chooseButton" onClick = {() => onChooseClick(tab.tabName)} > Send request </button>
	</div>
)

Content.propTypes = {
  onChooseClick: PropTypes.func.isRequired
}

export default Content