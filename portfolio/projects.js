/* ============================================================
   Project data + renderer
   Each project renders with PT text inline and registers its
   EN counterpart in window.EN (keyed by generated id) so the
   global language toggle can swap dynamic cards too.
   ============================================================ */

window.EN = window.EN || {};

const ASSET = "https://www.davipradines.com/_assets/v9/";

const PROJECTS = [
  {
    idx: "01",
    title: "Smart Lipstick",
    thumb: "assets/lipstick-table.jpg",
    role: { pt: "Design Lead", en: "Design Lead" },
    sub: { pt: "Grupo Boticário × CESAR · 2024–2025", en: "Grupo Boticário × CESAR · 2024–2025" },
    badges: [
      { cls: "win", pt: "🏆 SXSW 2025 Winner", en: "🏆 SXSW 2025 Winner" },
      { cls: "ai", pt: "⚡ IA — visão computacional", en: "⚡ AI — computer vision" },
      { cls: "", pt: "2 Patentes · INPI", en: "2 Patents · INPI" }
    ],
    grid: "hero",
    images: [
      "assets/lipstick-device.jpg",
      "assets/lipstick-sxsw.webp",
      "assets/lipstick-apply.jpg"
    ],
    alts: [
      { pt: "Protótipo do dispositivo Batom Inteligente da Make B. sobre a mesa", en: "Make B. Smart Lipstick device prototype on a table" },
      { pt: "Equipe comemorando o prêmio People's Choice no palco do SXSW 2025", en: "Team celebrating the People's Choice award on stage at SXSW 2025" },
      { pt: "Pessoa aplicando o batom diretamente no dispositivo", en: "Person applying lipstick directly from the device" }
    ],
    caption: {
      pt: "Protótipo funcional do Batom Inteligente Prêmio · People's Choice no SXSW, Austin TX ",
      en: "Smart Lipstick functional prototype · People's Choice award at SXSW, Austin TX"
    },
    challenge: {
      pt: "Mais de 18,9 milhões de brasileiros vivem com alguma deficiência. A indústria da beleza sempre foi projetada como se elas não existissem. O Grupo Boticário nos desafiou a repensar toda a experiência do batom do zero para pessoas cegas, com baixa visão e com limitações motoras.",
      en: "More than 18.9 million Brazilians live with some form of disability. The beauty industry was always designed as if they didn't exist. Grupo Boticário challenged us to rethink the entire lipstick experience from scratch for blind people, those with low vision, and those with motor limitations."
    },
    contribLabel: { pt: "Papel", en: "Role" },
    contribution: {
      pt: "Liderei um time multidisciplinar em prototipação de hardware, pesquisa com usuários, acessibilidade e design de serviço. Estruturei o processo de pesquisa participativa, cocriando diretamente com pessoas com deficiência em cada ciclo, e conduzi a direção de design do conceito ao protótipo funcional.",
      en: "I led a multidisciplinary team across hardware prototyping, user research, accessibility, and service design. I structured the participatory research process, co-creating directly with people with disabilities in every cycle, and led the design direction from concept to functional prototype."
    },
    ai: {
      pt: "Modelo de visão computacional treinado na diversidade de tons de pele e formatos de boca do Brasil.",
      en: "Computer vision model trained on the diversity of Brazil's skin tones and mouth shapes."
    },
    metrics: {
      pt: ["🏆 #1 People's Choice SXSW 2025", "2 patentes (primeiras em beleza acessível)", "Top 20 Bienal Brasileira de Design", "TV Globo + Fast Company"],
      en: ["🏆 #1 People's Choice SXSW 2025", "2 patents (first in accessible beauty)", "Top 20 Brazilian Design Biennial", "TV Globo + Fast Company"]
    }
  },
  {
    idx: "02",
    title: "Travez",
    thumb: "assets/travez-logo.jpg",
    role: { pt: "Product Designer", en: "Product Designer" },
    sub: { pt: "Projeto de conclusão · AI Product Lead · Tera · 2025", en: "Capstone project · AI Product Lead · Tera · 2025" },
    badges: [
      { cls: "ai", pt: "⚡ IA — onboarding socrático", en: "⚡ AI — Socratic onboarding" },
      { cls: "", pt: "🎓 Tera · AI Product Lead", en: "🎓 Tera · AI Product Lead" },
      { cls: "", pt: "Validado com usuários reais", en: "Validated with real users" }
    ],
    grid: "1",
    images: [
      "assets/travez-pitch.png"
    ],
    alts: [
      { pt: "Quatro telas do app Travez — onboarding socrático, recomendação de livro, mentor de leitura com IA e comunidade", en: "Four Travez app screens — Socratic onboarding, book recommendation, AI reading mentor and community" }
    ],
    video: { id: "ch30naTXI_8", title: { pt: "Travez — o produto em vídeo", en: "Travez — the product on video" } },
    caption: {
      pt: "Onboarding socrático, recomendação, mentor de leitura com IA e comunidade curada — o produto Travez em telas reais",
      en: "Socratic onboarding, recommendation, AI reading mentor and curated community — the Travez product in real screens"
    },
    challenge: {
      pt: "93 milhões de brasileiros leram nos últimos 3 meses — mais do que a população inteira da Alemanha. 75% queriam ter lido mais, mas não conseguiram. O problema nunca foi preguiça: foi a falta de orientação. 3 em cada 4 leitores não sabem o que ler a seguir. E quando a escolha é errada, o hábito quebra.",
      en: "93 million Brazilians read in the last 3 months — more than the entire population of Germany. 75% wanted to read more but couldn't. The problem was never laziness: it was the lack of guidance. 3 in 4 readers don't know what to read next. And when the choice is wrong, the habit breaks."
    },
    contribLabel: { pt: "Papel", en: "Role" },
    contribution: {
      pt: "Como responsável pelo Product Design, liderei a concepção da experiência socrática — o coração do produto. Estruturei o fluxo de 4 perguntas que mapeia o estado emocional do usuário e gera um match preciso com livro e grupo em menos de 2 minutos. Também defini a arquitetura da jornada completa: do diagnóstico inicial ao hábito de leitura sustentável.",
      en: "As the Product Designer, I led the conception of the Socratic onboarding experience — the heart of the product. I structured the 4-question flow that maps the user's emotional state and generates a precise match with a book and group in under 2 minutes. I also defined the architecture of the full journey: from initial diagnosis to a sustainable reading habit."
    },
    ai: {
      pt: "Camada de IA: motor de recomendação que cruza estado emocional, bagagem de leitura, disponibilidade mental e tempo disponível para gerar matches precisos — indo além do gênero favorito para o que o usuário precisa agora.",
      en: "AI layer: recommendation engine that crosses emotional state, reading history, mental availability, and available time to generate precise matches — going beyond favorite genre to what the user needs right now."
    },
    aiLabel: { pt: "⚡ ", en: "⚡ " },
    metrics: {
      pt: ["Projeto AI Native", "Primeira plataforma de IA no fluxo de leitura do Brasil", "<10 min até a 1ª recomendação"],
      en: ["AI Native project", "Brazil's first AI platform in the reading flow", "<10 min to first recommendation"]
    }
  },
  {
    idx: "03",
    title: "Rumpi",
    thumb: "assets/rumpi-brand-web.jpg",
    role: { pt: "Design Lead", en: "Design Lead" },
    sub: { pt: "Atabaque × CESAR · 2024–2026", en: "Atabaque × CESAR · 2024–2026" },
    badges: [
      { cls: "ai", pt: "⚡ ML — recomendação e predição", en: "⚡ ML — recommendation & prediction" },
      { cls: "", pt: "Valuation 8× após lançamento", en: "8× valuation after launch" },
      { cls: "", pt: "KondZilla · Terra · G1", en: "KondZilla · Terra · G1" }
    ],
    grid: "2",
    images: [
      "assets/rumpi-brand-web.jpg",
      "assets/rumpi-team.jpg"
    ],
    alts: [
      { pt: "Identidade visual da Rumpi — jovem percussionista cercado de plantas e cores vibrantes", en: "Rumpi brand identity — young percussionist surrounded by plants and vivid colors" },
      { pt: "Time da Rumpi reunido na sala de inovação do CESAR", en: "The Rumpi team gathered in CESAR's innovation room" }
    ],
    video: { id: "E6gQDJYG4K4", title: { pt: "Rumpi — vídeo da plataforma", en: "Rumpi — platform video" } },
    challenge: {
      pt: "O mercado de música independente no Brasil é fragmentado e pouco transparente. Artistas perdem royalties, não têm visibilidade sobre seus dados e navegam a carreira sem ferramentas feitas para eles. O Rumpi foi construído com um objetivo: colocar o artista no controle.",
      en: "Brazil's independent music market is fragmented and opaque. Artists lose royalties, have no visibility into their data, and navigate their careers without tools built for them. Rumpi was built with one goal: put the artist in control."
    },
    contribLabel: { pt: "Papel", en: "Role" },
    contribution: {
      pt: "Conduzi o design de ponta a ponta: pesquisa com artistas independentes, design de serviço e produto, sistema visual e modelo de interação. Trabalhei também na camada de business design, garantindo que o modelo de receita servisse à autonomia do artista.",
      en: "I led end-to-end design: research with independent artists, service and product design, visual system, and interaction model. I also worked on the business design layer, ensuring the revenue model served the artist's autonomy."
    },
    ai: {
      pt: "Modelos de recomendação e predição de royalties treinados com dados de streaming.",
      en: "Recommendation and royalty-prediction models trained on streaming data."
    },
    valuation: { from: "R$ 1M", to: "R$ 8M", note: { pt: "+700% · crescimento pós-lançamento", en: "+700% · post-launch growth" } },
    link: "https://www.cesar.org.br/w/rumpi-venture-building-dados-e-tecnologia-para-organizar-um-mercado-historicamente-fragmentado",
    metrics: {
      pt: ["+700% valuation", "Alto alcance da mídia", "Produto escalável"],
      en: ["+700% valuation", "High media reach", "Scalable product"]
    }
  },
  {
    idx: "04",
    title: "DATES",
    thumb: "assets/dates-logo.png",
    thumbFit: "contain",
    role: { pt: "Co-Fundador", en: "Co-Founder" },
    sub: { pt: "CESAR · Da ideia ao produto · 2022 - 2026", en: "CESAR · From idea to product · 2022 - 2026" },
    badges: [
      { cls: "win", pt: "🏆 Vencedor do sprint CESAR", en: "🏆 CESAR sprint winner" },
      { cls: "ai", pt: "⚡ ML — matching engine", en: "⚡ ML — matching engine" },
      { cls: "", pt: "2000+ startups", en: "2000+ startups" }
    ],
    carousel: true,
    images: [
      ASSET + "df1693cd9a7258238403cb355fd6a6ae2495ff14.png",
      "assets/dates-devices.png",
      "assets/dates-login.png",
      "assets/dates-team-flag.png"
    ],
    imageFit: ["cover", "contain", "contain", "cover"],
    alts: [
      { pt: "Time do DATES segurando a bandeira após vencer o sprint do CESAR", en: "The DATES team holding the flag after winning the CESAR sprint" },
      { pt: "Plataforma DATES em desktop, tablet e celular — galeria de startups e matches", en: "DATES platform on desktop, tablet and phone — startup gallery and matches" },
      { pt: "Tela de login da plataforma DATES", en: "DATES platform login screen" },
      { pt: "Time do DATES com a bandeira do Dates Day nas ruas do Recife Antigo", en: "The DATES team with the Dates Day flag in the streets of old Recife" }
    ],
    caption: {
      pt: "De um protótipo de sprint à ferramenta oficial de investimento do CESAR: plataforma de geração de negócios entre startups, investidores e empresas — hoje em dates.cesar.org.br",
      en: "From a sprint prototype to CESAR's official investment tool: a deal-flow platform connecting startups, investors and companies — now live at dates.cesar.org.br"
    },
    journey: {
      label: { pt: "Da ideia à solução", en: "From idea to solution" },
      steps: [
        {
          num: "103",
          phase: { pt: "MVP & descoberta", en: "MVP & discovery" },
          desc: { pt: "Validamos um MVP enxuto com 103 startups na pré-aceleração — descobrindo quais dados tornam um match realmente relevante.", en: "We validated a lean MVP with 103 startups in pre-acceleration — uncovering which data actually makes a match relevant." }
        },
        {
          num: "+33",
          phase: { pt: "Validação no MangueBit", en: "Validation at MangueBit" },
          desc: { pt: "No maior evento de startups do Nordeste, geramos +33 matches reais entre startups e investidores — o modelo provado na prática.", en: "At the Northeast's largest startup event, we generated 33+ real startup–investor matches — the model proven in practice." }
        },
        {
          num: "2000+",
          phase: { pt: "Hoje", en: "Today" },
          desc: { pt: "De 824 startups em um ano a +2000 de todo o Brasil. O protótipo virou a ferramenta oficial de investimento do CESAR.", en: "From 824 startups in a year to 2000+ across Brazil. The prototype became CESAR's official investment tool." }
        }
      ]
    },
    challenge: {
      pt: "Conectar startups aos investidores certos no Brasil dependia de sorte e de networking, e ninguém sabia ao certo quais dados tornavam um match relevante. O desafio não era só construir um produto: era descobrir, na prática, o que faz um investimento acontecer.",
      en: "Connecting startups to the right investors in Brazil depended on luck and networking, and no one knew exactly which data made a match relevant. The challenge wasn't just to build a product: it was to discover, in practice, what makes an investment happen."
    },
    contribLabel: { pt: "Da ideia à solução", en: "From idea to solution" },
    contribution: {
      pt: "Como co-fundador e design lead, conduzi o DATES da ideia ao produto. Começamos enxuto: um MVP validado com 103 startups para entender o que importa para a startup e para a decisão do investidor. Levamos ao MangueBit e geramos +33 matches reais, provando o modelo com gente de verdade. O que era protótipo de sprint virou a ferramenta oficial de investimento do CESAR.",
      en: "As co-founder and design lead, I drove DATES from idea to product. We started lean: an MVP validated with 103 startups to understand what matters to the startup and to the investor's decision. We took it to MangueBit and generated 33+ real matches, proving the model with real people. What was a sprint prototype became CESAR's official investment tool."
    },
    ai: {
      pt: "Modelo preditivo que pontua a compatibilidade startup–investidor com base em estágio, setor, tração e histórico.",
      en: "Predictive model that scores startup–investor fit based on stage, sector, traction, and history."
    },
    metrics: {
      pt: ["MVP enxuto validado com 103 startups e +33 matchs", "Plataforma oficial de empreendedorismo do CESAR", "+ R$ 8 milhões em projetos", "+2000 startups cadastradas (2026)"],
      en: ["Lean MVP validated with 103 startups and 33+ matches", "CESAR's official entrepreneurship platform", "R$ 8M+ in projects", "2000+ startups registered (2026)"]
    },
    link: "https://dates.cesar.org.br/"
  },
  {
    idx: "05",
    title: "Lenovo Libras",
    thumb: "assets/lenovo-libras.jpg",
    role: { pt: "Design Partner", en: "Design Partner" },
    sub: { pt: "Lenovo × CESAR · P&D 2019–2024", en: "Lenovo × CESAR · R&D 2019–2024" },
    badges: [
      { cls: "win", pt: "Finalista SXSW 2024", en: "SXSW 2024 Finalist" },
      { cls: "ai", pt: "⚡ IA — visão computacional", en: "⚡ AI — computer vision" },
      { cls: "", pt: "Tecnologia patenteada", en: "Patented technology" }
    ],
    link: "https://www.cesar.org.br/w/ia-para-todos-cesar-e-lenovo-no-tech-world-23",
    video: { id: "QOs41L3pW9k", title: { pt: "Lenovo Sign Language Translator — o projeto em vídeo", en: "Lenovo Sign Language Translator — the project on video" } },
    caption: {
      pt: "“A Lenovo promete tecnologia mais inteligente para todos. Mas todos significa todos — inclusive pessoas surdas.” A provocação interna que deu início ao projeto, em 2019.",
      en: "“Lenovo promises smarter technology for all. But all means all — including deaf people.” The internal challenge that kicked off the project in 2019."
    },
    challenge: {
      pt: "Mais de 430 milhões de pessoas no mundo são surdas ou têm deficiência auditiva. 2,3 milhões com perda profunda só no Brasil, um país complexo e com regionalidades distintas. A tecnologia de consumo nunca foi pensada para elas. O desafio nasceu de uma provocação dentro da Lenovo: se a missão é “tecnologia mais inteligente para todos”, precisamos também incluir a comunidade surda.",
      en: "More than 430 million people worldwide are deaf or hard of hearing. 2.3 million with profound loss in Brazil alone, a complex country with distinct regional differences. Consumer technology was never designed for them. The challenge was born from a provocation inside Lenovo: if the mission is “smarter technology for all,” then we also need to include the deaf community."
    },
    contribLabel: { pt: "Pesquisa & experimentação", en: "Research & experimentation" },
    contribution: {
      pt: "Como Design Partner, atuei onde o design encontra o comportamento do modelo: estruturei o processo de co-design com a comunidade surda e o modelo de interação de um tradutor de Libras em tempo real. Em vez de traduzir sinal por sinal, o caminho foi ensinar a IA a reconhecer posições e pontos de articulação das mãos, quebrando um problema quase inacessível em ciclos curtos de experimentação, aprendendo sobre público e tecnologia a cada passo. ",
      en: "As Design Partner, I worked where design meets model behavior: I structured the co-design process with the deaf community and the interaction model for a real-time Libras translator. Instead of translating sign by sign, the path was to teach the AI to recognize hand positions and articulation points, breaking an almost-inaccessible problem into short cycles of experimentation, learning about people and technology at every step. "
    },
    ai: {
      pt: "Visão computacional treinada em milhares de vídeos de Libras, rastreando os pontos de articulação das mãos para reconhecer o fluxo de uma frase e convertê-la em texto em português — uma tecnologia patenteada, com identidades dos voluntários preservadas (só os pontos de gesto são armazenados).",
      en: "Computer vision trained on thousands of Libras videos, tracking hand articulation points to recognize the flow of a sentence and convert it into Portuguese text — a patented technology, with volunteers' identities preserved (only gesture points are stored)."
    },
    metrics: {
      pt: ["Primeiro serviço de tradução de LIBRAS", "🏆 Cannes Neuron Award 2024", "Tecnologia patenteada", "1º tradutor de sinais com IA", "Finalista SXSW 2024"],
      en: ["First LIBRAS translation service", "🏆 Cannes Neuron Award 2024", "Patented technology", "1st AI sign-language translator", "SXSW 2024 Finalist"]
    }
  }
];

function reg(id, en) { window.EN[id] = en; }

/* Maps original asset URLs to inlined blob URLs in the standalone build.
   The bundler populates window.__resources (keyed by data-resource-id) but
   strips the <meta> tags, so the path→id map is hardcoded here rather than
   read from the DOM. Online, window.__resources is undefined and every URL
   passes through unchanged (served normally). */
window.__assetMap = window.__assetMap || (function () {
  const ids = {
    "assets/lipstick-table.jpg": "a01",
    "assets/lipstick-device.jpg": "a02",
    "assets/lipstick-sxsw.webp": "a03",
    "assets/lipstick-apply.jpg": "a04",
    "assets/rumpi-brand-web.jpg": "a05",
    "assets/rumpi-team.jpg": "a06",
    "assets/dates-logo.png": "a07",
    "assets/dates-devices.png": "a08",
    "assets/dates-login.png": "a09",
    "assets/dates-team-flag.png": "a10",
    "assets/lenovo-libras.jpg": "a11",
    "assets/travez-logo.jpg": "a12",
    "assets/travez-pitch.png": "a13",
    "https://www.davipradines.com/_assets/v9/df1693cd9a7258238403cb355fd6a6ae2495ff14.png": "a14"
  };
  // also honor any surviving meta tags (online dev / future builds)
  document.querySelectorAll('meta[name="ext-resource-dependency"]').forEach((m) => {
    ids[m.getAttribute("content")] = m.getAttribute("data-resource-id");
  });
  const map = {};
  if (window.__resources) {
    Object.keys(ids).forEach((url) => {
      const blob = window.__resources[ids[url]];
      if (blob) map[url] = blob;
    });
  }
  return map;
})();
function resolveAsset(url) {
  return (window.__assetMap && window.__assetMap[url]) || url;
}

/* Graceful fallback: if an image fails to load (e.g. remote host unreachable),
   swap it for a clean labeled placeholder instead of a broken-image icon. */
window.__imgFallback = function (img) {
  const label = img.getAttribute("data-ph-label") || "";
  const thumb = img.closest(".project-thumb");
  if (thumb) {
    thumb.classList.add("placeholder");
    thumb.textContent = label;
    return;
  }
  const ph = document.createElement("div");
  ph.className = "imgph";
  ph.setAttribute("aria-label", img.getAttribute("alt") || label);
  ph.innerHTML = '<span>' + label + '</span>';
  img.replaceWith(ph);
};

/* Click-to-play YouTube facade: swap the thumbnail for the real iframe on demand. */
window.__loadVideo = function (el) {
  const id = el.getAttribute("data-video");
  if (!id) return;
  const frame = document.createElement("div");
  frame.className = "video-embed";
  frame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id +
    '?autoplay=1&rel=0" title="' + (el.getAttribute("aria-label") || "") +
    '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  el.replaceWith(frame);
};

function renderProjects() {
  const list = document.getElementById("projectList");
  const challengeLabel = { pt: "Desafio", en: "Challenge" };

  PROJECTS.forEach((p, i) => {
    const pid = "proj-" + p.idx;
    const article = document.createElement("article");
    article.className = "project reveal";

    /* ---- head ---- */
    const thumbHTML = p.thumb
      ? `<div class="project-thumb"${p.thumbFit === "contain" ? ' data-fit="contain"' : ""}><img src="${resolveAsset(p.thumb)}" alt="" data-ph-label="${p.title}" onerror="window.__imgFallback(this)"></div>`
      : `<div class="project-thumb placeholder" id="${pid}-thumb">${p.thumbLabel.pt}</div>`;
    if (!p.thumb) reg(pid + "-thumb", p.thumbLabel.en);

    const badgesHTML = p.badges.map((b, bi) => {
      const id = `${pid}-badge-${bi}`;
      reg(id, b.en);
      return `<span class="badge ${b.cls} i18n" id="${id}">${b.pt}</span>`;
    }).join("");

    reg(pid + "-role", p.role.en);
    reg(pid + "-sub", p.sub.en);

    /* ---- body ---- */
    let imagesHTML = "";
    if (p.carousel) {
      const slides = p.images.map((src, ii) => {
        const a = p.alts[ii];
        const id = `${pid}-img-${ii}`;
        reg(id, a.en);
        const fit = (p.imageFit && p.imageFit[ii]) ? p.imageFit[ii] : "cover";
        return `<figure class="proj-slide${ii === 0 ? " is-active" : ""}" data-fit="${fit}">
            <img src="${resolveAsset(src)}" alt="${a.pt}" id="${id}" data-alt data-ph-label="${p.title}" onerror="window.__imgFallback(this)">
          </figure>`;
      }).join("");
      imagesHTML = `
        <div class="proj-carousel" data-carousel role="group" aria-roledescription="carrossel" aria-label="${p.title}">
          <div class="proj-carousel-frame">
            <div class="proj-track">${slides}</div>
            <button class="photo-nav prev" type="button" data-prev aria-label="Imagem anterior">‹</button>
            <button class="photo-nav next" type="button" data-next aria-label="Próxima imagem">›</button>
          </div>
          <div class="proj-dots" data-dots role="tablist" aria-label="Selecionar imagem"></div>
        </div>`;
    } else if (p.grid) {
      let cells;
      if (p.placeholders) {
        cells = p.placeholders.map((lab, ii) => {
          const id = `${pid}-ph-${ii}`;
          reg(id, lab.en);
          return `<div class="imgph" role="img" aria-label="${lab.pt}"><span class="i18n" id="${id}">${lab.pt}</span></div>`;
        }).join("");
      } else {
        cells = p.images.map((src, ii) => {
          const a = p.alts[ii];
          const id = `${pid}-img-${ii}`;
          reg(id, a.en);
          return `<img src="${resolveAsset(src)}" alt="${a.pt}" id="${id}" data-alt data-ph-label="${p.title}" onerror="window.__imgFallback(this)">`;
        }).join("");
      }
      imagesHTML = `<div class="img-grid grid-${p.grid}">${cells}</div>`;
    }

    let captionHTML = "";
    if (p.caption) {
      reg(pid + "-cap", p.caption.en);
      captionHTML = `<p class="img-caption i18n" id="${pid}-cap">${p.caption.pt}</p>`;
    }

    let videoHTML = "";
    if (p.video) {
      reg(pid + "-vid", p.video.title.en);
      const vid = p.video.id;
      videoHTML = `
        <div class="video-facade" role="button" tabindex="0"
             aria-label="${p.video.title.pt}"
             data-video="${vid}"
             onclick="window.__loadVideo(this)"
             onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();window.__loadVideo(this);}">
          <img src="https://img.youtube.com/vi/${vid}/maxresdefault.jpg" alt="" loading="lazy"
               onerror="this.src='https://img.youtube.com/vi/${vid}/hqdefault.jpg'">
          <span class="video-play" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
          <span class="video-cap i18n" id="${pid}-vid">${p.video.title.pt}</span>
        </div>`;
    }

    let journeyHTML = "";
    if (p.journey) {
      reg(pid + "-jl", p.journey.label.en);
      const steps = p.journey.steps.map((s, si) => {
        reg(`${pid}-jp-${si}`, s.phase.en);
        reg(`${pid}-jd-${si}`, s.desc.en);
        return `
          <li class="journey-step">
            <span class="journey-num">${s.num}</span>
            <span class="journey-phase i18n" id="${pid}-jp-${si}">${s.phase.pt}</span>
            <span class="journey-desc i18n" id="${pid}-jd-${si}">${s.desc.pt}</span>
          </li>`;
      }).join("");
      journeyHTML = `
        <div class="journey">
          <p class="journey-label i18n" id="${pid}-jl">${p.journey.label.pt}</p>
          <ol class="journey-steps">${steps}</ol>
        </div>`;
    }

    reg(pid + "-chal-l", challengeLabel.en);
    reg(pid + "-chal", p.challenge.en);
    reg(pid + "-contrib-l", p.contribLabel.en);
    reg(pid + "-contrib", p.contribution.en);
    reg(pid + "-ai", p.ai.en);
    reg(pid + "-ai-l", p.aiLabel ? p.aiLabel.en : "⚡ AI");

    let valuationHTML = "";
    if (p.valuation) {
      reg(pid + "-val-note", p.valuation.note.en);
      valuationHTML = `
        <div class="val-bar">
          <div class="val-track"><div class="val-fill"></div></div>
          <div class="val-labels">
            <span>${p.valuation.from}</span>
            <span><b class="i18n" id="${pid}-val-note">${p.valuation.note.pt}</b></span>
            <span>${p.valuation.to}</span>
          </div>
        </div>`;
    }

    const metricsHTML = p.metrics.pt.map((m, mi) => {
      const id = `${pid}-m-${mi}`;
      reg(id, p.metrics.en[mi]);
      const sep = mi < p.metrics.pt.length - 1 ? `<span class="sep">·</span>` : "";
      return `<span class="i18n" id="${id}">${m}</span>${sep}`;
    }).join("");

    let linkHTML = "";
    if (p.link) {
      reg(pid + "-link", "Learn more");
      linkHTML = `<a class="project-link" href="${p.link}" target="_blank" rel="noopener">
        <span class="i18n" id="${pid}-link">Saiba mais</span> <span aria-hidden="true">↗</span>
      </a>`;
    }

    article.innerHTML = `
      <button class="project-head" aria-expanded="false" aria-controls="${pid}-body">
        ${thumbHTML}
        <div class="project-meta">
          <div class="project-idx">${p.idx}</div>
          <h3 class="project-title">${p.title}</h3>
          <div class="project-sub i18n" id="${pid}-sub">${p.sub.pt}</div>
          <div class="project-badges">${badgesHTML}</div>
        </div>
        <div style="display:flex;align-items:center;gap:14px">
          <span class="role-pill i18n" id="${pid}-role">${p.role.pt}</span>
          <span class="expand-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </div>
      </button>
      <div class="project-body" id="${pid}-body" role="region">
        <div class="project-body-inner">
          <div class="project-body-pad">
            ${imagesHTML}
            ${captionHTML}
            ${videoHTML}
            ${valuationHTML}
            <div class="detail-cols">
              <div>
                <h4 class="i18n" id="${pid}-chal-l">${challengeLabel.pt}</h4>
                <p class="i18n" id="${pid}-chal">${p.challenge.pt}</p>
              </div>
              <div>
                <h4 class="i18n" id="${pid}-contrib-l">${p.contribLabel.pt}</h4>
                <p class="i18n" id="${pid}-contrib">${p.contribution.pt}</p>
              </div>
            </div>
            ${journeyHTML}
            <div class="ai-note">
              <b class="i18n" id="${pid}-ai-l">${p.aiLabel ? p.aiLabel.pt : "⚡ IA"}</b>
              <span class="i18n" id="${pid}-ai">${p.ai.pt}</span>
            </div>
            <div class="metrics-row">${metricsHTML}</div>
            ${linkHTML}
          </div>
        </div>
      </div>
    `;
    list.appendChild(article);
  });
}

renderProjects();
initProjectCarousels();

/* Auto-advancing image carousel inside expandable project cards. */
function initProjectCarousels() {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var slides = [].slice.call(root.querySelectorAll(".proj-slide"));
    if (slides.length < 2) {
      var pv = root.querySelector("[data-prev]"); if (pv) pv.style.display = "none";
      var nx = root.querySelector("[data-next]"); if (nx) nx.style.display = "none";
      return;
    }
    var dotsWrap = root.querySelector("[data-dots]");
    var i = 0;
    var dots = slides.map(function (_, n) {
      var b = document.createElement("button");
      b.className = "photo-dot" + (n === 0 ? " is-active" : "");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Imagem " + (n + 1));
      b.addEventListener("click", function () { go(n); restart(); });
      dotsWrap.appendChild(b);
      return b;
    });
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
      dots.forEach(function (d, k) {
        d.classList.toggle("is-active", k === i);
        d.setAttribute("aria-selected", k === i ? "true" : "false");
      });
    }
    root.querySelector("[data-prev]").addEventListener("click", function () { go(i - 1); restart(); });
    root.querySelector("[data-next]").addEventListener("click", function () { go(i + 1); restart(); });

    var timer = null;
    function start() { if (!reduce) timer = setInterval(function () { go(i + 1); }, 4000); }
    function restart() { if (timer) clearInterval(timer); start(); }
    var frame = root.querySelector(".proj-carousel-frame");
    frame.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    frame.addEventListener("mouseleave", start);
    frame.addEventListener("focusin", function () { if (timer) clearInterval(timer); });
    frame.addEventListener("focusout", start);
    start();
  });
}

/* Dead or hanging REMOTE image URLs don't reliably fire onerror, so after a
   grace period we swap any still-unloaded remote project image for its labeled
   placeholder. Local (relative) images are excluded — they load reliably and a
   large one may still be decoding when this fires; they use onerror only. */
setTimeout(function () {
  document.querySelectorAll("#projectList img[data-ph-label]").forEach(function (img) {
    var src = img.getAttribute("src") || "";
    var remote = /^https?:\/\//i.test(src);
    if (remote && (!img.complete || img.naturalWidth === 0)) window.__imgFallback(img);
  });
}, 4000);
