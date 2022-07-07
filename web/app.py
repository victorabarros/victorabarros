import os
from flask import Flask, request, redirect
# TODO use flask render_template https://cs50.harvard.edu/x/2022/weeks/9/

app = Flask(__name__)

HTML_BASE = """
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    Victor Barros'
                </title>
            </head>
            <body>
                <div class="LI-profile-badge"  data-version="v1" data-size="{size}" data-locale="{locale}" data-type="{orientation}" data-theme="{theme}" data-vanity="victor-almeida-barros">
                <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
                    <a class="LI-simple-link" href='https://br.linkedin.com/in/victor-almeida-barros/en-us?trk=profile-badge'>
                    Victor Barros
                    </a>
                </div>
            </body>
        </html>
"""


def _all():
    resp = ""
    for size in ["medium", "large"]:
        for locale in ["pt_BR", "en_US"]:
            for orientation in ["horizontal", "vertical"]:
                for theme in ["light", "dark"]:
                    resp += HTML_BASE.format(size=size,
                                             locale=locale,
                                             orientation=orientation,
                                             theme=theme)
    return resp


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
            <body>
                <h1>Welcome</h1>
                <h1>This is a Victor Barros' web site =]</h1>
                <br/>

                <br/>
                <h3>Contributions</h3>
                <p><a target="_blank" href="https://github.com/PacktPublishing/Learn-Go-in-3-Hours/pull/3">PacktPublishing/Learn-Go-in-3-Hours</a></p>
                <p><a target="_blank" href="https://github.com/nsqio/nsq/pull/1243">nsqio/nsq</a></p>
                <p><a target="_blank" href="https://github.com/nsqio/nsqio.github.io/pull/60">nsqio/nsqio.github.io</a></p>
                <p><a target="_blank" href="https://github.com/dgrijalva/jwt-go/issues/450">dgrijalva/jwt-go</a></p>

                <br/>
                <h3>Articles</h3>
                <p><a target="_blank" href="https://victoralmeidabarros.medium.com/nsq-with-docker-in-baby-steps-70-lines-of-code-381ac37eaf58">NSQ with Docker in baby steps less than 70 lines of code</a></p>

                <br/>
                <h3>Projects</h3>
                <p><a target="_blank" href="https://twitter.com/UraniumStockBot">UraBot</a></p>

                <br/>
                <h3>Social Medias</h3>
                <p><a target="_blank" href="https://www.linkedin.com/in/victor-almeida-barros/?locale=en_US">linkedin</a></p>
                <p><a target="_blank" href="http://www.github.com/victorabarros">github</a></p>
                <p><a target="_blank" href="https://1drv.ms/u/s!AmYe_9MVaCDFgdJb6wue2OjtA5XXlg?e=IIG5Xf">certifications</a></p>
            </body>
        </html>
    """


@app.route("/linkedin")
def linkedin():
    """
    Route to return Victor Barros' linkedin badges.
    query params: "size", "locale", "orientation", "theme"
    """
    params = request.args
    if not params:
        return _all()

    for required in ["size", "locale", "orientation", "theme"]:
        if required not in params.keys():
            return f"param \'{required}\' is required", 400

    return HTML_BASE.format(**params)


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
                    <a href="https://tenor.com/view/renan-choque-de-cultura-toma-direto-beber-bebida-gif-17007663">Renan Choque De Cultura GIF</a>
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
