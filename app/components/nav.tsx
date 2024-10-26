export default function Nav(){
    return(
        <header className="bg-green-300">
            <nav className="text-white max-w-80 px-6 sm:text-lg overflow-hidden m-auto h-20 flex justify-between items-center">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/countries">Countries</a>
            </nav>
        </header>
    )
}
