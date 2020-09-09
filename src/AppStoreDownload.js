import React from 'react';
import android from "./badges/android.png"
import ios from "./badges/ios.png"

class AppStoreDownload extends React.Component {

    myfunction(){

        console.log("clicked");

    }

    render(){

        var version = this.props.version


        version = "android"

        return(

            <div>
                <img
                    alt="" onClick={this.myfunction}
                    style={{cursor: "pointer"}}
                    src={version === "ios" ? ios : version === "android" ? android : console.log("use \"android\" or \"ios\"")} 
                    height="50px"/>
                {/* <img src={android} alt="android" onClick={this.myfunction} height="200px"/>  */}
            </div>
        )

    }


}

export default AppStoreDownload;
