import _ from "lodash";
import React, { Component } from "react";
import CreateTodo from "./create-todo";
import TodosList from "./todos-list";

const todos = [];

export default class App extends React.Component {
	constructor (props) {
		super (props);

		this.state = {
			todos
		};
	}

	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<div id="topButtons">
			        <button id="minus5">-5m</button>
			        <button id="plus5">+5m</button>
			    </div>
				<div id="display">00:00</div>
				<div id="bottomButton">
			        <button id="completed">Completed</button>
			    </div>
				<CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
				<TodosList 
					todos={this.state.todos}
					saveTask={this.saveTask.bind(this)} 
					deleteTask={this.deleteTask.bind(this)}
				/>

			</div>
		);
	}

	// createTask - creates the task that's typed in
	createTask(task, time) {
		this.state.todos.push({
			task,
			time
		});
		this.setState({ todos: this.state.todos});
	}
	// createTask ==================================================



	// saveTask - saves the task after it's been edited
	saveTask(oldTask, newTask, oldTime, newTime) {
		const foundTodo =_.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		foundTodo.time = newTime;
		this.setState({todos: this.state.todos});
	}
	// saveTask =================================================================





	// deleteTask =========================================================
	deleteTask(taskToDelete) {
		_.remove(this.state.todos, todo => todo.task === taskToDelete);
		this.setState({ todos: this.state.todos });
	}
	// deleteTask ===========================================================


}
// closes export