"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { hasToken } from '../services/user.service';


function PublicRoutes({children}) {
    const router = useRouter()
    useEffect(() => {
        if (hasToken()) {
            router.replace("/");
        }
    }, [router]);


    return children;
}

export default PublicRoutes