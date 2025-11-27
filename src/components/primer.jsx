import { BaseStyles, ThemeProvider } from "@primer/react";

export default function PrimerCoat({ children }) {
  return (
    <ThemeProvider
      colorMode="auto"
      dayScheme="light"
      nightScheme="dark_dimmed"
      preventSSRMismatch={true}
    >
      <BaseStyles>{children}</BaseStyles>
    </ThemeProvider>
  );
}
