## 1 Iniciado del servidor
```
npm start // Inicia en modo fork por defecto
npm start FORK // Inicia en modo fork
npm start CLUSTER // Inicia en modo cluster
```

## 2 Iniciar con Nodemon
```
nodemon server.js // Inicia con nodemon en modo fork
nodemon server.js CLUSTER // Inicia con nodemon en modo cluster
ps // Lista de procesos en ambos casos
```

## 3 Iniciar con Forever
```
forever -w server.js FORK // Inicia con Forever en modo fork
forever -w server.js CLUSTER // Inicia con Forever en modo cluster
forever list // Lista de procesos con Forever en ambos casos
ps // Lista de procesos en ambos casos
```

## 4 Iniciar con pm2
```
pm2 start server.js -w  
pm2 list // Lista los procesos - 1
ps -xa // Lista los procesos - 1
pm2 start server.js -w -i max  
pm2 list //Lista los procesos - 8
ps -xa // Lista los procesos - 8
pm2 kill // Para cerrar pm2 en ambos casos.
```

## 5 NGINX
```
npm start 8082
npm start 8083
npm start 8084
npm start 8085
nginx -t 
nginx -s reload
```