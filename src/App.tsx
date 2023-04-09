import { Spacer, ThemeProvider, createTheme } from "ingred-ui";
import { Accordion } from "./Accordion";
import { AccordionTitle } from "./AccordionTitle";
import { AccordionContent } from "./AccordionContent";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionTitle>title</AccordionTitle>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
          magna, dictum vel elementum ac, fermentum quis lorem. Aliquam sapien
          augue, efficitur eget tincidunt non, accumsan et est. Aliquam lobortis
          elit lorem, id ullamcorper libero elementum non. Sed rutrum porta
          enim, et aliquet velit hendrerit ac. Morbi tincidunt eleifend elit.
        </AccordionContent>
      </Accordion>
      <Spacer pb={1} />
      <Accordion disabled>
        <AccordionTitle>title(disabled)</AccordionTitle>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
          magna, dictum vel elementum ac, fermentum quis lorem. Aliquam sapien
          augue, efficitur eget tincidunt non, accumsan et est. Aliquam lobortis
          elit lorem, id ullamcorper libero elementum non. Sed rutrum porta
          enim, et aliquet velit hendrerit ac. Morbi tincidunt eleifend elit.
        </AccordionContent>
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
