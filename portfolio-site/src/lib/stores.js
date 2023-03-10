import { writable } from "svelte/store";

export const navLinks = writable([
  { name: "About", href: "/about", icon: "fa-solid fa-user" },
  { name: "Projects", href: "/projects", icon: "fa-solid fa-folder" },
  { name: "Contact", href: "/contact", icon: "fa-solid fa-envelope" },
]);
