import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import { FaRegCircleDot } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const ResueableAccordion = ({ title, items, titleIcon }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title} className="border-b-0">
        <AccordionTrigger
          className="flex w-full justify-between p-3 text-white hover:bg-indigo-600"
          style={{ textDecoration: "none" }}
        >
          <div className="flex w-full items-center gap-3">
            {titleIcon}
            <span className="text-left text-sm font-medium">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-0">
          <div className="flex flex-col justify-start text-sm">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.href || "/"}
                className={({ isActive }) =>
                  cn(
                    "flex h-full w-full items-center gap-2 border-l-4 border-transparent p-4 text-white hover:bg-indigo-600",
                    {
                      "border-indigo-400 bg-indigo-800": isActive,
                    },
                  )
                }
                style={{ textDecoration: "none" }}
              >
                <FaRegCircleDot className="h-3 w-3" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ResueableAccordion;
