function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Login</h1>
            <form className="flex flex-col gap-4 w-full max-w-md">
                <input type="text" placeholder="Email" className="p-2 rounded-md border-2 border-gray-300" />
                <input type="password" placeholder="Senha" className="p-2 rounded-md border-2 border-gray-300" />
                <button type="submit" className="p-2 rounded-md bg-green-500 text-white hover:bg-green-600">Login</button>
            </form>
        </div>
    )
}

export default Login;