import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/918105592706"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
        <div className="bg-zinc-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm">
          Chat with us on WhatsApp
        </div>
      </div>
    </a>
  );
}
