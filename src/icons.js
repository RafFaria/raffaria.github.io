const paths = {
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
  chevron: '<path d="m9 5 7 7-7 7"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  sparkle:
    '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM20 2v4m-2-2h4"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13"/><path d="M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z"/>',
  building:
    '<path d="M4 21V5l8-3v19M12 9h8v12M2 21h20M8 7v1m0 3v1m0 3v1m8-3v1m0 3v1"/>',
  heart:
    '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  palette:
    '<path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.6-3.2 1.5 1.5 0 0 1 1.2-2.4H17A4 4 0 0 0 21 11c0-4.4-4-8-9-8Z"/><path d="M7 10h.01M10 6h.01M15 7h.01M6 15h.01"/>',
  cup: '<path d="M4 8h13v8a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Zm13 1h1a4 4 0 0 1 0 8h-1M7 2v2m4-2v2m4-2v2"/>',
  image:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m21 15-5-5L6 21"/>',
  chat: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z"/><path d="M8 11h8m-8 4h5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  hand: '<path d="m8 13 1-8a2 2 0 0 1 4 0v6l3-2a3 3 0 0 1 4 3l-1 6a4 4 0 0 1-4 3h-3a5 5 0 0 1-4-2l-5-6a2 2 0 0 1 3-2l2 2Z"/>',
  whatsapp:
    '<path d="M20.5 3.5a11 11 0 0 0-17.3 13L2 22l5.6-1.4a11 11 0 0 0 12.9-17.1Z"/><path d="M8 7c-.6 0-1 1-1 2 0 3.4 4.6 8 8 8 1 0 2-.4 2-1l-2-3-2 1c-1.5-.8-2.2-1.5-3-3l1-2-2-2H8Z"/>',
};
export function icon(name, className = "") {
  return `<svg class="icon ${className}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.sparkle}</svg>`;
}
