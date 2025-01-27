// development approach, the backend server must be turned on
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const apiUrl = import.meta.env.VITE_API_URL;

const useInitApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messageResult, setMessageResult] = useState(false);

  useEffect(() => {
    const initCall = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${apiUrl}/api/auth/initiation`);
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setMessageResult(data);
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toast.error((error as any).message);
      } finally {
        setIsLoading(false);
      }
    };

    initCall();
  }, []);

  return { isLoading, messageResult };
};

export default useInitApp;
