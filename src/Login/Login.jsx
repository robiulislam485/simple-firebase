
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../Firebase/ffirebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
                    .then((error) => {
                        setUser(null)
                    })
            })

    }
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { setUser(null) })
            .catch((error) => { console.log(error) })
    }
    const handleGitLogin = () => {
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
        console.log(result.user)
        setUser(result.user)

    })
    .then((error)=>{console.log(error)})
    }



    return (
        <div className="mt-10 text-center">

            {
                user && <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold m-4 ">Name: {user.displayName}</h1>
                    <p className="text-lg font-semibold text-gray-600 m-4">Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
            {
                user ? <button onClick={handleSignOut} className="btn px-4 py-2 bg-red-500 text-white rounded-md">Sign Out</button>
                    :
                    <> <button onClick={handleGitLogin} className="btn px-4 py-2 bg-purple-600 text-white rounded-md m-6">Login With Github</button>
                        <button onClick={handleGoogleLogin} className="btn px-4 py-2 bg-purple-600 text-white rounded-md m-6">Login With Google</button>
                    </>

            }

        </div>
    );
};

export default Login;