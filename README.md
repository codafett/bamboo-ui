# Bamboo UI

Install dependencies
```
npm i
```

To run the project use:

```
npm run start
```

## Docker

To run using the docker container you first need to create the bamboo network (if this hasn't already been done):

```
docker network create bamboo
```

Next build the docker image with:
```
npm run docker:build
```

Finally to run the container:
```
npm run docker:up
```

## Functionality Included:
* List Products
* View Product
* Add Product
* Add Comment
* Docker containers

## Functionality Not Starts:
* Using socket.io to show real-time updates