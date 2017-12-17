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
		const { task, isCompleted} = this.props;

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



	// renderActionsSection - this renders the buttons for each item on the list
	renderActionsSection() {
		if (this.state.isEditing) {
			return (
				<td>
					<button onClick={this.onSaveClick.bind(this)}>Save</button>
					<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
				</td>	
			);
		}

		return (
			<td>	
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
			</td>	
		);
	}
	// renderActionsSection ===========================================================



	// render - this actually renders everything
	render() {
		return (
			<tr>
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
		this.props.saveTask(oldTask, newTask);
		this.setState({ isEditing: false});
	}

	
}
// closes export