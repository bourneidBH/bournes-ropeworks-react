import { CardData } from "../types"

const Card = (props: CardData) => {
  return (
    <div className="bg-white shadow-lg w-full max-w-screen-sm">
      <div className="relative mb-6">
        <img src={props.imageUrl} alt={props.title} className="w-full absolute top-0 left-0" />
        <h3 className="text-xl text-white drop-shadow-md">{props.title}</h3>
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
    </div>
  )
}

export default Card