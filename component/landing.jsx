import React, { useEffect, useState } from "react";



const Landing =() =>{
    const [count, setCount] = useState([]);
   
        let url = 'http://localhost:4000/api';
      
        let options = {
          method: 'GET',
          headers: {
            Accept: '*/*',
            Authorization: 'Basic eW91cmxvZ2luOnlvdXJwYXNzd29yZA=='
          }
        };
        
        fetch(url, options)
          .then(res => res.json())
          .then(json => setCount(json.Status.message))
          .catch(err => console.error('error:' + err));
      
      
      console.log(count)
           

         
    return(
        <>
        <div class="flex justify-center items-center align-middle self-center h-screen" >
     
        <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
          
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">First</th>
              <th scope="col" class="px-6 py-4">First</th>
             
            </tr>
          </thead>
          <tbody>
          
            {count.map(person => {
    return (
        <tr class="border-b dark:border-neutral-500">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{person.id}</td>
              <td class="whitespace-nowrap px-6 py-4">{person.name}</td>
              <td class="whitespace-nowrap px-6 py-4">{person.email}</td>
              </tr>
    )})}
          
           
          </tbody>
        </table>
      
      

                <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Make Your Best Idea For Your <span class="text-indigo-600">Markecting</span></h2>
                <h3 class="mt-2 text-2xl font-semibold text-gray-800 md:text-2xl">What is?</h3>
                <p class="mt-2 text-sm text-gray-500 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates. Cumque debitis dignissimos id quam vel!</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="#">Get Started</a>
                    <a class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400" href="#">Learn More</a>
                </div>
            </div>
        </div>
        <div class="hidden items-center   lg:flex lg:w-1/2">
          
            <div class="h-full w-full flex justify-center p-8 ">
              
              <img  src="https://themes.themesbrand.com/zooki/react/static/media/home-2-img.1c7314c691a2af56e41b.png"></img>
              
            </div>
        </div>
    </div>
        </>
    )
}

export default Landing;