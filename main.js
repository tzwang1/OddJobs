function show_new_job_text_box() {
	document.getElementById("new_job_sub_box").style.display = "block";
}

function submit_new_job(){
	var job_title = document.getElementById("job_title").value;
	var job_description = document.getElementById("job_description").value;

	console.log(job_title);
	console.log(job_description);
}

function log_in(){
	var username = document.getElementById("login").value;
	var password = document.getElementById("password").value;

	console.log(username);
	console.log(password);
}