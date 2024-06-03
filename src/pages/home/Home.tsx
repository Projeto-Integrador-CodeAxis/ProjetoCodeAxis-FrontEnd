import './Home.css'



function Home() {
    return (
        <main className="container_home grid grid-cols-2 text-white text h-screen ">
            <div className="container_home_textos flex flex-col gap-y-32 px-32 justify-center">
                <div className='container_home_textos-h1' >
                    <h1 className="text-6xl font-semibold font-poppins">Sua nova escola de tecnologia!</h1>
                </div>

                <div className="container_home_textos-button  mt-[-100px] flex  gap-x-9 justify-center">
                <a href="/login" className='transition-opacity duration-300 hover:opacity-75'>Inicie agora</a>
                <a href="/formcadastro" className='transition-opacity duration-300 hover:opacity-75'>Registre-se</a>
                </div>

                <div className="container_home_textos-categorias flex flex-col text-xl gap-y-9">
                    <h2 className="font-poppins font-semibold">Nossas Categorias:</h2>
                    <p className="font-sans">JavaScript</p>
                </div>
            </div>

            <div className="container_home_fotos flex overflow-hidden h-screen justify-end mr-[150px]">
                <div className="container_home_fotos-1 flex flex-col items-center gap-y-4">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%201.png?updatedAt=1716308378516" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%206.png?updatedAt=1716308378584" alt="" />
                </div>

                <div className="container_home_fotos-2 flex flex-col items-center justify-end gap-y-[26px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%202.png?updatedAt=1716308378682" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%203.png?updatedAt=1716308378886" alt="" />
                </div>

                <div className="container_home_fotos-3 flex flex-col items-center gap-y-[24px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%204.png?updatedAt=1716308378509" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%205.png?updatedAt=1716308378518" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;