# OpenVPN server with Docker

## Generate id_rsa

- `ssh-keygen`
- `$PWD/id_rsa`

## Provide a debian VM (1 CPU / 512 MB RAM is enough)

- add _id_rsa.pub_ as user to your VM
- access with `ssh -i "id_rsa" victor@35.222.224.5`

## Instal Docker

https://github.com/victorabarros/victorabarros/tree/master/scripts#install-docker

## Set

```sh
# Initialize the container that will hold the configuration files and certificates
export OVPN_DATA="ovpn-data-alloy"
docker volume create --name $OVPN_DATA
# Is recommended to use a FQDN (DNS) in place of the ip
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_genconfig -u udp://35.222.224.5
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn ovpn_initpki

# Start OpenVPN server process
docker run -v $OVPN_DATA:/etc/openvpn -d -p 1194:1194/udp --cap-add=NET_ADMIN kylemanna/openvpn

# Generate a client certificate
docker run -v $OVPN_DATA:/etc/openvpn --rm -it kylemanna/openvpn easyrsa build-client-full alloyDev nopass

# Retrieve the client configuration with embedded certificates
docker run -v $OVPN_DATA:/etc/openvpn --rm kylemanna/openvpn ovpn_getclient alloyDev > alloyDev.ovpn

# Copy .opvn content
cat alloyDev.ovpn
```

## Client

```sh
sudo openvpn --config alloyDev.ovpn
```

## Based on

- https://github.com/kylemanna/docker-openvpn
