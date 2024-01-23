"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = (props: { children: ReactNode }) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthProvider;
