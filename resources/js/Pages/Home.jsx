import AppLayout from "@/Layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
    return (
        <AppLayout title="Home Page">
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Start</CardTitle>
                        <CardDescription>
                            Clean start with without extra magic.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>• Laravel 13 + Inertia 3 + React 19</p>
                        <p>• Vite 8 for fast builds</p>
                        <p>• Full code control</p>
                        <p>• Ready for shared hosting deployment</p><p></p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>🛠 What's Next?</CardTitle>
                        <CardDescription>Ideas for development</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>• Add manual authentication</p>
                        <p>• Connect Tailwind CSS</p>
                        <p>• Create admin panel</p>
                        <p>• Set up deployment script</p>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-8 flex gap-4">
                <Button asChild>
                    <a href="/about">Learn More</a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">
                        Laravel Documentation
                    </a>
                </Button>
            </div>
        </AppLayout>
    );
}
