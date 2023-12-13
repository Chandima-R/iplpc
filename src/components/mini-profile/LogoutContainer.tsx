import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
  
  export function LogoutContainer() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
        <Button className="cursor-pointer flex items-center bg-primary hover:bg-secondary hover:text-primary duration-300 transition-all ease-in-out">
          <p>Logout</p>
          <LogOut className="ml-4 h-4 w-4"/>
        </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure to Logout?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  