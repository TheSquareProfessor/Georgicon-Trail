var OregonH = OregonH || {};

OregonH.UI = {};

//show a notification in the message area
OregonH.UI.notify = function(message, type){
  document.getElementById('updates-area').innerHTML = '<div class="update-' + type + '">Day '+ Math.ceil(this.caravan.day) + ': ' + message+'</div>' + document.getElementById('updates-area').innerHTML;
};

//refresh visual caravan stats
OregonH.UI.refreshStats = function() {
  //modify the dom
  document.getElementById('stat-day').innerHTML = this.caravan.day;
  document.getElementById('stat-honey').innerHTML = this.caravan.honey;
  document.getElementById('stat-oxen').innerHTML = this.caravan.oxen;
  document.getElementById('stat-grain').innerHTML = this.caravan.grain;
  document.getElementById('stat-bees').innerHTML = this.caravan.bees;
  document.getElementById('stat-wine').innerHTML = this.caravan.wine;

  //update caravan position
  document.getElementById('caravan').style.left = (380 * this.caravan.honey/OregonH.FINAL_HONEY) + 'px';
  
};

//show shop
OregonH.UI.showShop = function(products){

  //get shop area
  var shopDiv = document.getElementById('shop');
  shopDiv.classList.remove('hidden');

  //init the shop just once
  if(!this.shopInitiated) {

    //event delegation
    shopDiv.addEventListener('click', function(e){
      //what was clicked
      var target = e.target || e.src;

     if(target.tagName == 'DIV' && target.className.match(/product/)) {

        console.log('buying')

        var bought = OregonH.UI.buyProduct({
          item: target.getAttribute('data-item'),
          qty: target.getAttribute('data-qty'),
          price: target.getAttribute('data-price')
        });
		
        shopDiv.classList.add('hidden');
        OregonH.UI.game.resumeJourney();

        if(bought) target.html = '';
		        shopDiv.classList.add('hidden');
				OregonH.UI.game.resumeJourney();
		if (OregonH.UI.buyProduct(product) == true){
	          //resume journey
        shopDiv.classList.add('hidden');
        OregonH.UI.game.resumeJourney();
	}
      }
   //resume journey
   shopDiv.classList.add('hidden');
   OregonH.UI.game.resumeJourney();
    });

    this.shopInitiated = true;

	
  }

  //clear existing content
  var prodsDiv = document.getElementById('prods');
  prodsDiv.innerHTML = '';

  //show products removed quant
  var product;
  for(var i=0; i < products.length; i++) {
    product = products[i];
    prodsDiv.innerHTML += '<div class="product" data-qty="' + product.qty + '" data-item="' + product.item + '" data-price="' + product.price + '">' + product.item + '</div>';
  }


};

//buy product slash click an answer
OregonH.UI.buyProduct = function(product) {


  OregonH.UI.caravan.wine += +product.qty;
  

  OregonH.UI.notify('Fermented ' + product.qty + ' wine ', 'positive');



  //update visuals
  OregonH.UI.refreshStats();
  

};

//show bugonia
OregonH.UI.showBugonia = function(ritual){

  //get shop area
  var bugoniaDiv = document.getElementById('bugonia');
  bugoniaDiv.classList.remove('hidden');

  //init the shop just once
  if(!this.bugoniaInitiated) {

    //event delegation
    bugoniaDiv.addEventListener('click', function(e){
      //what was clicked
      var target = e.target || e.src;

      //exit button
      if(target.tagName == 'BUTTON') {
        //resume journey
        bugoniaDiv.classList.add('hidden');
        OregonH.UI.game.resumeJourney();

      }
      else if(target.tagName == 'DIV' && target.className.match(/ritual/)) {

        console.log('buying')

        var bought = OregonH.UI.sacrifice({
          item: target.getAttribute('data-item'),
          qty: target.getAttribute('data-qty'),
          price: target.getAttribute('data-price')
        });


        if(bought) target.html = '';
		        shopDiv.classList.add('hidden');
				OregonH.UI.game.resumeJourney();
      }
    });

    this.bugoniaInitiated = true;
	
  }

  //clear existing content
  var sacsDiv = document.getElementById('sacs');
  sacsDiv.innerHTML = '';

  //show products removed quant
    sacsDiv.innerHTML += '<div class="ritual" data-qty="' + ritual.qty + '" data-item="' + ritual.item + '" data-price="' + ritual.price + '">' + ritual.item + '</div>';
 

  //setup click event
  //document.getElementsByClassName('product').addEventListener(OregonH.UI.buyProduct);
};

//buy product slash click an answer
OregonH.UI.sacrifice = function(ritual) {
  //check we can afford it
  if(ritual.price > OregonH.UI.caravan.oxen) {
    OregonH.UI.notify('No oxen remaining', 'negative');
	        //resume journey
        bugoniaDiv.classList.add('hidden');
        OregonH.UI.game.resumeJourney();
    return false;
  }

  OregonH.UI.caravan.oxen -= ritual.price;

  OregonH.UI.caravan.bees += +ritual.qty;

  OregonH.UI.notify('Generated ' + ritual.qty + ' bees ', 'positive');


  //update visuals
  OregonH.UI.refreshStats();

  return true;
  

};

//show choice
OregonH.UI.showChoice = function(answers){

  //get choice area
  var choiceDiv = document.getElementById('choice');
  choiceDiv.classList.remove('hidden');

  //init the choice just once
  if(!this.choiceInitiated) {

    //event delegation
    choiceDiv.addEventListener('click', function(e){
      //what was clicked
      var target = e.target || e.src;


    
    if(target.tagName == 'DIV' && target.className.match(/answer/)) {


        var chosen = OregonH.UI.choose({
          thing: target.getAttribute('data-ans'),
		  stat: target.getAttribute('data-stat'),
          value: target.getAttribute('data-value')
        });

	  //resume journey
        choiceDiv.classList.add('hidden');
  OregonH.UI.game.resumeJourney();
      
      }
    });

    this.choiceInitiated = true;
	
  }


  //clear existing content
  var ansDiv = document.getElementById('ans');
ansDiv.innerHTML = '';
  var questDiv = document.getElementById('quest');
questDiv.innerHTML = '';


  //show answers
  var answer;
  for(var i=0; i < answers.length; i++) {
	  if (this.caravan.bees == 0)
	  {
    answer = answers[i];
    ansDiv.innerHTML += '<div class="answer" data-ans="' + answer.thing + '"data-stat="' + answer.stat + '"data-value="' + answer.value + '">' + answer.thing +'</div>';
  }
   else
	  {
    answer = answers[i];
    ansDiv.innerHTML += '<div class="answer" data-ans="' + answer.thing + '"data-stat="' + answer.stat + '"data-value="' + answer.value + '">' + answer.thing +'</div>';
  }
  }
  //setup click event
  //document.getElementsByClassName('product').addEventListener(OregonH.UI.buyProduct);
};

//choose an answer
OregonH.UI.choose = function(answer) {


if (answer.value > 0) {
  OregonH.UI.notify('Got ' + answer.value + ' ' + answer.stat, 'positive')
  OregonH.UI.caravan[answer.stat] += +answer.value;
};
if (answer.value < 0) {
  OregonH.UI.notify('Lost ' + answer.value + answer.stat, 'negative')
  OregonH.UI.caravan[answer.stat] += +answer.value;
};

  //update visuals
  OregonH.UI.refreshStats();
  
	
  return true;
  

};

//show attack on bees
OregonH.UI.showAttack = function(wine, honey) {
  var attackDiv = document.getElementById('attack');
  attackDiv.classList.remove('hidden');

  //keep properties
  this.wine = wine;
  this.honey = honey;

  //show firepower
  document.getElementById('attack-description').innerHTML = 'cure bees with wine?';

  //init once
  if(!this.attackInitiated) {

    //fight
    document.getElementById('spend').addEventListener('click', this.spend.bind(this));

    //run away
    document.getElementById('save').addEventListener('click', this.save.bind(this));

    this.attackInitiated = true;
  }
};

//fight
OregonH.UI.spend = function(){

  var wine = this.wine;
  var honey = this.honey;

  var damage = Math.ceil(Math.max(0, ((20 * Math.random())) - this.caravan.wine));

  //check there are survivors
  if(damage < this.caravan.bees) {
    this.caravan.bees -= damage;
    this.notify(damage + ' tum corpora luce carentum exportant tectis et tristia funera ducunt', 'negative');
  }
  else {
    this.caravan.bees = 0;
    this.notify('omnia tum corpora luce carentum exportant tectis et tristia funera ducunt', 'negative');
  }
this.caravan.wine = Math.max(0, (this.caravan.wine - 10))
  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
};

//runing away from enemy
OregonH.UI.save = function(){


  var damage = 40;

  //check there are survivors
  if(damage < this.caravan.bees) {
    this.caravan.bees -= damage;
    this.notify(damage + ' tum corpora luce carentum exportant tectis et tristia funera ducunt', 'negative');
	  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
  }
  else {
    this.caravan.bees = 0;
    this.notify('omnia tum corpora luce carentum exportant tectis et tristia funera ducunt', 'negative');
	  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
  }

  //remove event listener
  document.getElementById('save').removeEventListener('click');

  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();

};
//show attack on oxen
OregonH.UI.showAttaq = function(wine, oxen) {
  var attaqDiv = document.getElementById('attaq');
  attaqDiv.classList.remove('hidden');

  //show prompt
  document.getElementById('attaq-description').innerHTML = 'cure oxen with wine?';

  //init once
  if(!this.attaqInitiated) {

    //fight
    document.getElementById('spennd').addEventListener('click', this.spennd.bind(this));

    //run away
    document.getElementById('savve').addEventListener('click', this.savve.bind(this));

    this.attaqInitiated = true;
  }
};

//fight
OregonH.UI.spennd = function(){

  var wine = this.wine;
  var honey = this.honey;

  var damage = Math.ceil(Math.max(0, ((10 * Math.random())) - this.caravan.wine));

  //check there are survivors
  if(damage < this.caravan.oxen) {
    this.caravan.oxen -= damage;
    this.notify(damage + ' dulcis animas plena ad praesepia reddunt', 'negative');
  }
  else {
    this.caravan.oxen = 0;
    this.notify('ergo aegre rastris terram rimantur, et ipsis \n unguibus infodiunt fruges, montisque per altos \n contenta ceruice trahunt stridentia plaustra', 'negative');
  }
this.caravan.wine = Math.max(0, (this.caravan.wine - 5))
  //resume journey
  document.getElementById('attaq').classList.add('hidden');
  this.game.resumeJourney();
};

//runing away from enemy
OregonH.UI.savve = function(){


  var damage = 5;

  //check there are survivors
  if(damage < this.caravan.oxen) {
    this.caravan.oxen -= damage;
    this.notify(damage + ' dulcis animas plena ad praesepia reddunt', 'negative');
	  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
  }
  else {
    this.caravan.oxen = 0;
    this.notify('ergo aegre rastris terram rimantur, et ipsis \n unguibus infodiunt fruges, montisque per altos \n contenta ceruice trahunt stridentia plaustra', 'negative');
	  //resume journey
  document.getElementById('attaq').classList.add('hidden');
  this.game.resumeJourney();
  }

  //remove event listener
  document.getElementById('savve').removeEventListener('click');

  //resume journey
  document.getElementById('attaq').classList.add('hidden');
  this.game.resumeJourney();

};