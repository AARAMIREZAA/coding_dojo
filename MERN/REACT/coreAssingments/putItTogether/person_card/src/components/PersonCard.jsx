// import React, { Component } from "react"
import { useState } from "react"
import React from "react"

// function Example() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

const PersonCard = props => {
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age + count }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={() => setCount(count + 1)}>Birthday button for {props.firstName}</button>
        </div>
    );
}
export default PersonCard;




// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: this.props.age,
//         };
//     }
//     render() {
//         return (
//             <div>
//                 {/* <legend>personCard.jsx</legend> */}
//                 <h1>{this.props.lastName}, {this.props.firstName}</h1>
//                 <h2>Age: {this.state.count}</h2>
//                 <h2>Hair Color: {this.props.hairColor}</h2>
//                 <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Birthday button for {this.props.firstName}</button>
//             </div>
//         )
//     }
// }

// export default PersonCard