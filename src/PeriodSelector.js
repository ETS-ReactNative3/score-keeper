import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';

class PeriodSelector extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (value, event) => {
    this.props.onPeriodChange(value);
  }

  render() {
    return (
      <Row>
        <Col xs={5}>
          <h4 className="float-right">Period:</h4>
        </Col>
        <Col xs={7}>
          <ToggleButtonGroup type="radio" value={this.props.period} name="periods" onChange={this.handleChange}>
            <ToggleButton value={'1st'} variant="outline-secondary">1st</ToggleButton>
            <ToggleButton value={'2nd'} variant="outline-secondary">2nd</ToggleButton>
            <ToggleButton value={'3rd'} variant="outline-secondary">3rd</ToggleButton>
            <ToggleButton value={'OT'} variant="outline-secondary">OT</ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
    );
  }
}

export default PeriodSelector;