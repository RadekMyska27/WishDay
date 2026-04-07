import { useTranslation } from 'react-i18next'
import { Navbar, NavbarBrand, Button } from 'flowbite-react'

export function Header() {
  const { t, i18n } = useTranslation()
  const isCs = i18n.language === 'cs'

  return (
    <Navbar fluid className="border-b border-gray-200 bg-white shadow-sm">
      <NavbarBrand href="#">
        <span className="text-xl font-bold text-gray-800">{t('appName')}</span>
        <span className="ml-2 text-xl">🎂</span>
      </NavbarBrand>
      <Button
        size="xs"
        color="light"
        onClick={() => i18n.changeLanguage(isCs ? 'en' : 'cs')}
      >
        {isCs ? 'EN' : 'CS'}
      </Button>
    </Navbar>
  )
}
