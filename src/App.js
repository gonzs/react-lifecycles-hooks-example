import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClockClass from "./ClassApproach/Clock";
import TimekeeperClass from "./ClassApproach/Timekeeper";
import CounterClass from "./ClassApproach/Counter";
import ClockHooks from "./HooksApproach/Clock";
import TimekeeperHooks from "./HooksApproach/Timekeeper";
import CounterHooks from "./HooksApproach/Counter";
import Badge from "react-bootstrap/Badge";

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={6}>
          <h3>
            Clock <Badge variant="secondary">Class</Badge>
          </h3>
          <ClockClass />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h3>
            Clock <Badge variant="secondary">Hooks</Badge>
          </h3>
          <ClockHooks />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={6}>
          <h3>
            Timekeeper<Badge variant="secondary">Class</Badge>
          </h3>
          <TimekeeperClass />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h3>
            Timekeeper <Badge variant="secondary">Hooks</Badge>
          </h3>
          <TimekeeperHooks />
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} md={6}>
          <h3>
            Counter <Badge variant="secondary">Class</Badge>
          </h3>
          <CounterClass />
        </Col>
        <Col xs={12} sm={6} md={6}>
          <h3>
            Counter <Badge variant="secondary">Hooks</Badge>
          </h3>
          <CounterHooks />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
