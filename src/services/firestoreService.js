import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

// Save Lost Item to Firestore
export const saveLostItem = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, "lost_items"), {
      ...itemData,
      createdAt: new Date(),
      type: "lost",
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving lost item:", error);
    throw error;
  }
};

// Save Found Item to Firestore
export const saveFoundItem = async (itemData) => {
  try {
    const docRef = await addDoc(collection(db, "found_items"), {
      ...itemData,
      createdAt: new Date(),
      type: "found",
    });
    return docRef.id;
  } catch (error) {
    console.error("Error saving found item:", error);
    throw error;
  }
};

// Get all Lost Items from Firestore
export const getLostItems = async () => {
  try {
    const q = query(
      collection(db, "lost_items"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt),
    }));
  } catch (error) {
    console.error("Error getting lost items:", error);
    throw error;
  }
};

// Get all Found Items from Firestore
export const getFoundItems = async () => {
  try {
    const q = query(
      collection(db, "found_items"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt),
    }));
  } catch (error) {
    console.error("Error getting found items:", error);
    throw error;
  }
};

// Real-time listener for Lost Items
export const listenToLostItems = (callback) => {
  try {
    const q = query(
      collection(db, "lost_items"),
      orderBy("createdAt", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt),
      }));
      callback(items);
    });

    return unsubscribe;
  } catch (error) {
    console.error("Error setting up lost items listener:", error);
    throw error;
  }
};

// Real-time listener for Found Items
export const listenToFoundItems = (callback) => {
  try {
    const q = query(
      collection(db, "found_items"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate?.() || new Date(doc.data().createdAt),
      }));
      callback(items);
    });

    return unsubscribe;
  } catch (error) {
    console.error("Error setting up found items listener:", error);
    throw error;
  }
};

// Delete Lost Item
export const deleteLostItem = async (id) => {
  try {
    await deleteDoc(doc(db, "lost_items", id));
  } catch (error) {
    console.error("Error deleting lost item:", error);
    throw error;
  }
};

// Delete Found Item
export const deleteFoundItem = async (id) => {
  try {
    await deleteDoc(doc(db, "found_items", id));
  } catch (error) {
    console.error("Error deleting found item:", error);
    throw error;
  }
};
