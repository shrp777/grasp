# GRASP

## Principes

- **Controller**
- **Creator** : détermine quelle classe a la responsabilité de créer les instances d'une autre classe
- **High Cohesion** : les méthodes d'une classe doivent être distribuées de façon cohérente avec les cas d'utilisation et acteurs
- **Indirection** : préférer la dépendance aux Interfaces plutôt qu'aux implémentations
- **Information Expert** : la logique métier doit s'appliquer au sein de la classe qui dispose de la connaissance métier
- **Low Coupling** : une classe ne doit pas instancier une autre classe, sauf dans le cadre de l'application du pattern Creator. Il est préférable d'appliquer le concept d'injection de dépendance.
- **Polymorphism** : une classe Foo et une classe Bar sont de type Baz, alors une classe Foobar employant Foo ou Bar, doit dépendre de Baz et non de Foo ou Bar.
- **Protected Variations**
- **Pure Fabrication**

## Exemples

- 1 - Information Expert
- 2 - Creator
- 3 - High Cohesion
- 4 - Low Coupling + Polymorphim + Indirection

<https://hackernoon.com/what-is-grasp-information-expert-and-creator-principles-in-javascript>
<https://hackernoon.com/grasp-principles-part-2-controller-low-coupling-and-high-cohesion>

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

**Alexandre Leroux**  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
