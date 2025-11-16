const app = Vue.createApp({
  data() {
    return {
      colors: {
        Amarelo: "#ffd900",
        Azul: "#0026ff",
        Marrom: "#583a02",
        Verde: "#2ECC71",
        Vermelho: "#E74C3C"
      },
      labels: {
        Amarelo: "Metal",
        Azul: "Papéis e papelão",
        Marrom: "Orgânicos",
        Verde: "Vidros",
        Vermelho: "Plástico"
      },
      descriptions: {
        Lixeiras:"",
        Amarelo: "A lixeira amarela é destinada ao descarte de materiais metálicos, como latas de alumínio e aço, arames, clipes, ferragens e talheres.",
        Azul: "A lixeira azul refere-se ao descarte de papel e papelão: jornais, revistas, caixas de papelão e papéis de escritório.",
        Marrom: "A lixeira marrom é para resíduos orgânicos: restos de comida, cascas de frutas e legumes, borra de café e folhas.",
        Verde: "A lixeira verde é destinada ao vidro: garrafas e frascos de vidro.",
        Vermelho: "A lixeira vermelha é destinada a plásticos como garrafas PET e embalagens plásticas."
      },
      icons: {
        Amarelo: "https://i.ibb.co/35dV1TRF/amarelo.png",
        Azul: "https://i.ibb.co/KjyTJdLT/azul.png",
        Marrom: "https://i.ibb.co/Q7RM4x3f/marrom.png",
        Verde: "https://i.ibb.co/6Rp7Pg9r/verde.png",
        Vermelho: "https://i.ibb.co/fYVHzkxk/vermelho.png"
      },
      selected: "Lixeiras"
    };
  },
  methods: {
    selectColor(name) {
      this.selected = name;
    }
  },
  template: `
    <div class="left">
      <button
        v-for="(hex, name) in colors"
        :key="name"
        class="color-btn"
        :class="name"
        @click="selectColor(name)"
        :aria-pressed="selected === name"
      >
        <img :src="icons[name]" :alt="name" class="icone" />
        <span>{{ name }}: {{ labels[name] }}</span>
      </button>
    </div>

    <div class="line"></div>

    <div class="right description" id="description">
      <h2 :style="{ color: colors[selected] }">{{ selected }}</h2>
      <p>{{ descriptions[selected] }}</p>
    </div>
  `
}).mount('#carrossel');