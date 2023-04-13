import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import Landing from "./pages/Landing";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Landing />
    </QueryClientProvider>
  );
}

export default App;
