import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
  avatar?: string;
}

interface ChatSidebarProps {
  chats: Chat[];
  activeChat?: string;
  onChatSelect: (chatId: string) => void;
}

const ChatSidebar = ({ chats, activeChat, onChatSelect }: ChatSidebarProps) => {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Чаты</h1>
          <Icon
            name="Edit3"
            size={20}
            className="text-gray-600 cursor-pointer hover:text-blue-500"
          />
        </div>
        <div className="relative">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Поиск чатов..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              className={cn(
                "flex items-center p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50",
                activeChat === chat.id
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "",
              )}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-lg mr-3">
                {chat.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600 truncate">
                    {chat.lastMessage}
                  </p>
                  {chat.unread && (
                    <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatSidebar;
