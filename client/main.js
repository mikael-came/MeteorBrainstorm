import angular from 'angular';
import angularMeteor from 'angular-meteor';
import board from '../imports/components/board/board';

angular.module('MeteorBrainStorm', [
  angularMeteor,
  board.name
]);
