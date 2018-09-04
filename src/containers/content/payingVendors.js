import React from 'react';

class PayingVendors extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            expense: 187500,
            checks: 10,
            online: 40,
            ePayments: 10,
            wires: 30,
        }

        this.updateField = this.updateField.bind(this);
    }

    updateField(e) {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div><div className='contentTitle'>Business Information</div>
                <div className='contentQuestions'>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            What are the monthly expenses for your business?
                        </div>
                        <div className='input flexChild'>
                            <input className='blue' type="number" name="quantity" id='expense' value={this.state.expense} step='500' min="10000" max="500000" onChange={this.updateField} />
                        </div>
                    </div>
                    <div className='flexRow paddingTop'>
                        <div className='question flexChild'>
                            How many of the following do you have each month?
                        </div>
                    </div>
                    <div className='subQuestions'>
                        <div className='flexRow paddingTop'>
                            <div className='question flexChild'>
                                Checks Written
                            </div>
                            <div className='input flexChild'>
                                <input className='gold' type="number" name="quantity" id='checks' value={this.state.checks} step='5' min="0" max="100" onChange={this.updateField} />
                            </div>
                        </div>
                        <div className='flexRow paddingTop'>
                            <div className='question flexChild'>
                                Bills Paid Online
                            </div>
                            <div className='input flexChild'>
                                <input className='blue' type="number" name="quantity" id='online' value={this.state.online} step='5' min="0" max="100" onChange={this.updateField} />
                            </div>
                        </div>
                        <div className='flexRow paddingTop'>
                            <div className='question flexChild'>
                                ePayments (ACH)
                            </div>
                            <div className='input flexChild'>
                                <input className='bronze'type="number" name="quantity" id='ePayments' value={this.state.ePayments} step='5' min="0" max="100" onChange={this.updateField} />
                            </div>
                        </div>
                        <div className='flexRow paddingTop'>
                            <div className='question flexChild'>
                                Wire Transfers
                            </div>
                            <div className='input flexChild'>
                                <input className='silver' type="number" name="quantity" id='wires' value={this.state.wires} step='5' min="0" max="100" onChange={this.updateField} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PayingVendors;