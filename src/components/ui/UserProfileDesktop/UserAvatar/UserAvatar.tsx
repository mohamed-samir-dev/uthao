"use client";
import { motion } from "framer-motion";
import { getInitials } from "@/lib/auth";
import Image from "next/image";
import type { UserAvatarProps } from "@/types";



export function UserAvatar({ user, onClick }: UserAvatarProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30 hover:border-white/50 transition-colors"
    >
      {user.image ? (
        <Image
          src={user.image}
          alt={user.name || ""}
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-red-600 flex items-center justify-center text-white font-bold text-xs">
          {getInitials(user.name || user.email || "U")}
        </div>
      )}
    </motion.button>
  );
}