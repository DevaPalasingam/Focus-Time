import React, { Component } from "react";


export default class TodosListHeader extends React.Component {
	render() {
		return (
			<tr>
				<th>Task</th>
				<th>Action</th>
			</tr>
		);
	}
}