function Form(props) {
    
    function createAlert() {
        alert("Thank you, You're now a member")
    }
    return (
        <form action="" className="w-full max-w-sm mx-auto" onSubmit={createAlert}>
            <div className="flex flex-col pt-10" >
                <input type="text" placeholder="email" className="border border-[#b8df10] mb-3 rounded-md" />
                <input type="text" placeholder="password" className="border border-[#b8df10] rounded-md" />
                <button type="submit" className="rounded-full text-lg leading-4 font-medium bg-blue-500 hover:bg-sky-700 h-8 mt-5 text-white">Sign Up</button>
            </div>
        </form>
    )
}

export default Form