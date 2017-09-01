(function() {
  function HomeCtrl(Room, $uibModal) {
    this.rooms = Room.all;


    this.addRoom = function() {
      var modalIstance = $uibModal.open({
        templateUrl: '/templates/newRoom.html',
        size: 'sm',
        controller: 'ModalCtrl as modal'
      });
    };



  }

  angular
    .module('bloc-chat')
    .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
