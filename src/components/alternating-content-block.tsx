import Button from "./button"

interface ContentBlock {
  index: number,
  heading: string,
  imageUrl: string,
  imageAlt: string,
  paragraphs?: string[],
  listHeading?: string,
  listItems?: string[],
  linkUrl?: string,
  linkText?: string,
}

const AlternatingContentBlock =({ index, heading, imageUrl, imageAlt, paragraphs, listHeading, listItems, linkUrl, linkText }: ContentBlock) => {
  const isEven = index % 2 == 0;
  const oddClasses = "flex flex-col-reverse place-items-center md:flex md:flex-row-reverse md:justify-center"
  const evenClasses = "grid grid-cols-1 place-items-center md:grid-cols-2"
  return (
    <div className={isEven ? evenClasses : oddClasses}>
      <div className={`relative w-full min-h-[250px] overflow-hidden md:h-full ${!isEven ? 'md:w-[50%]' : ''}`}>
        <img 
          src={imageUrl}
          alt={imageAlt}
          className="object-cover object-center w-full min-h-[250px] md:h-full"
        />
      </div>
      <div 
        className={`p-8 bg-cover bg-fixed bg-top ${!isEven ? 'md:w-[50%]' : ''}`}
        style={{ backgroundImage: `url('/images/rope_background.jpg')` }}
      >
        <h2 className="text-2xl font-bold font-secondary">{heading}</h2>
        {paragraphs && paragraphs.map((p, idx) => (
          <p key={idx} className="mb-2">{p}</p>
        ))}
        {listHeading && (
          <h3 className="text-center">{listHeading}</h3>
        )}
        {listItems && (
          <ul className="mx-auto">
            {listItems.map((item, i) => (
              <li key={i} className="text-center">
                {item}
              </li>
            ))}
          </ul>
        )}
        {linkUrl && linkText && (
          <Button
            buttonType='link' 
            linkUrl={linkUrl}
            buttonText={linkText}
          />
        )}
      </div>
    </div>
  )
}

export default AlternatingContentBlock