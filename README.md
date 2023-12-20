## Desafio Full Cycle - Nginx com Node.js

Utilizar docker compose para:
- Criar uma imagem com mysql, já com um banco de dados e uma  tabela de nomes
- Criar uma aplicação node js para listar estes nomes
- Criar uma imagem node para rodar a aplicação node js
- Expor os dados gerados pela aplicação utilizando o nginx


### Comandos básicos

Baixar repositório para teste
```bash
git clone https://github.com/edgarslima/exercicio-docker-node-mysql-nginx.git
cd exercicio-docker-node-mysql-nginx

```

Subir docker compose
```bash
docker-compose up -d .
```

Acessar pelo browser

```bash
http://localhost:8080/
````



Verificando logs do nginx

```bash
docker logs nginx

```

Derrubar dockers criados

```bash

docker-compose down
```


### Autor

- [@edgarslima](https://www.github.com/edgarslima)


### Licença

[MIT](https://choosealicense.com/licenses/mit/)