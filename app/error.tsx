"use client"; // Error components must be Client components

import { useEffect } from "react";
import { Heading, Button } from "./common/components";

export default function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <Heading mb={4}>予期せぬエラーが発生しました。</Heading>
      <Button onClick={() => resetErrorBoundary()}>Try again</Button>
    </div>
  );
}
