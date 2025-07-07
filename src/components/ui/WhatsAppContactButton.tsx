"use client";

interface WhatsAppContactButtonProps {
  message: string;
  children: React.ReactNode;
  className?: string;
}

export default function WhatsAppContactButton({
  message,
  children,
  className = "bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3",
}: WhatsAppContactButtonProps) {
  const whatsappNumber = "+554199116048";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <button onClick={handleWhatsApp} className={className}>
      {children}
    </button>
  );
}
