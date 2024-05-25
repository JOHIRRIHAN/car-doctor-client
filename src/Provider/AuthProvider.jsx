import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { createContext } from "react"
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo = {
        createUser,
        signIn,
        
    }
  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider