import drawers from "./assets/images/drawers.jpg"
const CardImage = () => {
  return (
    <div className={""}>
      <img className={"h-[200px] w-full rounded-t-xl object-cover object-center lg:h-[280px] lg:rounded-none  lg:rounded-l-xl lg:object-left"} src={drawers} alt={""} />
    </div>
  )
}

export default CardImage
