import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router/lazy";
import { ThemeProvider, BaseStyles } from "@primer/react";

import "./globals.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider
      colorMode="auto"
      dayScheme="light"
      nightScheme="dark_dimmed"
      preventSSRMismatch
    >
      <BaseStyles>
        <Routes />
      </BaseStyles>
    </ThemeProvider>
  </StrictMode>,
);
