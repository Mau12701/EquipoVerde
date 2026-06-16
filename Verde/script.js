/* ═══════════════════════════════════════════════════════
   Verde Hidalgo – Colores México
   script.js  |  Feria Gastronómica Tradicional de Hidalgo
   ════════════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════
   DATOS DE RECETAS
══════════════════════════════════════════ */
window.RECIPES = {

  panque: {
    emoji: '🌵',
    title: 'Panqué de Nopal',
    tag: 'Repostería · Tradicional',
    historia: 'El nopal ha sido alimento sagrado de los pueblos mesoamericanos desde hace más de 9,000 años. Incorporarlo a la repostería es un ejemplo de cómo la cocina hidalguense fusiona técnicas modernas con ingredientes ancestrales, creando un postre nutritivo y lleno de identidad regional.',
    ingredientes: [
      '2 tazas de harina de trigo',
      '3 huevos',
      '1 taza de pulpa de nopal cocida y licuada',
      '½ taza de aceite vegetal',
      '1 taza de azúcar',
      '1 cdita. de polvo para hornear',
      '½ cdita. de bicarbonato',
      '1 pizca de sal',
      '1 cdita. de vainilla',
    ],
    pasos: [
      'Limpiar los nopales, retirar espinas y cortar en trozos. Cocer en agua con sal 10 min.',
      'Escurrir, enjuagar con agua fría para eliminar baba y licuar hasta obtener pulpa lisa.',
      'Batir huevos con azúcar hasta mezcla pálida y espumosa. Añadir aceite y vainilla.',
      'Incorporar la pulpa de nopal a la mezcla húmeda.',
      'Cernir harina, polvo para hornear, bicarbonato y sal. Integrar a la mezcla con movimientos envolventes.',
      'Verter en molde engrasado y enharinado. Hornear a 180 °C durante 35–40 min.',
      'Dejar enfriar 10 min en el molde antes de desmoldar.',
    ],
    curiosidad: 'El nopal (<em>Opuntia</em>) aparece en el escudo nacional de México. Su mucílago ayuda a reducir los niveles de azúcar en sangre, convirtiéndolo en un ingrediente funcional con respaldo científico moderno.',
    beneficios: ['🟢 Alto en fibra', '🌵 Vitaminas C y B', '💧 Hidratante natural', '🩸 Regula glucosa'],
  },

  xoconostle: {
    emoji: '🌶️',
    title: 'Salsa de Xoconostle',
    tag: 'Salsas · Tradicional',
    historia: 'El xoconostle —tuna ácida del nopal cardón— es ingrediente insustituible de la cocina del Valle del Mezquital. Utilizado desde la época prehispánica, aporta un sabor agridulce único que potencia moles, guisos y caldos. Su nombre proviene del náhuatl <em>xocotl</em> (fruta ácida) + <em>nochtli</em> (tuna).',
    ingredientes: [
      '6 xoconostles maduros',
      '3 chiles de árbol secos',
      '1 diente de ajo',
      '¼ de cebolla blanca',
      'Sal al gusto',
      'Agua la necesaria',
    ],
    pasos: [
      'Pelar los xoconostles, retirar semillas y reservar. La cáscara se puede usar también en moles.',
      'Tostar ligeramente los chiles de árbol en comal sin que se quemen.',
      'Cocer los xoconostles en agua hasta que estén suaves, aprox. 8 minutos.',
      'Licuar xoconostles cocidos, chiles, ajo y cebolla con un poco de agua de cocción.',
      'Colar si deseas textura más fina. Sazonar con sal y calentar en sartén con un chorrito de aceite hasta sazonar.',
    ],
    curiosidad: 'El xoconostle se usa en el emblemático mole de olla hidalguense y en el caldo tlalpeño. Es rico en pectina, lo que lo hace ideal como espesante natural y le da un sabor complejo que equilibra perfecto con carnes asadas.',
    beneficios: ['🔴 Vitamina C', '🌿 Antioxidante', '🫁 Digestiva', '⚡ Bajo en calorías'],
  },

  chilopani: {
    emoji: '🦗',
    title: 'Chilopani',
    tag: 'Entomofagia · Bebida ceremonial',
    historia: 'El chilopani es una bebida ancestral del Valle del Mezquital, territorio hñahñú (otomí). Elaborada con agua de tuna fermentada levemente y chinicuiles —larvas del maguey rojo—, fue utilizada en ceremonias agrícolas y rituales de fertilidad. Representa la profunda conexión de los pueblos originarios con el maguey y los insectos comestibles.',
    ingredientes: [
      '1 kg de tunas rojas o xoconostles',
      '100 g de chinicuiles limpios y asados',
      '2 litros de agua',
      'Sal y chile piquín al gusto',
      'Jugo de limón (opcional)',
    ],
    pasos: [
      'Lavar bien las tunas. Retirar cáscaras y licuar la pulpa con 1 litro de agua. Colar.',
      'Tostar los chinicuiles en comal seco hasta que estén crujientes y aromáticos.',
      'Moler los chinicuiles tostados en molcajete junto con sal y chile piquín.',
      'Mezclar el agua de tuna con el resto del agua. Añadir la pasta de chinicuiles.',
      'Revolver bien. Servir frío con hielo y jugo de limón al gusto.',
    ],
    curiosidad: 'México es el país con mayor diversidad de insectos comestibles del mundo: más de 500 especies. Los chinicuiles (<em>Comadia redtenbacheri</em>) son larvas del agave rojo y contienen hasta 65% de proteína, superando a la carne de res en contenido proteico por gramo.',
    beneficios: ['🟡 Proteína completa', '🦗 Aminoácidos esenciales', '♻️ Producción sostenible', '🩸 Rico en hierro'],
  },

  bunuelos: {
    emoji: '🍯',
    title: 'Buñuelos con Miel de Piloncillo',
    tag: 'Dulces típicos · Colonial',
    historia: 'Los buñuelos llegaron a México con los conquistadores españoles en el siglo XVI y se fusionaron con ingredientes locales como el piloncillo. Se convirtieron en un símbolo de ferias patronales y Navidad. En Hidalgo tienen la tradición de comerlos y lanzar el plato de barro: si se rompe, trae buena suerte.',
    ingredientes: [
      '2 tazas de harina de trigo',
      '1 huevo',
      '½ taza de leche tibia',
      '2 cdas. de mantequilla',
      '1 pizca de sal',
      '½ cdita. de polvo para hornear',
      '250 g de piloncillo',
      '1 raja de canela',
      '3 clavos de olor',
      '2 tazas de agua (para el jarabe)',
      'Aceite para freír',
    ],
    pasos: [
      'Mezclar harina, polvo para hornear y sal. Hacer un pozo y añadir huevo, mantequilla y leche. Amasar 8 minutos hasta obtener masa suave.',
      'Dividir en bolitas de 4 cm. Dejar reposar 15 minutos tapadas.',
      'Estirar cada bolita muy delgada con rodillo hasta casi transparente.',
      'Freír en aceite caliente (180 °C) hasta dorado claro, aprox. 1–2 min por lado. Escurrir.',
      'Para el jarabe: hervir agua con piloncillo, canela y clavos hasta que espese ligeramente, 15–20 min.',
      'Bañar los buñuelos con el jarabe caliente justo antes de servir.',
    ],
    curiosidad: 'El piloncillo es azúcar de caña sin refinar que conserva minerales como hierro, calcio y potasio que el azúcar blanca pierde en el proceso de refinado. Su sabor a melaza y caramelo es inconfundible en la cocina mexicana de fiesta.',
    beneficios: ['🟠 Energía inmediata', '🍯 Hierro natural del piloncillo', '🎉 Sin conservadores', '🌾 Ingredientes simples'],
  },

};

/* ══════════════════════════════════════════
   DATOS DEL MAPA
══════════════════════════════════════════ */
const MAPA_INFO = {
  actopan: {
    color: '#2E7D32',
    nombre: 'Actopan',
    region: 'Valle del Mezquital · Centro-Norte',
    descripcion: 'Capital gastronómica del Valle del Mezquital. Conocida por el ximbó —barbacoa de maguey— y el nopal en todas sus formas. Ciudad donde nació este proyecto escolar.',
    platillos: ['Panqué de Nopal', 'Barbacoa en Ximbó', 'Sopa de Médula'],
  },
  arenal: {
    color: '#C62828',
    nombre: 'El Arenal',
    region: 'Valle del Mezquital · Norte',
    descripcion: 'Municipio famoso por su producción artesanal de xoconostle y tunas silvestres. Aquí la salsa de xoconostle acompaña cada comida y se vende en mercados regionales.',
    platillos: ['Salsa de Xoconostle', 'Carnitas de Xoconostle', 'Agua de Tuna'],
  },
  mezquital: {
    color: '#D4A017',
    nombre: 'Valle del Mezquital',
    region: 'Territorio Hñahñú · Centro',
    descripcion: 'Territorio sagrado del pueblo otomí-hñahñú. Cuna de la entomofagia mexicana: chapulines, chinicuiles y escamoles forman parte de la dieta ancestral. El chilopani es su bebida ceremonial más representativa.',
    platillos: ['Chilopani', 'Escamoles al Epazote', 'Atole de Guayaba'],
  },
  pachuca: {
    color: '#6D4C41',
    nombre: 'Pachuca de Soto',
    region: 'Capital del Estado · Centro-Este',
    descripcion: 'Capital de Hidalgo y ciudad donde convergen las tradiciones culinarias de todo el estado. Los pastes —herencia de los mineros cornualleses— y los buñuelos de feria son emblemas de su cultura gastronómica.',
    platillos: ['Pastes Hidalguenses', 'Buñuelos con Piloncillo', 'Café de Olla'],
  },
};

/* ══════════════════════════════════════════
   NAVBAR – scroll & mobile toggle
══════════════════════════════════════════ */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const toggle    = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  // Scroll tint
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mobile hamburger
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();

/* ══════════════════════════════════════════
   PARALLAX HERO
══════════════════════════════════════════ */
(function initParallax() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;

  const onScroll = () => {
    const y = window.scrollY;
    bg.style.transform = `translateY(${y * 0.35}px)`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ══════════════════════════════════════════
   REVEAL ON SCROLL
══════════════════════════════════════════ */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        let delay = 0;
        siblings.forEach((s, idx) => { if (s === entry.target) delay = idx * 80; });
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

/* ══════════════════════════════════════════
   STATS COUNTER
══════════════════════════════════════════ */
(function initStats() {
  const numbers = document.querySelectorAll('.stat-number[data-target]');
  if (!numbers.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const dur    = 1400;
      const step   = 16;
      const inc    = target / (dur / step);
      let cur      = 0;

      const tick = () => {
        cur = Math.min(cur + inc, target);
        el.textContent = Math.floor(cur).toLocaleString('es-MX') + suffix;
        if (cur < target) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  numbers.forEach(n => observer.observe(n));
})();

/* ══════════════════════════════════════════
   MAPA CULTURAL – tooltip panel
══════════════════════════════════════════ */
(function initMapa() {
  const panel  = document.getElementById('mapaInfoPanel');
  const puntos = document.querySelectorAll('.mapa-punto');
  if (!panel || !puntos.length) return;

  const show = (key) => {
    const data = MAPA_INFO[key];
    if (!data) return;

    panel.innerHTML = `
      <div class="mapa-info-content">
        <span class="region-tag">📍 ${data.region}</span>
        <h3>${data.nombre}</h3>
        <p>${data.descripcion}</p>
        <div class="platillos-list">
          ${data.platillos.map(p => `<span class="platillo-chip">${p}</span>`).join('')}
        </div>
      </div>`;
  };

  puntos.forEach(punto => {
    const key = punto.dataset.info;
    punto.addEventListener('click', () => show(key));
    punto.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(key); }
    });
    punto.addEventListener('mouseenter', () => show(key));
  });
})();

/* ══════════════════════════════════════════
   MODAL DE RECETAS
══════════════════════════════════════════ */
(function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const content = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !content || !closeBtn) return;

  const buildModal = (r) => `
    <div style="text-align:center;margin-bottom:1.5rem;">
      <div style="font-size:4rem;margin-bottom:.5rem;">${r.emoji}</div>
      <h2 style="font-family:Montserrat,sans-serif;font-size:1.8rem;font-weight:900;margin:0 0 .25rem;color:#fff;">${r.title}</h2>
      <span style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;">${r.tag}</span>
    </div>

    <h4 style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;margin:.5rem 0 .75rem;">🏛 Historia</h4>
    <p style="font-size:.9rem;line-height:1.8;color:rgba(255,255,255,.85);margin-bottom:1.5rem;">${r.historia}</p>

    <h4 style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;margin:.5rem 0 .75rem;">🌿 Ingredientes</h4>
    <ul style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.4rem;list-style:none;padding:0;margin-bottom:1.5rem;">
      ${r.ingredientes.map(i => `
        <li style="display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;background:rgba(255,255,255,.04);border-radius:8px;font-size:.84rem;color:rgba(255,255,255,.8);">
          <span style="color:#D4A017;font-size:.6rem;">✦</span>${i}
        </li>`).join('')}
    </ul>

    <h4 style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;margin:.5rem 0 .75rem;">👨‍🍳 Preparación</h4>
    <div style="display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.5rem;">
      ${r.pasos.map((p, i) => `
        <div style="display:flex;gap:.75rem;padding:.75rem;background:rgba(255,255,255,.03);border-radius:8px;border-left:2px solid #2E7D32;">
          <span style="font-family:Montserrat,sans-serif;font-size:.78rem;font-weight:800;color:#4CAF50;min-width:24px;">${String(i+1).padStart(2,'0')}</span>
          <span style="font-size:.84rem;color:rgba(255,255,255,.8);line-height:1.6;">${p}</span>
        </div>`).join('')}
    </div>

    <h4 style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;margin:.5rem 0 .75rem;">✨ Curiosidad</h4>
    <div style="padding:1.2rem;background:linear-gradient(135deg,rgba(212,160,23,.08),rgba(212,160,23,.04));border:1px solid rgba(212,160,23,.2);border-radius:12px;font-size:.88rem;color:rgba(255,255,255,.85);line-height:1.7;margin-bottom:1.5rem;">${r.curiosidad}</div>

    <h4 style="font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#D4A017;margin:.5rem 0 .75rem;">💚 Beneficios</h4>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.75rem;">
      ${r.beneficios.map(b => `
        <div style="padding:.9rem;background:rgba(46,125,50,.1);border:1px solid rgba(46,125,50,.25);border-radius:12px;text-align:center;font-size:.8rem;color:rgba(255,255,255,.85);">${b}</div>
      `).join('')}
    </div>`;

  const openModal = (key) => {
    // Combinar recetas base + extras inyectados desde el HTML
    const all = Object.assign({}, window.RECIPES, window.EXTRA_RECIPES || {});
    const recipe = all[key];
    if (!recipe) return;
    content.innerHTML = buildModal(recipe);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Botones "Ver receta"
  document.querySelectorAll('.btn-recipe').forEach(btn => {
    btn.addEventListener('click', () => {
      const dish = btn.dataset.dish || btn.closest('[data-dish]')?.dataset.dish;
      if (dish) openModal(dish);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Exponer por si el HTML lo necesita
  window.openRecipeModal = openModal;
})();

/* ══════════════════════════════════════════
   GALERÍA – filtro por categoría
══════════════════════════════════════════ */
(function initGaleria() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.gal-item');
  if (!filterBtns.length || !items.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach(item => {
        const match = filter === 'all' || item.dataset.cat === filter;
        item.classList.toggle('hidden', !match);
      });
    });
  });
})();

/* ══════════════════════════════════════════
   LIGHTBOX – galería click
══════════════════════════════════════════ */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightboxContent');
  const lbClose   = document.getElementById('lightboxClose');
  if (!lightbox || !lbContent || !lbClose) return;

  const open  = (item) => {
    const emoji = item.querySelector('.gal-emoji')?.textContent || '📷';
    const label = item.querySelector('span')?.textContent || '';
    lbContent.innerHTML = `<div>${emoji}</div><p style="font-size:1rem;color:rgba(255,255,255,.7);margin-top:1rem;">${label}</p>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.gal-item').forEach(item => {
    item.addEventListener('click', () => open(item));
  });

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();

/* ══════════════════════════════════════════
   FOOTER – año actual
══════════════════════════════════════════ */
(function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

/* ══════════════════════════════════════════
   SMOOTH ANCHOR SCROLL (offset navbar)
══════════════════════════════════════════ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('navbar')?.offsetHeight || 70;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
