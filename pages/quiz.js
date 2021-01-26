import { useRouter } from 'next/router';
import React from 'react';

export default function Quiz() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      Página de quiz:
      {' '}
      {name}
    </div>
  );
}
