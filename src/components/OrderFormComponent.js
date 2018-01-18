import React, { Component } from 'react';

export default class OrderFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameError: '',
      phoneError: '',
      addressError: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = (name, phone, address) => {
    let isError = false;
    const errors = {
      nameError: '',
      phoneError: '',
      addressError: ''
    };

    if (name === '' || typeof name !== 'string') {
      isError = true;
      errors.nameError = 'username is either empty or not a string';
    }

    if (phone === '') {
      isError = true;
      errors.phoneError = 'phone is either empty or not a number';
    }

    if (address === '') {
      isError = true;
      errors.addressError = 'Please input address';
    }
    return isError ? errors : true;
  };

  //handle submit button
  handleSubmit(event) {
    event.preventDefault();
    const $target = event.target;
    const name = $target.name.value;
    const phone = $target.phone.value;
    const address = $target.address.value;

    const error = this.validate(name, phone, address);
    if (error !== true) {
      this.setState(error);
      return;
    }
    this.props.submitOrderForm({ name, phone, address });
  }

  render() {
    //console.log('orderFormCom props is: ', this.props);
    let fillOut = this.props.input && this.props.input.map(element => element);
    //console.log('fillout: ', fillOut);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field">
              <i className="small material-icons prefix">account_circle</i>
              <input
                type="text"
                id="name"
                name="name"
                className="validate"
                placeholder="Name"
                defaultValue=""
              />
              <label>
                {fillOut && fillOut.name}
              </label>
              {this.state.nameError !== ''
                ? <p style={{ color: 'Red' }}>
                    {this.state.nameError}
                  </p>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <i className="small material-icons prefix">phone</i>
              <input
                type="number"
                id="phone"
                name="phone"
                className="validate"
                placeholder="Phone"
                defaultValue=""
              />
              <label>
                {fillOut && fillOut.phone}
              </label>
              {this.state.phoneError !== ''
                ? <p style={{ color: 'Red' }}>
                    {this.state.phoneError}
                  </p>
                : null}
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <i className="small material-icons prefix">domain</i>
              <input
                type="text"
                id="address"
                name="address"
                className="validate"
                placeholder="Address"
                defaultValue=""
              />
              <label>
                {fillOut && fillOut.address}
              </label>
              {this.state.addressError !== ''
                ? <p style={{ color: 'Red' }}>
                    {this.state.addressError}
                  </p>
                : null}
            </div>
          </div>
          <div className="center-align">
            <button
              type="submit"
              className="waves-effect waves-light btn-large">
              <i className="material-icons right">cloud</i>SUBMIT
            </button>
          </div>
        </form>
      </div>
    );
  }
}
