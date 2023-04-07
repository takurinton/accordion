import { ReactNode, useState } from "react";
import { noop } from "../utils";
import { AccordionContext } from "./AccordionContext";

export const Accordion = ({
  expanded = false,
  onChange = noop,
  children,
}: {
  expanded?: boolean;
  onChange?: () => void;
  children?: ReactNode | ReactNode[];
}) => {
  const [innerExpanded, setInnerExpanded] = useState(expanded);

  return (
    <AccordionContext.Provider
      value={{
        expanded: innerExpanded,
        setExpanded: setInnerExpanded,
        onChange,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
