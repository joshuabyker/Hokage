var HeroChoice;
var AvailableEnemies;
//variables for individual characters
var Naruto;
var Madara;
var Tobi;
var Gaara;


Naruto = {
	name: 'Naruto Uzumaki',
	health: 500,
	attack: 43,
	
};


 Madara = {
	name: 'Madara Uchiha',
	health: 750,
	attack: 37,

};


Tobi = {
	name: 'Tobi',
	health: 725,
	attack: 35,
	
};


 Gaara = {
	name: 'Gaara',
	health: 600,
	attack: 7,
	
};
///on click function on HeroChoice
HeroChoice=[Naruto,Madara,Tobi,Gaara];
AvailableEnemies=[Naruto,Madara,Tobi,Gaara];

function chooseCharacter(){
$("#character").click(function(){});
HeroChoice.click();
AvailableEnemies.click();
};
		function startGame() {
			new Audio('assets/naruto.mp3').play()
 
