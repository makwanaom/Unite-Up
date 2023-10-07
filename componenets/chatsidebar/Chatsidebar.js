import React from 'react'
import ContactTopBar from '../contactTopBar/ContactTopBar'
import Search from '../search/Search'

import Contactbar from '../contactBar/Contactbar'

const Chatsidebar = () => {
  return (
    <div className='flex-1 bg-[#ffffff]'>
      
      <ContactTopBar/>
      <Search/>
      <Contactbar/>
    </div>
  )
}

export default Chatsidebar