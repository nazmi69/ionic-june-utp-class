app
.controller("MainCtrl", ["$scope", function($scope) {
	console.log("This is Main Controller");
}])

.controller("AddNoteCtrl", ["$scope", "noteService", "$state", function($scope, noteService, $state) {
	console.log("This is Add Note Controller");

	$scope.savenote = function(note) {

		$scope.newNote = noteService.all;
		$scope.newNote.$add({
			title: note.title,
			content: note.content
		});

		$state.go("main");
	}

}])

.controller("DeleteNoteCtrl", ["$scope", "noteService", "$ionicActionSheet", function($scope, noteService, $ionicActionSheet) {
	console.log("This is Delete Note Controller");

	$scope.items = noteService.all;

	$scope.deletenote = function(id) {
		$ionicActionSheet.show({
			destructiveText: "Delete",
			titleText: "Are you sure you want to delete?",
			cancelText: "Cancel",

			destructiveButtonClicked: function() {
				var note_id = $scope.items.$getRecord(id);
				$scope.items.$remove(note_id);
				return true;
			}
		});
	}

}])

.controller("UpdateNoteCtrl", ["$scope", "noteService", function($scope, noteService) {
	console.log("This is Update Note Controller");
	
	$scope.items = noteService.all;

}])

.controller("ViewNoteCtrl", ["$scope", "noteService", function($scope, noteService) {
	console.log("This is View Note Controller");

	$scope.items = noteService.all;

}])

.controller("SingleNoteCtrl", ["$scope", "noteService", "$stateParams", function($scope, noteService, $stateParams) {
	console.log("This is Single Note Controller");

	$scope.singleNote = noteService.get($stateParams.id);

}])

.controller("UpdateSingleNoteCtrl", ["$scope", "noteService", "$stateParams", "$state", function($scope, noteService, $stateParams, $state) {
	console.log("This is Update Single Note Controller");

	$scope.allNote = noteService.all;
	$scope.singleNote = noteService.get($stateParams.id);

	$scope.title = $scope.singleNote.title;
	$scope.content = $scope.singleNote.content;
	$scope.id = $scope.singleNote.$id;

	$scope.updatenote = function(id, title, content) {

		var selected = $scope.allNote.$getRecord(id);
		selected.title = title;
		selected.content = content;

		$scope.allNote.$save(selected);
		$state.go("updateNote");
	}


}])