'use client'

import { Bot, MoveUp } from 'lucide-react';
import { useContext } from 'react';
import { BoardContext } from '../boardContext/BoardContext';

export const Robot = () => {
  // TODO: import robot direction state and replace hardcode degree input
  const context = useContext(BoardContext);

  if (context === null) {
    throw new Error('context is null or undefined')
  }

  const { state } = context;

  return (
    <div 
    className='flex flex-col items-center justify-center'
    style={{ transform: `rotate(${state.direction}deg)`}}
    >
      <MoveUp />
      <Bot />
    </div>
  )
}
