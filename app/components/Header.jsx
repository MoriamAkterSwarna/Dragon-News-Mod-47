import Image from "next/image";
import logoImg from "../assets/logo.png";
import { format } from "date-fns";
const today = format(new Date(), "EEEE, MMMM dd, yyyy");

export default function Header() {
  return (
    <div className="text-center py-8">
      <Image
      loading="eager"
        src={logoImg}
        alt="Logo"
        width={350}
        height={200}
        className="mx-auto w-auto max-w-87.5 h-auto"
      />
      <p className="mt-2">Journalism Without Fear or Favour</p>

      <p className="text-sm text-muted-foreground mt-4">{today}</p>
      
      
    </div>
  );
}
