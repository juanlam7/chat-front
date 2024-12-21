import useConversation from "@/zustand/useConversation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${apiUrl}/api/messages/${selectedConversation?._id}`,
          {
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((error as any).message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default useGetMessages;
