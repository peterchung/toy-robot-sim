import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/shadcn/ui/accordion"
import { listOfInstructions } from "../boardContext/boardConstants"

export const Instructions = () => {
  return (
    <div className="mx-auto">
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
        <AccordionTrigger className="font-extrabold text-lg px-10 flex justify-center">INSTRUCTIONS:</AccordionTrigger>
        <AccordionContent>
          <ul className="px-10">
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