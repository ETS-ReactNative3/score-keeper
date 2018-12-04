import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class SavePercentage extends Component {

  render() {
    return (
      <div className={".save-percentage"}>
        <Row>
          <Col xs={4}>
            <h3>Shots: {this.props.side.goals + this.props.side.saves}</h3>
          </Col>
          <Col xs={4}>
            <h3>Saves: {this.props.side.saves}</h3>
          </Col>
          <Col xs={4}>
            <h3>SV%: {this.props.side.savePercentage}</h3>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default SavePercentage;