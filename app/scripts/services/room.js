(function() {
  function Room($firebaseArray) {

    /**
    * @desc A reference to our Firebase database 'Rooms'
    * @type {Object}
    */
    var ref = firebase.database().ref().child("rooms");

    /**
    * @desc Our reference object with new '$firebaseArray' properties
    * @type {Object}
    */
    var rooms = $firebaseArray(ref);

    return {
      all: rooms,
      add: function(room) {
        rooms.$add(room);
      }
    };
  }

  angular
    .module('bloc-chat')
    .factory('Room', ['$firebaseArray', Room]);
})();
