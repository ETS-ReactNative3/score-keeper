import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SavePercentage extends Component {

  render() {
    return (
      <div className={".save-percentage"}>
        <Row>
          <Col sm={4}>
            <h5>Shots: {this.props.side.goals + this.props.side.saves}</h5>
          </Col>
          <Col sm={4}>
            <h5>Saves: {this.props.side.saves}</h5>
          </Col>
          <Col sm={4}>
            <h5>SV%: {this.props.side.savePercentage}</h5>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default SavePercentage;