import { useState , useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [NoAllow, setNoAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [passward, setpassward] = useState("")
  /* useRef hook */
  const passwardReference = useRef(null)

  /*usecallback hooks */

  const passwardGenerater = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(NoAllow) str+="0123456789"
    if(charAllow) str+="!@#$%^&*()_+?"

    for (let index = 0; index <length; index++) {

      let char = Math.floor(Math.random()* str.length+1)
      pass += str.charAt(char)
      
    }
    setpassward(pass)

  },[length,NoAllow,charAllow,setpassward])

  const copyPassward = useCallback(() => {
    passwardReference.current?.select()
    window.navigator.clipboard.writeText(passward)
  })

  /* useEffect*/

  useEffect(()=> {
    passwardGenerater()

  },[length,NoAllow,charAllow,passwardGenerater])

  return (
    <>
   
     <div className='bg-slate-800 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-700'>

     <h1 className='text-center text-white my-3'>Passward Generater</h1>
      
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input type="text" 
        value={passward}
        className='outline-none w-full py-1 px-3'
        placeholder="Passward"
        readOnly
        
        ref={passwardReference}


        />
        <button 
        onClick={copyPassward}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>



        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={15}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setlength(e.target.value)
            }}
            />
            <label>length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {NoAllow}
            id='NumberInput'

            onChange={(e) => {
              setNoAllow((prev) => !prev);
            }}
            />
            <label htmlFor="NumberInput">Numbers</label>

          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {charAllow}
            id='charInput'

            onChange={(e) => {
              setcharAllow((prev) => !prev);
            }}
            />
            <label htmlFor="charInput">charcter</label>

          </div>



        </div>
      
     </div>
    </>
  )
}

export default App
