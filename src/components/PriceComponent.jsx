import { useState } from "react";
import PriceCards from "./PriceCards";
import PriceHeader from "./PriceHeader";

export default function PriceComponent() {
  const [isMonthly, setIsMonthly] = useState(true);

  function handletogglePricing() {
    setIsMonthly(!isMonthly);
  }

  console.log(isMonthly);

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <PriceHeader isMonthly={isMonthly} setIsMonthly={setIsMonthly} />

      <PriceCards isMonthly={isMonthly} onTogglePrice={handletogglePricing} />
    </div>
  );
}
