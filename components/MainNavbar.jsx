import Link from "next/link"

const MainNavbar = () => {
  return (
    <div className="absolute w-full h-30 flex px-4 py-2 justify-between text-[#D8D9C5]">
        <div className="brandContainer">
            <h4 className="brandSolaris font-semibold text-lg">Solaris</h4>
        </div>
        <div id="linksContainer">
            <ul className="flex gap-8">
                <li className="font-bold"><Link href="/">Home</Link></li>
                <li className="font-bold"><Link href="/dashboard">App</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default MainNavbar