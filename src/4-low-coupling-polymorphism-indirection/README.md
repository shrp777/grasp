# Low Coupling + Polymorphism + Indirection

Les 3 patterns sont illustrés.

- Low Coupling : on réduit le couplage entre Order ou Customer et les différentes solutions de paiement, en injectant la solution de paiement à la classe destinataire
- Polymorphism : on emploie une interface pour déterminer un contrat commun à implémenter par tout type de solution de paiement (ApplePay, BankCard et Paypal)
- Indirection : Customer ou Order ne dépendant plus d'une implémentation d'une solution de paiement, mais de l'abstraction (IPaymentMethod)

L'application des ces patterns permet de garantir une plus grande flexibilité au programme.

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
