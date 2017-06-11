app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("main", {
			url: "/",
			templateUrl: "templates/main.html",
			controller: "MainCtrl"
		})

		.state("addNote", {
			url: "/addnote",
			templateUrl: "templates/addNote.html",
			controller: "AddNoteCtrl"
		})

		.state("deleteNote", {
			url: "/deletenote",
			templateUrl: "templates/deleteNote.html",
			controller: "DeleteNoteCtrl"
		})

		.state("updateNote", {
			url: "/updatenote",
			templateUrl: "templates/updateNote.html",
			controller: "UpdateNoteCtrl"
		})

		.state("viewNote", {
			url: "/viewnote",
			templateUrl: "templates/viewNote.html",
			controller: "ViewNoteCtrl"
		})

		.state("singleNote", {
			url: "/:id",
			templateUrl: "templates/singleNote.html",
			controller: "SingleNoteCtrl"
		})

		.state("updateSingleNote", {
			url: "/edit/:id",
			templateUrl: "templates/updateSingleNote.html",
			controller: "UpdateSingleNoteCtrl"
		})

	$urlRouterProvider.otherwise("/");
})