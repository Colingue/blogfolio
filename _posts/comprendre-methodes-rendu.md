---
title: "Comprendre les Méthodes de Rendu : CSR, SSR et autres"
excerpt: ""
coverImage: "/assets/blog/comprendre-methodes-rendu/cover.jpg"
date: "2025-03-09"
author:
  name: Colin Noiret
  picture: "/assets/blog/authors/colin.jpeg"
ogImage:
  url: "/assets/blog/comprendre-methodes-rendu/cover.jpg"
---

Ce sont des concepts importants à comprendre en 2025, car ils permettent de comprendre comment sont générés les sites et applications web.

On va parler de rendu !

## Déjà, c’est quoi le rendu ?

C’est la façon dont une page web est générée et affichée à l’utilisateur. Donc, c’est plutôt important.

Pourquoi faut-il connaître les principes de ces rendus ?
Parce que cela va fortement impacter la performance, le SEO, l'expérience utilisateur et la charge serveur.

## CSR - Client-Side Rendering

Technologie la plus commune quand on fait du React. Dans CSR, on a "**client**", donc c’est le client qui va faire l'entière partie du travail partie du travail. Le serveur va seulement envoyer les fichiers dont le client aura besoin pour construire toute la page. Lancez une app react, et inspectez le code source de la page. La page HTML est à son strict minimum : Pas bon du tout pour le SEO.
![Client-Side Rendering](/assets/blog/comprendre-methodes-rendu/CSR.png)

### Avantages :

- La charge du serveur sera réduite.
- Expérience fluide après le premier chargement.

### Inconvénients :

- SEO : Le contenu n’est pas indexable.
- Temps de chargement initial long.

## SSR - Server-Side Rendering

Cette fois, c’est le serveur qui fait le plus gros du travail.

Le serveur génére les pages HTML à la volée. Le client peut déjà rendre visible le contenu aux visiteurs.

![Server-Side Rendering](/assets/blog/comprendre-methodes-rendu/SSR.png)

### Avantages

Avec le SSR, on va avoir deux gros avantages :

- Le serveur rend une page HTML complète avec le contenu. Il pourra servir pour le référencement SEO !
- On a une meilleure performance initiale, on voit directement notre page HTML.

## Autres types de mode de rendu

### SSG : Static Site Generation

Toutes les pages sont générées lors du build (compilation du projet). C’est l’idéal pour des sites qui ne sont pas dynamiques (qui n’ont pas d'utilisateurs, d'authentification, ou d'autres éléments dynamiques). Les pages sont stockées sous forme de fichiers HTML et servies directement aux visiteurs.

### ISR : Incremental Static Regeneration

C’est comme le SSG, où toutes les pages sont générées pour être servies directement, mais cela permet de mettre à jour le contenu sans redéploiement.

Prenons l’exemple d’un blog où les articles sont stockés dans une base de données. On build donc le site comme en SSG, et on ajoute un post au blog. Si un utilisateur visite le blog après l'ajout d'un nouveau post, il verra quand même la version actuelle sans le nouveau post. Avec ISR, Next.js régénère la page à intervalles réguliers (par exemple, toutes les 10 secondes). Ainsi, dès que la régénération se produit, la page est mise à jour et les prochains utilisateurs verront le contenu le plus récent.

En NextJS on aurait la ligne suivante pour déclarer l'intervalle :

`export const revalidate = 10; // secondes`

Il est aussi possible de faire de l'On-Demand ISR : au lieu d’avoir un intervalle pour régénérer les pages, on peut définir une condition (comme un fetch ou une connexion à la base de données).

## Conclusion

Pour résumer :

**CSR** : La page est générée côté client, ce qui n'est pas idéal pour le SEO et rend le premier chargement plus lent. Mais c’est facile, car c’est le mode de fonctionnement de React.

**SSR** : La page est générée côté serveur à chaque requête. Le client reçoit le contenu de la page: SEO Friendly. Cependant la charge serveur peut être lourde, donc le chargement peut être long.

**SSG** : Toutes les pages sont déjà générées. Le temps de chargement est ultra-rapide, il n'y a pas de charge serveur ni de travail excessif côté client.

**ISR** : Mise à jour des pages dynamiquement : SEO-friendly, bonnes performances et charge serveur maîtrisée.
