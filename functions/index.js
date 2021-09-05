const functions = require("firebase-functions");
const admin = require('firebase-admin');
const parse = require('csv-parse/lib/sync')

admin.initializeApp()

// Process Uploaded Object
exports.processUploadedObject = functions
  .region('australia-southeast1')
  .storage
  .object()
  .onFinalize(async (object) => {
    const fileBucket = object.bucket; // The Storage bucket that contains the file.
    const filePath = object.name; // File path in the bucket.

    const storage = admin.storage() // Initialize Firebase Storage
    const db = admin.firestore(); // Initialize Firebase Firestore

    bucket = storage.bucket(fileBucket);
    await bucket.file(filePath).download({ validation: false }).then(async function (data) {
      const contents = data[0].toString()
      const parsed = parse(contents, {
        skip_empty_lines: true
      })
      console.log(parsed)
      for (const p of parsed) {
        // parsed.forEach(p => {
        console.log(`Record is ${p}`)

        const docRef = db.collection('anztransactions').doc();
        await docRef.set({
          date: p[0],
          amount: parseFloat(p[1]),
          desc: p[2]
        });
      }

      // console.log(parsed);
    });
  });