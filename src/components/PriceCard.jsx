export default function PriceCard({ plan, index, isMonthly, onTogglePrice }) {
  return (
    <li
      className={`flex flex-col justify-center gap-14 w-[32rem] max-sm:w-[30rem] bg-white text-center ${
        index === 0
          ? "rounded-tl-3xl rounded-bl-3xl rounded-tr-none rounded-br-none"
          : ""
      } ${
        index === 2
          ? "rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none"
          : ""
      } max-sm:rounded-3xl ${
        index === 1 ? "price-card-main rounded-3xl" : ""
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
          className={`flex justify-center items-center gap-3 text-8xl max-sm:text-7xl font-extrabold text-[var(--color-gray-700)] ${
            index === 1 ? "text-white" : ""
          }`}
        >
          <span className="text-5xl max-sm:text-4xl">$</span>
          {isMonthly ? plan.price.monthly : plan.price.yearly}
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
