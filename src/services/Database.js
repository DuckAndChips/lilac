import { app } from "./FirebaseApp";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

export const db = getFirestore(app);

// Grab all values except items for a userID
// const docRef = doc(db, 'portfolios/lPiDVqVNUDM15MioI5jn');
// getDoc(docRef).then((snap) => console.log(snap.data()));

// Grab all values in 'items' collection of a userID
// const docRef2 = collection(db, "portfolios", "lPiDVqVNUDM15MioI5jn", "items");
// getDocs(docRef2).then((snap) =>
//   console.log(
//     snap.docs.map(
//       (doc) => Object.assign(doc.data(), {id: doc.id}) // Concat id
//     )
//   )
// );

export const defaultPortfolio = {
  name: "Chris Wong",
  tagline: "Flourist, Lilac Enthusiast",
  tags: [],
};

export const defaultPortfolioItem = {
  title: "New Piece of Work",
  description: "Great experience! :D",
  tags: [],
  imageURL: "",
  links: {},
};

export const initNewPortfolioIfNeeded = async (uid) => {
  let docRef = doc(db, "portfolios", uid);
  if (!getDoc(docRef)) return setDoc(docRef, defaultPortfolio);
};

export const initNewPortfolioItem = async (uid) => {
  let item = Object.assign(defaultPortfolioItem, { createdAt: serverTimestamp() });
  return addDoc(
    collection(db, "portfolios", uid, "items"),
    defaultPortfolioItem
  ); // Returns a reference to the item
};

export const getFullPortfolio = async (uid) => {
  let portfolio = {};

  // console.log("Fetching portfolio.");

  // Grab all values except items for a userID, create new portfolio if doesn't exist
  let docSnapshot = await getDoc(doc(db, "portfolios", uid));
  if (!docSnapshot.exists()) {
    // console.log("Creating default portfolio.");
    await setDoc(doc(db, "portfolios", uid), defaultPortfolio);
    portfolio = defaultPortfolio;
  } else portfolio = docSnapshot.data();

  // Grab all values in 'items' collection of a userID
  docSnapshot = await getDocs(query(collection(db, "portfolios", uid, "items"), orderBy("createdAt", "desc")));
  portfolio.items = docSnapshot.docs.map(
    (doc) => Object.assign(doc.data(), { id: doc.id }) // Concat id
  );

  // console.log("Portfolio fetched.", portfolio);
  return portfolio;
};

export const updatePortfolioField = async (uid, field, target) => {
  // console.log("Updating Portfolio Field, target: ", target);
  return updateDoc(doc(db, "portfolios", uid), { [field]: target });
};

export const updatePortfolioItem = async (uid, id, itemFields) => {
  // console.log('ID: ', id, "UID: ", uid)
  console.log('Update Item: ', itemFields)
  return updateDoc(doc(db, "portfolios", uid, "items", id), itemFields);
};

export const deletePortfolioItem = async (uid, id) => {
  return deleteDoc(doc(db, "portfolios", uid, "items", id));
};
