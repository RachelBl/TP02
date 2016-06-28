/*
1. Liste des opérations supportées par le système (incluant les trois opérations à programmer) :
 - Création d'une nouvelle transaction par l'initiateur
 - Ajout d'un café à la liste (commandeur,initiateur)
 + retrait d'un café à la liste (commandeur,l'initiateur)
 - modification du café commandé (commandeur,initiateur)
 	-> modifier OU Supprimer + Ajouter
 - Lecture et suppression de la première entrée de la liste (initiateur)

2. Classer chaque opération par acteur :
 - L'initiateur
 		- Accès au programme
 		- Ajout d'un café (petit,moyen, grand)
 		- Retrait d'un café (petit,moyen, grand)
 		- commande les cafés (petit,moyen, grand)
		- modification de la commande  (petit,moyen,grand)

 - Le commandeur
 		- Ajout d'un café (petit,moyen,grand)
 		- Retrait d'un café (petit,moyen,grand)
 		- modification de la commande (petit,moyen,grand)
 	
 		
 		
 - Le vendeur
 		- Ajout d'un café (petit,moyen,grand)
 		- Retrait d'un café (petit,moyen,grand)
		- modification de la commande (petit,moyen,grand)
		- commande aussi les cafés (petit,moyen,grand)

3. Lister les problèmatiques remarquées lors de l'analyse, les fonctinnalités qui semblent manquantes
ainsi que les scénarios qui semblent non couverts ou incomplets.
*/
/*  1. Ils manquent des formats de cafées, du sucre, du lait ou de la crème
    2. Il manque la plateforme de design d'interface
    3. Type d'application soit dans les apps du téléphone ou à télécharger sur internet.
    4. Type de connection (Wi-Fi ou 3G)
    5. Dans l"application est-ce qu'il a un profil utilisateur pour chaque employer
    6. Peux-t-on visualisé les anciennes commandes si on l'efface  */


//*******CORRIGER *****

var liste; // Global scope

function newTransaction(){
	liste = []; // c'est notre liste de café  ou même array
}

function orderCoffee(nom){
	liste.push(nom); // voici comment ajouter un café à notre liste
}

function lecturePremierCafe(){
	var premierCafe = liste.shift();
	return premierCafe; //on supprime le café de la liste  on garde une reference dans 
}















//function newTransaction(){ // pour faire les transactions
	//intérieur de la fonction 
	//function addCoffee(commandeur,initiateur,vendeur) {
		// interieur de la fonction 
			//function deleteCoffee(commandeur,initiateur,vendeur){
				// interieur de la fonction
					//function deleteFirstRow(){

					//}
			//}
	//}
//}  

//var addCoffee = + 1  // cette variable serait dans la fonction addCoffee
//var deleteCoffee = -1


