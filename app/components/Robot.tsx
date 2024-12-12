import { Bot, MoveUp } from 'lucide-react';

export const Robot = () => {
  // TODO: import robot direction state and replace hardcode degree input

  return (
    <div 
    className='flex flex-col items-center justify-center'
    style={{ transform: `rotate(${90}deg)`}}
    >
      <MoveUp />
      <Bot />
    </div>
  )
}
