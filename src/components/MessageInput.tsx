import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t bg-white p-4">
      <div className="flex gap-2 items-end">
        <Button variant="ghost" size="icon" className="shrink-0">
          <Icon name="Paperclip" size={20} />
        </Button>
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Написать сообщение..."
            className="pr-12 rounded-full border-gray-200 focus:border-blue-500"
          />
          <Button
            onClick={handleSend}
            size="icon"
            className="absolute right-1 top-1 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600"
            disabled={!message.trim()}
          >
            <Icon name="Send" size={16} />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="shrink-0">
          <Icon name="Smile" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
