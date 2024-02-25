
"use client";
import { getSession } from '@/store/slices/userSlice';
import { store } from '@/store/store';
import React, { useEffect } from 'react'

function AuthProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    useEffect(() => {
        // store.dispatch(getSession());
      }, []);
  return (
    <div>{children}</div>
  )
}

export default AuthProvider
