import React from 'react';
import amazon from "./badges/amazon.png"
import google from "./badges/google.png"
import ios from "./badges/ios.png"
import windows from "./badges/windows10.png"
import spotify from "./badges/spotify.png"

// 510 x 160 image dimensions

class AppBadge extends React.Component {

    badgeClicked(link){

        // window.location.href=link;
        // https://apps.apple.com/ca/app/covid-alert/id1520284227
        window.open(link, "_blank") //to open new page

    }

    render(){

        var version = this.props.version
        var height = this.props.height
        var width = this.props.width
        var url = this.props.url

        version = "windows"
        url = "https://apps.apple.com/ca/app/covid-alert/id1520284227"
        
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
                    alt="badge" 
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
