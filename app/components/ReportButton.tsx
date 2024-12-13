'use client'

import { Button } from "@/shadcn/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/shadcn/ui/drawer";
import { useContext } from "react";
import { BoardContext } from "../boardContext/BoardContext";
import { translateDirection } from "@/lib/utils";

export const ReportButton = () => {
  const context = useContext(BoardContext)

  if (!context) {
    throw new Error ('context is null or undefined')
  }

  const { state } = context
  const currentDirection = translateDirection(state.direction)

  return (
    <Drawer>
      <DrawerTrigger asChild>
      <Button variant='secondary' className="border border-solid border-cyan-400 font-semibold text-white bg-slate-800 w-16 md:w-32">
      Report
    </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-white">Robot Report</DrawerTitle>
            <DrawerDescription>Current direction: {currentDirection}</DrawerDescription>
            <DrawerDescription>Current position: {`[${state.position.x}, ${state.position.y}]`}</DrawerDescription>
            <DrawerDescription>Total move count: {state.totalMoves}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <div className="flex justify-center">
              <Button className="border border-solid border-cyan-400 font-semibold text-white bg-slate-800 w-16 md:w-32">Close</Button>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}