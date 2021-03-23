import React, { Component } from "react";
import Web3 from 'web3'
import Token from '../abis/Token.json'
import EthSwap from '../abis/EthSwap.json'
import Main from './Main'
import './styles.css'

class Tradenow extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    //this is to get balance of ether from account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ ethBalance })

    console.log("Trader Acct Address: "+this.setState.account)
    console.log("Trader Acct balance: "+this.setState.ethBalance)

    // Load Token
    const networkId =  await web3.eth.net.getId()
    const tokenData = Token.networks[networkId]
    if(tokenData) {
      const token = new web3.eth.Contract(Token.abi, tokenData.address)
      this.setState({ token })
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({ tokenBalance: tokenBalance.toString() })
    } else {
      window.alert('Token contract not deployed to detected network.')
    }

    // Load EthSwap
    const ethSwapData = EthSwap.networks[networkId]
    if(ethSwapData) {
      const ethSwap = new web3.eth.Contract(EthSwap.abi, ethSwapData.address)
      this.setState({ ethSwap })
      console.log("Network ID: "+EthSwap.networks[networkId])
      console.log("EthSwap Acct Address: "+this.state.ethSwap.address)
    } else {
      window.alert('EthSwap contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }
  
  //connecting to metamask
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  //buying tokens
  buyTokens = (etherAmount) => {
    this.setState({ loading: true })
    this.state.ethSwap.methods.buyTokens().send({ value: etherAmount, from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  //selling tokens
  sellTokens = (tokenAmount) => {
    this.setState({ loading: true })
    console.log("EthSwap Acct Address: "+this.state.ethSwap.address)
    console.log("Token Amt: "+tokenAmount)
    console.log("This State Acct: "+this.state.account)
    this.state.token.methods.approve(this.state.ethSwap.address, tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.state.ethSwap.methods.sellTokens(tokenAmount).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }

    constructor(props) {
      super(props)
      this.state = {
        account: '',
        token: {},
        ethSwap: {},
        ethBalance: '0',
        tokenBalance: '0',
        loading: true
      }
    }
  
    render() {
      let content
      if(this.state.loading) {
        content =
        <div class="wrap">
          <div class="loading">
            <div class="bounceball"></div>
            <div class="text">LOADING</div>
          </div>
        </div>
      } else {
        content = <Main
          ethBalance={this.state.ethBalance}
          tokenBalance={this.state.tokenBalance}
          buyTokens={this.buyTokens}
          sellTokens={this.sellTokens}
          account={this.state.account}
        />
      }
  
      return (
        <div className="backgroundpict">
          <img
              src={process.env.PUBLIC_URL + '/img/Background3.jpg'}
              alt="background" />
          <div style={{marginTop: '-950px',}}>
              <div className="container-fluid mt-5" style={{marginTop: '-1000px',}}>
                  <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' , borderRadius:'25px'}}>
                    <div className="content mr-auto ml-auto">

                      {content}

                    </div>
                  </main>
              </div>
          </div>
        </div>
    );
  }
}
export default Tradenow;