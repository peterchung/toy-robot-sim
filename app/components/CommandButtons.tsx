'use client'

import { Button } from "@/shadcn/ui/button"
import { useContext, useEffect } from 'react'
import { BoardContext } from "../boardContext/BoardContext"
import { listOfButtons } from "../boardContext/boardConstants"
import { ActionsType } from "@/lib/types"

export const CommandButtons = () => {
  const context = useContext(BoardContext);

  if (context === null) {
    throw new Error('Buttons must be used within BoardProvider')
  };
  
  const { dispatch } = context;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      listOfButtons.forEach((button) => {
        if (e.key === button.keyBind) {
          console.log(`dispatch ${button.type}`)
          dispatch({ type: button.action} as ActionsType)
        }
      })
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)}
  }, [dispatch])
  
  return (
    <div className="w-40 md:w-80 flex justify-center gap-5">
      {listOfButtons.map((button) => (
      <div key={button.type}>
        <Button 
          onClick={() => {
            console.log(`${button.type} clicked!`)
            dispatch({ type: button.action } as ActionsType)
          
          }}
          variant='secondary'
          className="w-12 md:w-20 font-semibold bg-cyan-400 text-black"
        >
          {button.type}
        </Button>
      </div>
    ))}
    </div>
  )
}