export default function PriceHeader({ isMonthly, setIsMonthly }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h3 className="text-4xl max-sm:text-3xl">Our Pricing</h3>

      <div className="flex justify-between items-center">
        <p className="text-[1.2rem]">Monthly</p>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={!isMonthly}
            onChange={() => setIsMonthly((prev) => !prev)}
          />

          <span className="slider"></span>
        </label>

        <p className="text-[1.2rem]">Annually</p>
      </div>
    </div>
  );
}
