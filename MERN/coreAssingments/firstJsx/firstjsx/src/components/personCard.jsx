import React, (component) from "react"

class PersonCard extends Component{
    render(){
        return (
            <div>
                <legend>personCard.jsx</legend>
                <h2>Name: {this.props.name}</h2>
                <h2>Age: {this.props.age}</h2>
                <h2>Location:: {this.props.location}</h2>
                <h2>Hair Color: {this.props.hairColor}</h2>
            </div>
            
        )
    }
}