import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      costs: 1,
      fairness: 'fair',
      itemName: '',
      itemPrice: null,
      show: false
    }
    this.enterItem = this.enterItem.bind(this)
    this.enterPrice = this.enterPrice.bind(this)
    this.priceCheck = this.priceCheck.bind(this)
  }

  enterItem(e){
      const newItem = e.currentTarget.value
      this.setState({ itemName: newItem}) 
  }

  enterPrice(e){
    const newPrice = e.currentTarget.value
    this.setState({ itemPrice: newPrice})
  }

  priceCheck(e){
    e.preventDefault()
    const compared = this.state.itemPrice < this.state.costs
    const hide = this.state.itemName === 'Hand Sanitizer'
    if(compared === true){
      const level = 'Bargain 😇'
      this.setState({ fairness: level, show: hide})
    }else{
      const level = 'Ripoff 🤬'
      this.setState({ fairness: level, show: hide})
    }
    
  }

  render(){
    const fairnessMessage = this.state.fairness === 'Bargain 😇'? 'Give an awesome review ⭐':'Snitch on a store 🐀'
    const sampleCard = (this.state.show &&
      <Card style={{ width: '18rem', margin:'1rem auto' }}>
        <Card.Img variant="top" src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1200&h=800&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F23%2Fsanitizer_new_6oz_1200x6301.jpg" />
        <Card.Body>
          <Card.Title>{this.state.itemName} avg. cost:</Card.Title>
          <Card.Text>
            ${this.state.costs} per ounce
          </Card.Text>
          <Card.Title>Price fairness:</Card.Title>
          <Card.Text>{this.state.fairness}</Card.Text>
          <Button variant="primary">{fairnessMessage}</Button>
          </Card.Body>
        </Card>)
    
    return (
      <div style={{display:'flex', padding:'10px', flexDirection:'Column', justifyContent:'Center', backgroundColor:'#ff6200'}}>
        <h3 style={{color:"#212529", marginBottom:'1rem'}}>🧴Commodity Democracy⚖️</h3>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">🥛 Commodity Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
            onChange= {this.enterItem}
            value = {this.state.itemName}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">💸 Price per ounce &nbsp;&nbsp;&nbsp;</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="enter amount"
            aria-label="amount"
            aria-describedby="basic-addon1"
            onChange= {this.enterPrice}
            value = {this.state.itemPrice}
          />
        </InputGroup>
        <Button variant="primary" onClick = {this.priceCheck}>🏷️ Get that price!</Button>
        {sampleCard}
      </div>
    );
  }
}

export default App;
