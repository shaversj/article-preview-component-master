import CardImage from "./CardImage.jsx";
import CardBody from "./CardBody.jsx";
import CardFooter from "./CardFooter.jsx";
import {useState} from "react";

const CardLayout = () => {

    const [isPressed, setIsPressed] = useState(false)

    function handleClick() {
        setIsPressed(!isPressed)
    }

    return (
        <div className={"rounded-xl bg-white font-Manrope lg:grid lg:h-[280px] lg:w-[730px] lg:grid-cols-[39%,1fr]"}>
            <CardImage />
            <CardBody />
            <CardFooter handleClick={handleClick} isPressed={isPressed} />
        </div>
    );
};

export default CardLayout;