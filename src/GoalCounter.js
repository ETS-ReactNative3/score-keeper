import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Swipeable from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

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
          <Col xs={8} className="button-title">
            <h4>Goals</h4>
          </Col>
          <Col xs={4} className="info">
            <FontAwesomeIcon icon={faInfoCircle} onClick={this.props.showInstructions}/>
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
      </div>
    );
  }
}

export default GoalCounter;