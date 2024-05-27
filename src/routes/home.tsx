
import AlternatingContentBlock from "../components/alternating-content-block"

const Home = () => {
  return (
    <>
      <div className="max-w-prose mx-auto my-8">
        <h1 className="text-center text-4xl mb-4">Custom Rigging Solutions</h1>
        <p className="text-center">With over 30 years experience in fiber and wire rope, we are committed to producing high-quality splicing and rigging solutions. Our passion is splicing rope…any knot you need, we’ll be happy to create! Based in the Manitowoc, Wisconsin area, we can measure and install any local project, or splice to specifications provided and ship finished product nationwide.</p>
      </div>

      <AlternatingContentBlock
        index={0}
        heading="Rope Splicing"
        paragraphs={[
          `We offer many types of splices including eye splices, locking eye splices, back splices, end-to-end constant diameter splices, long splices, and tail splices.`,
          `We will recommend the correct type of rope, diameter, and type of splice for your application.`
        ]}
        listHeading="Applications:"
        listItems={[
          'Dock lines', 'Anchor lines', 'Sailboat running rigging', 'Industrial auger sling lines', '...and more'
        ]}
        imageUrl="/images/bow-catch_1920-600.jpg"
        imageAlt="Dock lines"
      />
    </>
  )
}
export default Home