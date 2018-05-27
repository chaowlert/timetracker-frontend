docker run -d \
    --name timetracker \
    alirizasaral/timetracker:1
docker run -d -p 8081:8081 \
    -e TIMETRACKER=http://timetracker:8080 \
    --name timetracker-frontend \
    --link timetracker:timetracker \
    chaowlert/timetracker-frontend
