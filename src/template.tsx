import { useCallback, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Menu } from './components/Menu'
import { Breadcrumbs } from './components/Breadcrumbs'

export function Template() {
  const [isOpen, setIsOpen] = useState(false)

  const toogleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex w-full min-h-screen">
      <Menu isOpen={isOpen} toggleMenu={toogleMenu} />
      <div className="w-full min-h-screen">
        <div className="flex items-center w-full h-14 border-b border-gray-200 pl-8 pr-4">
          <Breadcrumbs />
        </div>
        <Outlet />
      </div>
    </div>
  )
}
