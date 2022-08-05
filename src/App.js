import img11 from "./img11/jannguyen🍁.jpg"
import img from "./img/ellaolsson.jpg"
import img12 from "./img12/senuscape.jpg"


function App() {
  return (
    <body className="text-gray-600 font-[Nunito] ">
    <div className="md:grid grid-cols-3"> {/* content wrapper */}
          <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right" >
              <div className="flex justify-between items-center">
                <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                  <a href="/" className="hover:text-gray-700">Femis Food Ninja</a>
                </h1>
                <div className="px-4 cursor-pointer md:hidden"  id="burger">
                <svg className="w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </div>
              </div>
              <ul className="text-sm mt-6 hidden md:block" id="menu">
                <li className="text-gray-700 font-bold py-1">
                  <a href="#" className="px-4 flex justify-end border-r-4 border-[#FF6363]">
                    <span>Home</span>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="px-4 flex justify-end border-r-4">
                    <span>About</span>
                    <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </a>
                </li>
                <li className="py-1">
                  <a href="#" className="px-4 flex justify-end border-r-4">
                    <span>Contact</span>
                    <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>  {/* end nav */}

          <main className="px-16 py-6 bg-gray-100 md:col-span-2">
             <div className="flex justify-center md:justify-end">
              <a href="#" className= "btn text-[#FF6363] border-[#FF6363] md:border-2 hover:bg-[#FF6363] hover:text-white transition ease-out duration-500">Login</a>
              <a href="#" className="btn text-[#FF6363] border-[#FF6363] md:border-2 ml-2 hover:bg-[#FF6363] hover:text-white transition ease-out duration-500">Sign up</a>
             </div> 

              <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h4 className="text-2xl font-semibold">For Ninjas</h4>
              </header>

                <div>
                  <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
                  <div className="mt-8 grid lg:grid-cols-3 gap-10">

                    {/* cards go here 1 */}
                    <div className="card hover:shadow-lg transform hover:scale-105"> 
                      <img src={img11} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Veg Noddles</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 1 */}
                      <div className="badge flex hover:shadow-inner ">
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                    {/* cards go here 2 */}
                    <div className="card hover:shadow-lg hover:scale-105"> 
                      <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Pizza</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 2 */}
                      <div className="badge flex hover:shadow-inner ">
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>

                    {/* cards go here 3 */}
                    <div className="card hover:shadow-lg hover:scale-105"> 
                      <img src={img} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Tofu curry & Veg</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 3 */}
                      <div className="badge flex hover:shadow-inner "> 
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                    {/* cards go here 4 */}
                    <div className="card hover:shadow-lg hover:scale-105"> 
                      <img src="https://images.pexels.com/photos/949069/pexels-photo-949069.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Fruit Salad</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 4 */}
                      <div className="badge flex hover:shadow-inner "> 
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>

                    {/* cards go here 5 */}
                    <div className="card hover:shadow-lg hover:scale-105"> 
                      <img src={img12} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Spicy Suya</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 5 */}
                      <div className="badge flex hover:shadow-inner "> 
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>

                    {/* cards go here 6 */}
                    <div className="card hover:shadow-lg hover:scale-105"> 
                      <img src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Hamburger</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>

                      {/*for badges 6 */}
                      <div className="badge flex hover:shadow-inner "> 
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold mt-12 pb-2 border-b">Most popular</h4>

                  <div className="mt-8">
                  </div> {/* end cards go here */}

                  <div className="flex justify-center">
                    <div className="btn bg-[#E2E2d5] text-[#888883] hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 ease-out duration-300 ">Load more</div>
                  </div>
                </div>
          </main>
          <script src="response.js"></script>
    </div>
    </body>
  );
}

export default App;
