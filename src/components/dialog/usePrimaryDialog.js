import { useState } from "react";

export const usePrimaryDialog = () => {
  const [openPrimary, setIsPrimaryOpen] = useState(false);

  const togglePrimary = () => setIsPrimaryOpen(!openPrimary);

  return {
    openPrimary,
    togglePrimary,
  };
};
