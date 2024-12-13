'use client'

import { BoardContext } from "../boardContext/BoardContext";
import { Robot } from "./Robot";
import { useContext } from 'react'
import { actions } from "../boardContext/boardConstants";


export const SimBoard = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error ('context is null or undefined')
  }

  const { state, dispatch } = context
  const board = Array(state.boardSize).fill(Array(state.boardSize).fill(null));

  return (
   <div>
    <div className="grid grid-cols-5 w-fit">
      {board.map((row, y: number) => row.map((_: null, x: number) => (
        <div
        key={`${x}-${state.boardSize - y - 1}`}
        onClick={() => dispatch({ type: actions.place, payload: { x, y }})}
        className="min-w-12 min-h-12 md:w-20 md:h-20 flex items-center justify-center border border-red-200 bg-slate-800 hover:cursor-pointer"
        >
          {state.position.x === x && state.position.y === state.boardSize - y - 1 && <Robot/>}      
        </div>
      ))
    )}
    </div>
   </div> 
  )
}