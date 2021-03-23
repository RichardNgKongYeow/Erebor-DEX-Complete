import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'buy') {
      content = <BuyForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        buyTokens={this.props.buyTokens}
      />
    } else {
      content = <SellForm
        ethBalance={this.props.ethBalance}
        tokenBalance={this.props.tokenBalance}
        sellTokens={this.props.sellTokens}
      />
    }

    return (
      <div id="content" className="col-md-14">
      <div className="card card-container2">
        <div className="d-flex justify-content-between mb-3">
          <button
              className="btn btn-primary"
              onClick={(event) => {
                this.setState({ currentForm: 'buy' })
              }}
            >
            Buy
            
          </button>
          <div className="account">
            <a
              style={{
                color: 'rgb(0, 102, 204)', 
                fontWeight: 'bold',
                fontSize: '14px',
                textAlign: 'center'
              }}> 
                {this.props.account}
            </a>
          </div>
          <button
              className="btn btn-danger"
              onClick={(event) => {
                this.setState({ currentForm: 'sell' })
              }}
            >
            Sell
          </button>
        </div>
        <div className="card mb-4" >
          <div className="card-body">

            {content}

          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Main;