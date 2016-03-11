import React, { PropTypes } from 'react'
import Tab from './Tab';

const Tabs = ({tabs, onTabClick}) => (
	<div className="tabs-container">
		{tabs.map(tab => 
			<Tab 
				key = {tab.tabName}
				text = {tab.text}
				active = {tab.visible}
				onClick = {() => onTabClick(tab.tabName)}
			/>
		)}
	</div>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabName: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default Tabs