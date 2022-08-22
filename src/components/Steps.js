import { homePageTexts } from "../constants";

function Steps({ header, steps }) {
  return (
    <div>
      <div className="flex flex-col justify-start p-0 gap-1 text-center mx-0 my-24">
        <h2 className="text-6xl color-navy-500 font-bold">{header}</h2>
        <ul className="flex flex-row justify-center items-center">
          {steps.map((step, idx) => {
            const { style } = step;
            return (
              <li
                key={idx}
                className="flex flex-row font-bold justify-center items-center gap-4"
              >
                <p className="color-navy-75" style={style}>
                  {idx + 1}
                </p>
                <p className="color-navy-300 line-height-xl flex-wrap text-left">
                  <span className="color-orange-500">{step.emphasise}</span>{" "}
                  {step.rest}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Steps;
