import { useState, useEffect } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_O = "O";

function checkWinner(){
    console.log("check winner")
}

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState();

    const handleTileClick = (index)=>{
        if (tiles[index] !== null) {
            return;
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O);
        } else {
            setPlayerTurn(PLAYER_X);
        }
    }

    useEffect(()=>{
        checkWinner();
    }, [tiles]);

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
        </div>
    );
}

export default TicTacToe;