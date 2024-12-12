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
      <Button variant='secondary' size='lg' className="border border-solid border-black font-semibold">
      Report
    </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <DrawerHeader>
            <DrawerTitle>Robot Report</DrawerTitle>
            <DrawerDescription>Current direction: {currentDirection}</DrawerDescription>
            <DrawerDescription>Current position: {`[${state.position.x}, ${state.position.y}]`}</DrawerDescription>
            <DrawerDescription>Total move count: {state.totalMoves}</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button size='sm'>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}