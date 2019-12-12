var OregonH = OregonH || {};

OregonH.Event = {};

OregonH.Event.eventTypes = [

  {type: 'CHOICE',
  notification: 'neutral',
  text: 'saepe etiam sterilis incendere profuit agros \n atque leuem stipulam crepitantibus urere flammis. \n Your fields are sterile. \n Will you set them on fire, or leave them be?',
  question: 'Your fields are sterile.  Will you set them on fire, or leave them be?',
  choices: 2,
  answers: [
  {stat: 'grain', thing: 'burn it all down', value: 20},
  {stat: 'grain', thing: 'let it alone', value: -20}
  ]
  },
  
{
    type: 'SHOP',
    notification: 'neutral',
    text: 'Identify an accusative: \n non ego cuncta meis amplecti uersibus opto, \n non, mihi si linguae centum sint oraque centum, \n ferrea uox.',
    products: [
      {item: 'centum', qty: 0, price: 1},
      {item: 'ferrea', qty: 0, price: 1},
      {item: 'cuncta', qty: 10, price: 1},
      {item: 'ora', qty: 0, price: 1}
    ]
  },
   {
    type: 'ATTACK',
    notification: 'negative',
    text: 'Si vero, quoniam casus apibus quoque nostros \n vita tulit, tristi languebunt corpora morbo \n quod iam non dubiis poteris cognoscere signis:'
  },
  {
    type: 'ATTAQ',
    notification: 'negative',
    text: 'Hic quondam morbo caeli miseranda coorta est \n tempestas totoque autumni incanduit aestu \n et genus omne neci pecudum dedit, omne ferarum, \n corrupitque lacus, infecit pabula tabo'
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'Identify a vocative adjective: \n o gemitu non frustra exterrita tanto, \n Cyrene soror, ipse tibi, tua maxima cura, \n tristis Aristaeus Penei genitoris ad undam \n stat lacrimans, et te crudelem nomine dicit.',
    products: [
      {item: 'gemitu', qty: -5, price: 1},
      {item: 'exterrita', qty: 10, price: 1},
      {item: 'soror', qty: 0, price: 1},
      {item: 'tristis', qty: 0, price: 1}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'Of what verb is tauri the subject? \n haec loca non tauri spirantes naribus ignem \n inuertere satis immanis dentibus hydri, \n nec galeis densisque uirum seges horruit hastis;',
    products: [
      {item: 'invertere', qty: 5, price: 1},
      {item: 'horruit', qty: 0, price: 1},
      {item: 'hydri', qty: -3, price: 1},
      {item: 'immanis', qty: -3, price: 1}
    ]
  },
  {
    type: 'SHOP',
    notification: 'neutral',
    text: 'Identify a nominative: \n Neue tibi ad solem uergant uineta cadentem, \n neue inter uitis corylum sere, neue flagella \n summa pete aut summa defringe ex arbore plantas',
    products: [
      {item: 'flagella', qty: 0, price: 1},
      {item: 'corylum', qty: 0, price: 1},
      {item: 'vineta', qty: 10, price: 1},
      {item: 'vitis', qty: 0, price: 1}
    ]
  },
    {
    type: 'BUGONIA',
    notification: 'neutral',
    text: 'Sed siquem proles subito defecerit omnis, \n nec genus unde novae stirpis revocetur habebit, \n tempus et Arcadii memoranda inventa magistri \n pandere, quoque modo caesis iam saepe iuvencis \n insincerus apes tulerit cruor',
    ritual: [
	{item: 'sacrifice an ox', 
	qty: 10, 
	price: 1
	}
	]
  
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'grain',
	blar: 'gar',
    value: -10,
    text: 'tum uariae inludant pestes: saepe exiguus mus \n sub terris posuitque domos atque horrea fecit, \n aut oculis capti fodere cubilia talpae, \n inuentusque cauis bufo et quae plurima terrae \n monstra ferunt, populatque ingentem farris aceruum \n curculio atque inopi metuens formica senectae. \n Lost Grain: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'oxen',
	blar: 'gar',
    value: -1,
    text: 'proluit insano contorquens uertice siluas \n fluuiorum rex Eridanus camposque per omnis \n cum stabulis armenta tulit. \n Casualties: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'bees',
	blar: 'gar',
    value: -1,
    text: 'Absint et picti squalentia terga lacerti \n pinguibus a stabulis meropesque aliaeque volucres \n et manibus Procne pectus signata cruentis; \n omnia nam late vastant ipsasque volantes \n ore ferunt dulcem nidis immitibus escam. \n Casualties: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'wine',
	blar: 'gar',
    value: -5,
    text: 'nam saepe incautis pastoribus excidit ignis, \n qui furtim pingui primum sub cortice tectus \n robora comprendit, frondesque elapsus in altas \n ingentem caelo sonitum dedit. \n Wine lost:'
  },
  {
    type: 'STAT-CHANGE',
    notification: 'negative',
    stat: 'honey',
	blar: 'gar',
    value: -1,
    text: 'nam saepe favos ignotus adedit \n stellio et lucifugis congesta cubilia blattis \n immunisque sedens aliena ad pabula fucus. \n Honey lost: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'grain',
	blar: 'crops',
    value: 20,
    text: 'illa seges demum uotis respondet auari \n agricolae, bis quae solem, bis frigora sensit; \n illius immensae ruperunt horrea messes. \n Grain added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'honey',
	blar: 'sweetums',
    value: 1,
    text: 'Siquando sedem angustam servataque mella \n thesauris relines, prius haustu sparsus aquarum \n ora fove fumosque manu praetende sequaces. \n Honey added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'grain',
	blar: 'crops',
    value: 20,
    text: 'illa seges demum uotis respondet auari \n agricolae, bis quae solem, bis frigora sensit; \n illius immensae ruperunt horrea messes. \n Grain added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'honey',
	blar: 'sweetums',
    value: 1,
    text: 'Siquando sedem angustam servataque mella \n thesauris relines, prius haustu sparsus aquarum \n ora fove fumosque manu praetende sequaces. \n Honey added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'bees',
	blar: 'gar',
    value: 5,
    text: 'cum prima novi ducent examina reges \n vere suo ludetque favis emissa iuventus, \n vicina invitet decedere ripa calori, \n obviaque hospitiis teneat frondentibus arbos. \n Bees added: '
  },
  {
    type: 'STAT-CHANGE',
    notification: 'positive',
    stat: 'oxen',
	blar: 'gar',
    value: 1,
    text: 'Found wild oxen. New oxen: '
  }

];

OregonH.Event.generateEvent = function(){
  //pick random one
  var eventIndex = Math.floor(Math.random() * this.eventTypes.length);
  var eventData = this.eventTypes[eventIndex];

  //events that consist in updating a stat
  if(eventData.type == 'STAT-CHANGE') {
    this.stateChangeEvent(eventData);
  }
  //shops
  else if(eventData.type == 'SHOP') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.shopEvent(eventData);
  }
    //attacks
  else if(eventData.type == 'ATTACK') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.attackEvent(eventData);
  }
    else if(eventData.type == 'ATTAQ') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.attaqEvent(eventData);
  }
    else if(eventData.type == 'CHOICE') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.choiceEvent(eventData);
  }
      else if(eventData.type == 'BUGONIA') {
    //pause game
    this.game.pauseJourney();

    //notify user
    this.ui.notify(eventData.text, eventData.notification);

    //prepare event
    this.bugoniaEvent(eventData);
  }
  
}

OregonH.Event.stateChangeEvent = function(eventData) {
  //can't have negative quantities and multiplication
   if((eventData.blar == 'crops') && (eventData.value + this.caravan[eventData.stat] >= 0)) {
    this.caravan[eventData.stat] += (20 * this.caravan['oxen']);
    this.ui.notify(eventData.text + Math.abs(20 * this.caravan['oxen']), eventData.notification)
  }
 if((eventData.blar == 'gar') && (eventData.value + this.caravan[eventData.stat] >= 0)) {
    this.caravan[eventData.stat] += eventData.value;
    this.ui.notify(eventData.text + Math.abs(eventData.value), eventData.notification)
  }
    if((eventData.blar == 'sweetums') && (eventData.value + this.caravan[eventData.stat] >= 0)) {
    this.caravan[eventData.stat] += (this.caravan['bees']);
    this.ui.notify(eventData.text + Math.abs(this.caravan['bees']), eventData.notification)
  }


};
//quiz event
OregonH.Event.shopEvent = function(eventData) {
  //number of products for sale
  var numProds = 4;

  //product list
  var products = [];
  var j, priceFactor;

  for(var i = 0; i < numProds; i++) {
    //random product
    j = i;

    //multiply price by honey factor
    priceFactor = (Math.floor((this.caravan['honey'])/3)+1);

    products.push({
      item: eventData.products[j].item,
      qty: eventData.products[j].qty,
      price: Math.round(eventData.products[j].price * priceFactor)
    });
  }

  this.ui.showShop(products);
};
//bugonia event
OregonH.Event.bugoniaEvent = function(eventData) {
  
    ritual.push({
      item: eventData.ritual.item,
      qty: eventData.ritual.qty,
      price: eventData.ritual.price
    });

  this.ui.showBugonia(products);
};
//choice event
OregonH.Event.choiceEvent = function(eventData) {
  //number of answers
  var numChoice = eventData.choices;

  //answer list
  var answers = [];
  var j;

  for(var i = 0; i < numChoice; i++) {
    //list answers
    j = i;

    answers.push({
      thing: eventData.answers[j].thing,
	  stat: eventData.answers[j].stat,
	  value: eventData.answers[j].value
    });

  }
this.ui.showChoice(answers);
};
//prepare an attack event
OregonH.Event.attackEvent = function(eventData){
  var firepower = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_FIREPOWER_AVG);
  var gold = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_GOLD_AVG);

  this.ui.showAttack(firepower, gold);
};
//prepare an attaq event
OregonH.Event.attaqEvent = function(eventData){
  var firepower = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_FIREPOWER_AVG);
  var gold = Math.round((0.7 + 0.6 * Math.random()) * OregonH.ENEMY_GOLD_AVG);

  this.ui.showAttaq(firepower, gold);
};