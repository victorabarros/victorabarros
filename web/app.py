import os
from flask import Flask
# TODO use flask render_template https://cs50.harvard.edu/x/2022/weeks/9/

app = Flask(__name__)

@app.route("/")
def hello():
    return """
        <!DOCTYPE html>
        <html>
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
                <h2>Contributions</h2>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://github.com/dgrijalva/jwt-go/issues/450">dgrijalva/jwt-go</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://github.com/nsqio/nsq/pull/1243">nsqio/nsq</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://github.com/nsqio/nsqio.github.io/pull/60">nsqio/nsqio.github.io</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://github.com/PacktPublishing/Learn-Go-in-3-Hours/pull/3">PacktPublishing/Learn-Go-in-3-Hours</a></p>

                <br/>
                <h2>Articles</h2>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://victoralmeidabarros.medium.com/nsq-with-docker-in-baby-steps-70-lines-of-code-381ac37eaf58">NSQ with Docker in baby steps less than 70 lines of code</a></p>

                <br/>
                <h2>Projects</h2>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://twitter.com/UraniumStockBot">UraBot</a></p>

                <br/>
                <h2>Social Medias</h2>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://www.linkedin.com/in/victor-almeida-barros/">Linkedin</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="http://www.github.com/victorabarros">Github</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://www.hackerrank.com/victorbarros1130">HackerRank</a></p>

                <br/>
                <h2>Certifications</h2>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://certs.duolingo.com/708c9de8137952ac95900efb90a31002">English, Duolingo</a></p>
                <p style="font-size: 20px;"><a target="_blank" style="text-decoration: none" href="https://certificates.cs50.io/3fc935e2-a295-47c9-9dd4-3658ddfb84e7">CS50, Harvard</a></p>
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
                <div align="center">
                    <h2>Bitcoin Wallet</h2>'
                    <img width="40%" src="https://raw.githubusercontent.com/victorabarros/victorabarros/master/assets/bitcoin_wallet.png" />
                    <h2>1AGZAdXc3bfRSZmf11hsUgk7TFia52Yzmx</h2>
                </div>
            </body>
        </html>
    """


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
    # https://victoralmeidabarros.com/
    # http://victorbarros.dev
