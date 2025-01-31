// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {addDoc, collection, getFirestore} from  'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9-ZGIFpuU_w-20RcSvsnetRuEU6gs9ls",
  authDomain: "hackathon-38241.firebaseapp.com",
  projectId: "hackathon-38241",
  storageBucket: "hackathon-38241.firebasestorage.app",
  messagingSenderId: "96287594986",
  appId: "1:96287594986:web:cb0a9ed34393e4acb5ba93",
  measurementId: "G-4S4PHNZQ2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const  db = getFirestore(app);

const signup = async (email, name, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user= res.user;
        await addDoc(collection (db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(error){
        console.error(error);
    }
}

const login = async (email,password) => {
    try{
        const res= await signInWithEmailAndPassword(auth,email,password);
    } catch (error){
        console.log(error);
    }
}   
const logout= () => {
    signOut(auth);
}
export {auth,db,login,signup,logout};    