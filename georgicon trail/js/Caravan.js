var OregonH = OregonH || {};

OregonH.Caravan = {};

OregonH.Caravan.init = function(stats){
  this.day = stats.day;
  this.grain = stats.grain;
  this.wine = stats.wine;
  this.bees = stats.bees;
  this.honey = stats.honey
  this.oxen = stats.oxen;
};



//food consumption
OregonH.Caravan.consumeGrain = function() {
  this.grain -= this.oxen * OregonH.GRAIN_PER_OX;
  this.grain -= OregonH.GRAIN_PER_PERSON;

  if(this.grain < 0) {
    this.grain = 0;
  }
};
