import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');
//connection to the db and version we want to use
 // Create a connection to the database database and version we want to use.
 const contactDb = await openDB('jate', 1);
 //created a new transaction to specify db and data priviledge
 const tx = contactDb.transaction('jate', 'readwrite');
//opening the desired object store
const store = tx.objectStore('jate');
//using .add() to store and pass in content
const request = store.add({ content: content });
// Get confirmation of the request.
const result = await request;
console.log('🚀 - data saved to the database', result);

}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
