import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {IdeasCollection} from '../../api/ideas.js';

import template from './board.html';


class BoardCtrl {

  constructor($scope) {
   $scope.viewModel(this);

   this.helpers({
     ideas() {
      return IdeasCollection.find(
        {},{sort:{createdAt:-1}}
      );
     }
    })
  }

  addIdea(newIdea) {
    // Insert a task into the collection
    IdeasCollection.insert({
      text: newIdea.texte,
      title: newIdea.title,
      score: 0,
      createdAt: new Date
    });
    // Clear form
    this.newIdea = {};
  }

  incrementIdea(idea){
    let newscore = 0;
    if(idea.score)
      newscore =  idea.score + 1;
    else {
      newscore = 1;
      }

    IdeasCollection.update(idea._id, {
      $set: {
        score:newscore
      },
    });
  }
  setChecked(idea) {
    // Set the checked property to the opposite of its current value
    IdeasCollection.update(idea._id, {
      $set: {
        checked: !idea.checked
      },
    });
  }

  removeIdea(idea){
    IdeasCollection.remove(idea._id);
  }

}

export default angular.module('board', [
  angularMeteor
])
  .component('board', {
    templateUrl: 'imports/components/board/board.html',
    controller: ['$scope', BoardCtrl]
  });
