import { initializeApp } from "firebase/app";
import {
    getAuth, onAuthStateChanged, setPersistence,
    browserLocalPersistence,
} from "firebase/auth";
import router from "../routes";
const firebaseConfig = {
    apiKey: "AIzaSyCDHkBA9LIPZWMXuKEEUFzXgeWCls-4ND4",
    authDomain: "myloginpage-e413d.firebaseapp.com",
    projectId: "myloginpage-e413d",
    storageBucket: "myloginpage-e413d.appspot.com",
    messagingSenderId: "809449338622",
    appId: "1:809449338622:web:6446b2837f29d09f2e57af"
};

const app = initializeApp(firebaseConfig);
// const userStore = useUserStore();
const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);

onAuthStateChanged(auth, async (user) => {
    const currentUser = user;
    if (user) {
        console.log('User is signed in', currentUser);
        // userStore.setUser(currentUser);
    } else {
        console.log('User is signed out');
        router.push('/login');
    }
});
export { app, auth };