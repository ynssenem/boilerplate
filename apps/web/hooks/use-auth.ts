import type { Models } from "appwrite";
import { account } from "@/utils/appwrite-client";
import { ID } from "appwrite";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
  const [current, setCurrent] = useState<Models.Session | null>(null);
  const [user, setUser] = useState<Models.User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const register = async (email: string, password: string): Promise<void> => {
    await account.create({
      userId: ID.unique(),
      email,
      password,
    });
    await login(email, password);
  };

  const login = async (email: string, password: string): Promise<void> => {
    const session = await account.createEmailPasswordSession({
      email,
      password,
    });
    setCurrent(session);
    router.push("/");
  };

  const logout = async (): Promise<void> => {
    await account.deleteSession("current");
    setCurrent(null);
    router.push("/");
  };

  const getCurrentSession = async () => {
    try {
      const user = await account.getSession({
        sessionId: "current",
      });
      setCurrent(user);
    } catch (error) {
      setCurrent(null);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async () => {
    try {
      const user = await account.get();
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    getCurrentSession();
  }, []);

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    current,
    loading,
    login,
    logout,
    register,
    user,
  };
}
