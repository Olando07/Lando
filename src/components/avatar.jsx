import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import cat from "../images/cat.jpg";

export function AvatarDemo() {
    return (
        <Avatar>
            <AvatarImage src={cat} alt="Olando" type="jpeg"/>
            <AvatarFallback>OL</AvatarFallback>
        </Avatar>
    );
}
