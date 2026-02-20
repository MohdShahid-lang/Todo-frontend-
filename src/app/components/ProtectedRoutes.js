"use client";
import { useEffect } from 'react';
import { hasToken } from '../services/user.service';
import { useRouter } from 'next/navigation';

function ProtectedRoutes({children}) {
    const router = useRouter();
    useEffect(() => {
        if (!hasToken()) {
            router.replace("/login");
        }
    }, [router]);

     if (!hasToken()) return null;

    return children;
}

export default ProtectedRoutes