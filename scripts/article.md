# Install Docker with one single command (debian and ubuntu)

After having to instance several times a VM on digital ocean and install running the same commands every time, I did what every engineer loved to do: Automate.

So, after some minutes of coding, I wrote the following script and hosted it on my github:

```sh
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io
sudo groupadd docker
sudo usermod -aG docker $USER
# sudo reboot
docker run hello-world
docker run -it alpine sh -c 'ping google.com'
```

If you want to install docker on your Debian VM, just run the following command, grab a coffee, and wait. =)

```sh
curl -fsSL \
  https://raw.githubusercontent.com/victorabarros/victorabarros/master/scripts/install_docker_debian.sh \
  | bash
```

The same works for Ubuntu. Just replacing the script name with install_docker_ubuntu.sh.

And to uninstall the Docker, just run:

```sh
curl -fsSL \
  https://raw.githubusercontent.com/victorabarros/victorabarros/master/scripts/uninstall_docker.sh \
  | bash
```

Hope it helps to speed up your development process.

References:

- https://docs.docker.com/engine/install/debian/
- https://github.com/victorabarros/victorabarros/tree/master/scripts
