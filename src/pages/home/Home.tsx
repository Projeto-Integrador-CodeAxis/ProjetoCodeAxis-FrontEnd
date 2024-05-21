function Home() {
    return (
        <main className="container grid grid-cols-2 text-white text h-screen">
            <div className="flex flex-col gap-y-32 px-32 justify-center">
                <div >
                    <h1 className="text-6xl font-semibold font-poppins">Sua nova escola de tecnologia!</h1>
                </div>

                <div className="flex  gap-x-9 justify-center">
                    <button>Inicie agora</button>
                    <button> Registre-se</button>
                </div>

                <div className="flex flex-col text-xl gap-y-9">
                    <h2 className="font-poppins font-semibold">Nossas Categorias:</h2>
                    <p className="font-sans">JavaScript</p>
                </div>
            </div>

            <div className="flex overflow-hidden h-screen justify-end">
                <div className="flex flex-col items-center gap-y-4">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%201.png?updatedAt=1716308378516" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%206.png?updatedAt=1716308378584" alt="" />
                </div>

                <div className="flex flex-col items-center justify-end gap-y-[26px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%202.png?updatedAt=1716308378682" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%203.png?updatedAt=1716308378886" alt="" />
                </div>

                <div className="flex flex-col items-center gap-y-[24px]">
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%204.png?updatedAt=1716308378509" alt="" />
                    <img className="h-auto w-[90%]" src="https://ik.imagekit.io/codeaxis/Home%20Page/Rectangle%205.png?updatedAt=1716308378518" alt="" />
                </div>
            </div>
        </main>
    )
}

export default Home;