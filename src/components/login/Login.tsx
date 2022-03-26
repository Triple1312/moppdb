import './login.scss'
import * as React from "react";
// @ts-ignore
import Background from "../Background.tsx";


export default class Login extends React.Component {
    constructor(props) {
        // @ts-ignore
        super();
        this.state = {}
    }

    render() {
        return(
         <div >
           <Background/>
             <div className="center">
                 <div id="loginBox">
                     <Card/>
                 </div>
             </div>
         </div>
        )
    }
}

// export default function Login(props) {
//     return(
//         <div >
//             <img src="https://lh6.googleusercontent.com/proxy/cHltpHqNYTdAE0Q-wjKEa7Smj5WRDNtQ9mENuGDdU1ln_hi1l6UNvUP-FL7kqm3aJhfB14H8CpSt9UOiIyNkrdQGbyNKx6xN-oTxn8EyiQvDMPo85ut-Q4G7gCKX5kieJIecAvX6wpTa9ODpW1YEeFuRS_Kvp95T2fyfytbnNqD7zVpICTD36UqDk_zRYn6ZLlNb47Kgx0mau7h0VgxDe_nEAoAAsHwbhSfN18jPd_g-m-oLllntrMzi7wT040yAqA=s2560-w2560-h1440-fcrop64=1,000023d6fffffe04-k-no-nd-mv"
//                     style={{position: "fixed", height: "100%", width: "100%", zIndex: -2}}/>
//             <div className="center">
//                 <div id="loginBox">
//                     <Card/>
//                 </div>
//             </div>
//         </div>
//         )
// }

let Card = (props) => {
    return(
        <div style={{alignContent: "center", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: "auto", height: "100%"}}>
            <h1 style={{color: "#fff"}}>Login</h1>
            <label>username</label>
            <input className="textInput" type="text"/>
            <label>password</label>
            <input className="textInput" type="text"/>
            <button>
                Submit
            </button>
        </div>
    )
}

let SignUp = (props) => {

    function submit() {

    }

    return(
        <div style={{alignContent: "center", alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column", margin: "auto"}}>
            <h1 style={{color: "#fff"}}>Sign Up</h1>
            <label>username</label>
            <input type="text"/>
            <label>email</label>
            <input type="text"/>
            <label>password</label>
            <input type="text"/>
            <label>confirm password</label>
            <input type="text"/>
            <button>
                Submit
            </button>

        </div>
    )
}
