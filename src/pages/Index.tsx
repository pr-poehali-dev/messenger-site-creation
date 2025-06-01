import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatArea from "@/components/ChatArea";
import MessageInput from "@/components/MessageInput";

const Index = () => {
  const [activeChat, setActiveChat] = useState<string>("1");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Привет! Как дела?",
      isOwn: false,
      time: "14:30",
      sender: "Анна",
    },
    {
      id: "2",
      text: "Привет! Всё отлично, спасибо! А у тебя как?",
      isOwn: true,
      time: "14:32",
    },
    {
      id: "3",
      text: "Тоже хорошо! Планируешь что-то на выходные?",
      isOwn: false,
      time: "14:33",
      sender: "Анна",
    },
    {
      id: "4",
      text: "Думаю сходить в кино, хочешь составить компанию?",
      isOwn: true,
      time: "14:35",
    },
  ]);

  const chats = [
    {
      id: "1",
      name: "Анна Петрова",
      lastMessage: "Думаю сходить в кино, хочешь составить компанию?",
      time: "14:35",
      unread: 0,
    },
    {
      id: "2",
      name: "Рабочий чат",
      lastMessage: "Собрание перенесли на завтра",
      time: "13:20",
      unread: 3,
    },
    {
      id: "3",
      name: "Максим Иванов",
      lastMessage: "Отправил файлы",
      time: "12:45",
      unread: 1,
    },
    {
      id: "4",
      name: "Семья",
      lastMessage: "Мама: Не забудь позвонить бабушке",
      time: "11:30",
      unread: 0,
    },
    {
      id: "5",
      name: "Елена Смирнова",
      lastMessage: "Спасибо за помощь!",
      time: "вчера",
      unread: 0,
    },
  ];

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      isOwn: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const selectedChat = chats.find((chat) => chat.id === activeChat);

  return (
    <div className="h-screen flex bg-gray-100 font-sans">
      <ChatSidebar
        chats={chats}
        activeChat={activeChat}
        onChatSelect={setActiveChat}
      />
      <div className="flex-1 flex flex-col">
        <ChatArea
          chatName={selectedChat?.name}
          messages={activeChat === "1" ? messages : []}
          isOnline={activeChat === "1"}
        />
        {selectedChat && <MessageInput onSendMessage={handleSendMessage} />}
      </div>
    </div>
  );
};

export default Index;
