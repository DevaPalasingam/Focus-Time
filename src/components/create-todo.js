import _ from "lodash";
import React, { Component } from "react";

export default class TodosList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null
		};
	}

	renderError() {
		if (!this.state.error) { return null; }

		return <div style={{ color: "red" }}>{this.state.error}</div>;
	}


	// render -  renders the input box
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="number" min="1" step="1" placeholder="Minutes" ref="timeInput" />
				<input type="text" placeholder="What do I need to do?" ref="createInput" />
				<button>Create</button>
				{this.renderError()}
			</form>
		);
	}
	// render =======================================================================


	// handleCreate - this will validate the input and then set the values
	handleCreate(event) {
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;
		console.log("Task: " + task);

		const timeInput = this.refs.timeInput;
		const time = timeInput.value;
		console.log("Time: " + time);


		const validateInput = this.validateInput(task); //calls validateInput

		if (validateInput) {
			this.setState({ error: validateInput });
			return;
		}

		this.setState({ error: null });
		this.props.createTask(task,time);
		this.refs.createInput.value = "";

		// this.props.createTime(time);
		this.refs.timeInput.value = "";
	}
	// =========================================================================


	// validateInput - this will check if there's any doubles or if the input box is empty
	validateInput(task) {
		if (!task) {
			return "Please enter a task.";
		}
		else if (_.find(this.props.todos, todo => todo.task === task)) {
			return "Task already exists.";
		}
		else {
			return null;
		}
	}
	// validateInput ===============================================================


}
// closes export