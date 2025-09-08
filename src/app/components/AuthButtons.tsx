"use client";

import { useSession, signOut } from "next-auth/react";

export function AuthButtons() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <span>Hi, {session.user?.name}</span>
        <button onClick={() => signOut()}>Logout</button>
      </>
    );
  }
  return <a href="/login">Login</a>;
}