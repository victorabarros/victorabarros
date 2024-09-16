import os
import requests
from flask import Flask
# TODO use flask render_template https://cs50.harvard.edu/x/2022/weeks/9/

app = Flask(__name__)

PAGE_CACHE = {}

@app.route("/")
def home():
    if "home" not in PAGE_CACHE:
        PAGE_CACHE["home"] = requests.get("https://victorabarros.github.io").content
    return PAGE_CACHE["home"]

@app.route("/sextou")
def sextou():
    if "sextou" not in PAGE_CACHE:
        PAGE_CACHE["sextou"] = requests.get("https://victorabarros.github.io/sextou").content
    return PAGE_CACHE["sextou"]


@app.route("/wallet")
def wallet():
    if "wallet" not in PAGE_CACHE:
        PAGE_CACHE["wallet"] = requests.get("https://victorabarros.github.io/wallet").content
    return PAGE_CACHE["wallet"]

# TODO add nostr, lightning

if __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 80)), host="0.0.0.0", debug=True)
    # https://website.victorbarros.dev/
