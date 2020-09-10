import React from 'react';
import amazon from "./badges/amazon.png"
import google from "./badges/google.png"
import ios from "./badges/ios.png"
import windows from "./badges/windows10.png"

class AppStoreDownload extends React.Component {

    myfunction(){

        console.log("clicked");

    }

    render(){

        var version = this.props.version
        version = "google"
        var icon
        if (version === "amazon")
            icon = amazon
        else if (version === "google")
            icon = google
        else if (version === "ios")
            icon = ios
        else if (version === "windows")
            icon = windows
        else {
            // icon = ""
            console.log("use \"android\" or \"ios\"")
        }

        return(

            <div>
                <img
                    alt="" onClick={this.myfunction}
                    style={{cursor: "pointer"}}
                    src={icon} 
                    />
                {/* <img src={android} alt="android" onClick={this.myfunction} height="200px"/>  */}
            </div>
        )

    }


}

export default AppStoreDownload;
