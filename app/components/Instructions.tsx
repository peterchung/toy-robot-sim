import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/shadcn/ui/accordion"

const listOfInstructions = [
  "1. Click on any cell to place the robot (note: placing the robot in a new cell will reset the total move count to 0)",
  "2. Click the 'Move' button or press 'Enter' key to move the robot in the direction it's facing",
  "3a. Click the 'Left/Right' buttons or use 'Left/Right' arrow keys to change the robot's direction",
  "3b. Right rotates the direction 90deg clockwise. Left rotates the direction 90deg counter-clockwise",
]

export const Instructions = () => {
  return (
    <div className="rounded-md">
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
        <AccordionTrigger className="font-extrabold text-lg">INSTRUCTIONS:</AccordionTrigger>
        <AccordionContent>
          <ul>
            {listOfInstructions.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}