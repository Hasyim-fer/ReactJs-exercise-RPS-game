import React from "react";

function RoomGame(props) {
  return (
    <div className="room">
      <h3>{props.roomName}</h3>
      <div>
        <div className="room-info">
          <h4>Player 1</h4>
          <div style={{margin: "0 5px"}}>:</div>
          <p>{props.player1}</p>
        </div>
        <div className="room-info">
          <h4>Player 2</h4>
          <div style={{margin: "0 5px"}}>:</div>
          <p>{props.player2}</p>
        </div>
        <div className="room-info">
          <h4>Status</h4>
          <div style={{margin: "0 5px 0 18px"}}>:</div>
          <p>{props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default RoomGame;
