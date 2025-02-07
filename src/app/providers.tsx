"use client";

import React from "react";
import {Provider as URQLProvider} from "urql";
import {QueryClientProvider} from "@tanstack/react-query";
import urqlClient from "../lib/urqlClient";
import queryClient from "../lib/reactQueryClient";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({children}: ProvidersProps) => {
  return (
    <URQLProvider value={urqlClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </URQLProvider>
  );
};

export default Providers;
