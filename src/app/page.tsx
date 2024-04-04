"use client";
import { Space_Mono } from "next/font/google";
import { SetStateAction, useEffect, useState } from "react";
import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import Image from "next/image";
import PercentBtnComponent from "./Components/PercentBtnComponent";

const spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-spacemono",
});
export default function Home() {
  const [percent, setPercent] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [bill, setBill] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [error1, setError1] = useState<boolean>(false)
  const [error2, setError2] = useState<boolean>(false)

  const [customInputValue, setCustomInputValue] = useState<string>('')
  let AllClear = true;

  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Check if the value is a valid number
    if (!isNaN(Number(value))) {
      setBill(Number(value));
      AllClear = true
    } else {
      AllClear = false
    }
  };
  const handlePersonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Check if the value is a valid number
    if (!isNaN(Number(value))) {
      setPeople(Number(value));
      AllClear = true
    } else {
      AllClear = false
    }
  };

  useEffect(() => {
    if (AllClear) {
      if (people > 0) {
        let percentCalc = percent / 100
        let tip = (bill * percentCalc) / people
        setTipAmount(tip)
        setTotal((tip + bill) / people)
      }

    }

  }, [percent, bill, people])

  const handleReset = () => {
    setTipAmount(0)
    setBill(0)
    setPercent(0)
    setPeople(0)
    setTotal(0)
    setCustomInputValue('')
    setError1(false)
    setError2(false)
  }

  return (
    <div className="bg-[rgb(196,228,231)] h-screen w-full">
      <div className={`centered ${spacemono.className}`}>
        <div className="text-center pb-20">
          <h1 className="tracking-widest text-2xl text-[rgb(62,97,99)]">SPLI</h1>
          <h1 className="tracking-widest text-2xl text-[rgb(62,97,99)]">TTER</h1>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg">
            <div className="grid lg:grid-cols-2 min-w-[100vw] lg:min-w-[60vw] p-8 gap-8">
              <div className="rounded-lg px-5 py-2 lg:py-5">
                <div>
                  <div className="text-[18px] text-[hsl(184,14%,56%)]">
                    <div className="flex justify-between">
                      <p>Bill</p>
                      <p className={error1 ? " text-orange-400" : "hidden"}>Can{"'"}t be 0</p>
                    </div>
                    
                    <div className="relative mt-2 text-[20px">
                      <span className="absolute left-5 top-[0.7rem]">
                        <Image src={dollar} alt={""} />
                      </span>
                      <input
                        className="w-full h-[24px] bg-gray-200 text-end p-5 outline-none focus:outline-[rgb(38,194,173)]"
                        placeholder="0"
                        type="text"
                        value={bill}
                        id="billInput"
                        onChange={handleBillChange}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => { 
                          if (e.target.value === '0' || e.target.value === ''){ 
                            setError1(true)}
                            else{
                              setError1(false)
                            }
                          }}
                      />
                    </div>
                  </div>
                </div>

                <div className="py-8">
                  <h2 className="text-[hsl(184,14%,56%)]">Select Tip%</h2>
                  <div className="grid sm:grid-cols-3 grid-cols-2 text-center gap-4">

                    <PercentBtnComponent activePercent={percent} percentage={5} clicked={setPercent} percentageLabel={'5%'} />
                    <PercentBtnComponent activePercent={percent} percentage={10} clicked={setPercent} percentageLabel={'10%'} />
                    <PercentBtnComponent activePercent={percent} percentage={15} clicked={setPercent} percentageLabel={'15%'} />
                    <PercentBtnComponent activePercent={percent} percentage={25} clicked={setPercent} percentageLabel={'25%'} />
                    <PercentBtnComponent activePercent={percent} percentage={50} clicked={setPercent} percentageLabel={'50%'} />
                    <div className='col-span-1'>
                      <input
                        type="number"
                        placeholder="Custom"
                        value={customInputValue}
                        className="text-end pe-3 customInput bg-gray-200 outline-none focus:outline-[rgb(38,194,173)]"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPercent(parseInt(e.target.value)); setCustomInputValue(e.target.value) }} />
                    </div>


                  </div>

                </div>

                <div className="text-[18px] text-[hsl(184,14%,56%)]">
                <div className="flex justify-between">
                      <p>Number of People</p>
                      <p className={error2 ? " text-orange-400" : "hidden"}>Can{"'"}t be 0</p>
                    </div>
                  <div className="relative mt-2 text-[20px]">
                    <span className="absolute left-5 top-[0.7rem]">
                      <Image src={person} alt={""} />
                    </span>
                    <input
                      className="w-full h-[24px] bg-gray-200 text-end p-5 outline-none focus:outline-[rgb(38,194,173)]"
                      placeholder="0"
                      type="text"
                      value={people}
                      onChange={handlePersonChange}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => { 
                        if (e.target.value === '0' || e.target.value === ''){ 
                          setError2(true)}
                          else{
                            setError2(false)
                          }
                        }}
                    />
                  </div>
                </div>
                {/* //end of col 1 div  */}
              </div>

              <div className=" rounded-xl border-2 bg-[rgb(0,71,75)] text-white px-5">
                <div className="flex justify-between py-6">
                  <div className="">
                    <h2>Tip Amount</h2>
                    <p className="text-[hsl(184,14%,56%)]">/ person</p>
                  </div>
                  <h1 className="text-4xl lg:text-5xl text-[rgb(40,194,172)]">{`$ ${tipAmount.toFixed(2)}`}</h1>
                </div>
                <div className="flex justify-between py-6">
                  <div>
                    <h2>Total</h2>
                    <p className="text-[hsl(184,14%,56%)]">/ person</p>
                  </div>
                  <h1 className="text-4xl lg:text-5xl text-[rgb(40,194,172)]">{`$ ${total.toFixed(2)}`}</h1>
                </div>
                <div className="flex justify-center pt-10 lg:pt-24 pb-8">
                  <button className=" bg-[rgb(38,194,173)] w-10/12 rounded-md h-14 text-[rgb(0,71,75)]" onClick={handleReset}>
                    RESET
                  </button>
                </div>

                {/* end of col 2 */}
              </div>
              {/* end of columns grid */}
            </div>
            {/* end of bg-white */}
          </div>
        </div>
      </div>
    </div> //closing div
  );
}
