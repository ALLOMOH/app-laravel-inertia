import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';


export default function AppLayout({ children , title =" my Site " }) {
    const  { url } = usePage();

    const isActive = (path) => url === path ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground';

    return (
        <div className="min-h-screen flex flex-col bg-background">
        {/* Header with navigation  */}

        <header className="border-b bg-card">
            <div className="container mx-auto flex items-center justify-between ">
                <Link href="/" className="text-xl font-bold text-foreground">
                My App
                </Link>
                <nav className="flex items-center space-x-4">
                    <Link href="/" className={isActive('/')}>
                        Home
                    </Link>
                    <Link href="/about" className={isActive('/about')}>
                        About
                    </Link>
                </nav>
               <div className="flex items-center gap-2">
                 <Button variant="outline" size="sm" asChild>
                    <Link href="/login" >Login In</Link>
                 </Button>
                <Button  size="sm" asChild>
                        <Link href="/register" >Register </Link>
                </Button>
                </div>
            </div>
        </header>
        {/* Main content */}
        <main className="flex-1 container mx-auto py-8 px-4">\
            <h1 className="text-3xl font-bold mb-6" >{title}</h1>
            {children}
        </main>

        {/* Footer */}
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </footer>
        </div>
    );
}
