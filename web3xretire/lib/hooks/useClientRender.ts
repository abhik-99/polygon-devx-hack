"use client";

import { useEffect, useState } from "react";

export const useClientRender = () => {
  const [isClientRender, setIsClientRender] = useState<Boolean>(false);
  useEffect(() => {
    setIsClientRender(true);

    return () => {
      setIsClientRender(false);
    };
  }, []);
  return isClientRender;
};
