import React from 'react';
import android from "./badges/android.png"
import ios from "./badges/ios.png"

class AppStoreDownload extends React.Component {

    myfunction(){

        console.log("clicked");

    }

    render(){
        return(

            <div>
                <div>
                <img src={ios} alt="ios" onClick={this.myfunction} height="200px"/>
                </div>
                <div>
                <img src={android} alt="android" onClick={this.myfunction} height="200px"/> 
                </div>

                hey

            </div>

        )

    }


}

export default AppStoreDownload;
