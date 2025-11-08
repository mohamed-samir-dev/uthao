"use client";
import { getInitials } from "@/lib/auth";
import Image from "next/image";
import {UserAvatarProps}from '@/types'


export function UserAvatar({ user }: UserAvatarProps) {
  if (user.image) {
    return (
      <Image
        src={user.image}
        alt={user.name || ""}
        width={40}
        height={40}
        className="w-10 h-10 rounded-full border-2 border-white/30"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full border-2 border-white/30 bg-red-600 flex items-center justify-center text-white font-bold text-sm">
      {getInitials(user.name || user.email || "U")}
    </div>
  );
}