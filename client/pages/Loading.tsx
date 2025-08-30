import { Square } from 'ldrs/react';
import 'ldrs/react/Square.css';

export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_60%_40%,rgba(225,6,0,0.2),transparent)]"/>
      <div className="text-center space-y-6">
        <h1 className="font-braven text-3xl md:text-5xl text-white">loading your f1 experience</h1>
        <div className="inline-block">
          <Square size="35" stroke="5" strokeLength="0.25" bgOpacity="0.1" speed="1.2" color="white" />
        </div>
        <p className="text-white/70">Please wait…</p>
      </div>
    </div>
  );
}
