# TP Utilisation de docker 

## Consignes Générales

- Cloner le TP sur votre machine
- Tout vos travaux devront etre giter et rendu via votre fork (envoi du lien du dépot par mail). GitHub, Gitlab.com ou Gitlab dédié. 
- N'hésitez pas à faire de nombreux commits afin de revenir plus facilement en arrière si nécessaire
- L'énoncé sert également de fichier de compte rendu pour les questions `--> À compléter`

## Partie 0 : Mise en jambe  

- Installer Docker et Docker-Compose sur votre machine local si vous ne l'avez pas déjà 
- Lancer `docker run hello-world` pour vérifier que votre installation fonctionne bien

## Partie 1 : Docker et Docker-compose the simple way

- Installer localement l'app `react-hello` et vérifier que tout fonctionne bien
    ```bash
    cd P1/react-hello
    npm install
    npm start
     ```
- Créer une image Docker avec une l'APP front Hello world en React (Utilisation de Dockerfile)
   - On prendra soin de ne pas inclure des fichiers et dossiers inutiles dans l'image (fichier .dockerignore)
- Construire l'image en local, crée un conteneur l'utiisant et accèder à l'app

--> À compléter : Fournir les commandes utilisées

- Se connecter au VPS Debian fournie (durant l'installation vous pouvez avancer sur la partie 2)
    - Me transmettre votre clé publique SSH : ag@tetras-libre.fr
    - Se connecter en ssh 
    - Installer Docker et docker-compose 
    - Lancer `docker run hello-world` pour vérifier que votre installation fonctionne bien
- Déployer l'app `react-hello` sur le VPS via docker-compose 
    - Vérifier que celle ci est bien accessible

- Publier votre image sur Dockerhub 

--> À compléter : Fournir URL de l'image sur Dockerhub

- Modifier votre fichier docker-compose pour que votre app utilise l'image Dockerhub

- Fournissez dans `P1` le ou les fichiers compose finaux.    


## Partie 2 : Docker et Docker-compose the real way

- L'app de démo `react-hello2` devient un peu plus complexe et utilise maintenant un backend Next.JS et une BDD mariaDB 
   - L'app sera composé de 3 conteneur : frontend, un backend et une BDD mariadb  
   - Ecrire le fichier `docker-compose` permettant de déployer cette application

- Supprimer les containers, est ce que les données sont toujours là ?
   - Utiliser des volumes si ce n'est pas le cas

- Réduiser au maximum les possibilités de contact entre les conteneurs
   - Le front doit pouvoir communiquer avec le back.
   - Le back doit pouvoir communiquer avec la BDD
   - Pas de contact possible entre front et BDD
   - les `links` ne sont pas authorisés, utilisez seulement des `networks`   

- Déployer cette application sur le VPS

- Accèder à la BDD de données depuis votre poste en passant par un tunnel SSH. Je vous conseille l'outil DBeaver. 
    - Seulement le front doit être exposé sur le net, attention à la sécurité 

- Fournissez dans `P2` le ou les fichiers compose finaux.    


## Partie 3 : Utiliser un Application Proxy - Traefik

- Qu'est ce qu'un Reverse Proxy et à quoi est ce que ça sert ? 

--> À compléter

- Installer et déployer Traefik via Docker sur votre VPS
   - Traefik recoit le trafik sur les ports classiques (80, 443)
   - La page dashboard de traefik est déployé à *votreURLdeVPS* et vous permet de vérifier que tout fonctionne

   ![alt text](image.png)


- Servir l'App Hello world grace à Traefik et à l'URL : partie3.*votreURLdeVPS*.
    - L'app doit fonctionner en HTTPS


- Séparer votre fichier `docker-compose.yml` afin d'avoir un mode DEV utilisable en local sans Traefik et un mode PROD fonctionnant sans Traefik
    - Le passage de l'un à l'autre se fera en changeant la variable COMPOSE_FILE de votre `.env`
    - Dev : mapping de port autorisé,
    - Prod : utilisation de traefik sans mapping de port (à part pour Traefik lui même)

- Fournissez dans `P2` le ou les fichiers compose finaux.    

## Partie 4 : Dockeriser une application existante 

- Déployer un nouveau applicatif (par exemple wordpress) en utilisant seulement des fichiers composes
   - Le front end wordpress devra être déployé à : partie4.*votreURLdeVPS*.
   - Aucun mapping de port autorisé
   - obligation d'utiliser Traefik comme reverse proxy 

## Partie 5 : Dockeriser une application existante 

- Choisir une application existante non dockerisé disponible sur Github
   - La complexité de l'application choisie influera la notation
   - Une liste d'application possible est fournie en fin de TP 

--> Fournir l'URL du dépot de l'application
--> Décrire les enjeux techniques (technologies plus mises à jour, nombreuses dépendances, interconnexion avec d'autres systèmes ...)

- Écrire l'ensemble des fichiers permettant de déployer cette application avec Docker , docker-compose et Traefik

- Déployer l'application choisie à partie4.*votreURLdeVPS*.

- Faire une PR de votre travail à l'application choisie

Liste application à dockeriser : 

- https://github.com/projectmirador/mirador
- https://github.com/Aikon-platform/aiiinotate
- https://github.com/geogebra/geogebra
- https://github.com/LeedRSS/Leed
- https://github.com/gohugoio/hugo


## Conclusion

La stack proposée `VPS + Docker + Docker-compose + Traefik` est suffisante pour une grande majorité des applications réelles et adaptée à des structures ou projet avec peu de ressources. 
- Peu de complexité à mettre en oeuvre 
- Environnement de dev et de prod avec peu de différence 
- Technologie simple et maitrisés par de nombreuses personnes 
- Des possibilités de monitoring presque sans limite avec Traefik
- Peu de dépendances à des services tiers 
    - Un hébergeur VPS
    - DockerHub 

--> À completer : Quelles sont les limites de cette approche et votre proposition de remplacement. (Réponse construite d'une dizaine de ligne)