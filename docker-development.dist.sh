#!/bin/bash
set -e
trap 'echo "An error has occurred, ending"; exit 1;' ERR

# Variablen
CONTAINER_NAME="corvipuzzle"
IMAGE_NAME="cvpuzzle"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_PATH="${SCRIPT_DIR}"
DOCKER_DIR="${SCRIPT_DIR}/docker"

echo "Building '${IMAGE_NAME}' from '${DOCKER_DIR}'..."
docker build -t "$IMAGE_NAME" "$DOCKER_DIR"

if docker ps --filter "name=$CONTAINER_NAME" --format '{{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
    echo "Container '$CONTAINER_NAME' is already active."
else
    echo "Container '$CONTAINER_NAME' stopped, removing old image if existing..."
    docker rm "$CONTAINER_NAME" -f 2>/dev/null || true
    echo "Starting new container"
    docker run -ti -p 8080:80 -v "$PROJECT_PATH:/var/www/" --name "$CONTAINER_NAME" "$IMAGE_NAME"
fi
