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
      <main className="w-full flex flex-col min-h-[calc(100vh-96px)]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout