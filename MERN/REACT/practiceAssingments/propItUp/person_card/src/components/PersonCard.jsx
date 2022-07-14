import React, {Component} from "react"


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = { 
            count: this.props.age,
        };
    }
    render(){
        return(
            <div>
                {/* <legend>personCard.jsx</legend> */}
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h2>Age: {this.state.count}</h2>
                <h2>Hair Color: {this.props.hairColor}</h2>
                <button onClick={() =>{ this.setState({ count: this.state.count+1})}}>Birthday button for {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonCard