import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { IoIosPeople } from "react-icons/io";
import { MdNotStarted } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ResueableAccordion = ({ title, items }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title} className="border-b-0">
        <AccordionTrigger
          className="flex justify-between w-full p-3 text-white hover:bg-indigo-800"
          style={{ textDecoration: "none" }} 
        >
          <div className="flex items-center gap-2 w-full">
            <IoIosPeople className="w-5 h-5" />
            <span className="text-base font-medium">{title}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="bg-indigo-900">
          <div className="ml-7 flex flex-col text-base space-y-2 justify-start">
            {items.map((item, index) => (
              <NavLink
                key={index}
                to={item.href || "/"}
                className={({ isActive }) =>
            `flex w-full items-center gap-2 py-3 px-6 text-white ${
              isActive ? "bg-indigo-900" : ""
            }`
          }
                style={{ textDecoration: "none" }} 
              >
                <MdNotStarted className="h-5 w-5" /> 
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
