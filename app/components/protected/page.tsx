"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {  // ✅ Ensure localStorage is accessed in browser
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            if (!isLoggedIn) {
                router.push("/admin");
            }
        }
    }, [router]);

    return <>{children}</>;
}   