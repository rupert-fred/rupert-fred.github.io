import { writable } from "svelte/store";

export const navLinks = writable([
  { name: "About", href: "/", icon: "fa-solid fa-user" },
  { name: "Projects", href: "/", icon: "fa-solid fa-folder" },
  { name: "Contact", href: "/", icon: "fa-solid fa-envelope" },
]);
