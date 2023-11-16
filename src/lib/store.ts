import { writable } from "svelte/store";

export const domain = writable(localStorage.getItem("domain") ?? "")
domain.subscribe((v) => localStorage.setItem("domain", v))