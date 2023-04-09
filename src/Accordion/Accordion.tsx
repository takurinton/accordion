import { ReactNode, useState } from "react";
import { AccordionContext } from "./AccordionContext";
import { AccordionTitle } from "../AccordionTitle";
import { AccordionContent } from "../AccordionContent";
import {
  AccordionContentContainer,
  AccordionTitleChildrenContainer,
  AccordionTitleContainer,
  DropdownIndicator,
  IconButton,
} from "./styled";
import { Icon } from "ingred-ui";

type Props = {
  title: ReactNode;
  expanded?: boolean;
  disabled?: boolean;
  onChange?: (event: React.SyntheticEvent, expanded: boolean) => void;
  children: ReactNode | ReactNode[];
};

export const Accordion = ({
  title,
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
    <div>
      <AccordionTitleContainer
        display="flex"
        onClick={(event) => {
          handleChange(event, !expandedState);
        }}
        disabled={disabled}
      >
        <AccordionTitleChildrenContainer>
          {title}
        </AccordionTitleChildrenContainer>
        <DropdownIndicator>
          <IconButton expanded={expandedState}>
            <Icon name="arrow_bottom" size="md" color="black" />
          </IconButton>
        </DropdownIndicator>
      </AccordionTitleContainer>
      <AccordionContentContainer expanded={expandedState}>
        {children}
      </AccordionContentContainer>
    </div>
  );
};
