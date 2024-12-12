import { Robot } from "./Robot";

export const SimBoard = () => {
  const board = Array(5).fill(Array(5).fill(null));

  return (
   <div>
    <div className="grid grid-cols-5 w-fit">
      {board.map((row, y) => row.map((_, x) => (
        <div
        key={`${x}-${y}`}
        className="w-20 h-20 flex items-center justify-center border border-gray-300 "
        >
          <Robot/>      
        </div>
      ))
    )}
    </div>
   </div> 
  )
}