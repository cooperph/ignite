import React from 'react';

class BusinessInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            hover: false,
            numEmployees: 1,
            numChecking: 1,
            balance: 10000,
        }

        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMoustOut = this.handleMoustOut.bind(this);
        this.changeEmployees = this.changeEmployees.bind(this);
        this.changeChecking  = this.changeChecking.bind(this);
        this.updateBalance = this.updateBalance.bind(this);
    }

    handleMouseIn() {
        this.setState({
            hover: true,
        })
    }

    handleMoustOut() {
        this.setState({
            hover: false,
        })
    }

    changeEmployees(e) {
        this.setState({
            numEmployees: e.currentTarget.value,
        })
    }

    changeChecking(e) {
        this.setState({
            numChecking: e.currentTarget.value,
        })
    }

    updateBalance(e) {
        this.setState({
            balance: e.currentTarget.value,
        })
    }

    render() {
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none',
            margin: '2%',
            border: '5%',
            textAlign: 'center',
        }
        return (
            <div>
                <div className='contentTitle'>Business Information</div>
                <div className='contentQuestions'>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            What is your role in the business?
                        </div>
                        <div className='input flexChild'>
                            <select name='businessRole'>
                                <option value='Owner'>Owner</option>
                                <option value='President'>President</option>
                                <option value='CFO'>CFO</option>
                                <option value='Accountant'>Accountant</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            Number of employees (including you)
                        </div>
                        <div className='input flexChild'>
                            <input className='blue'type="number" name="quantity" value={this.state.numEmployees} min="1" max="5000" onChange={this.changeEmployees} />
                        </div>
                    </div>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            Number of business checking accounts?
                        </div>
                        <div className='input flexChild'>
                            <input className='blue' type="number" name="quantity" value={this.state.numChecking} min="1" max="5" onChange={this.changeChecking}/>
                        </div>
                    </div>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            Estimated total balance of all your business deposit accounts ($)
                            <i className="fas fa-info-circle" onMouseOver={this.handleMouseIn} onMouseOut={this.handleMoustOut}></i>
                            <div>
                                <div style={tooltipStyle}>Some financial data tooltip here!</div>
                            </div>
                        </div>
                        <div className='input flexChild'>
                            <input className='blue' type="number" name="quantity" value={this.state.balance} step='50000' min="0" max="250000" onChange={this.updateBalance}/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default BusinessInfo;