angular.module('starter.controllers', ['firebase'])

.controller('ChatsCtrl', ['$scope', '$firebase', '$rootScope', function($scope, $firebase, $rootScope) {
    //firebase1탄에서 만들었던 본인의 계정을 입력해주세요 
    var ref = new Firebase('http://test123452434.firebaseio.com/')
    
    //firebase 서버와 동기화를 합니다.
    var sync = $firebase(ref);

    //서버에 저장된 데이터를 동기적으로 담아줄 배열선언. 세부내용은 Firebase API참조!
    $scope.chats = sync.$asArray();
    
    //채팅에서 전송을 하면 실행될 메소드
    $scope.sendChat = function(chat){
        //$add는 Firebase에서 제공하는 메소드입니다. 
        $scope.chats.$add({
            user: 'Guest',
            message: chat.message
        });

        //채팅 보냇을때 채팅장 빈문자열로 초기화 
        chat.message = "";      
    }
}])

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
