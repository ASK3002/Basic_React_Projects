import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)

  const currencyInfo= useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(from) 
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert=()=>{
     setConvertedAmount((amount * currencyInfo[to]).toFixed(2))
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.alphacoders.com/789/thumb-1920-789452.jpg')`,
        }}
    >
        <div className="w-56">
            <div className="w-[400px] h-[400px] mx-auto border border-yellow-600 rounded-full p-5 backdrop-blur-sm bg-yellow-500/20">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-60 mb-1 ml-16 mt-14 ">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-3xl bg-yellow-500 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-60 mt-1 mb-4 ml-16">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-60 bg-yellow-500 text-white px-4 py-3 rounded-3xl ml-16">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    <h3 className='text-yellow-600 ml-20 mt-5'>© 2025 Ayush Singh Kaushik</h3>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default App
