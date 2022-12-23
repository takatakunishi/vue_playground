FRONTDIR=front
IMAGESETTING=node:16.14-slim
PROJECTNAME=occ_vue_practice

up:
	docker-compose up -d

down:
	docker-compose down

shell:
	echo 'docker exec -it ${PROJECTNAME} bash'