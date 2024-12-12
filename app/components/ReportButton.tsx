import { Button } from "@/shadcn/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/shadcn/ui/drawer";

export const ReportButton = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
      <Button variant='secondary' size='lg' className="border border-solid border-cyan-400">
      Report
    </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto">
          <DrawerHeader>
            <DrawerTitle>Robot Report</DrawerTitle>
            <DrawerDescription>Placeholder for direction, location, total moves</DrawerDescription>
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