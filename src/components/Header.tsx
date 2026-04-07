import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarBrand, Button } from 'flowbite-react'

export function Header() {
  const { t, i18n } = useTranslation()
  const isCs = i18n.language === 'cs'

  return (
    <Navbar fluid className="border-b border-gray-200 bg-white shadow-sm">
      <NavbarBrand href="/">
        <span className="text-xl font-bold text-gray-800">{t('appName')}</span>
        <span className="ml-2 text-xl">🎂</span>
      </NavbarBrand>

      <div className="flex items-center gap-4">
        <nav className="flex gap-4 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'
            }
          >
            {t('nav.dashboard')}
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-800'
            }
          >
            {t('nav.people')}
          </NavLink>
        </nav>

        <Button
          size="xs"
          color="light"
          onClick={() => i18n.changeLanguage(isCs ? 'en' : 'cs')}
        >
          {isCs ? 'EN' : 'CS'}
        </Button>
      </div>
    </Navbar>
  )
}
