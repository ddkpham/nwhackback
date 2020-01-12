// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START gae_node_request_example]
const express = require('express');
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// TODO: Replace the following with your app's Firebase project configuration
// var firebaseConfig = {
//   // ...
// };
const firebaseConfig = {
  apiKey: "AIzaSyByKn8cPCkuyk8UlQ677H1DeXt94JR5eVk",
  authDomain: "nwhackdb.firebaseapp.com",
  databaseURL: "https://nwhackdb.firebaseio.com",
  projectId: "nwhackdb",
  storageBucket: "nwhackdb.appspot.com",
  messagingSenderId: "836715595935",
  appId: "1:836715595935:web:ea6518d1be5cb8be523aaa",
  measurementId: "G-Z6KC83REX4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = express();

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})

let citiesRef = db.collection('cities'); 
let setSF = citiesRef.doc('SF').set({
  name: 'San Francisco', 
  state: 'US'
})


app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello, ')
    .end();
});

app.get('/newCity', (req, res) => {
  res 
    .status(200)
    .send('All gucci')
    .end()

    let citiesRef = db.collection('cities'); 
    let setSF = citiesRef.doc('Lon').set({
      name: 'London', 
      state: 'UK'
    })
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;