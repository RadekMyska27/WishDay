import { Navbar, NavbarBrand } from 'flowbite-react'

export function Header() {
  return (
    <Navbar fluid className="border-b border-gray-200 bg-white shadow-sm">
      <NavbarBrand href="#">
        <span className="text-xl font-bold text-gray-800">WishDay</span>
        <span className="ml-2 text-xl">🎂</span>
      </NavbarBrand>
    </Navbar>
  )
}
