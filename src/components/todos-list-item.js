import React, { Component } from "react";


export default class TodosListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing:false
		};
	}

	// renderTaskSection - renders the todo list
	renderTaskSection() {
		const { task, time} = this.props;


		const taskStyle = {
			cursor: "pointer"
		};

		// if - this renders the item as an input while it is being edited
		if (this.state.isEditing) {
			return(
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="text" defaultValue={task} ref="editInput" />
					</form>
				</td>
			);
		}
		// closes if-statement

		return(
			<td 
				style={taskStyle}
			>
				{task}</td>
		);
	}
	// renderTaskSection ==========================================================

	// renderTimeSection - renders the todo list
	renderTimeSection() {
		const { task, time} = this.props;


		const taskStyle = {
			cursor: "pointer"
		};

		// if - this renders the item as an input while it is being edited
		if (this.state.isEditing) {
			return(
				<td>
					<form onSubmit={this.onSaveClick.bind(this)}>
						<input type="number" min="1" step="1" defaultValue={time} ref="editTime" />
					</form>
				</td>
			);
		}
		// closes if-statement

		return(
			<td 
				style={taskStyle}
			>
				{time}</td>
		);
	}
	// renderTaskSection ==========================================================



	// renderActionsSection - this renders the buttons for each item on the list
	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button class="fancy-btn" onClick={this.onSaveClick.bind(this)}>Save</button>
					<button class="fancy-btn" onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>	
			);
		}

		return (
			<td>	
				<button class="fancy-btn" onClick={this.onEditClick.bind(this)}>Edit</button>
				<button class="fancy-btn" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
			</td>	
		);
	}
	// renderActionsSection ===========================================================



	// render - this actually renders everything
	render() {
		return (
			<tr>
				{this.renderTimeSection()}
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>	
		);
	}
	// render ================================================



	onEditClick() {
		this.setState({ isEditing: true});
	}



	onCancelClick() {
		this.setState({ isEditing: false});
	}



	onSaveClick(event) {
		event.preventDefault();

		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		const oldTime = this.props.time;
		const newTime = this.refs.editTime.value;
		this.props.saveTask(oldTask, newTask, oldTime, newTime);
		this.setState({ isEditing: false});
	}

	
}
// closes export