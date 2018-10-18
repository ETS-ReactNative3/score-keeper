import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Swipeable from 'react-swipeable'

import './ShotCounter.css';

class ShotCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shotCounts: new Map().set(this.props.period, 0),
      shotTotal: 0
    }
  }

  handleShotClick = () => {
    this.shotEvent(1);  
  }

  swipedLeft = () => {
    this.shotEvent(-1);
  }

  shotEvent = (value) => {
    const tempShotCounts = this.state.shotCounts;
    const count = tempShotCounts.get(this.props.period) || 0;
    tempShotCounts.set(this.props.period, count + value);

    this.setState({shotCounts: tempShotCounts })
    this.setState({shotTotal: this.state.shotTotal + value});
  }

  render() {
    return (
      <div className={`.shot-counter ${this.props.side.toLowerCase()}`}>
        <Row>
          <Col xs={12}>
            <h3>{this.props.side} ({this.state.shotTotal})</h3>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <Swipeable onSwipedLeft={this.swipedLeft} trackMouse="true">
              <div className="tap-button" onClick={this.handleShotClick}>
                <Card body>
                  <h3>{this.props.period}</h3>
                  <h3>{this.state.shotCounts.get(this.props.period) || 0}</h3>
                </Card>
              </div>
            </Swipeable>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <div className="instructions">
              <div>Tap to add shot</div>
              <div>Swipe left to remove shot</div>
            </div>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default ShotCounter;