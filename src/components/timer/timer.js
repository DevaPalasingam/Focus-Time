import React, { Component } from "react";

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

var timeOutput = "00:00";

var time = 0;

export default class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
	}

	render() {

		var stopwatch = {

  time: 0,

  completed: function() {

    stopwatch.time = 0;

    // DONE: Change the "display" div to "00:00."
    timeOutput = "00:00"

  },

  togglePlay: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }

    else {
    	// DONE: Use clearInterval to stop the count here and set the clock to not be running.
	    clearInterval(intervalId);
	    clockRunning = false;
    }

  },
  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    timeOutput = converted;
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};


		return (
			<div>
				<div id="topButtons">
					<button id="minus5">-5m</button>
					<button id="plus5">+5m</button>
				</div>
				<div id="display" onClick={stopwatch.togglePlay}>
					{timeOutput}
				</div>
				<div id="bottomButton">
					<button id="completed">Completed</button>
				</div>
			</div>
		);
	}
	// closes render


}
// closes export
