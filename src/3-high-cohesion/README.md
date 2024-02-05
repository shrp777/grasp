# High Cohesion

Le pattern High Cohesion encadre la distribution des responsabilités dans les classes en partant du principe que les méthodes associées au classe doivent couvrir un périmètre fonctionnel cohérent et limité au strict nécessaire (cf. Philosophie Unix : "Write programs that do one thing and do it well.").

2 versions alternatives sont proposées :

- gestion du paiement de la commande par la classe Customer. On considère que Customer est l'acteur du paiement, donc qu'il peut détenir l'action de paiement.

- gestion du paiement de la commande par la classe Order. On considère que le paiement de la commande modifie la valeur de l'état d'Order donc la présence de la méthode dans Order est justifié.

Dans les 2 cas, on générise la méthode de paiement "pay"  pour éviter d'avoir à modifier la classe Order ou Customer à chaque fois qu'une nouvelle méthode de paiement apparaît. L'implémentation reste imparfaite car Order ou Customer ont un couplage fort avec les différentes solutions de paiement (ApplePay, Paypal, BankCard) : ces méthodes de paiement sont directement instanciées dans Order ou Customer.

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
