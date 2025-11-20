export default function Notify({ message }: { message: string }) {
  return (
    <div className="fixed bottom-0 max-md:bottom-32 w-full flex justify-center">
      <div className="slide-to-top text-xs px-7 py-2 rounded-full bg-white/5 max-w-1/3 transition-all">
        {message}
      </div>
    </div>
  );
}
