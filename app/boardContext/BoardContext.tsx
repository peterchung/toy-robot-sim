'use client'

import { createContext, useReducer} from "react";
import { boardReducer } from "./boardReducer";
import { initialState } from "./boardConstants";
import { BoardContextType } from "@/lib/types";

export const BoardContext = createContext<BoardContextType | null>(null);

export const BoardProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch}}>
      {children}
    </BoardContext.Provider>
  )
}