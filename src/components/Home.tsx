import * as React from 'react';
import NavBar from "../NavigationBar/NavigationBar.tsx";
import Background from "./Background.tsx";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    const state = {

    }
  }

  render() {
    return(
      <>
        <NavBar/>
        <Background/>
        <div style={{display: "flex", flexDirection: "row"}}>
          <div style={{width: "50%", height: "100vh"}}>
              <div style={{height: "100%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <img style={{margin: "20px", height: "18vw", width: "32vw"}} src="https://lh4.googleusercontent.com/proxy/YXIRWQuKNh8fG5fg0DrSLZSH5QZyGvg3j8xbfUfBUWl6HDhcw4hcgxfs30zNL1_NWiGDDOMPL6SUTWmr6M0oSseG1qOy75RjGi-MgYRl1DLU4_QJmCZWprddoWWKoQiUA5s3CnS-iOEbY1ppyXCBuI1xa_jK1X5bzmJNKy8_feXxQclDqo13rq7r0FirDfrZ07porsT3Jhbyu2zhKJHr_u110dxzfDWBeoMkCX5xN0vkomv3FGw5jThSIW3JoA-aNytG7H0Dm4NOg2UUpQ_iLVm40HvULGIq6NSL=s2560-w2560-h1440-fcrop64=1,00001999fffff3c7-k-no-nd-mv"
                  />
                <div style={{color: "white", width: "80%", margin: "30px"}}>
                  <p style={{fontSize: "70px", color: "white"}}>About</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
          </div>
          <div style={{width: "50%", height: "100vh"}}>

          </div>
        </div>

      </>
    )
  }

}