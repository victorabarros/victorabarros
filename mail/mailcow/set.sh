# https://mailcow.github.io/mailcow-dockerized-docs/i_u_m_install/
# https://www.the-digital-life.com/en/mail-server-on-linux/
apt remove docker docker-engine docker.io containerd runc
apt update
apt install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
add-apt-repository -y "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt update
apt-get install -y docker-ce docker-ce-cli containerd.io
curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
cd /opt
git clone https://github.com/mailcow/mailcow-dockerized
# cd /opt/mailcow-dockerized
# ./generate_config.sh
# docker-compose up -d
