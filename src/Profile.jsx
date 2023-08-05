import avatar from "./assets/images/avatar-michelle.jpg"

const Profile = ({ hideProfileOnSmallScreen, handleClick, buttonColor = "" }) => {
  return (
    <div className={"px-[2.25rem] lg:px-[2.6rem] " + (hideProfileOnSmallScreen ? "sm:hidden lg:block" : "")}>
      <div className={"mt-8 flex items-center justify-center pb-4 lg:-mt-[4.4rem] "}>
        <div className={""}>
          <img className={"h-10 w-10 rounded-full"} src={avatar} alt={""} />
        </div>

        <div className={"ml-4"}>
          <span className={" font-Manrope text-[13px] font-semibold text-very-dark-grayish-blue lg:text-[13.5px]"}>Michelle Appleton</span>
          <span className={"block font-Manrope text-xs font-extralight leading-4 text-very-dark-grayish-blue lg:text-[13px]"}>28 Jun 2020</span>
        </div>

        <button
          className={"ml-auto grid h-8 w-8 place-items-center rounded-full bg-Light-Grayish-Blue hover:bg-Desaturated-Dark-Blue focus:bg-Desaturated-Dark-Blue"}
          onClick={handleClick}
          aria-label={"Share Menu"}
        >
          <svg className={buttonColor} xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path d="M15 6.495 8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Profile
