var currentProject = ".detours";
var currentButton = "#detours-btn";

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