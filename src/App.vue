<script setup>
import { onMounted } from 'vue'
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Clock3,
  Flame,
  Heart,
  Search,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap
} from '@lucide/vue'
import logoUrl from '../logo.png'

onMounted(() => {
  const revealItems = document.querySelectorAll('[data-reveal]')

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  document.documentElement.classList.add('reveal-ready')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
  )

  revealItems.forEach((item) => observer.observe(item))
})

const collections = [
  {
    title: 'Caneca Personalizada',
    artist: 'Arte, frase ou foto',
    price: 'Sob consulta',
    bid: 'Presente ideal',
    img: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Camiseta Estampada',
    artist: 'Algodao e silk/DTF',
    price: 'Sob consulta',
    bid: 'Pedido unitario',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Kit Empresa',
    artist: 'Marca, evento ou equipe',
    price: 'Orcamento rapido',
    bid: 'Pequenas tiragens',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Lembranca Criativa',
    artist: 'Datas especiais',
    price: 'Feito sob medida',
    bid: 'Entrega combinada',
    img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=900&q=85'
  }
]

const sellers = [
  ['01', 'Voce envia a ideia', 'Foto, frase, logo ou referencia', '#f06c64'],
  ['02', 'A TAMP monta a arte', 'Ajustamos para ficar bonito no produto', '#35c2ff'],
  ['03', 'Voce aprova', 'Sem produzir antes da confirmacao', '#f7c948'],
  ['04', 'Produzimos seu pedido', 'Canecas e camisetas personalizadas', '#54d17a']
]

const features = [
  { icon: Wallet, title: 'Atendimento pelo WhatsApp', text: 'Voce chama, envia sua ideia e recebe orientacao para transformar em produto.' },
  { icon: ShieldCheck, title: 'Arte com aprovacao', text: 'A criacao e ajustada antes da producao para evitar surpresa no resultado final.' },
  { icon: Zap, title: 'Pedidos para pessoas e empresas', text: 'Produtos unitarios, presentes, eventos, equipes e pequenas tiragens.' }
]
</script>

<template>
  <main class="page-shell">
    <header class="nav">
      <a class="brand" href="#">
        <img class="brand-logo" :src="logoUrl" alt="Logo TAMP Estampados" />
        <span>TAMP</span>
      </a>

      <nav class="nav-links" aria-label="Navegacao principal">
        <a href="#products">Produtos</a>
        <a href="#process">Como funciona</a>
        <a href="#contact">Contato</a>
        <a href="#about">TAMP</a>
      </nav>

      <div class="nav-actions">
        <button class="icon-btn" aria-label="Pesquisar">
          <Search :size="20" />
        </button>
        <button class="icon-btn" aria-label="Notificacoes">
          <Bell :size="20" />
        </button>
        <button class="wallet-btn">
          <Wallet :size="18" />
          WhatsApp
        </button>
      </div>
    </header>

    <section class="hero">
      <div class="hero-copy" data-reveal>
        <p class="eyebrow"><Sparkles :size="17" /> Canecas e camisetas personalizadas</p>
        <h1>Crie estampas unicas com a TAMP.</h1>
        <p class="hero-text">
          Transformamos ideias, fotos, frases e marcas em produtos personalizados para presente,
          eventos, empresas e momentos especiais.
        </p>
        <div class="hero-actions">
          <a class="primary-btn" href="https://wa.me/5541988180340" target="_blank" rel="noreferrer">
            Pedir orcamento
            <ArrowRight :size="19" />
          </a>
          <a class="secondary-btn" href="#products">Ver produtos</a>
        </div>
        <dl class="stats">
          <div data-reveal style="--delay: 120ms">
            <dt>100%</dt>
            <dd>Personalizado</dd>
          </div>
          <div data-reveal style="--delay: 210ms">
            <dt>1+</dt>
            <dd>Pedido unitario</dd>
          </div>
          <div data-reveal style="--delay: 300ms">
            <dt>41</dt>
            <dd>Atendimento local</dd>
          </div>
        </dl>
      </div>

      <div class="hero-art mascot-stage" aria-label="Mascote animado da TAMP" data-reveal style="--delay: 180ms">
        <span class="spark spark-one"></span>
        <span class="spark spark-two"></span>
        <span class="spark spark-three"></span>
        <span class="orbit orbit-one">B</span>
        <span class="orbit orbit-two">Ξ</span>
        <span class="arrow-surge" aria-hidden="true"></span>

        <div class="mascot">
          <div class="mascot-head">
            <span class="hair hair-one"></span>
            <span class="hair hair-two"></span>
            <span class="hair hair-three"></span>
            <span class="glasses">
              <i></i>
              <i></i>
            </span>
            <span class="nose"></span>
            <span class="mouth"></span>
          </div>
          <div class="scarf">
            <span></span>
          </div>
          <div class="mascot-body">
            <span class="badge">TAMP</span>
          </div>
          <div class="coin-stack stack-left">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div class="coin-stack stack-right">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div class="front-coin">B</div>
        </div>
      </div>
    </section>

    <section class="category-strip" aria-label="Categorias">
      <span data-reveal style="--delay: 80ms">Canecas</span>
      <span data-reveal style="--delay: 150ms">Camisetas</span>
      <span data-reveal style="--delay: 220ms">Presentes</span>
      <span data-reveal style="--delay: 290ms">Empresas</span>
      <span data-reveal style="--delay: 360ms">Eventos</span>
    </section>

    <section class="section-grid" id="about">
      <div class="section-heading" data-reveal>
        <p class="eyebrow"><Flame :size="17" /> TAMP Estampados</p>
        <h2>Personalizados com cara de presente bem pensado.</h2>
      </div>
      <div class="feature-grid">
        <article
          v-for="(feature, index) in features"
          :key="feature.title"
          class="feature-card"
          data-reveal
          :style="{ '--delay': `${index * 110}ms` }"
        >
          <component :is="feature.icon" :size="28" />
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </article>
      </div>
    </section>

    <section class="section-block" id="products">
      <div class="section-heading split" data-reveal>
        <div>
          <p class="eyebrow"><BadgeCheck :size="17" /> Produtos</p>
          <h2>Escolha o produto e envie sua ideia.</h2>
        </div>
        <a class="text-link" href="https://wa.me/5541988180340" target="_blank" rel="noreferrer">Falar com a TAMP <ArrowRight :size="17" /></a>
      </div>

      <div class="collection-grid">
        <article
          v-for="(item, index) in collections"
          :key="item.title"
          class="collection-card"
          data-reveal
          :style="{ '--delay': `${index * 95}ms` }"
        >
          <img :src="item.img" :alt="`Obra ${item.title}`" />
          <div class="collection-content">
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.artist }}</p>
            </div>
            <button class="round-btn" :aria-label="`Favoritar ${item.title}`">
              <Heart :size="18" />
            </button>
          </div>
          <div class="bid-row">
            <span>{{ item.bid }}</span>
            <strong>{{ item.price }}</strong>
          </div>
        </article>
      </div>
    </section>

    <section class="market-band" id="contact" data-reveal>
      <div>
        <p class="eyebrow"><Clock3 :size="17" /> Atendimento rapido</p>
        <h2>Chame no WhatsApp e comece sua estampa hoje.</h2>
      </div>
      <div class="auction-panel">
        <div class="auction-price">
          <span>Contato</span>
          <strong>41 9 8818-0340</strong>
        </div>
        <div class="auction-timer">
          <span>Arte</span>
          <span>Aprov.</span>
          <span>Prod.</span>
        </div>
        <a class="primary-btn" href="https://wa.me/5541988180340" target="_blank" rel="noreferrer">
          WhatsApp
          <ArrowRight :size="19" />
        </a>
      </div>
    </section>

    <section class="section-block" id="process">
      <div class="section-heading split" data-reveal>
        <div>
          <p class="eyebrow"><Sparkles :size="17" /> Como funciona</p>
          <h2>Da ideia ao produto pronto.</h2>
        </div>
      </div>
      <div class="seller-grid">
        <article
          v-for="(seller, index) in sellers"
          :key="seller[1]"
          class="seller-card"
          data-reveal
          :style="{ '--delay': `${index * 100}ms` }"
        >
          <span class="avatar" :style="{ '--avatar-color': seller[3] }">{{ seller[0] }}</span>
          <div>
            <h3>{{ seller[1] }}</h3>
            <p>{{ seller[2] }}</p>
          </div>
          <BadgeCheck :size="20" />
        </article>
      </div>
    </section>
  </main>
</template>
