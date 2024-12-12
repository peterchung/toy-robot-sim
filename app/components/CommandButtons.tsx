import { Button } from "@/shadcn/ui/button"

const listOfButtons = [
  {
    type: 'Left',
    action: 'rotate-left',
  },
  {
    type: 'Move',
    action: 'move',
  },
  {
    type: 'Right',
    action: 'rotate-right',
  }
]

export const CommandButtons = () => {
  return (
    <div className="w-60 flex justify-between">
      {listOfButtons.map((button) => (
      <div key={button.type}>
        <Button className="w-16">
          {button.type}
        </Button>
      </div>
    ))}
    </div>
  )
}