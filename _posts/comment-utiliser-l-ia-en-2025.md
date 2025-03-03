---
title: "Comment utiliser l'ia en tant que développeur en 2025"
excerpt: ""
coverImage: "/assets/blog/codewithai/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Colin Noiret
  picture: "/assets/blog/authors/colin.jpeg"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

On entend souvent dire qu'avec les outils boostés à l'IA (qui poussent comme des champignons en ce moment) le monde du développement et le quotidien des développeurs va considérablement changé. C'est vrai mais en tant que développeurs, nous n'avons jamais été formés à utiliser ces outils. Et pour ma part j'en ai fait les frais...

Cela fait maintenant trois ans que je suis développeur, et une grande partie de mon parcours a été marquée par l’utilisation des outils IA. J'ai été impressionné, et j'ai pris ces outils comme acquis, je les inclus directement dans mon workflow de travail sans me poser plus de questions sur la façon de travailler avec. Cette pratique m’a conduit à prendre de mauvaises habitudes de développement.

Mes erreurs ont été les suivantes :

- Croire que l’IA pourrait résoudre tous les problèmes.
- Ne pas m'intéresser réellement à la manière dont fonctionne l'IA.
- Cesser d'utiliser ma propre réflexion, en pensant que l'IA devait tout faire à ma place.

## Mon expérience : Le plus grand problème que j’ai rencontré avec l’IA

En utilisant Copilot ou ChatGPT, je pensais que cela me rendait plus compétent mais au contraire cela m'a rendu **PASSIF**. Je n’avais plus à faire l’effort de coder, de chercher la documentation ou d’écrire un code propre, je demandais tout simplement à l’IA. Le problème n’était pas de solliciter l’IA, mais d’attendre qu’elle fasse tout à ma place. J’en attendais trop. Et au final, je pense que cela ne m'a pas fait gagner du temps depuis que je l'utilise dans le développement.

Dans cet article, je vais partager des conseils pour adopter de bonnes pratiques en développement assisté par IA. je ne vais pas parler du choix des modèles de langage (LLM), même si c’est un sujet important. Ce dont je veux discuter ici, c’est du workflow. Car même si notre LLM est excellent, un workflow mal organisé nous fera perdre plus de temps qu’on n’en gagnera. Le but est d’effectuer les tâches plus rapidement (et possiblement avec une meilleure qualité).

## OK mais faut utiliser l'IA ou pas ?

Oui bien sûr! Justement. La leçon la plus importante que j’ai retenue est la suivante : l’IA doit être un ASSISTANT, pas un cerveau à notre place !

Son utilisation doit servir à ✅ :

- Résoudre des problèmes répétitifs (comme la syntaxe).
- Accélérer l’écriture du code.

Elle ne doit pas servir à ❌ :

- Comprendre ce que je n’ai pas compris
- Tout coder

L'objectif de l'IA dans le développement, c'est d'être plus productif, de produire plus vite. On a toujours le rôle d'architecte, le rôle de celui qui décide, qui sait. On gagne du temps sur l'écriture du code.

Il est essentiel de comprendre que l’IA doit être vue comme un enfant qui sait beaucoup de choses, mais qui doit être guidé, orienté. Si on ne lui dit pas précisément ce qu’il faut faire, il produira des résultats, certes, mais pas le résultat que JE souhaite.

Je vais maintenant partager les bonnes pratiques que nous, développeurs, devons appliquer dans notre quotidien en 2025 pour travailler de manière plus efficace avec les outils IA.

## Les meilleures pratiques pour développer avec l’IA

### Comprendre et imaginer la fonctionnalité que l’on souhaite développer

Avec ou sans IA, comprendre son objectif est la clé. En comprenant ce que l'on veut implémenter dans notre programme, on facilite l'ensemble du processus. On sait dès le départ ce que l'on souhaite comme résultat. Grâce à cet réflexion, on pourra plus facilement voir si l'ia nous a produit quelque chose de satisfaisant ou pas.

Ce que l'on fait c'est de la préparation, ce n'est pas du temps de perdu ! Au contraire, le développement sera bien plus rapide. Comme le disait Abraham Lincoln :

> “**Si on me donne six heures pour abattre un arbre, je passerai quatre heures à aiguiser ma hache.**”

Une bonne préparation est la clé de notre productivité.

### Donner du contexte

Donner du contexte à l'IA va surement être la meilleure chose, car plus le contexte est précis et complet meilleure sera la réponse de l'IA. Donnez des détails sur l’environnement, les fichiers, les bonnes pratiques de codage que vous suivez.

Rédigez des prompts solides. Pour créer un bon prompt, il faut être clair et précis sur ce que vous attendez. Plus votre demande est structurée, plus l’IA pourra répondre de manière efficace. Voici ce qu’il faut inclure dans un bon prompt :

1. **L’objectif** 🎯 : Expliquez clairement ce que vous souhaitez accomplir.

2. **Les règles** 📖 : Précisez les contraintes ou les spécifications à suivre.
3. **Le contexte** 💽 : Donnez des détails sur l’environnement de travail, les fichiers ou les pratiques que vous suivez.
4. **Des exemples** 🌿 (optionnel) : Si possible, incluez des exemples pour guider l’IA dans la bonne direction.
5. **Les attentes** 👀 (optionnel) : Soyez précis sur ce que vous attendez de la réponse, que ce soit un code, une explication ou autre.

### Le meilleur professeur que vous ayez jamais eu

Il y a un grand paradoxe avec l'ia. C'est un outil qui va révolutionner le monde, cela va grandement faciliter les choses. Dans l'informatique, on va pouvoir produire plus vite, mais on devient plus bête. On ne réfléchit plus comme avant on fait du clic bouton. Et c'est fou parce que l'ia représente le meilleur professeur. On peut le modeler comme l'on veut. On peut l'harceler de questions, il ne sera jamais épuiser. Logiquement on devrait être de bien meilleurs développeurs, mais on risque d'avoir beaucoup de développeurs qui ne vont seulement faire du clic bouton.

Profitons d'avoir cette possibilité d'apprendre mieux et plus vite. Posez-lui des questions sur le code, sur la manière de corriger des erreurs, ou sur les choix d'implémentation.

Au lieu de simplement accepter le code généré, demandez des explications :

- Pourquoi cette approche a-t-elle été choisie ?
- Quelles sont les alternatives possibles ?
- Quels sont les avantages et les inconvénients de cette solution ?

L’IA peut également être un excellent moyen de comprendre les erreurs et les bugs. Plutôt que de copier un correctif, demandez une explication détaillée. Cela vous permettra d’apprendre et d'éviter de reproduire les mêmes erreurs à l'avenir.

## Conclusion

Au final, n'allons pas trop vite en besogne pour dire que l'IA améliore x10 notre productivité, on doit apprendre à l'utiliser, et à l'intégrer dans notre workflow pour qu'elle nous arrange plutot qu'elle nous dérange.

En comprenant ce que l'on doit développer, en préparant et en donnant l'ia le contexte pour le développement, cela va faire gagner beaucoup de temps dans notre quotidien. Et en utilisant le pouvoir de l'apprentissage avec l'ia, on pourra gagner de la productivité.
