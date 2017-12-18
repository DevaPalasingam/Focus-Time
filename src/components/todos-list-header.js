import React, { Component } from "react";


export default class TodosListHeader extends React.Component {
	render() {
		return (
			<tr>
				<th>Length</th>
				<th>Task</th>
				<th>Action</th>
			</tr>
		);
	}
}