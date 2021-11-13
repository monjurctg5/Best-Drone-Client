//import all important method from firebase
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";


import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseConfig";
//firebase initialize
initializeAuthentication()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState('')
    const [style, setStyle] = useState("none")


    // for google signin
    const signInWithGoogle = (history, destination) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                saveUser(result.user.email, result.user.displayName, "PUT")
                history.push(destination)
                setIsLoading(false)
                setError("")
            })
            .catch(er => {
                console.log(er);
            })
    }

    const w3_open = () => {
        setStyle("block")
        // setOpenStyle("openStyle")

    }
    const w3_close = () => {
        setStyle("none")
        // setCloseStyle("setCloseStyle")
    }
    //for google signin
    // const signInWithGoogle = ()=>{
    //     setIsLoading(true)
    //    return  signInWithPopup(auth,googleProvider)
    // }

    //for manulay register

    const Register = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    //manulay sign in
    const signIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // to logout
    const Logout = (history) => {
        signOut(auth).then(() => {
            setUser({})
            history.push('/')
        }).finally(() => {
            setIsLoading(false)
        })
    }
    //when user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])
    //to update user info
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAJ0Ge_MNL1cOKBqqX_2CwLWNjY_vAYgHjQ&usqp=CAU"
        })

    }
    const saveUser = (email, displayName, method) => {

        const user = { email, displayName }
        fetch(`https://hidden-inlet-96106.herokuapp.com/users`, {
            method: method,
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(user)
        })

    }

    useEffect(() => {
        fetch(`https://hidden-inlet-96106.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    //return all needed method to user some where
    return {
        user,
        signInWithGoogle,
        Register,
        setUser,
        signIn,
        Logout,
        updateName,
        setIsLoading,
        isLoading,
        saveUser,
        admin,
        w3_open,
        setStyle, style, w3_close


    }
}




export default useFirebase
