import { useState, useEffect } from 'react'

type NavLink = {
  title: string,
  slug: string,
  submenu?: NavLink[],
}

const navItems: NavLink[] = [
  {
    title: 'Services',
    slug: 'services'
  },
  {
    title: 'Industries Served',
    slug: 'industries',
    submenu: [
      {
        title: 'Marine',
        slug: 'marine'
      },
      {
        title: 'Industrial',
        slug: 'industrial',
      },
      {
        title: 'Architectural',
        slug: 'architectural'
      },
    ],
  },
  {
    title: 'About',
    slug: 'about'
  },
  {
    title: 'Contact',
    slug: 'contact'
  },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }

  const closeNav = () => {
    setOpen(false)
  }

  return (
    <header className="w-full relative bg-primary py-2 px-4 flex items-center justify-between">
      <a href="/" title="Bourne's RopeWorks home page">
        <img src="/images/BournesRopeworks_logo-reverse.png" alt="Bourne's Ropeworks logo" className="w-[160px]" />
      </a>
      <nav className={`${open ? 'block absolute z-10 top-[96px] right-0 h-[calc(100vh-96px)] bg-white text-neutral shadow-md' : 'hidden relative top-0 bg-transparent text-white'} text-sm font-medium uppercase md:block md:relative md:bg-transparent md:shadow-none md:top-0 md:text-white`}>
        <ul className="flex flex-col md:flex-row md:items-center md:justify-end">
          {navItems.map(item => (
            <li key={item.slug} className="nav-item relative px-4 py-2">
              <a href={`/${item.slug}/`} className="hover:text-secondary md:hover:text-neutral-light">{item.title}</a>
              {item?.submenu && (
                <ul className="subnav">
                  {item.submenu.map(sub => (
                    <li key={sub.slug} className="text-neutral font-medium hover:text-secondary py-2">{sub.title}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <button className="p-2 text-white text-2xl scale-x-150 hover:text-neutral-light md:hidden" onClick={toggleOpen}>
        &equiv;
      </button>
    </header>
  )
}

export default Header