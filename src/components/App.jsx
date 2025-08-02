import PriceComponent from "./PriceComponent";

export default function App() {
  return (
    <div className="">
      <img
        src="/images/bg-top.svg"
        alt="Background Pattern"
        className="pattern absolute w-[30rem] pattern-1 max-sm:hidden"
      />

      <img
        src="/images/bg-bottom.svg"
        alt="Background Pattern"
        className="pattern absolute w-[30rem] pattern-2 max-sm:hidden"
      />

      <PriceComponent />
    </div>
  );
}
