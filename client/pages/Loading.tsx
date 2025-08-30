import { useEffect } from 'react';
import { square } from 'ldrs';

export default function Loading() {
  useEffect(() => { square.register(); }, []);
  return (
    <div className="min-h-screen grid place-items-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_60%_40%,rgba(225,6,0,0.2),transparent)]"/>
      <div className="text-center space-y-6">
        <h1 className="font-braven text-3xl md:text-5xl text-white">loading your f1 experience</h1>
        <div className="inline-block">
          <l-square size="35" stroke="5" stroke-length="0.25" bg-opacity="0.1" speed="1.2" color="white"></l-square>
        </div>
        <p className="text-white/70">Please wait…</p>
      </div>
    </div>
  );
}
