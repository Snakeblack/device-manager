import Link from 'next/link'
import { Navbar, Dropdown } from 'flowbite-react'

function Navigator() {
  return (
    <Navbar fluid={true}>
      <Link className='flex items-center' href='/'>
        <svg
          className='w-8 h-8 mx-2'
          fill='#ccf'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13 7H7v6h6V7z' />
          <path
            fillRule='evenodd'
            d='M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z'
            clipRule='evenodd'
          />
        </svg>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Device Manager
        </span>
      </Link>
      <div className='flex md:order-2 mx-2'>
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            // <Avatar alt='User settings' icon={MdAccountCircle} rounded={true} />
            <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        {/* <Navbar.Toggle /> */}
      </div>
      {/* <Navbar.Collapse>
        <Navbar.Link href='/navbars' active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href='/navbars'>About</Navbar.Link>
        <Navbar.Link href='/navbars'>Services</Navbar.Link>
        <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
        <Navbar.Link href='/navbars'>Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Navigator
