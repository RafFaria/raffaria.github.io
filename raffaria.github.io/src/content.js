// Conteúdo e imagens da TAMP. Troque as imagens de inspiração aqui.
// Fotos locais: coloque os arquivos em public/images e use 'images/nome.webp'.
// Evite / no início dos caminhos para manter compatibilidade com GitHub Pages.
export const company = {
  name: "TAMP Estampados",
  whatsapp: "5541988180340",
  phoneLabel: "(41) 98818-0340",
  address: "Rua Gustavo Barroso, 1197",
  message:
    "Olá! Conheci a TAMP Estampados pelo site e gostaria de saber mais sobre as canecas personalizadas.",
};

export const assets = {
  hero: {
    image: "", // Foto real opcional. Sem imagem, usamos uma ilustração original.
    alt: "Caneca personalizada da TAMP Estampados",
  },
};

export const products = [
  {
    id: "smile",
    name: "Uma dose de bom humor",
    description: "Frases que deixam o dia mais leve.",
    label: "Frases divertidas",
    category: "dia-a-dia",
    color: "#ffdf7e",
    background: "#fff0c4",
    image: "",
    alt: "Inspiração de caneca amarela com a frase Hoje vai dar bom",
  },
  {
    id: "photo",
    name: "Memórias para guardar",
    description: "Sua foto favorita, sempre por perto.",
    label: "Fotos & memórias",
    category: "presentes",
    color: "#fff9ee",
    background: "#e8edf6",
    image: "",
    alt: "Ilustração de caneca com uma paisagem e a frase Nossas memórias",
  },
  {
    id: "love",
    name: "Amor em cada detalhe",
    description: "Um presente cheio de significado.",
    label: "Casais & afeto",
    category: "presentes",
    color: "#fbd1cd",
    background: "#fae5e5",
    image: "",
    alt: "Inspiração de caneca rosa com um coração e mensagem de amor",
  },
  {
    id: "brand",
    name: "Sua marca, presente",
    description: "Para equipes, clientes e novas conexões.",
    label: "Para empresas",
    category: "empresas",
    color: "#d9e9fa",
    background: "#e5f0f7",
    image: "",
    alt: "Ilustração de caneca azul com espaço para uma marca",
  },
  {
    id: "profession",
    name: "Café, paixão & profissão",
    description: "Para quem ama o que faz.",
    label: "Profissões",
    category: "dia-a-dia",
    color: "#e4ddf7",
    background: "#efe9fb",
    image: "",
    alt: "Inspiração de caneca lilás com mensagem sobre café e ideias",
  },
  {
    id: "ideas",
    name: "Para celebrar alguém",
    description: "Uma lembrança para um dia especial.",
    label: "Datas especiais",
    category: "presentes",
    color: "#f5aec7",
    background: "#fae5ed",
    image: "",
    alt: "Inspiração de caneca rosa com a frase Você é pura inspiração",
  },
  {
    id: "pet",
    name: "Seu amor de quatro patas",
    description: "Seu companheiro em uma estampa.",
    label: "Universo pet",
    category: "presentes",
    color: "#f5dec4",
    background: "#f5ede0",
    image: "",
    alt: "Ilustração de caneca com desenho de cachorro e o nome Pipoca",
  },
  {
    id: "minimal",
    name: "O essencial diz tudo",
    description: "Poucas palavras. Muito estilo.",
    label: "Minimalistas",
    category: "dia-a-dia",
    color: "#dce9d9",
    background: "#e9f0e5",
    image: "",
    alt: "Inspiração de caneca verde suave com a palavra Respira",
  },
];

export const colors = [
  { name: "Rosa criativo", value: "#f5aec7" },
  { name: "Azul leve", value: "#d9e9fa" },
  { name: "Amarelo solar", value: "#ffdf7e" },
  { name: "Verde tranquilo", value: "#dce9d9" },
];

export function whatsappUrl(message = company.message) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
