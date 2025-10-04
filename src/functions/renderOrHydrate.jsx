import { StrictMode } from "react";
import { BaseStyles, ThemeProvider } from "@primer/react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

export default function renderOrHydrate(Component) {
  const rootElement = document.getElementById("root");

  const element = (
    <StrictMode>
      <BrowserRouter>
        <ThemeProvider
          colorMode="auto"
          dayScheme="light"
          nightScheme="dark_dimmed"
          preventSSRMismatch={true}
        >
          <BaseStyles>
            <Component />
          </BaseStyles>
        </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, element);
  } else {
    createRoot(rootElement).render(element);
  }
}
