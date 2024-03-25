import React from 'react'
import {Navbar,Button} from 'flowbite-react'
import { Link,useLocation } from 'react-router-dom'
import { FaMoon } from "react-icons/fa"

export default function Nav() {
  const path=useLocation().pathname
  return (
 <>
 <Navbar className='border-b-2'>
  <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl'>
<span>Mentor.</span>IT
  </Link>
<div className='flex gap-2 md:order-2'>
<Button className='w-12 h-10 hidden sm:inline' color='grey' pill>
  <FaMoon/>
</Button>
<Link>
<Button gradientDuoTone="pinkToOrange" outline><Link to='/signin'>SignIn</Link></Button>
</Link>
<Navbar.Toggle/>
</div>
<Navbar.Collapse>
  <Navbar.Link active={path=='/'} as={'div'}>
    <Link to='/'>Home</Link>
  </Navbar.Link>
  <Navbar.Link  active={path=='/blogs'} as={'div'}>
    <Link to='/blogs'>Blogs</Link>
  </Navbar.Link>
</Navbar.Collapse>
 </Navbar>
    
 </>
  )
}
