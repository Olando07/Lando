import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
    return (
        <Avatar>
            <AvatarImage src="/src/images/cat.jpg" alt="Olando" />
            <AvatarFallback>OL</AvatarFallback>
        </Avatar>
    );
}
