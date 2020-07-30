import os
from flask import Flask, request

app = Flask(__name__)

HTML_BASE = """
    <div class="LI-profile-badge"  data-version="v1" data-size="{size}" data-locale="{locale}" data-type="{orientation}" data-theme="{theme}" data-vanity="victor-almeida-barros">
    <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <a class="LI-simple-link" href='https://br.linkedin.com/in/victor-almeida-barros/en-us?trk=profile-badge'>
        Victor Barros
        </a>
    </div>
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


if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
