import React from 'react'
import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from "react-icons/bs"
import Loader from './Loader'
const Input = ({placeholder,name,type,value,handleChange})=>(
 <input placeholder={placeholder} 
 type={type}
 step="0.0001"
 value={value}
 onChange={(e)=>handleChange(e,name) }
 className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white text-sm border-none white-glassmorphism'
 />
)
const Welcom = () => {
  const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-semibold text-white";  const connectWallet=()=>{
    
  }
  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col md:mr-10'>
          <h1 className='text-3xl sm:text-4xl xl:text-5xl text-white  text-gradient py-1'>
            Send Crypto <br/> Across the world</h1>
          <p className='text-left font-light mt-5 xl:w-9/12 text-base md:w-11/12 w-9/12'>
            Explore the crypto world .Buy and sell cryptocurrencies easily on krypto.
          </p>
          <button type='button'
          onClick={connectWallet} 
          className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546BD] '
          >
          <p className='text-white text-base font-semibold '>Connect Wallet</p>
          </button>
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
              <div className={`rounded-tl-2xl  ${commonStyles}`}>Reliability</div>
              <div className={`${commonStyles}`}>Ethereum</div>
              <div className={`sm:rounded-tr-2xl ${commonStyles}`}>web 3.0</div>
              <div className={`sm:rounded-bl-2xl ${commonStyles}`}>Low fees</div>
              <div className={`${commonStyles}`}>Security</div>
              <div className={`rounded-br-2xl ${commonStyles}`}>Block chain</div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center w-full justify-start md:mt-0 mt-10'>
        <div className='p-3 justify-end items-start rounded-xl h-40 flex-col sm:w-72 w-full my-5 eth-card white-glassmorpisme'>
            <div className='flex justify-between flex-col w-full h-full '>
               <div className='flex justify-between items-start'>
                  <div className='w-10 h-10 rounded-full border-white border-2 flex justify-center items-center'>
                      <SiEthereum fontFamily={21} color='#fff'/>
                  </div>
                    <BsInfoCircle fontSize={17} color='#fff'/>
               </div>
            <div>
            <p className='text-white font-light text-sm'> 
                Adresse
            </p>
            <p className='text-white font-semibold text-lg mt-1'> 
                Ethereum 
            </p>
            </div>
            </div>       
        </div>

      <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism'>
           <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}} />
           <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={()=>{}} />
           <Input placeholder="Keyword (Gif)" name="Keyword" type="text" handleChange={()=>{}} />
           <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}} />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Welcom