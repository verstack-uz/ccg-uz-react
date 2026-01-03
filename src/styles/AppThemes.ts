// Themes by FlyonUI: https://flyonui.com/docs/customization/themes/#list-of-themes
const appThemes = {
  light: "light",
  dark: "dark",
  black: "black",
  claude: "claude",
  corporate: "corporate",
  ghibli: "ghibli",
  gourmet: "gourmet",
  luxury: "luxury",
  mintlify: "mintlify",
  pastel: "pastel",
  perplexity: "perplexity",
  shadcn: "shadcn",
  slack: "slack",
  soft: "soft",
  spotify: "spotify",
  valorant: "valorant",
  vscode: "vscode",
};

// AppTheme type derived from the keys of appThemes object
export type AppTheme = keyof typeof appThemes;

// Array of available app themes
export const AppThemes: AppTheme[] = Object.keys(appThemes) as AppTheme[];

// Default app theme
export const DefaultAppTheme: AppTheme = "corporate";
