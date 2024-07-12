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
