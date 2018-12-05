import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import PeriodSelector from './PeriodSelector';
import SaveCounter from './SaveCounter';
import GoalCounter from './GoalCounter';
import SavePercentage from './SavePercentage';
import DonateButton from './DonateButton';
import Goalie from './Goalie'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      period: '1st',
      home: new Goalie(),
      away: new Goalie(),
      showInstructions: false
    };
  }

  handlePeriodChange = (period) => {
    this.setState({period: period});
  }

  handleHomeGoalChanged = (goalie, value) => {
    goalie.goalChanged(value);
    this.setState({home: goalie});
  }

  handleHomeSavesChanged = (goalie, value) => {
    goalie.savesChanged(value);
    this.setState({home: goalie});
  }

  handleAwayGoalChanged = (goalie, value) => {
    goalie.goalChanged(value);
    this.setState({away: goalie});
  }

  handleAwaySavesChanged = (goalie, value) => {
    goalie.savesChanged(value);
    this.setState({away: goalie});
  }

  hideInstructions = () => {
    this.setState({showInstructions: false});  
  }

  showInstructions = () => {
    const tempShowInstructions = this.state.showInstructions
    this.setState({showInstructions: !tempShowInstructions});  
  }

  render() {
    return (
      <div className="helper">
        <Container fluid="true">
          <Row>
            <Col xs={11}>
              <PeriodSelector period={this.state.period} onPeriodChange={this.handlePeriodChange}/>
            </Col>
            <Col xs={1}>
              <FontAwesomeIcon className="info" icon={faQuestionCircle} onClick={this.showInstructions}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6} className="title">
              <h4>Home</h4>
            </Col>
            <Col xs={6} className="title">
              <h4>Away</h4>
            </Col>
          </Row>
          <Alert show={this.state.showInstructions} variant="info">
            <p>
              Tap button to add a goal against or a save - Swipe left to subtract.
            </p>
            <p>
              Saves are tracked by period with the Period Selector at the top.
            </p>
            <hr />
            <div className="donate">
              <DonateButton/>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={this.hideInstructions} variant="success">
                OK
              </Button>
            </div>  
          </Alert>
          <Row>
            <Col xs={6}>
              <GoalCounter side="Home" onGoalChange={this.handleHomeGoalChanged} goalie={this.state.home}/>
            </Col>
            <Col xs={6}>
              <GoalCounter side="Away" onGoalChange={this.handleAwayGoalChanged} goalie={this.state.away}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <SaveCounter side="Home" period={this.state.period} goalie={this.state.home} onShotsChange={this.handleHomeSavesChanged}/>
            </Col>
            <Col xs={6}>
              <SaveCounter side="Away" period={this.state.period} goalie={this.state.away} onShotsChange={this.handleAwaySavesChanged}/>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <SavePercentage side={this.state.home}/>
            </Col>
            <Col xs={6}>
              <SavePercentage side={this.state.away}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
