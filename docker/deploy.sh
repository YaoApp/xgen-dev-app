#!/bin/bash
# /data/docker/bin/deploy.sh yaoapp appname 0.10.4-amd64-dev
org=$1 # yaoapp
inst=$2 # appname
version=$3 # 0.10.4-amd64-dev

if [ -z "$org" ]; then
  echo "Usage: $0 <org> <inst> <version>"
  exit 1
fi

if [ -z "$inst" ]; then
  echo "Usage: $0 <org> <inst> <version>"
  exit 1
fi

if [ -z "$version" ]; then
  echo "Usage: $0 <org> <inst> <version>"
  exit 1
fi


name=$(docker ps -a -q -f "name=$inst")
if [ -n "$name" ]; then
  docker stop $name
  docker rm $name
fi

docker rmi "$org/$inst:$version"

# docker pull "$org/$inst:$version" retry 9 times each sleep 10s 
for i in {1..9}; do
  docker pull "$org/$inst:$version" && break
  sleep 10
done

docker run \
  --name $inst \
  --network=compose_default \
  --restart unless-stopped \
  -v /etc/localtime:/etc/localtime:ro \
  -l "traefik.http.routers.$inst.rule=Host(\`$inst.your.domain\`)" \
  -l "traefik.enable=true" \
  -d \
  "$org/$inst:$version"


# Test
# docker run \
#   --name $inst \
#   --network=compose_default \
#   -v /etc/localtime:/etc/localtime:ro \
#   -l "traefik.http.routers.$inst.rule=Host(\`$inst.your.domain\`)" \
#   -l "traefik.enable=true" \
#   -d \
#   "$org/$inst:$version" \
#   /bin/bash
  