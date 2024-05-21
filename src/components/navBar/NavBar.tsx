function Navbar() {
 
    return (
      <>
       <div className='w-full bg-indigo-900 text-white flex justify-around items-center py-2'>
            <div className="container flex justify-around items-center text-lg">  
            <div><img src="https://ik.imagekit.io/4kqnwi1lux/Generation/ariah%20garcia%20(100%20x%2090%20px)%20(1).png?updatedAt=1716306994973" 
                           alt="Logo" className="w-full h-full object-cover"/></div>
              <div className='hover:underline decoration-custom-blue text-2xl font-bold'>CodeAxis</div>
              <div className='hover:underline decoration-custom-blue decoration-2'>Sobre</div>
              </div>
              <div className='container flex justify-end mr-20 text-lg'>
                <div className='hover:underline decoration-custom-blue'>
                <button className="rounded-tl-full rounded-tr-full rounded-bl-full flex justify-center items-center gap-3 p-2 w-40 bg-custom-blue text-white">Entrar</button>
                </div>
            </div>
          </div>
      </>
    )
  }
  
  export default Navbar