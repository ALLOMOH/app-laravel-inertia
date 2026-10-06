import AppLayout from '@/Layouts/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {

    return (
        <AppLayout title="About the Project">
            <div className="prose prose-neutral max-w-none">
                <Card>
                    <CardHeader>
                        <CardTitle>About This Project</CardTitle>
                        <CardDescription>
                            This project is a simple Inertia.js application built with React and Tailwind CSS.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>• Built with Laravel 13 + Inertia 3 + React 19</p>
                        <p>• Uses Vite 8 for fast builds</p>
                        <p>• Fully customizable and ready for deployment</p>
                    </CardContent>
                </Card>
            </div>
            <p className="mt-6 text-muted-foreground">
                This project serves as a starting point for building modern web applications using Laravel and Inertia.js. It demonstrates how to set up a basic application structure, including routing, layouts, and components.
            </p>
        </AppLayout>
    )
}
