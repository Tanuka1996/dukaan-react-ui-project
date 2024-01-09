import React from "react";
import ReactDOMClient from "react-dom/client";
import { PaymentsCashfree } from "./screens/PaymentsCashfree";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PaymentsCashfree />);
