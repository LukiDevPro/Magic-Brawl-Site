const languages = ["ru"];

const translations = {
  en: {
    main_title: 'Magic Team.<br>We are creating the best servers.',
    main_sub: 'We\u00a0have created Magic Brawl and\u00a0Retro Brawl — popular servers.',
    download_btn: 'Download',
    servers_title: 'Our servers',
    mb_version: 'Version: 47.227',
    mb_desc: 'Magic Brawl is the rebirth of Brawl Stars and its best times! All content is available on the server: online battles, all the characters and everything. By downloading this server, you can get great pleasure from the updates, because we update the server every month!',
    mb_android: 'Download on Android',
    mb_ios: 'Download on iOS',
    rb_version: 'Version: 12.98',
    rb_desc: 'Retro Brawl is the old version of Brawl Stars (2018). Online battles, 21 characters and star powers for them, clans, etc. are available on the server. Feel better times, from the old menu to the atmosphere!',
    rb_android: 'Download on Android',
    rb_ios: 'Download on iOS',
    install_title: 'How to install?',
    install_sub: 'It takes less than 2 minutes',
    step1_title: 'Step 1. Download the APK',
    step1_desc: 'Select the server you want to download and upload the APK file.',
    step2_title: 'Step 2. Allow installation from third-party sources',
    step2_desc: 'This is required if you are installing the game from outside of Google Play.',
    step3_title: 'Step 3. Install',
    step3_desc: 'Click the "Install" button.',
    news_title: 'Latest news',
    socials_title: 'Our social networks',
    disclaimer_title: 'Disclaimer',
    disclaimer_text: 'This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see: Supercell\'s Fan Content Policy',
    footer_info: 'Important information',
    footer_rules: 'Server Rules',
    footer_socials: 'Social networks',
  },
  ru: {
    main_title: 'Magic Team.<br>Мы создаём лучшие серверы.',
    main_sub: 'Мы создали Magic Brawl и Retro Brawl — популярные серверы.',
    download_btn: 'Скачать',
    servers_title: 'Наши серверы',
    mb_version: 'Версия: 47.227',
    mb_desc: 'Magic Brawl — это возрождение Brawl Stars в лучшие времена! Весь контент доступен на сервере: онлайн-бои, все персонажи и многое другое. Мы обновляем сервер каждый месяц!',
    mb_android: 'Скачать на Android',
    mb_ios: 'Скачать на iOS',
    rb_version: 'Версия: 12.98',
    rb_desc: 'Retro Brawl — это старая версия Brawl Stars (2018). Онлайн-бои, 21 персонаж, силы звёзд, кланы и многое другое. Почувствуй атмосферу старых времён!',
    rb_android: 'Скачать на Android',
    rb_ios: 'Скачать на iOS',
    install_title: 'Как установить?',
    install_sub: 'Это займёт меньше 2 минут',
    step1_title: 'Шаг 1. Скачайте APK',
    step1_desc: 'Выберите сервер и скачайте APK-файл.',
    step2_title: 'Шаг 2. Разрешите установку из неизвестных источников',
    step2_desc: 'Это необходимо, если вы устанавливаете игру не из Google Play.',
    step3_title: 'Шаг 3. Установите',
    step3_desc: 'Нажмите кнопку "Установить".',
    news_title: 'Последние новости',
    socials_title: 'Наши соцсети',
    disclaimer_title: 'Дисклеймер',
    disclaimer_text: 'Этот контент не связан, не одобрен, не спонсирован и не одобрен компанией Supercell. Supercell не несёт ответственности за него. Подробнее: политика фан-контента Supercell',
    footer_info: 'Важная информация',
    footer_rules: 'Правила сервера',
    footer_socials: 'Соцсети',
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
  // Update selected state in header
  document.querySelectorAll('.lang-switch').forEach(link => {
    if (link.getAttribute('data-lang') === lang) {
      link.setAttribute('selected', '');
    } else {
      link.removeAttribute('selected');
    }
  });
  // Update dropdown
  document.querySelectorAll('.dropdown__option').forEach(opt => {
    if (opt.getAttribute('data-value') === lang) {
      opt.setAttribute('selected', '');
    } else {
      opt.removeAttribute('selected');
    }
  });
}

// Sprachumschaltung über Header-Links

document.querySelectorAll('.lang-switch').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    setLanguage(this.getAttribute('data-lang'));
  });
});

// Sprachumschaltung über Dropdown

document.querySelectorAll('.dropdown-languages').forEach(dropdown => {
  dropdown.addEventListener('change', function () {
    setLanguage(dropdown.dataset.value);
  });
});

// Standard: Englisch
setLanguage('en');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.dropdown-languages').forEach(dropdown => {
    dropdown.addEventListener('change', function () {
        let pathname = window.location.pathname;
        let trimmedPath = pathname.substring(pathname.indexOf("/") + 1);
        let path = trimmedPath.split("/");

        if (languages.includes(path[0].trimStart("/"))) {  // check if first path part is a langauge
            trimmedPath = path.slice(1).join("\/");
        }

        switch (dropdown.dataset.value) {
            case 'en': 
                window.location.pathname = `/${trimmedPath}`; 
                break;
            default:
                window.location.pathname = `/${dropdown.dataset.value}/${trimmedPath}`; 
                break;
        }
    });
});