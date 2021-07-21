#!/bin/bash
########################################
# Put this on a Server
# run chmod +x deploy_app.sh to make the script executable
#
# Execute this script:  ./deploy_app.sh ariv3ra/python-circleci-docker:$TAG
# Replace the $TAG with the actual Build Tag you want to deploy
#
########################################

echo "Starting the containers:"

cd /home/ubuntu/NuxtMay2021
docker-compose up -d --build --force-recreate
docker ps -a
