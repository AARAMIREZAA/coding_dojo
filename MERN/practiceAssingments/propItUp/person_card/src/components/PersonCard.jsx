import React, {Component} from "react"


class PersonCard extends Component{
    render(){
        return(
            <div>
                {/* <legend>personCard.jsx</legend> */}
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h2>Age: {this.props.age}</h2>
                <h2>Hair Color: {this.props.hairColor}</h2>
            </div>
        )
    }
}

export default PersonCard