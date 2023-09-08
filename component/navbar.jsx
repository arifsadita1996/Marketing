import React from "react"


const Example =() => {
   

  return (
   < >
   
    <header id="header" class=" fixed top-0 w-full z-10" >
        <nav class="container mx-auto px-6 py-3">
          
            <div class="flex justify-between items-center">
             
                <a href="#" class="text-2xl  font-bold text-gray-800"> BL</a>
                <div class="hidden mx-auto md:flex items-center space-x-4">
                    <a href="#" class="text-gray-800 hover:text-blue-600">Home</a>
                    <a href="#" class="text-gray-800 hover:text-blue-600">About</a>
                    <a href="#" class="text-gray-800 hover:text-blue-600">Services</a>
                    <a href="#" class="text-gray-800 hover:text-blue-600">Contact</a>
                    <a href="#" class="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</a>
                </div>
                
                <div class="md:hidden flex items-center">
                    <button class="text-gray-800 focus:outline-none"> 
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <a href="#" class="hidden md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</a>
            </div>
        </nav>
    </header>
   </>
  )
}

export default Example

