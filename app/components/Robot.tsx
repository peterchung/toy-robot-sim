'use client'

import { Bot, MoveUp } from 'lucide-react';
import { useContext } from 'react';
import { BoardContext } from '../boardContext/BoardContext';

export const Robot = () => {
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
      <MoveUp className='stroke-cyan-400'/>
      <Bot className='stroke-cyan-400'/>
    </div>
  )
}
