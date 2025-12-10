import { defineStore } from "pinia";
import { ref } from "vue";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref<any>(null);

  // ---------------------------
  // AUTH STATE LISTENER
  // ---------------------------
  onAuthStateChanged(auth, async (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser;

      // Ensure user doc exists
      const userRef = doc(db, "users", firebaseUser.uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        await setDoc(userRef, {
          email: firebaseUser.email,
          createdAt: new Date(),
        });
      }
    } else {
      user.value = null;
    }
  });

  // ---------------------------
  // GOOGLE SIGN IN
  // ---------------------------
  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // ---------------------------
  // SIGN OUT
  // ---------------------------
  const logout = async () => {
    await signOut(auth);
  };

  return {
    user,
    login,
    logout,
  };
});
