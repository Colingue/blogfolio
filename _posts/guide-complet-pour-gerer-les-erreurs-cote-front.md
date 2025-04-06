---
title: "Guide complet pour gérer les erreurs côté front (Next.js & React)"
excerpt: ""
coverImage: "/assets/blog/comprendre-methodes-rendu/cover.jpg"
date: "2025-04-06"
author:
  name: Colin Noiret
  picture: "/assets/blog/authors/colin.jpeg"
ogImage:
  url: "/assets/blog/comprendre-methodes-rendu/cover.jpg"
---

Gérer les erreurs n’est pas l’aspect le plus fun et sexy du développement web, mais quand les erreurs sont bien gérées c’est un gros plus pour l’expérience utilisateur. Car si un utilisateur se retrouve devant une erreur mal gérée avec un message bien critique du type “Unexpected error 500”, cela ruine complètement l’expérience et l’utilisateur se retrouve perdu.

C’est essentiel de bien gérer les erreurs, si l’utilisateur soumet un formulaire et il n’y a aucun message, c’est frustant, l’utilisateur va partir… Cela baisse la crédibilité du site.

Dans cet article, on va voir **comment** bien gérer les erreurs côté front, en s'appuyant sur **Next.js** et **React**, avec une attention particulière à l’expérience utilisateur.

## Les différents types d’erreurs : expected VS uncaught ?

Les erreurs peuvent etre divisé en deux catégories : les erreurs attendues (expected errors) et les erreurs inattendues (uncaught errors).

### Expected errors (erreurs attendues)

Ce sont des cas qu’on anticipe et qui font partie du flow normal d’une app

Voici une liste d'expected errors :

- Mauvais identifiants lors du login
- Données invalides dans un formulaire
- Requêtes qui échouent (toutes les requêtes avec status 4xx, exemple : 403, authorisation, 404)

Ces erreurs ne doivent PAS être considérées comme des exceptions, mais comme des réponses normales à des cas prévus.

### Uncaught errors (erreurs inattendues)

Ce sont des cas qu’on n'anticipe pas, on parle de bug, de serveurs qui a crash, toutes les situations que l'on a pas prévu.

Voici une liste d'uncaught errors :

- Une fonction qui plante (undefined is not a function)
- Une requête API qui timeout ou retourne une 500
- Une dépendance externe qui échoue

Ces erreurs doivent être capturées et contenues pour éviter de casser tout le programme.

## Comment gérer chaque type d'erreur ?

### Pour les erreurs attendues

👉 Exemple : un utilisateur se trompe dans son mot de passe.

❌ Mauvaise pratique :
![Expected_bad](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/expected_bad.png)

✅ Bonne pratique :
![Expected_bad](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/expected_good.png)

Il ne faut pas utiliser try/catch, car try/catch est fait pour attraper des erreurs inattendues (uncaught errors)
Les expected errors doivent être gérées comme un retour normal, pas comme des exceptions !

### Avec NextJS

La meilleure façon de gérer des mutations (authentification, création d’un post) Next.js conseille d’utiliser **useActionState** avec une **Server Action** :

1. Créer une **Server Action** pour la mutation
   ![Expected_bad](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/expected_action_next.png)

2. Utiliser **useActionState** pour gérer l'erreur dans le composant React
   ![Expected_bad](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/expected_form_next.png)

Lors d’une récupération de données ‘fetching data’ dans un Server component, on peut conditionnelement retourner un message d’erreur

![Expected_bad](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/expected_servercomp.png)

### Pour les erreurs attendues

React permet de capturer les erreurs de rendu dans des composants grâce aux **Error Boundaries**. Les Errors Boundaries capturent les erreurs et affichent une interface de secours.

Next.js va plus loin avec les fichiers **error.tsx** à la racine de chaque route.

![Server-Side Rendering](/assets/blog/guide-complet-pour-gerer-les-erreurs-cote-front/uncaught_error.png)

Ce fichier va permettre d'afficher un rendu en cas d'erreur de la page Nextjs.

## Les règles pour avoir des messages d’erreurs clairs

Techniquement, on sait gérer les erreurs côté front avec React et NextJS. Voyons maintenant quelles sont les règles pour avoir des messages d'erreurs clairs pour l'utilisateur sans (trop) le frustrer.

### Message d'erreur compréhensible

Un bon message d'erreur :

- Est clair : “Mot de passe incorrect” > “Erreur 401”

- Est utile : “Ce champ est requis” > “Erreur”

- Propose une solution : “Veuillez vous reconnecter”, “Réessayer”. Ne jamais laisser l'utilateur sans issue !

### Message d'erreur adapté

La façon dont un message d'erreur est affiché change totalement la compréhension que va avoir l'utilisateur face à cette erreur. Voici les façons d'afficher des erreurs

🌐 Erreur critique: Overlay pleine page
L'overlay prends toute l'attention de l'utilisateur. Utile pour des erreurs critiques et importantes.

🔤 Formulaire: Erreur inline (sous le champ)
Ce type d'erreur est intégré directement dans le flux d'interaction, par exemple sous un champ de formulaire. Cela est très utile pour les erreurs spécifiques liées à l'entrée utilisateur (ex : "Nom d'utilisateur déjà pris").

🧁 Non bloquante: Toast (en haut/bas de page)
Ils ne perturbent pas le flux de travail et sont parfaits pour les erreurs légères

🧭 Mauvaise route: Page dédiée (404)
Idéal pour des erreurs majeures, donne plus de détails et de contexte à l'utilisateur

## Conclusion

Pour résumer :

✅ Check-list des bonnes pratiques

- Anticiper les erreurs logiques et les gérer sans throw

- Utiliser useActionState + Server Actions pour les mutations

- Implémenter error.tsx pour les routes sensibles

- Écrire des messages utiles et clairs

- Adapter l’affichage de l’erreur selon le contexte

- Toujours offrir une issue à l’utilisateur
