import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './board.html';

class BoardCtrl {
  constructor() {
    this.ideas = [{
      text: 'This is idea 1'
    }, {
      text: 'This is idea 2'
    }, {
      text: 'This is idea 3'
    }];
  }
}

export default angular.module('board', [
  angularMeteor
])
  .component('board', {
    templateUrl: 'imports/components/board/board.html',
    controller: BoardCtrl
  });
