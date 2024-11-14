import { tv, type VariantProps } from 'tailwind-variants'
import { Calendar1, ChevronRight, Hammer, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

export const menu = tv({
  base: 'min-h-screen border-r border-gray-200 transition-all ease-out duration-500',
  variants: {
    open: {
      true: 'min-w-40',
      false: 'min-w-12 max-w-12',
    },
  },
})

interface MenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

type MenuVariants = VariantProps<typeof menu> & MenuProps

export function Menu({ isOpen, toggleMenu }: MenuVariants) {
  const menuItems = [
    {
      title: 'Hoje',
      to: '/hoje',
      icon: <Calendar1 />,
    },
    {
      title: 'Serviços',
      to: '/servicos',
      icon: <Hammer />,
    },
    {
      title: 'Configurações',
      to: '/configuracoes',
      icon: <Settings />,
    },
  ]
  return (
    <div className={menu({ open: isOpen })}>
      <div className="relative flex items-center justify-center w-full h-14 border-b border-gray-200">
        <button
          className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center justify-center w-8 h-8 bg-white border border-gray-900 rounded-full"
          onClick={toggleMenu}
        >
          <ChevronRight
            className={`${isOpen ? 'rotate-180' : 'rotate-0'} text-gray-900 transition-all ease-out duration-500`}
          />
        </button>
      </div>
      <div className="flex flex-col w-full overflow-x-hidden">
        {menuItems.map((item) => {
          return (
            <Link className="flex" key={item.title} to={item.to}>
              {item.icon}
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
