#!/bin/bash
########################################
# Put this on a Server
# run chmod +x deploy_app.sh to make the script executable
#
# Execute this script:  ./deploy_app.sh ariv3ra/python-circleci-docker:$TAG
# Replace the $TAG with the actual Build Tag you want to deploy
#
########################################

set -e

declare -a CONTAINERS=("nuxtmay2021_nuxt_1","nuxtmay2021_nginx_1")


echo "Kill already running containers"

#Check for running container & stop it before starting a new one
for i in "${CONTAINERS[@]}"
do
  if [ $(docker inspect -f '{{.State.Running}}' "$i") = "true" ]; then
    docker stop "$i"
  fi

  # or do whatever with individual element of the array
done

echo "Starting the containers:"

docker docker-compose up -d --build --force-recreate

docker ps -a
