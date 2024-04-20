import { ReactNode, FC } from "react"
import Header from "./header"
import Footer from "./footer"

type Props = {
  children: ReactNode
}

const Layout: FC<Props> = ({
  children
}) => {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col min-h-[calc(100vh-968px)] md:min-h-[calc(100vh-425px)] lg:min-h-[calc(100vh-427px)]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout