'use client'

import { BoardContext } from "../boardContext/BoardContext";
import { Robot } from "./Robot";
import { useContext } from 'react'

export const SimBoard = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error ('context is null or undefined')
  }

  const { state } = context
  const board = Array(state.boardSize).fill(Array(state.boardSize).fill(null));

  return (
   <div>
    <div className="grid grid-cols-5 w-fit">
      {board.map((row, y: number) => row.map((_, x: number) => (
        <div
        key={`${x}-${y}`}
        className="w-20 h-20 flex items-center justify-center border border-gray-300 "
        >
          {state.position.x === x && state.position.y === y && <Robot/>}      
        </div>
      ))
    )}
    </div>
   </div> 
  )
}