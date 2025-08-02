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

export default function App() {
  return (
    <div className="">
      <img
        src="/images/bg-top.svg"
        alt="Background Pattern"
        className="pattern absolute w-[30rem] pattern-1"
      />

      <img
        src="/images/bg-bottom.svg"
        alt="Background Pattern"
        className="pattern absolute w-[30rem] pattern-2"
      />

      <PriceComponent />
    </div>
  );
}

function PriceComponent() {
  return (
    <div className="flex flex-col justify-center gap-16">
      <PriceHeader />

      <PriceCards />
    </div>
  );
}

function PriceHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-4xl">Our Pricing</h3>

      <div className="flex justify-between items-center">
        <p className="text-[1.2rem]">Monthly</p>

        <label className="toggle-switch">
          <input type="checkbox" />

          <span className="slider"></span>
        </label>

        <p className="text-[1.2rem]">Annually</p>
      </div>
    </div>
  );
}

function PriceCards() {
  return (
    <ul className="flex items-center gap-20">
      {PricePlan.map((plan, i) => (
        <PriceCard key={i} plan={plan} index={i} />
      ))}
    </ul>
  );
}

function PriceCard({ plan, index }) {
  return (
    <li
      className={`flex flex-col justify-center gap-14 w-[32rem] bg-white text-center rounded-3xl ${
        index === 1 ? "price-card-main" : ""
      } price-card`}
    >
      <h4
        className={`text-2xl font-semibold text-[var(--color-gray-650)] ${
          index === 1 ? "text-white" : ""
        }`}
      >
        {plan.title}
      </h4>

      <div className="flex flex-col justify-center gap-10">
        <p
          className={`flex justify-center items-center gap-3 text-8xl font-extrabold text-[var(--color-gray-700)] ${
            index === 1 ? "text-white" : ""
          }`}
        >
          <span className="text-5xl">$</span>
          {plan.price.monthly}
        </p>

        <ul className="flex flex-col justify-center gap-6">
          <hr
            className={`text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          />
          <li
            className={`text-[1.2rem] font-semibold text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          >
            {plan.features.feature1}
          </li>
          <hr
            className={`text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          />
          <li
            className={`text-[1.2rem] font-semibold text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          >
            {plan.features.feature2}
          </li>
          <hr
            className={`text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          />
          <li
            className={`text-[1.2rem] font-semibold text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          >
            {plan.features.feature3}
          </li>
          <hr
            className={`text-[var(--color-gray-650)] ${
              index === 1 ? "text-white" : ""
            }`}
          />
        </ul>

        <button
          className={`text-white text-xl font-bold cursor-pointer rounded-2xl btn ${
            index === 1 ? "price-card-main-btn" : ""
          }`}
        >
          Learn More
        </button>
      </div>
    </li>
  );
}
