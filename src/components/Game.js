import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Game.css'

export default class Game extends Component {
    constructor(props) {
        super(props)
        this.state={
          bgColor:['red','yellow','green','blue','purple','gray','black'],
          colors:[],
          newColor:[],
          b:[],
          resultColor:[],
          resColor:[],
          disabled:'disabled',
          numRows:[],
          currentRow:0

        }
        for(let i=0; i<4;i++) {
            this.state.colors.push(this.generateColor())
        }
        for(let j=0;j<4;j++) {
            this.state.b.push('')
        }
        
    }
    generateColor = () => {
      return  this.state.bgColor[Math.floor(Math.random() * 7)]
    }

    handleClick = (index) => {
        let colors = this.state.colors.slice();
        colors[index] = this.generateColor()
        this.setState({
            newColor:[...this.state.newColor,this.state.bgColor[index]]
        })
    }
checkValue = () => {
    for(let i=0;i<4;i++){  
        if(this.state.newColor[i] === this.state.colors[i]) {
                this.state.resultColor.push('green')    
                console.log('zelena')     
        }else if(this.state.colors.includes(this.state.newColor[i])) {
            this.state.resultColor.push('yellow') 
            console.log('tzute')
        }else {
            this.state.resultColor.push('white') 
            console.log('bijela')
        }
        this.setState({
            resColor:[...this.state.resColor,this.state.resultColor[i]]
        })
    }
    this.setState({
        currentRow: this.state.currentRow + 1

    })
    for(let j=0;j<4;j++) {
        this.state.b.push('')
    }
    
}
    
render() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h1>Mastermind</h1> <br />
                {this.state.bgColor.map((colors,index) => (
                    <button className='master'  onClick={this.handleClick.bind(this,index)} style={{backgroundColor:colors}}></button> 
                ))}
                <br /> <br />
                {this.state.colors.map((color,index) => (
                    <button className='master' style={{backgroundColor:color}}></button>
                ))}
                <br />
                {this.state.b.map((be,index) => (
                        <div>
                            <button className='master' style={{backgroundColor:this.state.newColor[index]}}>{index}</button>
                            <button className='master' style={{backgroundColor:this.state.newColor[index]}}></button>                         
                            <button className='master' style={{backgroundColor:this.state.newColor[index]}}></button> 
                            <button className='master' style={{backgroundColor:this.state.newColor[index]}}></button> 
                        </div>
                ))}
                <button  onClick={this.checkValue} > check</button> 
                        <button className='checkResult' style={{backgroundColor:this.state.resultColor[0]}}></button>
                        <button className='checkResult' style={{backgroundColor:this.state.resultColor[1]}}></button>
                        <button className='checkResult' style={{backgroundColor:this.state.resultColor[2]}}></button>
                        <button className='checkResult' style={{backgroundColor:this.state.resultColor[3]}}></button>
                
            </div>
        </div>
    </div>
  )
}
}
