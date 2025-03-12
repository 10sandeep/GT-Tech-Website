import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// class Student {
//   private username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   async createUser(username: string, email: string, password: string): Promise<string> {
//     // Placeholder for actual user creation logic
//     return "User created successfully";
//   }
// }

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
