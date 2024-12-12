'use client'

import { Button } from "@/shadcn/ui/button"
import { useContext, useEffect } from 'react'
import { actions } from "../boardContext/boardConstants"
import { BoardContext } from "../boardContext/BoardContext"
import { ButtonConfig } from "@/lib/types"

const listOfButtons: ButtonConfig[] = [
  {
    type: 'Left',
    action: actions.rotate_left,
    keyBind: 'ArrowLeft',
  },
  {
    type: 'Move',
    action: 'move',
  },
  {
    type: 'Right',
    action: actions.rotate_right,
    keyBind: 'ArrowRight',
  }
]

export const CommandButtons = () => {
  const context = useContext(BoardContext);

  if (context === null) {
    throw new Error('Buttons must be used within BoardProvider')
  };
  
  const { dispatch } = context;

  useEffect(() => {
    const handleKeyDown = (e) => {
      listOfButtons.forEach((button) => {
        if (e.key === button.keyBind) {
          console.log(`dispatch ${button.type}`)
          dispatch({ type: actions[button.action]})
        }
      })
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {window.removeEventListener('keydown', handleKeyDown)}
  }, [dispatch])
  
  return (
    <div className="w-60 flex justify-between">
      {listOfButtons.map((button) => (
      <div key={button.type}>
        <Button 
          onClick={() => {
            console.log(`${button.type} clicked!`)
            dispatch({ type: button.action })
          
          }}
          className="w-16">
          {button.type}
        </Button>
      </div>
    ))}
    </div>
  )
}