import React from 'react';
import amazon from "./badges/amazon.png"
import google from "./badges/google.png"
import ios from "./badges/ios.png"
import windows from "./badges/windows10.png"
import spotify from "./badges/spotify.png"

// 510 x 160 image dimensions

class AppBadge extends React.Component {

    badgeClicked(link){

        window.location.href=link;

    }

    render(){

        var version = this.props.version
        var height = this.props.height
        var width = this.props.width
        var url = this.props.url

        version = "ios"


        var icon
        if (version === "amazon")
            icon = amazon
        else if (version === "google")
            icon = google
        else if (version === "ios")
            icon = ios
        else if (version === "spotify")
            icon = spotify
        else if (version === "windows")
            icon = windows
        else {
            icon = null
        }

        return(

            <div>
                <img
                    alt="" onClick={() => this.badgeClicked(url)}
                    style={{cursor: "pointer"}}
                    src={icon} 
                    height={height !== undefined ? height : 50}
                    width={width}
                    />
            </div>
        )
    }
}

export default AppBadge;
