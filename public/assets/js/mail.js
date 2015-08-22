app.controller('mailCtrl', ['$scope', function($scope) {
  $scope.folds = [
    {name: 'Inbox', filter:''},
    {name: 'Starred', filter:'starred'},
    {name: 'Sent', filter:'sent'},
    {name: 'Important', filter:'important'},
    {name: 'Draft', filter:'draft'},
    {name: 'Trash', filter:'trash'}
  ];

  $scope.labels = [
    {name: 'travel', filter:'TR', color:'#23b7e5'},
    {name: 'moving', filter:'MO', color:'#7266ba'},
    {name: 'hosting', filter:'HO', color:'#fad733'},
    {name: 'moved', filter:'MD', color:'#27c24c'},
    {name: 'work', filter:'WK', color:'#275f4c'},
    {name: 'misc', filter:'MS', color:'#24c24c'}
  ];

  $scope.addLabel = function(){
    $scope.labels.push(
      {
        name: $scope.newLabel.name,
        filter: angular.lowercase($scope.newLabel.name),
        color: '#ccc'
      }
    );
    $scope.newLabel.name = '';
  };

  $scope.labelClass = function(label) {
    return {
      'b-l-info': angular.lowercase(label) === 'TR',
      'b-l-primary': angular.lowercase(label) === 'MO',
      'b-l-warning': angular.lowercase(label) === 'HO',
      'b-l-success': angular.lowercase(label) === 'NS'
    };
  };

}]);

app.controller('mailListCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  $scope.fold = $stateParams.fold;
  mails.all().then(function(mails){
    $scope.mails = mails;
  });
}]);

app.controller('mailDetailCtrl', ['$scope', 'mails', '$stateParams', function($scope, mails, $stateParams) {
  mails.get($stateParams.mailId).then(function(mail){
    $scope.mail = mail;
  })
}]);

app.controller('mailNewCtrl', ['$scope', function($scope) {
  $scope.mail = {
    to: '',
    subject: '',
    content: ''
  };
  $scope.tolist = [
    {name: 'Jimmy Thanki', email:'jimmy.thanki@gmail.com'},
    {name: 'Jason Dawson', email:'jasondawson@gmail.com'},
    {name: 'Ben Mealhow', email:'btsunami86@gmail.com'}
  ];
}]);

angular.module('app').directive('labelColor', function(){
  return function(scope, $el, attrs){
    $el.css({'color': attrs.color});
  }
});