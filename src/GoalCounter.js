import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Swipeable from 'react-swipeable';

import './ShotCounter.css';

class GoalCounter extends Component {

  handleGoalClick = () => {
    this.goalEvent(1);  
  }

  swipedLeft = () => {
    this.goalEvent(-1);
  }

  goalEvent = (value) => {
    this.props.onGoalChange(this.props.goalie, value);
  }

  render() {
    return (
      <div className={`.shot-counter ${this.props.side.toLowerCase()}`}>
        <Row>
          <Col xs={12} className="button-title">
            <h4>Goals Against</h4>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <Swipeable onSwipedLeft={this.swipedLeft} trackMouse="true">
              <div className="tap-button" onClick={this.handleGoalClick}>
                <Card body>
                  <h3>{this.props.goalie.goals}</h3>
                </Card>
              </div>
            </Swipeable>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default GoalCounter;