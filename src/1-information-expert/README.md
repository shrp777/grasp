# Information Expert

Le principe Information Expert permet de déterminer la distribution de responsabilités (méthodes / attributs) en fonction de la connaissance métier de chaque objet.

Dans cet exemple, l'erreur serait de permettre à des éléments extérieurs de calculer le tarif d'une commande sans détenir la connaissance métier éventuellement contenue dans les classes. Le risque serait de permettre un changement d'état de la classe Order sans appliquer la logique métier (ex: modification du montant de la commande sans calculer la TVA ou sans appliquer de réduction...).

Le montant d'une commande doit toujours résulter de l'exécution d'une méthode effectuée par le détenteur de l'information (ici : calculateAmount).

De plus, puisqu'une commande détient plusieurs lignes de commandes (OrderItem), il revient à chaque ligne de commande de calculer son total.

Ains, Order se limite à additionner chaque sous-total communiqué par OrderItem.

Information Expert prévoit d'encapsuler la logique métier dans les classes.

A noter : dans cet exemple, la valeur du prix d'un produit est transmis via le constructeur de la classe Order pour éviter de faire référence dynamiquement au prix du produit, lequel peut évoluer pendant l'exécution (multi-threads) ou après la réalisation de la commande. Si l'on souhaite reconstituer une commande pour éditer une facture, et qu'entre temps le prix des produits évoluer, on évite ainsi de calculer le montant de la commande sur la base des prix actualisés.

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
