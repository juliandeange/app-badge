import React from 'react';
import amazon from "./badges/amazon.png"
import google from "./badges/google.png"
import ios from "./badges/ios.png"
import windows from "./badges/windows10.png"
import spotify from "./badges/spotify.png"

// 510 x 160 image dimensions

class AppBadge extends React.Component {

    badgeClicked(link){

        window.open(link, "_blank") //to open new page

    }

    render(){

        const version = this.props.version
        const height = this.props.height
        const width = this.props.width
        const url = this.props.url
        
        var icon

        switch(version){

            case "amazon":
                icon = amazon
                break
            case "google":
                icon = google
                break
            case "ios":
                icon = ios
                break
            case "spotify":
                icon = spotify
                break
            case "windows":
                icon = windows
                break
            default:
                icon = null

        }

        return(
            <div>
                <img
                    alt="" 
                    onClick={() => this.badgeClicked(url)}
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
