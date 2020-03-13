cd ..
docker run -v :./app -v ./app/node_modules -p 8080:8080 --rm m3u-player:dev
pause