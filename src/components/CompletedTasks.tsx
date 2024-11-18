import { AccordionHeader, AccordionTrigger } from "@radix-ui/react-accordion";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import TaskView from "./TaskView";
import { ChevronDownIcon } from "lucide-react";
import { buttonVariants } from "./ui/button";

export default function CompletedTasks() {
  return (
    <Accordion type="multiple" className="mt-2 ">
      <AccordionItem value="1">
        <AccordionHeader className="flex items-center gap-2">
          <span>Completed</span>
          <AccordionTrigger
            className={
              buttonVariants({ variant: "ghost" }) + " w-8 h-8 rounded-full "
            }
          >
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="py-2 flex flex-col gap-2">
          <TaskView />
          <TaskView />
          <TaskView />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
