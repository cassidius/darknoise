$( document ).ready(function() {
	var sfx_data =  
			[{id: "1", icon: "&#xe9b0;"},
			{id: "2", icon: "&#xe9af;"},
			{id: "3", icon: "&#xe999;"},
			{id: "4", icon: "<i class=\"fa fa-child fa-6\" aria-hidden=\"true\"></i>"},
			{id: "5", icon: "<i class=\"fa fa-hand-paper-o fa-6\" aria-hidden=\"true\"></i>"},
			{id: "6", icon: "<i class=\"fa fa-cogs fa-6\" aria-hidden=\"true\"></i>"},
			{id: "7", icon: "&#xe9DD;"},
			{id: "8", icon: "<i class=\"fa fa-user-md fa-6\" aria-hidden=\"true\"></i>"},
			{id: "9", icon: "<i class=\"fa fa-car fa-6\" aria-hidden=\"true\"></i>"}
			];
	var source   = $("#entry-template").html();
	var template = Handlebars.compile(source);
	var html    = template(sfx_data);
	$(".row").append(html);
});