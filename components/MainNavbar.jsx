import { BsList } from "react-icons/bs";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

const MainNavbar = () => {
  return (
    <div className="fixed w-full h-30 flex px-4 py-2 justify-between text-onBackground z-50">
      <div className="brandContainer">
        <h4 className="brandSolaris font-semibold text-lg">Solaris</h4>
      </div>
      <div id="linksContainer" className="hidden md:flex">
        <Link href="/">
          <h3 className="navbarLink">Home</h3>
        </Link>
        <Link href="/dashboard">
          <h3 className="navbarLink">Dashboard</h3>
        </Link>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-2xl">
            <BsList />
          </SheetTrigger>
          <SheetContent className="text-onBackground">
            <SheetHeader>
              <SheetTitle className="text-start">Menu</SheetTitle>
              <SheetDescription className="pt-4 text-start">
                <h3 className="navbarButton">Home</h3>
                <h3 className="navbarButton">Dashboard</h3>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MainNavbar;
