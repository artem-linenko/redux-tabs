import React, { PropTypes } from 'react'

const Tab = ( {text, active , onClick} ) => (
	<div className = "tab"
		onClick={onClick}
		style={{
      backgroundColor: active ? 'green' : 'white'
    }}
	>
		{text}
	</div>
)

Tab.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Tab