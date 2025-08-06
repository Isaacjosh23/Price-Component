const PricePlan = [
  {
    title: "Basic",

    price: {
      monthly: 19.99,
      yearly: 199.99,
    },

    features: {
      feature1: "500 GB Storage",
      feature2: "2 Users Allowed",
      feature3: "Send up to 3GB",
    },
  },
  {
    title: "Professional",

    price: {
      monthly: 24.99,
      yearly: 249.99,
    },

    features: {
      feature1: "1 TB Storage",
      feature2: "5 Users Allowed",
      feature3: "Send up to 10GB",
    },
  },
  {
    title: "Master",

    price: {
      monthly: 39.99,
      yearly: 399.99,
    },

    features: {
      feature1: "2 TB Storage",
      feature2: "10 Users Allowed",
      feature3: "Send up to 20GB",
    },
  },
];

import PriceCard from "./PriceCard";

export default function PriceCards({ isMonthly, onTogglePrice }) {
  return (
    <ul className="flex items-center max-sm:flex-col max-sm:justify-center max-sm:gap-20">
      {PricePlan.map((plan, i) => (
        <PriceCard
          key={i}
          plan={plan}
          index={i}
          isMonthly={isMonthly}
          onTogglePrice={onTogglePrice}
        />
      ))}
    </ul>
  );
}
