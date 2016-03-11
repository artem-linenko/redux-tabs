import React, { PropTypes } from 'react'

const Content = ( {tab, content, onChooseClick} ) => (
	<div className="content-container">
		{tab.content}
		<button 
			className="chooseButton"
			disabled = {content.status == "UPLOADING"}
			onClick = {() => onChooseClick(tab.tabName)} 
		> Send {tab.tabName} request </button>

		<p 
			className = "content-text"
			style = {{
				display: content.status == "UPLOADED" ? 'block' : 'none'
			}}
			>{content.text}</p>
	</div>
)

Content.propTypes = {
  onChooseClick: PropTypes.func.isRequired
}

export default Content