import React from 'react'
import {Footer} from "flowbite-react"
import { Link } from 'react-router-dom'
import {BsInstagram,BsYoutube,BsLinkedin} from "react-icons/bs"
export default function Footercom() {
  return (
   <>
   <Footer className='border border-t-8 border-orange-400 pl-3 '>

<div className='w-full max-w-7xl mx-auto'>

    <div className='grid w-full justify-between sm:flex md:grid-cols-1'>

        <div className=''>

        <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl'>
<span>Mentor.</span>IT
  </Link>
        </div>
        <div className='grid grid-cols-2 mt-10 gap-8 sm:grid-cols-3 sm:gap-6 sm:mt-4'>
<div>
<Footer.Title title='About'/>
<Footer.LinkGroup col> 
<Footer.Link>
    Our Editions
</Footer.Link>
</Footer.LinkGroup>

<Footer.LinkGroup col>
<Footer.Link>
   Mentor.IT
</Footer.Link>
</Footer.LinkGroup>


</div>

<div>
<Footer.Title title='Follow us'/>
<Footer.LinkGroup col>
<Footer.Link
href='#'
target='_blank'
>
Youtube
</Footer.Link>
</Footer.LinkGroup>

<Footer.LinkGroup col>
<Footer.Link
href='#'
target='_blank'
>
Instagram
</Footer.Link>
</Footer.LinkGroup>
</div>

<div>
<Footer.Title title='Legal'/>
<Footer.LinkGroup col>
<Footer.Link
href='#'
target='_blank'
>
Privacy
</Footer.Link>
</Footer.LinkGroup>

<Footer.LinkGroup col>
<Footer.Link
href='#'
target='_blank'
>
Terms &amp; conditions
</Footer.Link>
</Footer.LinkGroup>


</div> 
   </div>
    </div>
    <Footer.Divider/>
    <div className='w-full sm:flex items-center justify-center'>
        <Footer.Copyright href='#' by='Mentor.IT blogs' year={new Date().getFullYear()}/>
  </div>
  <div className='flex gap-6 mb-3 pt-2 sm:mt-0 mt-4 sm:justify-center'>
       <Footer.Icon href='#' icon={BsInstagram}/>
       <Footer.Icon href='#' icon={BsYoutube}/>
       <Footer.Icon href='#' icon={BsLinkedin}/>
  </div>
</div>
   </Footer>
   </>
  )
}
