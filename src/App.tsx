import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Button } from "./components/Button";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <Button variant="primary" />
    <Button variant="secondary" />
    <Button variant="danger" />
    <Button variant="success" />
    <Button />

    <GlobalStyle />
   </ThemeProvider>
  )
}
