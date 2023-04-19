import { Home as HomeIcon, Search, Library } from "lucide-react";

export default function Home() {
  const navMenuList = [
    {
      name: 'Home',
      href: '#',
      current: true,
      icon: HomeIcon,
    },
    {
      name: 'Search',
      href: '#',
      current: false,
      icon: Search,
    },
    {
      name: 'Your Library',
      href: '#',
      current: false,
      icon: Library,
    }
  ]

  const navPlaylist = [
    {
      name: 'Your Daily Mix',
      href: '#',
      current: false,
    },
    {
      name: 'Discover Weekly',
      href: '#',
      current: false,
    },
    {
      name: 'Release Radar',
      href: '#',
      current: false,
    },
    { 
      name: 'Made For You',
      href: '#',
      current: false,
    },
  ]

  return (
    <div
      className="h-screen flex flex-col"
    >
      <div
        className="flex flex-1"
      >
        <aside
          className="w-72 bg-zinc-950 p-6"
        >
          <nav
            className="space-y-4"
          >
            {
              navMenuList.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-zinc-50"
                >
                  <item.icon />
                  {item.name}
                </a>
              ))
            }
          </nav>

          <nav
            className="mt-10 pt-10 border-t border-zinc-800"
          >

          </nav>
        </aside>
        <main
          className="flex-1 p-6"
        >
          main
        </main>
      </div>
      <footer
        className="bg-zinc-800 border-t border-zinc-700 p-6"
      >
        footer
      </footer>
    </div>
  )
}
