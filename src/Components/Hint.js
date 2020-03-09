import React, { Component } from 'react';

export default class Hint extends Component {


    render() {
        // console.log(this.props.colorArr)
        return (
            <div className="small_square_container">
                {this.props.hintArr.map(color => {
                    let colorArr = color.split("")
                    colorArr.splice(colorArr.length - 2, 2, "")

                    let cleanColor = colorArr.join("")
                    return <div key={color} className={`small_square ${cleanColor}`}></div>
                })}
                
            </div>
        )
    }
}
