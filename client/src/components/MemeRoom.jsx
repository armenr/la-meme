import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MemeRoomHeader from './MemeRoomHeader';
import GameDisplay from './GameDisplay';

const MemeRoom = (props) => {
  return (
  <div >
    <Grid>
      { /** props.intermission ? 'intermission' : 'not-intermission' **/}
      <MemeRoomHeader
        roomOccupancy={props.roomOccupancy}
        spectators={props.spectators}
        currentRoom={props.currentRoom}
        currentTime={props.currentTime}
        intermission={props.intermission}
      />
      <Row className="game-board">
        <Col xs={12} md={12} >
          <GameDisplay
            player2Caption={props.player2Caption}
            handleMessage={props.handleMessage}
            connectionType={props.connectionType}
            memePhoto={props.memePhoto}
            memePhotoCopy={props.memePhotoCopy}
            socket={props.socket}
            currentRoom={props.currentRoom}
          />
        </Col>
      </Row>
    </Grid>
    </div>
  );
};

export default MemeRoom;
