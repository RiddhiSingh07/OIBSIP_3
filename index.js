function addTask() {
	const inputBox = document.getElementById("input-box");
	if (inputBox.value === '') {
		alert("please enter a task");
	}
	else {
		const taskcontainer = document.getElementById("task-container");
		const li = document.createElement("li");
		li.classList.add('taskcontainer');
		li.innerText = inputBox.value;

		const span = document.createElement("span");
		span.classList.add('li');
		span.innerText = "\u00d7";

		taskcontainer.appendChild(li);
		li.appendChild(span);

	}
	document.getElementById("input-box").value = "";

}
const taskcontainer = document.getElementById("task-container");
taskcontainer.addEventListener("click", function (e) {
	const li = document.createElement("li");
	if (e.target.tagName == "LI") {
		e.target.classList.toggle("checked");

	}
}, false);

taskcontainer.addEventListener("click", function (e) {
	const span = document.createElement("span");
	if (e.target.tagName == "SPAN") {
		e.target.parentElement.remove();

	}
}, false);


