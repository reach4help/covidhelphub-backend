#! /bin/bash
set -e

function trap_ctrlc() {
  echo "Performing clean up"
  docker compose down --remove-orphans > /dev/null 2>&1
  echo "🍺 Done!"
  exit 0
}

trap "trap_ctrlc" 0

export ENV_FILE=".env"
docker-compose up app
