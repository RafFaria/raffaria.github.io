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
    title: 'Chromatic Drift',
    artist: 'Nina Campos',
    price: '2.48 ETH',
    bid: '18 lances',
    img: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Glass Genesis',
    artist: 'Theo Lima',
    price: '1.92 ETH',
    bid: '11 lances',
    img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'After Neon',
    artist: 'Mara Yu',
    price: '3.16 ETH',
    bid: '25 lances',
    img: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Quiet Signal',
    artist: 'Joao Rios',
    price: '0.84 ETH',
    bid: '7 lances',
    img: 'https://images.unsplash.com/photo-1643101454431-6cfc4f10beee?auto=format&fit=crop&w=900&q=85'
  }
]

const sellers = [
  ['AL', 'Aline Voss', '14.2 ETH', '#f06c64'],
  ['RC', 'Rafa Costa', '12.8 ETH', '#35c2ff'],
  ['MY', 'Maya Yuen', '10.5 ETH', '#f7c948'],
  ['KO', 'Koji One', '8.9 ETH', '#54d17a']
]

const features = [
  { icon: Wallet, title: 'Carteira conectada', text: 'Fluxo direto para colecionar, listar e acompanhar seus ativos.' },
  { icon: ShieldCheck, title: 'Contratos verificados', text: 'Sinais de autenticidade e histórico de propriedade em destaque.' },
  { icon: Zap, title: 'Lances em tempo real', text: 'Atualizações rápidas para drops, leilões e ofertas concorrentes.' }
]
</script>

<template>
  <main class="page-shell">
    <header class="nav">
      <a class="brand" href="#">
        <span class="brand-mark">D</span>
        <span>Dyat</span>
      </a>

      <nav class="nav-links" aria-label="Navegacao principal">
        <a href="#collections">Colecoes</a>
        <a href="#auctions">Leiloes</a>
        <a href="#creators">Criadores</a>
        <a href="#market">Mercado</a>
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
          Conectar
        </button>
      </div>
    </header>

    <section class="hero">
      <div class="hero-copy" data-reveal>
        <p class="eyebrow"><Sparkles :size="17" /> Mercado criativo Web3</p>
        <h1>Descubra arte digital rara em drops curados.</h1>
        <p class="hero-text">
          Uma experiencia de marketplace inspirada no visual da referencia, com cards vibrantes,
          leiloes ativos, criadores em destaque e uma interface pronta para evoluir em Vue 3.
        </p>
        <div class="hero-actions">
          <a class="primary-btn" href="#collections">
            Explorar agora
            <ArrowRight :size="19" />
          </a>
          <a class="secondary-btn" href="#creators">Ver criadores</a>
        </div>
        <dl class="stats">
          <div data-reveal style="--delay: 120ms">
            <dt>38k+</dt>
            <dd>Obras listadas</dd>
          </div>
          <div data-reveal style="--delay: 210ms">
            <dt>12k</dt>
            <dd>Colecionadores</dd>
          </div>
          <div data-reveal style="--delay: 300ms">
            <dt>94%</dt>
            <dd>Vendas verificadas</dd>
          </div>
        </dl>
      </div>

      <div class="hero-art mascot-stage" aria-label="Mascote animado do marketplace" data-reveal style="--delay: 180ms">
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
            <span class="badge">NFT</span>
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
      <span data-reveal style="--delay: 80ms">Arte generativa</span>
      <span data-reveal style="--delay: 150ms">Fotografia</span>
      <span data-reveal style="--delay: 220ms">3D collectibles</span>
      <span data-reveal style="--delay: 290ms">Musica</span>
      <span data-reveal style="--delay: 360ms">Avatares</span>
    </section>

    <section class="section-grid" id="market">
      <div class="section-heading" data-reveal>
        <p class="eyebrow"><Flame :size="17" /> Recursos</p>
        <h2>Ferramentas para um marketplace moderno.</h2>
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

    <section class="section-block" id="collections">
      <div class="section-heading split" data-reveal>
        <div>
          <p class="eyebrow"><BadgeCheck :size="17" /> Colecoes em alta</p>
          <h2>Leiloes que estao movimentando o mercado.</h2>
        </div>
        <a class="text-link" href="#auctions">Ver todos <ArrowRight :size="17" /></a>
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

    <section class="market-band" id="auctions" data-reveal>
      <div>
        <p class="eyebrow"><Clock3 :size="17" /> Leilao ao vivo</p>
        <h2>Ofertas abertas com ritmo de galeria premium.</h2>
      </div>
      <div class="auction-panel">
        <div class="auction-price">
          <span>Lance atual</span>
          <strong>8.64 ETH</strong>
        </div>
        <div class="auction-timer">
          <span>12h</span>
          <span>48m</span>
          <span>09s</span>
        </div>
        <button class="primary-btn">
          Dar lance
          <ArrowRight :size="19" />
        </button>
      </div>
    </section>

    <section class="section-block" id="creators">
      <div class="section-heading split" data-reveal>
        <div>
          <p class="eyebrow"><Sparkles :size="17" /> Top sellers</p>
          <h2>Criadores com maior volume.</h2>
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
            <p>{{ seller[2] }} vendidos</p>
          </div>
          <BadgeCheck :size="20" />
        </article>
      </div>
    </section>
  </main>
</template>
