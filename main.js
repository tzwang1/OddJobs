// Functions for job.html

// Shows the form to submit a new job
function show_new_job_text_box() {
	document.getElementById("new_job_sub_box").style.display = "block";
	document.getElementById("job_board").style.display = "none";
}

// Posts a new job
function submit_new_job(){
	var job_title = document.getElementById("job_title").value;
	var job_description = document.getElementById("job_description").value;

	console.log(job_title);
	console.log(job_description);
}

// Shows the job board
function show_job_board() {
	document.getElementById("job_board").style.display = "block";
	document.getElementById("new_job_sub_box").style.display = "none";
}

// Functions for login.html

// Verifies username and password, when prompted to log in
function log_in(){
	var username = document.getElementById("login").value;
	var password = document.getElementById("password").value;

	console.log(username);
	console.log(password);
}
