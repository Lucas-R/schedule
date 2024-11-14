import { Link, useMatches } from 'react-router-dom'

export function Breadcrumbs() {
  const matches = useMatches()

  return (
    <>
      {matches.map((crumb, index) => {
        return (
          <Link
            className="text-gray-500 text-xs leading-3 px-2 border-l border-gray-500 hover:underline hover:text-black first:border-0 first:pl-0"
            key={index}
            to={crumb.pathname}
          >
            {crumb.handle?.crumb}
          </Link>
        )
      })}
    </>
  )
}
