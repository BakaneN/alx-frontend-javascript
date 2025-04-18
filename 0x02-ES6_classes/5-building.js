import Building from './Building';

class House extends Building {
  constructor(sqft, numOfRooms) {
    super(sqft);
    this._numOfRooms = numOfRooms;
  }

  // Implementing the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate the house! ${this._numOfRooms} rooms at risk.`;
  }
}
