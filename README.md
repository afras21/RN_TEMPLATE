# Employee App

## Setup Appolo server
```sh
cd mockServer # given at the test link
npm start  # start appolo-server

#expose with ngrok
#download ngrok for mac https://ngrok.com/download

./ngrok http 9002 #9002 is port

```

Install the dependencies and devDependencies and start the server.
```sh
yarn install
yarn run ios #ios
yarn run android #android
yarn run test
```

## Acceptance cases: 
1. Users should be able to see the `loading animation` when data is getting fetched.
2. Users should be able to see UserTypes and a List of users of the same type.
3. Users should be able to filter or switch the type of users by selecting it from the radio checkboxes.
4. Users should be able to search for a particular user by searching on the search bar (non-case-sensitive).
5. Users should be able to see no records found on empty or no match found on filtering as `No Records found text`

## Reference

https://github.com/afras21/RN_TEMPLATE/assets/27044965/bf35cda5-e8dc-47dc-bff6-85a0b23781e3





