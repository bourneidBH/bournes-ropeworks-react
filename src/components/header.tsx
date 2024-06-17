import { useState, useEffect, useRef } from 'react';
import { useNavigation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import useClickOutside from '../hooks/useClickOutside';
import useWindowDimensions from '../hooks/useWindowDimensions';

type Link = {
  title: string,
  slug: string,
  submenu?: Link[],
}

const navItems: Link[] = [
  {
    title: 'Services',
    slug: 'services',
    submenu: [
      {
        title: 'Splicing',
        slug: 'splicing',
      },
      {
        title: 'Rigging',
        slug: 'rigging',
      },
      {
        title: 'Custom',
        slug: 'custom',
      },
    ],
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
  const [open, setOpen] = useState(false);
  const { location } = useNavigation();
  const { width } = useWindowDimensions();
  const ref= useRef<HTMLElement>(null);
  
  const toggleOpen = () => {
    setOpen(!open)
  }

  const closeNav = () => {
    if (open) {
      setOpen(false)
    }
  }
  
  // close mobile menu when navigating to new page
  useEffect(() => {
    closeNav()
  }, [location])

   // close mobile menu on resize to md
   useEffect(() => {
    if (width && width >= 768) {
      closeNav()
    }
  }, [width])

  useEffect(()=> {
    const handleClickAway = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (open && ref?.current && !ref.current.contains(target)) {
        console.log(open)
        setOpen(false)
      }
    }
  
    document.addEventListener('click', handleClickAway);
    document.addEventListener('touchend', handleClickAway);
  
    return () => {
      document.removeEventListener('click', handleClickAway);
      document.removeEventListener('touchend', handleClickAway);
    }

  }, [ref])


  return (
    <header className="w-full relative bg-primary py-2 px-4 flex items-center justify-between">
      <NavLink to="/" title="Bourne's RopeWorks home page">
        <img src="/images/BournesRopeworks_logo-reverse.png" alt="Bourne's Ropeworks logo" className="w-[160px]" />
      </NavLink>
      <nav ref={ref} className={`${open ? 'block absolute z-10 top-[96px] right-0 h-[calc(100vh-96px)] bg-white text-neutral shadow-md' : 'hidden relative top-0 bg-transparent text-white'} text-sm font-medium uppercase md:block md:relative md:bg-transparent md:shadow-none md:top-0 md:text-white`}>
        <ul className="flex flex-col md:flex-row md:items-center md:justify-end">
          {navItems.map(item => (
            <li key={item.slug} className="nav-item relative px-4 py-2">
              <NavLink to={`/${item.slug}/`} className="hover:text-secondary md:hover:text-neutral-light">{item.title}</NavLink>
              {item?.submenu && (
                <ul className="subnav">
                  {item.submenu.map(sub => (
                    <li key={sub.slug} className="text-neutral font-medium hover:text-secondary py-2">
                      <NavLink to={sub.slug}>{sub.title}</NavLink>
                    </li>
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