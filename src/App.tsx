import { ThemeProvider, createTheme } from "ingred-ui";
import { Accordion } from "./Accordion";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionTitle>title</AccordionTitle>
        <AccordionContent>コンテンツ</AccordionContent>
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
