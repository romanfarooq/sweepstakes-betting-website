import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import { FaRegCircleDot } from "react-icons/fa6";


const ResueableAccordion = ({ title, items, titleIcon }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title} className="border-b-0">
        <AccordionTrigger
          className="flex justify-between w-full p-3 text-white hover:bg-indigo-800"
          style={{ textDecoration: "none" }} 
        >
          <div className="flex items-center gap-3 w-full">
            {titleIcon}
            <span className="text-sm font-medium">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-indigo-800 p-0"> 
          <div className="flex flex-col text-sm justify-start">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.href || "/"}
                className={({ isActive }) =>
                  `flex w-full h-full items-center gap-2 py-4 px-6 text-white ${
                    isActive ? "bg-indigo-950 border-l-4 border-indigo-400" : ""
                  }`
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
