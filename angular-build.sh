export NG_TARGET=./dist/web
export SP_STATIC=../spring/src/main/resources/static
export SP_TEMPLATE=../spring/src/main/resources/templates
cd angular
ng build -c package
cp $NG_TARGET/* $SP_STATIC
mv $SP_STATIC/index.html $SP_TEMPLATE/index.html
ng build -c package --index ./src/spa.html
cp $NG_TARGET/spa.html $SP_TEMPLATE/spa.html
cd ..
