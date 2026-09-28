let mugSequence = 0;

const escapeXml = (value) =>
  String(value).replace(
    /[<>&"']/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[character],
  );

const validColor = (value) =>
  /^#[0-9a-f]{6}$/i.test(value)
    ? value
    : /^#[0-9a-f]{3}$/i.test(value)
      ? `#${value
          .slice(1)
          .split("")
          .map((part) => part + part)
          .join("")}`
      : "#f6adbe";

function mixColor(hex, target, amount) {
  return `#${[0, 2, 4]
    .map((position) =>
      Math.round(
        parseInt(hex.slice(position + 1, position + 3), 16) * (1 - amount) +
          target * amount,
      )
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

function flower(x, y, size, color, center = "#fff5cd") {
  return `<g transform="translate(${x} ${y}) scale(${size})" fill="${color}">${[0, 60, 120, 180, 240, 300].map((angle) => `<ellipse cx="0" cy="-12" rx="8" ry="12" transform="rotate(${angle})"/>`).join("")}<circle r="7" fill="${center}"/></g>`;
}

function star(x, y, size, color) {
  return `<path d="M0 -19 Q3 -3 18 0 Q3 3 0 19 Q-3 3 -18 0 Q-3 -3 0 -19Z" transform="translate(${x} ${y}) scale(${size})" fill="${color}"/>`;
}

function paw(x, y, scale, color) {
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="${color}"><path d="M-11 6 C-18 20 -5 24 0 20 C6 24 19 20 11 6 C5 -4 -6 -4 -11 6Z"/><ellipse cx="-15" cy="-5" rx="5" ry="7" transform="rotate(-25 -15 -5)"/><ellipse cx="-5" cy="-13" rx="5" ry="7"/><ellipse cx="7" cy="-12" rx="5" ry="7"/><ellipse cx="17" cy="-3" rx="5" ry="7" transform="rotate(25 17 -3)"/></g>`;
}

const commonType = `font-family="'DM Sans Variable', 'DM Sans', 'Arial', sans-serif" text-anchor="middle" fill="#293b34"`;

function artwork(design, customText) {
  switch (design) {
    case "smile":
      return `<g ${commonType}><text x="209" y="157" font-size="18" font-weight="800" letter-spacing="2">HOJE VAI</text><text x="209" y="193" font-size="34" font-weight="900" letter-spacing="-1">DAR BOM.</text><circle cx="209" cy="245" r="34" fill="#f3c84f"/><ellipse cx="198" cy="239" rx="3" ry="5"/><ellipse cx="220" cy="239" rx="3" ry="5"/><path d="M193 253 Q209 272 225 253" fill="none" stroke="#293b34" stroke-width="3.5" stroke-linecap="round"/>${star(148, 238, 0.55, "#e77c58")}${star(274, 265, 0.65, "#e77c58")}</g>`;
    case "love":
      return `<g ${commonType}><path d="M210 192 C166 159 174 130 193 132 C203 132 208 139 210 144 C219 121 250 132 248 151 C247 167 225 184 210 192Z" fill="#d56259"/><text x="210" y="228" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#ac4847">amor</text><text x="210" y="254" font-size="14" letter-spacing="1">em cada detalhe.</text><path d="M183 272 Q210 281 237 272" fill="none" stroke="#d56259" stroke-width="2" stroke-linecap="round"/>${star(149, 186, 0.35, "#d56259")}${star(278, 213, 0.35, "#d56259")}</g>`;
    case "pet":
      return `<g ${commonType}><path d="M176 161 Q147 148 153 200 Q163 219 180 198Z" fill="#aa7555"/><path d="M245 161 Q274 148 267 200 Q257 219 240 198Z" fill="#aa7555"/><path d="M168 186 Q168 143 210 145 Q253 144 253 186 L248 213 Q235 237 210 239 Q184 237 173 213Z" fill="#ce9a70"/><path d="M200 148 Q214 159 211 187 Q183 190 182 171 Q186 153 200 148Z" fill="#fff2d8"/><ellipse cx="190" cy="187" rx="4" ry="5"/><ellipse cx="232" cy="187" rx="4" ry="5"/><ellipse cx="211" cy="207" rx="21" ry="17" fill="#fff2d8"/><path d="M202 202 Q211 196 220 202 Q219 211 211 213 Q204 211 202 202Z"/><path d="M211 211 V218 M202 218 Q211 224 220 217" fill="none" stroke="#293b34" stroke-width="2" stroke-linecap="round"/><text x="210" y="273" font-size="24" font-weight="800" letter-spacing="3">PIPOCA</text>${paw(146, 247, 0.45, "#aa7555")}${paw(276, 141, 0.45, "#aa7555")}</g>`;
    case "brand":
      return `<g ${commonType}><path d="M211 132 L227 161 L211 190 L195 161Z" fill="#324d43"/><path d="M181 132 L197 161 L181 190 L165 161Z" fill="#779685"/><path d="M241 132 L257 161 L241 190 L225 161Z" fill="#779685"/><text x="210" y="226" font-size="24" font-weight="800" letter-spacing="5">SUA MARCA</text><path d="M173 243 H247" stroke="#324d43" stroke-width="1"/><text x="210" y="264" font-size="9" letter-spacing="2.5">PRESENTE NO DIA A DIA</text></g>`;
    case "minimal":
      return `<g ${commonType}><path d="M212 201 Q209 167 231 149 M215 181 Q188 180 188 158 Q210 159 215 181 M220 168 Q243 170 248 146 Q228 144 220 168" fill="none" stroke="#63776a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><text x="210" y="237" font-family="Georgia, serif" font-style="italic" font-size="40" fill="#425b4b">respira.</text><text x="210" y="263" font-size="9" letter-spacing="2">UM MOMENTO SÓ SEU.</text></g>`;
    case "photo":
      return `<g ${commonType}><rect x="151" y="131" width="120" height="138" rx="2" fill="#fff9ed" transform="rotate(-6 211 200)"/><g transform="rotate(-6 211 200)"><path d="M159 139 H263 V240 H159Z" fill="#b7d7cb"/><circle cx="238" cy="158" r="13" fill="#f4cc6b"/><path d="M159 207 Q188 156 212 193 Q240 167 263 207 V240 H159Z" fill="#78967c"/><path d="M159 221 Q193 176 230 215 Q252 191 263 222 V240 H159Z" fill="#345646"/><path d="M218 209 Q215 225 235 240 H199 Q213 224 207 212Z" fill="#e5d8b7"/><text x="211" y="258" font-family="Georgia, serif" font-style="italic" font-size="11">nossas memórias</text></g>${star(144, 146, 0.4, "#bf784b")}${star(281, 255, 0.45, "#bf784b")}</g>`;
    case "profession":
      return `<g ${commonType}><text x="210" y="157" font-size="14" letter-spacing="2">MOVIDA A</text><text x="210" y="205" font-family="Georgia, serif" font-style="italic" font-size="47" fill="#855740">café</text><text x="210" y="238" font-size="22" font-weight="800">e boas ideias.</text><path d="M193 265 H224 V276 Q224 289 209 289 Q193 289 193 276Z M224 269 H230 Q239 275 231 280 H225" fill="none" stroke="#855740" stroke-width="2.5" stroke-linejoin="round"/><path d="M204 257 Q199 250 205 245 M215 257 Q210 250 216 245" fill="none" stroke="#855740" stroke-width="1.8" stroke-linecap="round"/>${star(275, 174, 0.55, "#bf885a")}${star(142, 215, 0.35, "#bf885a")}</g>`;
    case "custom": {
      const text =
        String(customText || "")
          .trim()
          .slice(0, 70) || "Sua ideia, aqui.";
      const lines = [];
      for (const word of text.split(/\s+/)) {
        if (
          !lines.length ||
          (lines[lines.length - 1].length + word.length > 15 &&
            lines.length < 3)
        )
          lines.push(word);
        else lines[lines.length - 1] += ` ${word}`;
      }
      const fontSize = Math.min(
        32,
        (230 / Math.max(...lines.map((line) => line.length))) * 1.5,
      );
      return `<g ${commonType}>${star(209, 139, 0.7, "#385446")}${lines.map((line, index) => `<text x="210" y="${200 - (lines.length - 1) * 17 + index * 34}" font-size="${fontSize}" font-weight="700">${escapeXml(line)}</text>`).join("")}<path d="M175 267 Q210 279 245 267" fill="none" stroke="#385446" stroke-width="2" stroke-linecap="round"/><text x="210" y="292" font-size="8" letter-spacing="3">FEITA PARA VOCÊ</text></g>`;
    }
    case "ideas":
    default:
      return `<g ${commonType}><text x="209" y="150" font-size="16" font-weight="800" letter-spacing="3">VOCÊ É</text><text x="210" y="195" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="47" fill="#b04463">pura</text><text x="209" y="229" font-family="Georgia, serif" font-style="italic" font-weight="700" font-size="29" fill="#b04463">inspiração.</text>${flower(210, 272, 0.75, "#b04463")}${star(144, 177, 0.42, "#b04463")}${star(278, 147, 0.42, "#b04463")}${star(274, 271, 0.32, "#b04463")}<circle cx="153" cy="254" r="3" fill="#b04463"/></g>`;
  }
}

/** Ceramic mug illustration. `color` accepts a hex color; `custom` uses XML-escaped text. */
export function mugArt({
  id = "mug",
  design = "ideas",
  color = "#f6adbe",
  text = "",
  className = "",
  image = null,
} = {}) {
  const prefix = `mug-${String(id).replace(/[^a-zA-Z0-9_-]/g, "") || "art"}-${++mugSequence}`;
  const ceramic = validColor(color);
  const light = mixColor(ceramic, 255, 0.48);
  const highlight = mixColor(ceramic, 255, 0.77);
  const shadow = mixColor(ceramic, 0, 0.19);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 390" width="440" height="390" class="${escapeXml(className)}" role="img" aria-label="Ilustração de uma caneca personalizada">
  <defs>
    <linearGradient id="${prefix}-body" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${ceramic}"/><stop offset=".16" stop-color="${light}"/><stop offset=".5" stop-color="${light}"/><stop offset=".82" stop-color="${ceramic}"/><stop offset="1" stop-color="${shadow}"/></linearGradient>
    <linearGradient id="${prefix}-handle" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${highlight}"/><stop offset=".45" stop-color="${ceramic}"/><stop offset="1" stop-color="${shadow}"/></linearGradient>
    <linearGradient id="${prefix}-inside" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#a8a59a"/><stop offset=".28" stop-color="#d4d1c8"/><stop offset="1" stop-color="#f4f0e5"/></linearGradient>
    <linearGradient id="${prefix}-shine" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <radialGradient id="${prefix}-shadow"><stop stop-color="#243629" stop-opacity=".22"/><stop offset="1" stop-color="#243629" stop-opacity="0"/></radialGradient>
    <clipPath id="${prefix}-print"><path d="M91 100 H331 L318 292 Q307 326 210 328 Q107 326 98 291Z"/></clipPath>
  </defs>
  <ellipse cx="232" cy="339" rx="173" ry="27" fill="url(#${prefix}-shadow)"/>
  <path d="M317 121 C365 104 410 124 408 175 C406 217 375 259 320 254 L320 225 C353 230 380 209 380 173 C380 142 355 139 327 151Z" fill="url(#${prefix}-handle)"/>
  <path d="M337 129 C373 118 399 132 400 166" fill="none" stroke="${highlight}" stroke-opacity=".75" stroke-width="4" stroke-linecap="round"/>
  <path d="M86 86 C95 108 322 108 334 86 L324 290 C320 317 288 332 210 334 C138 333 101 317 97 290Z" fill="url(#${prefix}-body)"/>
  <path d="M100 287 Q116 323 211 325 Q290 324 322 295 L321 307 Q299 337 211 337 Q127 335 102 309Z" fill="${shadow}" opacity=".35"/>
  <g clip-path="url(#${prefix}-print)">${design === "custom" && image ? `<image href="${escapeXml(image.src)}" x="${210 - 85 * image.scale + image.x}" y="${190 - 70 * image.scale + image.y}" width="${170 * image.scale}" height="${140 * image.scale}" preserveAspectRatio="xMidYMid meet"/>${text.trim() ? `<text x="210" y="296" ${commonType} font-size="16" font-weight="700" textLength="${Math.min(210, text.trim().length * 9)}" lengthAdjust="spacingAndGlyphs">${escapeXml(text.trim())}</text>` : ""}` : artwork(design, text)}</g>
  <path d="M96 114 Q111 122 121 121 L125 282 Q119 301 107 292Z" fill="url(#${prefix}-shine)"/>
  <ellipse cx="210" cy="87" rx="124" ry="32" fill="${highlight}"/>
  <ellipse cx="210" cy="85" rx="114" ry="24" fill="url(#${prefix}-inside)"/>
  <path d="M99 90 Q209 128 322 89" fill="none" stroke="#fffdf4" stroke-opacity=".75" stroke-width="3"/>
  <path d="M94 77 Q207 37 325 77" fill="none" stroke="${highlight}" stroke-width="2"/>
  </svg>`;
}
