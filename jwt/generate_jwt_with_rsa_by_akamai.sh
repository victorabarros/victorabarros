clear
# https://learn.akamai.com/en-us/webhelp/iot/jwt-access-control/GUID-CB17F8FF-3367-4D4B-B3FE-FDBA53A5EA02.html
HEADER='{"alg":"RS256","typ":"JWT"}'
HEADER_ENCODED=$(echo -n $HEADER | base64 | sed s/\+/-/ | sed -E s/=+$//)

PAYLOAD='{"sub":"RS256InOTA","name":"John Doe"}'
PAYLOAD_ENCODED=$(echo -n $PAYLOAD | base64 | sed s/\+/-/ | sed -E s/=+$//)

# https://learn.akamai.com/en-us/webhelp/iot/jwt-access-control/GUID-BD7079F4-09ED-4FAB-A923-4ACFE254BA3E.html
openssl genrsa -out jwtRSA256-private.pem
openssl rsa -in jwtRSA256-private.pem -pubout -outform PEM -out jwtRSA256-public.pem

SIGNATURE=$(echo -n "$HEADER_ENCODED.$PAYLOAD_ENCODED" | openssl dgst -sha256 -binary -sign jwtRSA256-private.pem  | openssl enc -base64 | tr -d '\n=' | tr -- '+/' '-_')

JWT=$HEADER_ENCODED.$PAYLOAD_ENCODED.$SIGNATURE

echo $JWT
