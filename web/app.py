import os
from flask import Flask
# TODO use flask render_template https://cs50.harvard.edu/x/2022/weeks/9/

app = Flask(__name__)


@app.route("/")
def home():
    return """
        <!DOCTYPE html>
        <html>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <head>
                <title>
                    Victor Barros'
                </title>
            </head>

            <body style="margin-left: 10%;margin-top: 3%;">
                <h1>Welcome</h1>
                <h1>This is a Victor Barros' web site =]</h1>
                <br/>

                <br/>
                <h2>Side Projects</h2>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://twitter.com/UraniumStockBot">
                        UraBot
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://twitter.com/YooMoneyApp">
                        YooMoney
                    </a>
                </p>

                <br/>
                <h2>Articles</h2>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://victoralmeidabarros.medium.com/nsq-with-docker-in-baby-steps-70-lines-of-code-381ac37eaf58"
                    >
                            NSQ with Docker in baby steps less than 70 lines of code
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://victoralmeidabarros.medium.com/developing-a-miniapp-for-the-klutch-credit-card-df33f014183e"
                    >
                        Developing a MiniApp for the Klutch Credit Card
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://victoralmeidabarros.medium.com/install-docker-with-one-single-command-debian-and-ubuntu-ce021df0f976"
                    >
                        Installing Docker with one single command (Debian and Ubuntu)
                    </a>
                </p>

                <br/>
                <h2>Certifications</h2>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://certificates.cs50.io/3fc935e2-a295-47c9-9dd4-3658ddfb84e7"
                    >
                        CS50, Harvard
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://certs.duolingo.com/708c9de8137952ac95900efb90a31002"
                    >
                        English, Duolingo
                    </a>
                </p>

                <br/>
                <h2>Open Source Contributions</h2>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://github.com/dgrijalva/jwt-go/issues/450"
                    >
                        dgrijalva/jwt-go
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://github.com/nsqio/nsq/pull/1243"
                    >
                        nsqio/nsq
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://github.com/nsqio/nsqio.github.io/pull/60"
                    >
                        nsqio/nsqio.github.io
                    </a>
                </p>
                <p style="font-size: 20px;">
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="https://github.com/PacktPublishing/Learn-Go-in-3-Hours/pull/3"
                    >
                        PacktPublishing/Learn-Go-in-3-Hours
                    </a>
                </p>

                <br/>
                <h2>Social Medias</h2>
                <a
                    style="margin: 0px 10px 10px 0px;padding: 10px;font-size: 30px;width: 50px;text-align: center;text-decoration: none;background: black;color: white;"
                    href="http://www.github.com/victorabarros"
                    class="fa fa-github"></a>
                <a
                    style="margin: 0px 10px 10px 0px;padding: 10px;font-size: 30px;width: 50px;text-align: center;text-decoration: none;background: #007bb5;color: white;"
                    href="https://www.linkedin.com/in/victor-almeida-barros/"
                    class="fa fa-linkedin"></a>
                <a
                    style="margin: 0px 10px 10px 0px;"
                    href="https://www.hackerrank.com/victorbarros1130"><img
                    width="150px"
                    src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"/></a>

            </body>
        </html>
    """


@app.route("/sextou")
def sextou():
    return """
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    Victor Barros'
                </title>
            </head>
            <body>
                <div class="tenor-gif-embed" data-postid="17007663" data-width="65%" data-aspect-ratio="1.6">
                    <a style="text-decoration: none" href="https://tenor.com/view/renan-choque-de-cultura-toma-direto-beber-bebida-gif-17007663">Renan Choque De Cultura GIF</a>
                </div>
                <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </body>
        </html>
    """


@app.route("/wallet")
def wallet():
    return """
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    Victor Barros' Wallet
                </title>
            </head>
            <body>
                <script>
                    function myFunction() {
                        navigator.clipboard.writeText("1AGZAdXc3bfRSZmf11hsUgk7TFia52Yzmx");
                    }
                </script>
                <div align="center">
                    <h2>Bitcoin Wallet</h2>
                    <img width="35%" src="https://raw.githubusercontent.com/victorabarros/victorabarros/master/assets/bitcoin_wallet.png" />
                    <h3>
                        1AGZAdXc3bfRSZmf11hsUgk7TFia52Yzmx
                        <button onclick="myFunction()">copy</button>
                    </h3>
                    <a href="https://www.buymeacoffee.com/victorbarros" target="_blank">
                        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="60px">
                    </a>
                </div>
            </body>
        </html>
    """


@app.route("/linkedin")
def linkedin():
    return """
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    Victor Barros' Linkedin Badgets
                </title>
            </head>
            <body>
                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript">
                </script>
                <div align="center">
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                    <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
                </div>
            </body>
        </html>
    """


@app.route("/health-check", methods=["GET"])
def health_check():
    return {}, 200


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
    # https://victoralmeidabarros.com/
    # http://victorbarros.dev
