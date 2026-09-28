# TAMP Estampados — canecas personalizadas

Página responsiva em HTML, CSS e JavaScript, com Vite para desenvolvimento e geração do site estático. O catálogo e o personalizador são demonstrativos; os pedidos são encaminhados ao WhatsApp.

## Executar localmente

Use Node.js **24 recomendado**; requisito mínimo: Node.js 22.12.

```bash
cd /home/rafael/Documentos/Code/Dev/tamp
npm ci
npm run dev
```

Abra o endereço informado pelo Vite no terminal. Para gerar e conferir a versão de produção:

```bash
npm run build
npm run preview
```

Os arquivos para publicação são gerados em `dist/`. O `base: './'` permite hospedar o site em um subdiretório, como um projeto no GitHub Pages.

## Personalizar o conteúdo

- **Marca, WhatsApp, imagens, categorias e produtos:** `src/content.js`. Os textos das seções e metadados estão em `index.html`.
- **WhatsApp:** mantenha o número no formato internacional, somente dígitos. O contato configurado é **5541988180340**.
- **Ilustrações das canecas:** `src/mug-art.js`. São conceitos visuais, não fotografias de produtos reais.
- **Fotografias dos produtos:** coloque arquivos em `public/images/` e preencha `product.image` em `src/content.js` com `./images/nome-do-arquivo.webp`.
- **Imagem principal opcional:** configure `assets.hero.image` no mesmo arquivo, usando um caminho como `./images/hero.webp`.
- **Identidade e compartilhamento:** logo original em `public/logo/Tamp-Logo.jfif`, usada no cabeçalho, rodapé e favicon. Capa em `public/social-cover.png`, fonte editável em `public/social-cover.svg`, e metatags em `index.html`.

Prefira imagens WebP ou AVIF otimizadas e textos alternativos que descrevam cada produto. Ao usar fotografias reais, confira os direitos de uso e ajuste o conteúdo do catálogo. A visualização do personalizador é uma demonstração; a arte final e as condições do pedido devem ser confirmadas pelo atendimento.

A capa de compartilhamento é demonstrativa. Quando o domínio estiver definido, atualize as metatags em `index.html`, especialmente `og:url` e `og:image`, usando URLs absolutas. A capa PNG de 1200 × 630 pixels já está incluída para compatibilidade com redes sociais. Ao alterar a arte fonte SVG, exporte novamente o PNG.

## Imagem no personalizador

O cliente pode selecionar JPG, PNG ou WebP de até 10 MB, ajustar tamanho e posição e combinar a imagem com uma frase. Para usar somente a imagem, basta apagar o texto. O botão **Remover imagem** restaura a prévia de texto.

O processamento acontece no navegador, sem upload nem armazenamento no servidor. A imagem da prévia é reduzida para até 1600 pixels no maior lado. O botão **Baixar prévia** exporta uma simulação PNG; a arte original deve ser enviada separadamente na conversa do WhatsApp. O download usa Arial para manter a exportação independente de fontes externas.

Funciona em hospedagem estática, incluindo GitHub Pages. A prévia não é um arquivo final de produção.

## Publicar no GitHub Pages

O projeto contém o workflow `.github/workflows/deploy.yml`, mas **a publicação ainda não foi realizada e não há URL pública definida**.

1. Crie um repositório no GitHub e conecte esta pasta a ele, utilizando a branch `main`.
2. Envie o código, incluindo `package-lock.json` e a pasta `.github/`.
3. No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**.
4. Na aba **Actions**, execute **Publicar no GitHub Pages → Run workflow**. Os próximos envios à branch `main` também publicarão automaticamente.
5. Aguarde os jobs `build` e `deploy`. O GitHub exibirá a URL publicada em **Settings → Pages** e no ambiente `github-pages`.

Para outra hospedagem estática, execute `npm run build` e envie o conteúdo de `dist/`. Não publique `node_modules/`; nenhum servidor Node.js é necessário para servir o site gerado.

## Arquivos principais

- `index.html`: seções, navegação, textos, SEO e dados estruturados.
- `src/main.js`: menu mobile, filtros, prévia interativa e links de WhatsApp.
- `src/style.css`: identidade visual, animações e responsividade.
- `src/content.js`: dados da empresa, configurações de imagens e inspirações.
- `src/mug-art.js` e `src/icons.js`: ilustrações originais e ícones em SVG.
- `public/logo/Tamp-Logo.jfif`: logo original fornecida, preservada.
- `public/social-cover.svg` e `public/social-cover.png`: capa de compartilhamento editável e exportada.
- `package.json`, `package-lock.json`, `vite.config.js`, `.gitignore`: instalação e build.
- `.github/workflows/deploy.yml`: publicação no GitHub Pages.

## Verificação realizada

Build de produção concluído. Página executada no Chrome e verificada em 320, 375, 390, 414, 768, 1024, 1280, 1440 e 1920 px, sem rolagem horizontal. Menu mobile (incluindo Escape), filtros, atualização da frase/cor e composição do link do WhatsApp foram exercitados. As âncoras internas e as imagens carregaram corretamente; não houve erros de console ou HTTP no build de produção.

A auditoria automatizada axe-core não encontrou violações WCAG A/AA nos layouts de 390 e 1440 px. Essa verificação básica complementa a inspeção visual; não representa uma certificação de acessibilidade. O site respeita `prefers-reduced-motion`, usa fontes locais e tem foco visível para navegação por teclado.

As ilustrações do hero, dos oito modelos e da seção Sobre podem ser substituídas por fotos reais. A prévia do personalizador deve continuar identificada como simulação. Nenhum pedido foi enviado pelo WhatsApp durante os testes.
