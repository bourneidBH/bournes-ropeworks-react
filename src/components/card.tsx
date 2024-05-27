import { CardData } from "../types"
import Button from "./button"

const Card = (props: CardData) => {
  return (
    <div className="bg-white shadow-lg w-full max-w-screen-sm pb-4">
      <div className="relative h-[200px]">
        <img src={props.imageUrl} alt={props.title} className="w-full h-[200px] absolute object-cover object-center overflow-hidden" />
        <h3 className="text-xl text-white drop-shadow-lg p-4 absolute bottom-0">{props.title}</h3>
      </div>
      <div className="p-4">
        {props.body.map((el, idx) => (
          <p key={idx}>{el}</p>
        ))}
      </div>
      {props?.priceInfo && (
        <div className="border-t border-neutral-light p-4">
          <p>{props.priceInfo}</p>
        </div>
      )}
      {props?.linkUrl && props?.linkText && (
        <div className="p-4">
          <Button
            buttonType='link' 
            linkUrl={props.linkUrl}
            buttonText={props.linkText}
          />
        </div>
      )}

    </div>
  )
}

export default Card