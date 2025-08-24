import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} BSA Connect. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2">
            <Badge variant="secondary">#BSASolutions</Badge>
            <Badge variant="secondary">#LusakaTech</Badge>
            <Badge variant="secondary">#ZambiaBusiness</Badge>
        </div>
      </div>
    </footer>
  );
}
