import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Swipeable from 'react-swipeable'

import './ShotCounter.css';

class GoalCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      goals: 0
    }
  }

  handleGoalClick = () => {
    this.goalEvent(1);  
  }

  swipedLeft = () => {
    this.goalEvent(-1);
  }

  goalEvent = (value) => {
    this.props.onGoalChange(value);
  }

  render() {
    return (
      <div className={`.shot-counter ${this.props.side.toLowerCase()}`}>
        <Row>
          <Col xs={12}>
            <h3>{this.props.side} ({this.props.goals})</h3>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <Swipeable onSwipedLeft={this.swipedLeft} trackMouse="true">
              <div className="tap-button" onClick={this.handleGoalClick}>
                <Card body>
                  <h3>{this.props.goals}</h3>
                </Card>
              </div>
            </Swipeable>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <div className="instructions">
              <div>Tap to add; Swipe left to remove goal</div>
            </div>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default GoalCounter;