'use strict';

class Game extends Object {}
class HidingSpot extends Object {}

var game = new Game();
game.id = '1';

var hidingSpots = [];
(function() {
  var hidingspot;
  var indexOfSpotWithTreasure = Math.floor(Math.random() * 9);
  for (var i = 0; i < 9; i++) {
    hidingspot = new HidingSpot();
    hidingspot.id = `${i}`;
    hidingspot.hasTreasure = (i === indexOfSpotWithTreasure);
    hidingspot.hasBeenChecked = false;
    hidingSpots.push(hidingspot);
  }
})();

var turnsRemaining = 3;

export function getHidingSpot(id) {
  return hidingSpots.find(hs => hs.id === id);
}

export function checkHidingSpotForTreasure(id) {
  if (hidingSpots.some(hs => hs.hasTreasure && hs.hasBeenChecked)) {
    return;
  }
  turnsRemaining--;

  var hidingspot = getHidingSpot(id);
  hidingspot.hasBeenChecked = true;
}

export function getGame() { return game; }
export function getHidingSpots() { return hidingSpots; }
export function getTurnsRemaining() { return turnsRemaining; }
