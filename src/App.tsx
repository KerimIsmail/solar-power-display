import { ThemeProvider } from "./components/theme-provider";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="m-10 flex flex-col gap-10">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}
