import { Spacer, ThemeProvider, createTheme } from "ingred-ui";
import { Accordion } from "./Accordion";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Accordion title="title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
        magna, dictum vel elementum ac, fermentum quis lorem. Aliquam sapien
        augue, efficitur eget tincidunt non, accumsan et est. Aliquam lobortis
        elit lorem, id ullamcorper libero elementum non. Sed rutrum porta enim,
        et aliquet velit hendrerit ac. Morbi tincidunt eleifend elit.
      </Accordion>
      <Spacer pb={1} />
      <Accordion disabled title="title(disabled)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc velit
        magna, dictum vel elementum ac, fermentum quis lorem. Aliquam sapien
        augue, efficitur eget tincidunt non, accumsan et est. Aliquam lobortis
        elit lorem, id ullamcorper libero elementum non. Sed rutrum porta enim,
        et aliquet velit hendrerit ac. Morbi tincidunt eleifend elit.
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
