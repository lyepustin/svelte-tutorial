import { writable } from "svelte/store";

const authStore = writable<{
  isLoggedIn: boolean;
  user?: any;
  firebaseControlled: boolean;
}>({
  isLoggedIn: false,
  firebaseControlled: false,
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};