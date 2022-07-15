import React from 'react'

const ColorDisplay = (props) => {

    const { allColors } = props

    return (
        <fieldset>
            <legend>ColorDisplay.jsx</legend>
            {
                allColors.map((color, index) => {
                    return (
                        <div key={index}>
                            {/* <p> style={{backgroundColor: color, width: "100px", height: "100px"}}</p> */}
                            {color}
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default ColorDisplay