import JotformIcon from "../assets/svg/IconJotform.jsx";
import FacebookIcon from "../assets/svg/IconFacebook.jsx";
import TwitterIcon from "../assets/svg/IconTwitter.jsx";
import LinkedinIcon from "../assets/svg/IconLinkedin.jsx";
import YoutubeIcon from "../assets/svg/IconYoutube.jsx";
import InstagramIcon from "../assets/svg/IconInstagram.jsx";
import PinterestIcon from "../assets/svg/IconPinterest.jsx";

import { companyInfo } from "../constants";

function Footer() {
  const { location, name: companyName } = companyInfo;
  return (
    <div className="footer" /*className="absolute bottom-0 w-full mt-auto"*/>
      <div className="bg-navy-25 flex items-center px-8 py-4 gap-6">
        <div className="grow-0 order-first">
          <JotformIcon />
        </div>
        <div className="flex flex-col gap-2 grow-1 order-first color-navy-300 line-height-md">
          <p>{location}</p>
          <p>{companyName}</p>
        </div>
        <div
          className="bg-white border px-4 py-2 grow-0 order-last radius cursor-pointer"
          style={{
            borderColor: "#D5DDF9",
          }}
        >
          <input className="cursor-pointer" value="English" disabled></input>
        </div>
      </div>
      <div className="bg-navy-100 flex flex-row items-center justify-between">
        <div>
          <ul className="flex flex-row color-navy-300 text-lg px-4 py-2">
            <a
              className="border-r-2 px-4 py-2 cursor-pointer"
              style={{ borderColor: "#AAB1D2" }}
            >
              Terms &#38; Conditions
            </a>
            <a
              className="border-r-2 px-4 py-2 cursor-pointer"
              style={{ borderColor: "#AAB1D2" }}
            >
              Privacy Policy
            </a>
            <a className="px-4 py-2 cursor-pointer">Security</a>
          </ul>
        </div>
        <div className="mx-8 flex items-start">
          <ul className="flex items-start gap-2">
            <a>
              <FacebookIcon />
            </a>
            <a>
              <TwitterIcon />
            </a>
            <a>
              <LinkedinIcon />
            </a>
            <a>
              <YoutubeIcon />
            </a>
            <a>
              <InstagramIcon />
            </a>
            <a>
              <PinterestIcon />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
