import { BiSolidDownArrow } from "react-icons/bi"
import facebookIcon from "./assets/images/icon-facebook.svg"
import twitterIcon from "./assets/images/icon-twitter.svg"
import pinTerestIcon from "./assets/images/icon-pinterest.svg"

const ShareModal = ({ handleClick }) => {
  return (
    <div>
      <div
        className={
          "mt-5 flex h-[64px] w-full items-center rounded-b-xl bg-very-dark-grayish-blue px-[2.25rem] shadow-xl lg:relative lg:bottom-[9.7rem] lg:left-[16.4rem] lg:h-[55px] lg:w-[248px] lg:rounded-lg"
        }
      >
        <div>
          <span className={"text-[13px] uppercase tracking-[.3rem] text-Grayish-Blue"}>Share</span>
        </div>
        <div className={"ml-4 flex gap-4"}>
          <img src={facebookIcon} alt={"Facebook Icon"} />
          <img src={twitterIcon} alt={"Twitter Icon"} />
          <img src={pinTerestIcon} alt={"Pinterest Icon"} />
        </div>
        <button className={"ml-auto  grid h-8 w-8 place-items-center rounded-full bg-Desaturated-Dark-Blue lg:hidden"} onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path fill="#ffffff" d="M15 6.495 8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
          </svg>
        </button>
      </div>

      <div className={" -mt-2 w-[248px] items-center justify-center sm:hidden lg:relative lg:bottom-[10.4rem] lg:left-[16.4rem] lg:inline-flex"}>
        <BiSolidDownArrow size={"40px"} color={"hsl(217, 19%, 35%)"} />
      </div>
    </div>
  )
}

export default ShareModal
