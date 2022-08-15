import HumansIcon from "../assets/svg/IconHumans.jsx";
import { useDispatch } from "react-redux";
import { homePageTexts } from "../constants";
import { toggleModal } from "../store/slices/modalSlice.js";
import Steps from "./Steps.js";

function Home() {
  const {
    header,
    subHeader,
    buttonText,
    usage: { header: usageHeader, steps },
  } = homePageTexts;
  const dispatch = useDispatch();
  return (
    <div>
      <div
        data-testid="home_wrapper"
        className="flex flex-col items-center p-0 gap-10 mx-0 my-14"
      >
        <HumansIcon data-testid="humans_icon" />
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold color-navy-700 font-circular">
            {header}
          </h1>
          <div className="flex flex-col items-center gap-10">
            <h3 className="text-2xl color-navy-300">{subHeader}</h3>
            <a
              onClick={() => dispatch(toggleModal())}
              className="flex color-white radius py-3 px-8 font-medium"
              style={{ backgroundColor: "#78BB07" }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <Steps />
    </div>
  );
}

export default Home;
