import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import './App.css';
import ElapsedTime from './ElapsedTime';
import PeriodSelector from './PeriodSelector';
import ShotCounter from './ShotCounter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      period: '1st',
    };
  }

  handlePeriodChange = (period) => {
    this.setState({period: period});
  }

  render() {
    return (
      <div className="helper">
        <Container fluid="true">
          <ElapsedTime/>
          <Row>
            <Col>
              <h1 className="title">Shot Counter</h1>
            </Col> 
          </Row>
          <PeriodSelector period={this.state.period} onPeriodChange={this.handlePeriodChange}/>
          <Row>
            <Col xs={6}>
              <ShotCounter side="Home" period={this.state.period}/>
            </Col>
            <Col xs={6}>
              <ShotCounter side="Away" period={this.state.period}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
