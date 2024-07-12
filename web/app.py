import os
from flask import Flask
# TODO use flask render_template https://cs50.harvard.edu/x/2022/weeks/9/

app = Flask(__name__)


@app.route("/")
def home():
    return """
        <!DOCTYPE html>
        <html>

        <head>
        <title>Victor Barros'</title>
        </head>

        <body style="margin-left: 10%; margin-top: 3%">
        <h1>Welcome</h1>
        <h1>This is a Victor Barros' web site</h1>
        <br />

        <h2>Bio</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            Currently working at
            <a target="_blank" style="text-decoration: none"
            href="https://superhuman.com/jobs#:~:text=VICTOR,code%2C%20and%20read">
            Superhuman
            </a>
        </p>
        <br />

        <h2>Side Projects</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            <a target="_blank" style="text-decoration: none" href="https://github.com/victorabarros/ura-bot">
            UraBot
            </a>
            <br />
            -
            <a target="_blank" style="text-decoration: none;font-size: 20px;" href="https://twitter.com/UraniumStockBot">
            Twitter
            </a>
            <br />
            -
            <a target="_blank" style="text-decoration: none;font-size: 20px;" href="https://nostter.app/urastockbot@iris.to">
            NOSTR
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://x.com/BRLBot">
            BRLBot
            </a>
            <br />
        </p>

        <br />
        <h2>Articles</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            <a target="_blank" style="text-decoration: none"
            href="https://victoralmeidabarros.medium.com/nsq-with-docker-in-baby-steps-70-lines-of-code-381ac37eaf58">
            NSQ with Docker in baby steps less than 70 lines of code
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none"
            href="https://victoralmeidabarros.medium.com/developing-a-miniapp-for-the-klutch-credit-card-df33f014183e">
            Developing a MiniApp for the Klutch Credit Card
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none"
            href="https://victoralmeidabarros.medium.com/install-docker-with-one-single-command-debian-and-ubuntu-ce021df0f976">
            Installing Docker with one single command (Debian and Ubuntu)
            </a>
        </p>

        <br />
        <h2>Certifications</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            <a target="_blank" style="text-decoration: none"
            href="https://certificates.cs50.io/3fc935e2-a295-47c9-9dd4-3658ddfb84e7">
            CS50, Harvard
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://certs.duolingo.com/708c9de8137952ac95900efb90a31002">
            English, Duolingo
            </a>
        </p>

        <br />
        <h2>Open Source Contributions</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            <a target="_blank" style="text-decoration: none" href="https://github.com/aljazceru/awesome-nostr/pull/431">
            aljazceru/awesome-nostr
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://github.com/w3b3d3v/w3d-podcast/pull/1">
            w3b3d3v/w3d-podcast
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://github.com/dgrijalva/jwt-go/issues/450">
            dgrijalva/jwt-go
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://github.com/nsqio/nsq/pull/1243">
            nsqio/nsq
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none" href="https://github.com/nsqio/nsqio.github.io/pull/60">
            nsqio/nsqio.github.io
            </a>
            <br />
            <br />
            <a target="_blank" style="text-decoration: none"
            href="https://github.com/PacktPublishing/Learn-Go-in-3-Hours/pull/3">
            PacktPublishing/Learn-Go-in-3-Hours
            </a>
        </p>

        <br />
        <h2>Professional Membership</h2>
        <p style="font-size: 23px; margin-left: 15px;">
            <a target="_blank" style="text-decoration: none" href="http://member.acm.org/~victorbarros">
            Association for Computing Machinery
            </a>
        </p>
        <br />
        </body>

        </html>
    """


# @app.route("/sextou")
# def sextou():
#     return """
#         <!DOCTYPE html>
#         <html>
#             <head>
#                 <title>
#                     Victor Barros'
#                 </title>
#             </head>
#             <body>
#                 <div class="tenor-gif-embed" data-postid="17007663" data-width="65%" data-aspect-ratio="1.6">
#                     <a style="text-decoration: none" href="https://tenor.com/view/renan-choque-de-cultura-toma-direto-beber-bebida-gif-17007663">Renan Choque De Cultura GIF</a>
#                 </div>
#                 <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
#             </body>
#         </html>
#     """


# @app.route("/wallet")
# def wallet():
#     return """
#         <!DOCTYPE html>
#         <html>
#             <head>
#                 <title>
#                     Victor Barros' Wallet
#                 </title>
#             </head>
#             <body>
#                 <script>
#                     function myFunction() {
#                         navigator.clipboard.writeText("1AGZAdXc3bfRSZmf11hsUgk7TFia52Yzmx");
#                     }
#                 </script>
#                 <div align="center">
#                     <h2>Bitcoin Wallet</h2>
#                     <img width="35%" src="https://raw.githubusercontent.com/victorabarros/victorabarros/master/assets/bitcoin_wallet.png" />
#                     <h3>
#                         1AGZAdXc3bfRSZmf11hsUgk7TFia52Yzmx
#                         <button onclick="myFunction()">copy</button>
#                     </h3>
#                     <a href="https://www.buymeacoffee.com/victorbarros" target="_blank">
#                         <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="60px">
#                     </a>
#                 </div>
#             </body>
#         </html>
#     """


# @app.route("/linkedin")
# def linkedin():
#     return """
#         <!DOCTYPE html>
#         <html>
#             <head>
#                 <title>
#                     Victor Barros' Linkedin Badgets
#                 </title>
#             </head>
#             <body>
#                 <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript">
#                 </script>
#                 <div align="center">
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                     <div class="badge-base LI-profile-badge" data-locale="pt_BR" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="victor-almeida-barros" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/victor-almeida-barros?trk=profile-badge">Victor Barros</a></div>
#                 </div>
#             </body>
#         </html>
#     """


# @app.route("/health-check", methods=["GET"])
# def health_check():
#     return {}, 200


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
    # https://website.victorbarros.dev/
