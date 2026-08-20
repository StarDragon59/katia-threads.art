// ===== ДАННЫЕ ДЛЯ ГАЛЕРЕИ (С КАТЕГОРИЯМИ) =====
const works = [
    // ---- ГОБЕЛЕНЫ ----
    {
        title: "Гобелен «Лошадка»",
        image: "images/works/gobelen_-03.jpg",
        details: "60×40 см, ручное ткачество, шерсть",
        story: "Минималистичный сюжет с глубоким тёмным фоном. Работа задаёт ритм пространству и работает как арт-объект в интерьере лофт или минимализм.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Лесное озеро»",
        image: "images/works/gobelen_-014.jpg",
        details: "100×90 см, ручное ткачество, шерсть",
        story: "Монументальная работа, которая притягивает взгляд и становится центром гостиной. Фактурное переплетение нитей создаёт ощущение природной мощи и уюта.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Ковчег жизни»",
        image: "images/works/gobelen_-07.jpg",
        details: "120×90 см, ручное ткачество, шерсть",
        story: "Яркая, фактурная работа с глубокими оттенками синего и терракотового. Станет акцентом в современном интерьере.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Грезы»",
        image: "images/works/gobelen_-08.jpg",
        details: "65×85 см, ручное ткачество, смесовая пряжа",
        story: "Переливы холодных оттенков напоминают отражения ночного неба в воде. На их фоне яркими акцентами возникают цветы, деликатно отсылая к внутренней музыке чувств. Отличный выбор для минимализма или сканди.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Лесная тропа»",
        image: "images/works/gobelen_-10.jpg",
        details: "50×50 см, ручное ткачество, шерсть",
        story: "Крупное монументальное панно, которое «дышит» и зонирует пространство. Глубокие охристые и зеленые оттенки дают ощущение тепла и спокойствия. А живая фактура переплетений добавляет природности пространству дома.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Двое»",
        image: "images/works/gobelen_-013.jpg",
        details: "60×80 см, ручное ткачество, шерсть",
        story: "Тёплая, солнечная работа, согревающая интерьер. Идеально для гостиной или столовой.",
        status: "Доступен для заказа",
        category: "gobelen"
    },
    {
        title: "Гобелен «Облако»",
        image: "images/works/punch-01.jpg",
        details: "20×40 см, ручное ткачество, шерсть",
        story: "Легчайшая, воздушная работа. Благодаря объёму она добавляет интерьеру тактильность и «домашность». Идеально для спальни.",
        status: "Доступна для заказа",
        category: "gobelen"
    },

    // ---- PUNCH NEEDLE ----
    {
        title: "Ковровая вышивка «Геометрия тепла»",
        image: "images/works/punch-03.jpg",
        details: "45×60 см, ковровая вышивка (punch needle), меланжевая пряжа",
        story: "Чёткий узор и мягкая фактура — отличный выбор для современного интерьера. Работа привлекает внимание и вызывает желание прикоснуться.",
        status: "Продана",
        category: "punch"
    },
    {
        title: "Ковровая вышивка «Первоцвет»",
        image: "images/works/punch-04.jpg",
        details: "50×50 см, ковровая вышивка (punch needle), хлопок, шерсть",
        story: "Камерная, нежная работа с природными мотивами. Станет красивым подарком.",
        status: "Доступна для заказа",
        category: "punch"
    },
    {
        title: "Ковровая вышивка «Цветущий луг»",
        image: "images/works/punch-05.jpg",
        details: "35×45 см, ковровая вышивка (punch needle), хлопок",
        story: "Пушистая, объёмная текстура создаёт ощущение мягкого ковра на стене. Яркие акценты оживят прихожую или детскую.",
        status: "Доступна для заказа",
        category: "punch"
    },

    // ---- ЖИВОПИСЬ ----
    {
        title: "Живопись «Отражение»",
        image: "images/works/painting-04.jpg",
        details: "40×50 см, масло, холст",
        story: "Яркая, но гармоничная композиция. Напоминает о летнем солнце. Отлично смотрится в паре с текстильной работой в одной цветовой гамме.",
        status: "Доступна для заказа",
        category: "painting"
    },
    {
        title: "Живопись «Внутренний свет»",
        image: "images/works/painting-05.jpg",
        details: "50×60 см, акрил, холст",
        story: "Абстрактный пейзаж, в котором угадываются вода и небо. Мягкие переходы цвета создают медитативное настроение. Работа может стать эскизом для будущего гобелена.",
        status: "Доступна для заказа",
        category: "painting"
    }
];

// ===== РЕНДЕР ЛЕНТЫ =====
const workList = document.getElementById('workList');

function renderWorks(filter = 'all') {
    if (!workList) return;
    workList.innerHTML = '';

    const filtered = filter === 'all' ? works : works.filter(w => w.category === filter);

    if (filtered.length === 0) {
        workList.innerHTML = '<p style="text-align:center; padding:40px 0;">Работ в этой категории пока нет.</p>';
        return;
    }

    filtered.forEach((work, index) => {
        const row = document.createElement('div');
        row.className = 'work-row';
        row.style.transitionDelay = (index * 0.1) + 's';

        const isSold = work.status.includes('Продано');
        const statusClass = isSold ? 'sold' : 'available';

        row.innerHTML = `
            <div class="work-image">
                <img src="${work.image}" alt="${work.title}" loading="lazy" />
            </div>
            <div class="work-info">
                <h3>${work.title}</h3>
                <p class="work-details">${work.details}</p>
                <p class="work-story">${work.story}</p>
                <span class="work-status ${statusClass}">${work.status}</span>
                <br>
                <a href="#contacts" class="btn btn--primary">Заказать</a>
            </div>
        `;

        // Модальное окно по клику на картинку
        const img = row.querySelector('.work-image img');
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <span class="modal__close">&times;</span>
                <div class="modal__content">
                    <img src="${work.image}" alt="${work.title}" class="modal__image">
                </div>
            `;
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            modal.querySelector('.modal__close').addEventListener('click', (e) => {
                e.stopPropagation();
                modal.remove();
                document.body.style.overflow = 'auto';
            });
            modal.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflow = 'auto';
            });
        });

        workList.appendChild(row);

        // Анимация появления
        setTimeout(() => row.classList.add('visible'), 100);
    });
}

// ===== ФИЛЬТРЫ =====
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderWorks(btn.dataset.filter);
        });
    });
}

// ===== КАРУСЕЛЬ В БЛОКЕ «О ХУДОЖНИКЕ» =====
function initCarousel() {
    const carousel = document.getElementById('aboutCarousel');
    if (!carousel) return;

    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-btn--prev');
    const nextBtn = carousel.querySelector('.carousel-btn--next');
    let currentIndex = 0;
    let intervalId = null;

    function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function startAutoPlay() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            goTo(currentIndex + 1);
        }, 4000);
    }

    function resetAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        startAutoPlay();
    }

    // Кнопки
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goTo(currentIndex - 1);
            resetAutoPlay();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goTo(currentIndex + 1);
            resetAutoPlay();
        });
    }

    // Точки
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            goTo(i);
            resetAutoPlay();
        });
    });

    // Пауза при наведении (десктоп)
    carousel.addEventListener('mouseenter', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    carousel.addEventListener('mouseleave', () => {
        if (!intervalId) startAutoPlay();
    });

    // Пауза при касании (мобильные) — теперь всё внутри функции
    carousel.addEventListener('touchstart', () => {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    carousel.addEventListener('touchend', () => {
        if (!intervalId) startAutoPlay();
    });

    // Старт
    goTo(0);
    startAutoPlay();
}

// ===== ГАЛЕРЕЯ =====
function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    gallery.innerHTML = '';

    works.forEach(work => {
        const item = document.createElement('div');
        item.className = 'gallery__item';

        const img = document.createElement('img');
        img.src = work.image;
        img.alt = work.title;
        img.width = 600;
        img.height = 400;
        img.loading = 'lazy';

        const info = document.createElement('div');
        info.className = 'gallery__info';
        info.innerHTML = `
            <h4>${work.title}</h4>
            <p class="gallery__details">${work.details}</p>
            <p class="gallery__story">${work.story}</p>
            <span class="gallery__status ${work.status === 'Продано' ? 'status--sold' : 'status--available'}">${work.status}</span>
        `;

        img.addEventListener('click', (e) => {
            e.stopPropagation();
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <span class="modal__close">&times;</span>
                <div class="modal__content">
                    <img src="${work.image}" alt="${work.title}" class="modal__image">
                </div>
            `;
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';

            modal.querySelector('.modal__close').addEventListener('click', (e) => {
                e.stopPropagation();
                modal.remove();
                document.body.style.overflow = 'auto';
            });
            modal.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflow = 'auto';
            });
        });

        item.appendChild(img);
        item.appendChild(info);
        gallery.appendChild(item);
    });
}

// ===== БАННЕР COOKIE =====
function initCookieBanner() {
    const banner = document.getElementById('cookieConsent');
    const btn = document.getElementById('acceptCookies');
    if (!banner || !btn) return;

    if (localStorage.getItem('cookieConsent') === 'true') {
        banner.style.display = 'none';
        return;
    }

    btn.addEventListener('click', () => {
        banner.style.display = 'none';
        localStorage.setItem('cookieConsent', 'true');
    });
}

// ===== АНИМАЦИЯ ПРИ СКРОЛЛЕ =====
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.section, .service-card, .benefit-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.05 });

    elements.forEach(el => observer.observe(el));
}

// ===== БУРГЕР-МЕНЮ =====
function initBurger() {
    const burger = document.getElementById('burgerBtn');
    const nav = document.getElementById('mainNav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav--open');
        burger.classList.toggle('burger--active');
        burger.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
            burger.classList.remove('burger--active');
            burger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header')) {
            nav.classList.remove('nav--open');
            burger.classList.remove('burger--active');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
}

// ===== ЕДИНЫЙ ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        initCarousel();
        renderGallery();
        initCookieBanner();
        initBurger();
        setTimeout(handleScrollAnimations, 300);
    } catch (e) {
        console.warn('Ошибка при инициализации:', e.message);
    }
    console.log('✅ Сайт Екатерины Борисовой загружен');
});

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
    try {
        renderWorks('all');
        initFilters();
        // initCarousel(); // если есть
        // initCookieBanner(); // если есть
        // initBurger(); // если есть
        // handleScrollAnimations(); // если есть
    } catch (e) {
        console.warn('Ошибка при инициализации:', e.message);
    }
    console.log('✅ Сайт Екатерины Борисовой загружен (лента + фильтры)');
});
