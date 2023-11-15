"use client";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Login sucessfull");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="h-screen">
      <h1 className="text-center">
        This is the fucking profile page, what's up
      </h1>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
