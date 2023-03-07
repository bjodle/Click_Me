const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// const serviceAccount = require('.\glemtpassord-376411-39fd3ff71c50.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// ADD A NEW DOCUMENT WITH A GENERATED ID
const res = await db.collection('userinfo').add({
    email: 'tokyolover38@gmail.com',
    password: 'mhm'
  });
  
  console.log('Added document with ID: ', res.id);