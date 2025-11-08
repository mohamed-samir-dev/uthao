import { User } from "@/types";

// Save or update user in localStorage
export const saveUser = (user: User) => {
  const users = getUsers();
  const existingIndex = users.findIndex((u) => u.email === user.email);
  if (existingIndex >= 0) {
    users[existingIndex] = user; // Update existing user
  } else {
    users.push(user); // Add new user
  }
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(user));
};

// Get all users from localStorage (SSR safe)
export const getUsers = (): User[] => {
  if (typeof window === "undefined") return [];
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

// Get current logged-in user (SSR safe)
export const getUser = (): User | null => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

// Authenticate user and set as current user
export const loginUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }
  return null;
};

// Clear current user session
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};

// Generate user initials from full name
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};