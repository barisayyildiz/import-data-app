import HumansIcon from "../assets/svg/IconHumans.jsx";
import { homePageTexts } from "../constants";

function Home() {
  const {
    header,
    subHeader,
    buttonText,
    usage: { header: usageHeader, steps },
  } = homePageTexts;
  return (
    <div>
      <div className="flex flex-col items-center p-0 gap-10 mx-0 my-14">
        <HumansIcon />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold color-navy-700 font-circular">
            {header}
          </h1>
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-2xl color-navy-300">{subHeader}</h3>
            <a
              href="/import"
              className="flex color-white radius py-3 px-8 font-medium"
              style={{ backgroundColor: "#78BB07" }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start p-0 gap-1 text-center mx-0 my-24">
        <h2 className="text-6xl color-navy-500 font-bold">{usageHeader}</h2>
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

export default Home;
