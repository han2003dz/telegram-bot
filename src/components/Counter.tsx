import { useTelegramInitData } from "../hooks/useTelegramInitData";
import WebApp from "@twa-dev/sdk";
import {
  Button,
} from "./style/Styled";

export function Counter() {
  const initData = useTelegramInitData();

  console.log({ initData });

  const testPayment = async () => {
    WebApp.openInvoice(
      "https://t.me/$bD9YmNq3wFQLAQAAa5bWpiYh224",
      (status) => {
        console.log(111, status);
      }
    );
  };

  return (
    <div className="Container">
      <Button
        onClick={() => {
          testPayment();
        }}
      >
        Test
      </Button>
      <h1>initData</h1>
      <pre>{JSON.stringify(initData, null, 2)}</pre>
    </div>
  );
}
