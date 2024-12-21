import { ConversationUser } from "@/zustand/useConversation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<ConversationUser[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${apiUrl}/api/users`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((error as any).message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
