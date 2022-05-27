import React, { Component } from 'react'

export default class GenerateButtons extends Component {
    constructor(props){
        super(props)
    for(let i=0;i<4;i++) {
        return(
            <div>
                <button className='master' style={{backgroundColor:this.props.newColor[this.props.index]}}></button>
                <button className='master' style={{backgroundColor:this.props.newColor[this.props.index]}}></button>
                <button className='master' style={{backgroundColor:this.props.newColor[this.props.index]}}></button>
                <button className='master' style={{backgroundColor:this.props.newColor[this.props.index]}}></button>
            </div>
        )
    }
}
}
