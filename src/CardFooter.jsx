import Profile from "./Profile.jsx";
import ShareModal from "./ShareModal.jsx";

const CardFooter = ({isPressed, handleClick}) => {

    return (
        <div className={"lg:col-start-2"}>
            {isPressed ?
                <div>
                    <Profile handleClick={handleClick} hideProfileOnSmallScreen={true} buttonColor={"fill-[#ffffff]"}/>
                    <ShareModal handleClick={handleClick} />
                </div>
                :
                <Profile handleClick={handleClick} hideProfileOnSmallScreen={false} buttonColor={"fill-very-dark-grayish-blue"} />
            }
        </div>
    );
};

export default CardFooter;