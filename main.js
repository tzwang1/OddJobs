function show_new_job_text_box() {
	document.getElementById("new_job_sub_box").style.display = "block";
}

function submit_new_job(){
	var job_title = document.getElementById("job_title");
	var job_description = document.getElementById("job_description");

	console.log(job_title);
	console.log(job_description);
}