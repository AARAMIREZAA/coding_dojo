import React, {Component} from "react"


class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            {this.props.age:} 0,
        };
    }
    render(){
        return(
            <div>
                {/* <legend>personCard.jsx</legend> */}
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h2>Age: {this.props.age}</h2>
                <h2>Hair Color: {this.props.hairColor}</h2>
                <button onClick={() => this.setState({ this.props.age: 1})}>Birthday button for {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonCard