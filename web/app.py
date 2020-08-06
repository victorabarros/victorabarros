import os
from flask import Flask, request

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
                <h1>
                    Hi there, this is a <a href="http://github.com/victorabarros">Victor Barros'</a> aplication =]
                </h1>
                <p>
                    You can find here the <a href="http://github.com/victorabarros/victorabarros">source code</a>.
                    <br>
                    Contributions are wellcome.
                </p>
                <h3>Routes</h3>
                <p>
                    <a href="/linkedin"><code>/linkedin</code></a>
                    <br>
                    query params: "size", "locale", "orientation", "theme"
                </p>
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


# TODO /certificates route


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
    # https://victorabarros.herokuapp.com/
    # TODO usar domínio victorbarros.com.br
