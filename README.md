# GRASP (Craig Larman)

## Principes

- **Controller** : mise en place de classes permettant d'effectuer la liaison entre 2 autres classes (ou plus). Evite aux autres classes d'être fortement couplées. Joue le rôle de médiation entre instances (cf. MVC).
- **Creator** : détermine quelle classe a la responsabilité de créer les instances d'une autre classe.
- **High Cohesion** : les méthodes d'une classe doivent être distribuées de façon cohérente avec les cas d'utilisation et acteurs.
- **Indirection** : préférer la dépendance aux abstractions plutôt qu'aux implémentations.
- **Information Expert** : la logique métier doit s'appliquer au sein de la classe qui dispose de la connaissance métier.
- **Low Coupling** : une classe ne doit pas instancier une autre classe, sauf dans le cadre de l'application du pattern Creator. Il est préférable d'appliquer le concept d'injection de dépendance.
- **Polymorphism** : une classe Foo et une classe Bar sont de type Baz, alors une classe Foobar employant Foo ou Bar, doit dépendre de Baz et non de Foo ou Bar.
- **Protected Variations** : permettre à une fonctionnalité d'être implémentée de différentes façons en imposant un contrat d'utilsiation via une classe abstraite ou une interface (ou une classe héritable), sans jamais modifier le contrat d'utilisation.
- **Pure Fabrication** : emploi d'une classe ne représentant pas un objet du réel, mais permettant au système d'être découplé (ex : Controller)

## Exemples

- 1 - **Information Expert**
- 2 - **Creator**
- 3 - **High Cohesion**
- 4 - **Low Coupling + Polymorphim + Indirection**

Lire les explications pour chaque pattern dans le fichier README.md placé dans le dossier dédié.

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

**Alexandre Leroux**  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
