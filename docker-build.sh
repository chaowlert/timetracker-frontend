cd spring
./mvnw package
cd ..
docker build \
    --build-arg JAR_FILE=./spring/target/frontend-0.0.1-SNAPSHOT.jar \
    -t chaowlert/timetracker-frontend \
    .
