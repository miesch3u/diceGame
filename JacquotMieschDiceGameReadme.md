# Projet DiceGame

## Présentation du projet

Ce projet propose l'implémentation du DiceGame, selon le cahier des charges fourni en Dropbox.
Il contient :

* Une base de données Postgresql,
* Une API Spring permettant la persistance des scores et faisant le lien entre l'application web et la base de données,
* Une application web en Javascript contenant le jeu en lui-même.

## Commandes de lancement du projet

Il faut se positionner dans /applicatif pour lancer les commandes du projet.

### 1er terminal

cd db

docker compose up -d

cd ..

cd API

mvn clean install \&\& mvn package \&\& java -jar target/api.jar

### 2nd terminal

cd web

python -m http.server

Le serveur est accessible en localhost:8000/

## Membres du projet

JACQUOT Reika

MIESCH Nathanaël

