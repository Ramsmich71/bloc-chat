(function() {
  function HomeCtrl(Room, Message, $uibModal) {
    this.rooms = Room.all;
    this.messages = null;
    this.currentRoom = null;


    this.addRoom = function() {
      var modalIstance = $uibModal.open({
        templateUrl: '/templates/newRoom.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    };

    this.changeRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getByRoomId(room.$id);
    };

  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
