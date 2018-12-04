import React, { Component } from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import Swipeable from 'react-swipeable'

import './ShotCounter.css';

class SaveCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saveCounts: new Map().set(this.props.period, 0)
    }
  }

  handleSaveClick = () => {
    this.saveEvent(1);  
  }

  swipedLeft = () => {
    this.saveEvent(-1);
  }

  saveEvent = (value) => {
    const tempSaveCounts = this.state.saveCounts;
    const count = tempSaveCounts.get(this.props.period) || 0;
    tempSaveCounts.set(this.props.period, count + value);

    this.setState({shotCounts: tempSaveCounts })
    this.props.onShotsChange(value)
  }

  render() {
    return (
      <div className={`.shot-counter ${this.props.side.toLowerCase()}`}>
        <Row>
          <Col xs={12}>
            <h3>{this.props.side} ({this.props.saves})</h3>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <Swipeable onSwipedLeft={this.swipedLeft} trackMouse="true">
              <div className="tap-button" onClick={this.handleSaveClick}>
                <Card body>
                  <h3>{this.props.period}</h3>
                  <h3>{this.state.saveCounts.get(this.props.period) || 0}</h3>
                </Card>
              </div>
            </Swipeable>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <div className="instructions">
              <div>Tap to add; Swipe left to remove save</div>
            </div>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default SaveCounter;