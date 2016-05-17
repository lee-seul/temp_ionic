angular.module('starter.controllers', ['firebase'])

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
