import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import MaskedInput from 'react-text-mask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';

import './ElapsedTime.css';

class ElapsedTime extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      periodLength: '15:00',
      eventTime: '00:00',
      elapsedTime: '00:00',
      showPeriodLength: false  
    };
  }
  
  displayElapsedTime = (event) => {
    if (this.isValid(event.target.value)) {
      this.setState({eventTime: event.target.value});
      var time = new moment(new moment(this.state.periodLength, 'mm:ss').diff(new moment(event.target.value, 'mm:ss'))).format('mm:ss'); 
      this.setState({elapsedTime: time});
    }
  }

  isValid = (val) => {
    var regexp = /^\d{0,2}?:?\d{0,2}$/;
    if (val !== '00:00' && val.length === 5  && !regexp.test(val)) {
      return false;
    }

    var _splitVal = val.split(':'),
      minutesStr = _splitVal[0],
      secondsStr = _splitVal[1];

    var minutes = Number(minutesStr);
    var seconds = Number(secondsStr);

    return this.isValidMinutesOrSeconds(minutes) && this.isValidMinutesOrSeconds(seconds);
  }

  isValidMinutesOrSeconds = (val) => {
    return Number.isInteger(val) && val >= 0 && val < 60;
  }

  togglePeriodLength = () => {
    const { showPeriodLength } = this.state;
    this.setState({
      // toggle value of `showPeriodLength`
      showPeriodLength: !showPeriodLength,
    });
  }

  changePeriodLength = (event) => {
    if (this.isValid(event.target.value)) {
      this.setState({periodLength: event.target.value});
    }  
  }

  render() {
    return (
      <Row>
        <Col xs={3}>
          <span><h1 onClick={this.togglePeriodLength}>Event Time <FontAwesomeIcon icon={faCog} /></h1></span>
          <span>{this.state.showPeriodLength && <MaskedInput mask={[/[0-6]/, /\d/, ':', /[0-6]/, /\d/]}
                      className="form-control"
                      placeholder="00:00"
                      guide={true}
                      value={this.state.periodLength}
                      onChange={this.changePeriodLength}
          />}</span>            
        </Col>
        <Col xs={3}>
          <MaskedInput mask={[/[0-6]/, /\d/, ':', /[0-6]/, /\d/]}
                      className="form-control"
                      placeholder="00:00"
                      guide={true}
                      value={this.state.eventTime}
                      onChange={this.displayElapsedTime}
          />
        </Col>
        <Col xs={6}>
          <Card className="time-entry">
            <h1>Elapsed Time: {this.state.elapsedTime}</h1>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ElapsedTime;