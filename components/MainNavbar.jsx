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
      <Sheet>
        <SheetTrigger className="text-2xl">
          <BsList />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MainNavbar;
