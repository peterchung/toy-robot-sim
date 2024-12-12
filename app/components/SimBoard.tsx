export const SimBoard = () => {
  const board = Array(5).fill(Array(5).fill(null));

  return (
   <div className="flex justify-center mt-10">
    <div className="grid grid-cols-5 w-fit">
      {board.map((row, y) => row.map((cell, x) => (
        <div
        key={`${x}-${y}`}
        className="w-16 h-16 border border-gray-300 "
        >
          
        </div>
      ))
    )}
    </div>
   </div> 
  )
}