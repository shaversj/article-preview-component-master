import {BiSolidDownArrow} from "react-icons/bi";

const ShareModal = ({handleClick}) => {
    return (
        <div>
            <div
                className={"h-[64px] w-full bg-very-dark-grayish-blue rounded-b-xl px-[2.25rem] flex items-center mt-5 lg:w-[248px] lg:h-[55px] lg:rounded-lg lg:relative lg:left-[16.4rem] lg:bottom-[9.7rem] shadow-xl"}>
                <div>
                    <span className={"uppercase text-Grayish-Blue text-[13px] tracking-[.3rem]"}>Share</span>
                </div>
                <div className={"flex ml-4 gap-4"}>
                    <img src={"/icon-facebook.svg"} alt={"Facebook Icon"}/>
                    <img src={"/icon-twitter.svg"} alt={"Twitter Icon"}/>
                    <img src={"/icon-pinterest.svg"} alt={"Pinterest Icon"}/>
                </div>
                <button
                    className={"ml-auto  rounded-full bg-Desaturated-Dark-Blue h-8 w-8 grid place-items-center lg:hidden"}
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                        <path fill="#ffffff"
                              d="M15 6.495 8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                    </svg>
                </button>
            </div>

            <div className={" items-center w-[248px] justify-center -mt-2 sm:hidden lg:inline-flex lg:relative lg:left-[16.4rem] lg:bottom-[10.4rem]"}>
                <BiSolidDownArrow size={"40px"} color={"hsl(217, 19%, 35%)"}/>
            </div>
        </div>
    );
};

export default ShareModal;