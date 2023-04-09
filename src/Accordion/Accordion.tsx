import { ReactNode, useState } from "react";
import { noop } from "../utils";
import { AccordionContext } from "./AccordionContext";

export const Accordion = ({
  expanded = false,
  // TODO: ReactNode or icon type
  // 回転しない場合を定義したい場合がそれなりにありそうだから ReactNode の方が使い勝手がいいかもしれない
  expandedIcon = "arrow_bottom",
  disabled = false,
  onChange = noop,
  children,
}: {
  expanded?: boolean;
  expandedIcon?: string; // todo: icon type
  disabled?: boolean;
  onChange?: () => void;
  children?: ReactNode | ReactNode[];
}) => {
  const [innerExpanded, setInnerExpanded] = useState(expanded);

  return (
    <AccordionContext.Provider
      value={{
        expanded: innerExpanded,
        expandedIcon,
        disabled,
        setExpanded: setInnerExpanded,
        onChange,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
