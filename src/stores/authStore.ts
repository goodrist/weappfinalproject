import { defineStore } from "pinia";
import { auth, provider } from "@/firebase/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | {
      uid: string;
      displayName: string;
      email: string;
      photoURL: string;
    },
    loading: true,
  }),

  actions: {
    async login() {
      await signInWithPopup(auth, provider);
    },

    async logout() {
      await signOut(auth);
    },

    init() {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          this.user = {
            uid: firebaseUser.uid,
            displayName: firebaseUser.displayName ?? "",
            email: firebaseUser.email ?? "",
            photoURL: firebaseUser.photoURL ?? "",
          };
        } else {
          this.user = null;
        }
        this.loading = false;
      });
    },
  },
});
