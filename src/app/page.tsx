'use client'
import { Space_Mono } from "next/font/google";
const spacemono = Space_Mono({
  subsets: ['latin'],
  weight: "700",
  variable: '--font-spacemono'
})
export default function Home() {


  return (
    <div className="bg-[rgb(196,228,231)] h-screen w-full">
      <div className={`centered ${spacemono.className}`}>
<div className="text-center pb-20">
        <h1 className="tracking-widest text-2xl">SPLI</h1>
        <h1 className="tracking-widest text-2xl">TTER</h1>

      </div>

      <div className="flex justify-center ">
        <div className="bg-white rounded-lg">
          <div className="grid grid-cols-2 min-w-[60vw] p-8 gap-8">

            <div className=" border-red-600 border-2 bg-gray-400">
              <div>
                <h2>Bill</h2>
                <input className=" border-black border-2 rounded-md" type="text" placeholder="dollar signs" />
              </div>

              <div>
                <h2>Select Tip%</h2>
                <div className="grid grid-rows-2 gap-2">
                  <div className="grid grid-cols-3 gap-4">
                    <button className="text-white bg-green-800 rounded-md min-w-16">5%</button>
                    <button className="text-white bg-green-800 rounded-md min-w-16">10%</button>
                    <button className="text-white bg-green-800 rounded-md min-w-16">15%</button>

                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <button className="text-white bg-green-800 rounded-md min-w-16">25%</button>
                    <button className="text-white bg-green-800 rounded-md min-w-16">50%</button>
                    <button className="text-white bg-green-800 rounded-md min-w-16">Custom</button>

                  </div>



                </div>
              </div>

              <div>
                <h2>Number of People</h2>
                <input className=" border-black border-2 rounded-md " type="text" placeholder="This is the number of people" />
              </div>
              {/* //end of col 1 div  */}
            </div>




            <div className=" border-red-600 border-2 bg-[rgb(0,71,75)] text-white">
              <div className="flex justify-between">
                <div>
                  <h2>Tip Amount</h2>
                  <p>/ person</p>
                </div>
                <h1>$999.99</h1>
              </div>
              <div className="flex justify-between">
                <div>
                  <h2>Total</h2>
                  <p>/ person</p>
                </div>
                <h1>$999.99</h1>
              </div>
              <div className="flex justify-center pt-10">
                <button className=" bg-green-400 min-w-64 rounded-md">RESET</button>
              </div>


              {/* end of col 2 */}
            </div>
            {/* end of columns grid */}
          </div>
          {/* end of bg-white */}
        </div>

      </div>
      </div>
      






    </div>//closing div
  );
}
