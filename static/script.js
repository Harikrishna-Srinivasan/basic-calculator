const allowedChars = /^[0-9\+\-*/%^\.]+$/;
const displayArea = document.querySelector(".displayArea");
displayArea.addEventListener("keypress", (event) => {
	displayArea.style.color = "black";
	if (event.key === "Enter" || event.key === "=") {
		event.preventDefault();
		calculate(displayArea);
	}
	else if (event.key === "Escape")
		displayArea.value = "";
	else if (event.key === "Backspace")
		displayArea.value = displayArea.value.slice(0, -1);
	else if (!allowedChars.test(event.key))
		event.preventDefault();
});

function calculate(displayArea) {
	if (displayArea.value === "")
		return;
	try {
		if (!allowedChars.test(displayArea.value)) {
			displayArea.style.color = "red";
			displayArea.value = "Invalid Expression";
			return;
		}
		const expression = displayArea.value.replace("^", "**");
		const result = eval(expression);
		if (isNaN(result))
			displayArea.value = "Math Error";
		else
			displayArea.value = result;
	} catch (error) {
		displayArea.style.color = "red";
		displayArea.value = "Error Expression";
	}
}

function display(event) {
	const displayArea = document.querySelector(".displayArea");
	const value = event.target.textContent;
	if (value === "=")
		calculate(displayArea);
	else if (value === "CLR")
		displayArea.value = "";
	else if (value === "DEL")
		displayArea.value = displayArea.value.slice(0, -1);
	else
		displayArea.value += value;
}
