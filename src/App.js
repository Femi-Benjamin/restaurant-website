import img11 from "./img11/jannguyen🍁.jpg"
import img from "./img/ellaolsson.jpg"
import img12 from "./img12/senuscape.jpg"

function App() {
  return (
    <body className="text-gray-600 font-[Nunito] ">
    <div className="md:grid grid-cols-3"> {/* content wrapper */}
          <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right" >
              <div>
                <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                  <a href="/" className="hover:text-gray-700">Femis Food Ninja</a>
                </h1>
              </div>
              <ul className="text-sm mt-6">
                <li className="text-gray-700 font-bold">
                  <a href="#" className="px-4 flex justify-end">
                    <span>Home</span>
                    <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="px-4 flex justify-end">
                    <span>About</span>
                    <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="px-4 flex justify-end">
                    <span>Contact</span>
                    <svg className="w-5 ml-2" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>  {/* end nav */}

          <main className="px-16 py-6 bg-gray-100 md:col-span-2">
             <div className="flex justify-center md:justify-end">
              <a href="#" className= "btn text-[#FF6363] border-[#FF6363] md:border-2 hover:bg-[#FF6363] hover:text-white">Login</a>
              <a href="#" className="btn text-[#FF6363] border-[#FF6363] md:border-2 ml-2 hover:bg-[#FF6363] hover:text-white">Sign up</a>
             </div> 

              <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h4 className="text-2xl font-semibold">For Ninjas</h4>
              </header>

                <div>
                  <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

                  <div className="mt-8 grid lg:grid-cols-3 gap-10">
                    <div className="card hover:shadow-lg"> {/* cards go here */}
                      <img src={img11} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Veg Noddles</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>
                      <div className="badge flex"> {/*for badges*/}
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                    <div className="card hover:shadow-lg"> {/* cards go here */}
                      <img src={img} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Tofu curry & Veg</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>
                      <div className="badge flex"> {/*for badges*/}
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                    <div className="card hover:shadow-lg"> {/* cards go here */}
                      <img src={img12} alt="" className="w-full h-32 sm:h-48 object-cover"/>
                      <div className="m-4">
                        <span className="font-bold">Spicy Suya</span>
                        <span className="block text-gray-500 text-sm">Recipe by Femi</span>
                      </div>
                      <div className="badge flex"> {/*for badges*/}
                      <svg className="w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>25 mins</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-bold mt-12 pb-2 border-b">Most popular</h4>

                  <div className="mt-8">
                  </div> {/* cards go here */}

                  <div className="flex justify-center">
                    <div className="btn bg-[#E2E2d5] text-[#888883] hover:shadow-inner">Load more</div>
                  </div>
                </div>

          </main>
    </div>
    </body>
  );
}

export default App;
