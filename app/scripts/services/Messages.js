(function() {
  function Message($firebaseArray) {

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    return {
      all: messages,
      getByRoomId: function(roomId) {
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      }
    };
  }

  angular
    .module('bloc-chat')
    .factory('Message', ['$firebaseArray', Message]);
})();
