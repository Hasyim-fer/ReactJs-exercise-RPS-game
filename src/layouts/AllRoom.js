import React, {useState} from "react";
import RoomGame from "../components/fragments/RoomGame";

function AllRoom() {
  const [room, setRoom] = useState([
    {
      roomId: 1,
      roomName: "the One",
      player1: "makmur",
      player2: "warmad",
      status: "Player 1 Win",
    },
    {
      roomId: 2,
      roomName: "And",
      player1: "makmur",
      player2: "warmad",
      status: "Match Draw",
    },
    {
      roomId: 3,
      roomName: "the Only",
      player1: "warmad",
      player2: "makmur",
      status: "Player 2 Win",
    },
    {
      roomId: 4,
      roomName: "Ikan Berkepala Lele",
      player1: "mirzaXriot",
      player2: "kholilGaming",
      status: "Player 1 Win",
    },
    {
      roomId: 5,
      roomName: "Nopo Bener",
      player1: "D'xagree",
      player2: "8gree",
      status: "Match Draw",
    },
    {
      roomId: 6,
      roomName: "clasher",
      player1: "barKing",
      player2: "ArcQwen",
      status: "Player 2 Win",
    },
    {
      roomId: 7,
      roomName: "Best Anime",
      player1: "Black_Clover",
      player2: "JJK",
      status: "Player 1 WIN",
    },
    {
      roomId: 8,
      roomName: "Khilma",
      player1: "balikan",
      player2: "move-on",
      status: "Match Draw",
    },
    {
      roomId: 9,
      roomName: "tulung penjelasannya",
      player1: "No-Mercy",
      player2: "Forget.it",
      status: "Player 2 Win",
    },
    {
      roomId: 10,
      roomName: "PEJATEN",
      player1: "Medeni",
      player2: "dusun",
      status: "Player 1 WIN",
    },
    {
      roomId: 11,
      roomName: "the View",
      player1: "Nature",
      player2: "City",
      status: "Match Draw",
    },
    {
      roomId: 12,
      roomName: "pilpres",
      player1: "anisXganjar",
      player2: "prabowo",
      status: "Player 2 Win",
    },
    {
      roomId: 13,
      roomName: "Name",
      player1: "Refryha",
      player2: "Feryha",
      status: "Player 1 WIN",
    },
    {
      roomId: 14,
      roomName: "D'Destroyer",
      player1: "Basuki",
      player2: "Purnomo",
      status: "Match Draw",
    },
    {
      roomId: 15,
      roomName: "Air Fighter",
      player1: "EagleF15",
      player2: "RaptorF22",
      status: "Player 2 Win",
    },
    {
      roomId: 16,
      roomName: "Navy",
      player1: "ALRI",
      player2: "TNI AL",
      status: "Player 1 WIN",
    },
    {
      roomId: 17,
      roomName: "Air Force",
      player1: "AURI",
      player2: "TNI AU",
      status: "Match Draw",
    },
    {
      roomId: 18,
      roomName: "The Song",
      player1: "greenDay",
      player2: "LinkinPark",
      status: "Player 2 Win",
    },
  ]);
  return (
    <div className="all-room-wrap">
      {room.map((room) => {
        return <RoomGame key={room.roomId} roomName={room.roomName} player1={room.player1} player2={room.player2} status={room.status} />;
      })}
    </div>
  );
}

export default AllRoom;
