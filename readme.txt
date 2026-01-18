cd db
docker compose up

cd API
mvn clean install && mvn package && java -jar target/api.jar

cd web
python -m http.server