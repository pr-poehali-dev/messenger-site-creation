import { cn } from "@/lib/utils";

interface MessageProps {
  text: string;
  isOwn: boolean;
  time: string;
  sender?: string;
}

const Message = ({ text, isOwn, time, sender }: MessageProps) => {
  return (
    <div
      className={cn(
        "flex mb-4 animate-fade-in",
        isOwn ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl relative",
          isOwn
            ? "bg-blue-500 text-white rounded-br-md"
            : "bg-gray-100 text-gray-800 rounded-bl-md",
        )}
      >
        {!isOwn && sender && (
          <p className="text-xs font-medium text-blue-600 mb-1">{sender}</p>
        )}
        <p className="text-sm leading-relaxed">{text}</p>
        <p
          className={cn(
            "text-xs mt-1",
            isOwn ? "text-blue-100" : "text-gray-500",
          )}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default Message;
