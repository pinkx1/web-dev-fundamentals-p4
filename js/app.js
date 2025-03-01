$(document).foundation()
$("#themeToggle").click(function () {
	$("body").toggleClass("dark-mode");

	if ($("body").hasClass("dark-mode")) {
	  $("#themeToggle").html("☀️ Light Mode");
	  localStorage.setItem("theme", "dark");
	} else {
	  $("#themeToggle").html("🌙 Dark Mode");
	  localStorage.setItem("theme", "light");
	}
  });
  
  if (localStorage.getItem("theme") === "dark") {
	$("body").addClass("dark-mode");
	$("#themeToggle").html("☀️ Light Mode");
  }
  