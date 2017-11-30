var currentProject = ".detours";
var currentButton = "#detours-btn";

// Fortunes chosen from http://www.fortunecookiemessage.com/archive.php
var fortunes = ["Hard work pays off in the future, laziness pays off now.", "A chance meeting opens new doors to success and friendship.", "You cannot love life until you live the life you love.", "You already know the answer to the questions lingering inside your head.", "You must try, or hate yourself for not trying.", "You can make your own happiness.", "If winter comes, can spring be far behind?", "Your ability for accomplishment will follow with success."];

$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
	});
});

$( "#detours-btn" ).click(function() {
	$(currentProject).toggle();
	$(currentButton).removeClass("btn-primary")
  	currentProject = ".detours";
  	currentButton = "#detours-btn"
  	$(currentButton).addClass("btn-primary");
  	$(currentProject).toggle();
});

$( "#gub-btn" ).click(function() {
	$(currentProject).toggle();
	$(currentButton).removeClass("btn-primary")
  	currentProject = ".gubernator";
  	currentButton = "#gub-btn"
  	$(currentButton).addClass("btn-primary");
  	$(currentProject).toggle();
});

$( "#docker-btn" ).click(function() {
	$(currentProject).toggle();
	$(currentButton).removeClass("btn-primary")
  	currentProject = ".docker";
  	currentButton = "#docker-btn"
  	$(currentButton).addClass("btn-primary");
  	$(currentProject).toggle();
});

$( "#research-btn" ).click(function() {
	$(currentProject).toggle();
	$(currentButton).removeClass("btn-primary")
  	currentProject = ".research";
  	currentButton = "#research-btn"
  	$(currentButton).addClass("btn-primary");
  	$(currentProject).toggle();
});

$( "#fortune-btn" ).click(function() {
	var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];
	$("#fortune-text").text(fortune);
});
