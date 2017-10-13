# Investr Android Parse server
*(keep internal)*

App is running at https://investr-android.herokuapp.com/. Check index.js for client credentials.

Sample commands:

curl -X POST \
  -H "X-Parse-Application-Id: investrAndroid" \
  -H "X-Parse-Master-Key: investrParse2017" \
  -H "Content-Type: application/json" \
  -d '{"score":1337,"playerName":"Aki and Como","cheatMode":true}' \
  https://investr-android.herokuapp.com/parse/classes/GameScore

curl -X GET \
  -H "X-Parse-Application-Id: investrAndroid" \
  -H "X-Parse-Master-Key: investrParse2017" \
  https://investr-android.herokuapp.com/parse/classes/GameScore

*Access the dashboard via:*

npm install -g parse-dashboard

parse-dashboard --appId investrAndroid --masterKey investrParse2017 --serverURL "https://investr-android.herokuapp.com/parse"