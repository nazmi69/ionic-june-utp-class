app.factory('noteService', function($firebaseArray, $firebaseObject) {
	var ref = firebase.database().ref();
	var notes = $firebaseArray(ref);

	return {
		all: notes,
		get: function(noteID) {
			return notes.$getRecord(noteID);
		}
	};
	
})