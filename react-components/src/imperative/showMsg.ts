import { createRoot } from "react-dom/client";
import Message from "../components/Message/Message";
function showMsg(text: string, duration = 3000) {
  const div = document.createElement("div");
  document.body.appendChild(div);
  createRoot(div).render(Message({ text, duration }));
  let timer = setTimeout(() => {
    document.body.removeChild(div);
    clearTimeout(timer);
  }, duration);
}
export default showMsg;
