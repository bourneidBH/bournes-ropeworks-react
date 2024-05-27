import Container from "./container"

const Footer = () => {
  return(
    <div className="w-full bg-primary">
      <Container>
        <div className="p-6 grid grid-cols-1 gap-6 md:grid-cols-5">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </div>
  )
}

export default Footer