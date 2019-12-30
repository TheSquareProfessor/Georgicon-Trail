var OregonH = OregonH || {};

//constants
OregonH.GAME_SPEED = 1600;
OregonH.DAY_PER_STEP = 1;
OregonH.GRAIN_PER_OX = 2;
OregonH.GRAIN_PER_PERSON = 1;
OregonH.FULL_SPEED = 5;
OregonH.SLOW_SPEED = 3;
OregonH.FINAL_HONEY = 80;
OregonH.EVENT_PROBABILITY = 1;
OregonH.ENEMY_FIREPOWER_AVG = 5;
OregonH.ENEMY_GOLD_AVG = 50;

OregonH.Game = {};

//initiate the game
OregonH.Game.init = function(){

  //reference ui
  this.ui = OregonH.UI;

  //reference event manager
  this.eventManager = OregonH.Event;

  //setup caravan
  this.caravan = OregonH.Caravan;
  this.caravan.init({
    day: 0,
    grain: 100,
    bees: 10,
    honey: 5,
    oxen: 2,
    wine: 0
  });

  //pass references
  this.caravan.ui = this.ui;
  this.caravan.eventManager = this.eventManager;

  this.ui.game = this;
  this.ui.caravan = this.caravan;
  this.ui.eventManager = this.eventManager;

  this.eventManager.game = this;
  this.eventManager.caravan = this.caravan;
  this.eventManager.ui = this.ui;

  //begin adventure!
  this.startJourney();
};

//start the journey and time starts running
OregonH.Game.startJourney = function() {
  this.gameActive = true;
  this.previousTime = null;
  this.ui.notify('\n Quid faciat laetas segetes, quo sidere terram \n uertere, Maecenas, ulmisque adiungere uitis \n conueniat, quae cura boum, qui cultus habendo \n sit pecori, apibus quanta experientia parcis, \n hinc canere incipiam', 'positive');

  this.step();
};

//game loop
OregonH.Game.step = function(timestamp) {

  //starting, setup the previous time for the first time
  if(!this.previousTime){
    this.previousTime = timestamp;
    this.updateGame();
  }

  //time difference
  var progress = timestamp - this.previousTime;

  //game update
  if(progress >= OregonH.GAME_SPEED) {
    this.previousTime = timestamp;
    this.updateGame();
  }

  //we use "bind" so that we can refer to the context "this" inside of the step method
  if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
};

//update game stats
OregonH.Game.updateGame = function() {
  //day update
  this.caravan.day += 1;

  //food consumption
  this.caravan.consumeGrain();

  if(this.caravan.grain === 0 && this.caravan.oxen === 0) {
    this.ui.notify('You starved to death', 'negative');
    this.gameActive = false;
    return;
  }

  if(this.caravan.grain === 0 && this.caravan.oxen > 0) {
    this.ui.notify('One of your oxen starved to death', 'negative');
    this.caravan.oxen -= 1;
}

this.crops = 20 * this.oxen
this.sweet = this.bees

  //show stats
  this.ui.refreshStats();

  //check win game
  if(this.caravan.honey >= OregonH.FINAL_HONEY) {
    this.ui.notify('Haec super arvorum cultu pecorumque canebam \n et super arboribus, Caesar dum magnus ad altum \n fulminat Euphraten bello victorque volentes \n per populos dat iura viamque adfectat Olympo', 'positive');
    this.gameActive = false;
    return;
  }

  //random events
  if(Math.random() <= OregonH.EVENT_PROBABILITY) {
    this.eventManager.generateEvent();
  }
};

//pause the journey
OregonH.Game.pauseJourney = function() {
  this.gameActive = false;
};

//resume the journey
OregonH.Game.resumeJourney = function() {
  this.gameActive = true;
  this.step();
};


//init game
OregonH.Game.init();