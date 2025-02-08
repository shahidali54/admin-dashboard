"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {  
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (!isLoggedIn) {
                router.replace("/admin");
            }
        }
    }, [router]);

    return <>{children}</>;
}   