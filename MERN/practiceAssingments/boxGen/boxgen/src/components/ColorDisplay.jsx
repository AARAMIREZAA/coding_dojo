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
                            {color}
                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default ColorDisplay