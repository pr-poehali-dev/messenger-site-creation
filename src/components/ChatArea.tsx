import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import Message from "./Message";

interface MessageType {
  id: string;
  text: string;
  isOwn: boolean;
  time: string;
  sender?: string;
}

interface ChatAreaProps {
  chatName?: string;
  messages: MessageType[];
  isOnline?: boolean;
}

const ChatArea = ({ chatName, messages, isOnline }: ChatAreaProps) => {
  if (!chatName) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Icon
            name="MessageCircle"
            size={64}
            className="text-gray-300 mx-auto mb-4"
          />
          <h2 className="text-xl font-medium text-gray-600 mb-2">
            Выберите чат
          </h2>
          <p className="text-gray-500">
            Выберите чат из списка, чтобы начать общение
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
            {chatName.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-medium text-gray-900">{chatName}</h2>
            <p className="text-sm text-gray-500">
              {isOnline ? (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  онлайн
                </span>
              ) : (
                "был(а) недавно"
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Icon
              name="Phone"
              size={20}
              className="text-gray-600 cursor-pointer hover:text-blue-500"
            />
            <Icon
              name="Video"
              size={20}
              className="text-gray-600 cursor-pointer hover:text-blue-500"
            />
            <Icon
              name="MoreVertical"
              size={20}
              className="text-gray-600 cursor-pointer hover:text-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 bg-gray-50">
        <div className="space-y-1">
          {messages.map((message) => (
            <Message
              key={message.id}
              text={message.text}
              isOwn={message.isOwn}
              time={message.time}
              sender={message.sender}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatArea;
