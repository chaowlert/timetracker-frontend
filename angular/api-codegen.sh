#!/bin/bash
if [ ! -f ./tools/swagger-codegen-cli.jar ]; then
  wget http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.3.1/swagger-codegen-cli-2.3.1.jar -O ./tools/swagger-codegen-cli.jar
fi

wget -O ./tools/api.json http://localhost:8081/v2/api-docs
node tools/fixNames.js ./tools/api.json
java -jar tools/swagger-codegen-cli.jar generate \
    -i ./tools/api.json \
    -l typescript-angular \
    -o ./src/app/api \
    --additional-properties "modelPropertyNaming=original"
