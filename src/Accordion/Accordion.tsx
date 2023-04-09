import { ReactNode, useState } from "react";
import { AccordionContext } from "./AccordionContext";

type Props = {
  expanded?: boolean;
  disabled?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  children: ReactNode | ReactNode[];
};
export const Accordion = ({
  expanded = false,
  disabled = false,
  onChange,
  children,
}: Props) => {
  const [expandedState, setExpandedState] = useState(expanded);

  const handleChange = (event: React.SyntheticEvent, expanded: boolean) => {
    setExpandedState(expanded);
    onChange && onChange(event, expanded);
  };

  return (
    <AccordionContext.Provider
      value={{
        disabled,
        expanded: expandedState,
        onChange: handleChange,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
