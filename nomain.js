(async () => {
        const lang = await new Promise(resolve => {
            Api.getLanguage(lang => resolve(lang));
        });

        const top = document.getElementById('top');
        const mid = document.getElementById('mid');
        const before = document.getElementById('before');
        const link = document.getElementById('main-page-link');
        const after = document.getElementById('after');

        if (lang === "mk") {
            top.innerHTML = "<h1 style=\"margin-left: 20px; font-size: 20px;\">Грешка</h1>";
            mid.innerHTML = "<p>Не сте на почетната страна на веб-сајтот.</p>"
            before.innerHTML = "Оди на "
            link.innerText = "почетната страна";
            after.innerHTML =  ".";
        }
        if (lang === "en") {
            top.innerHTML = "<h1 style=\"margin-left: 20px; font-size: 20px;\">Error</h1>";
            mid.innerHTML = "<p>You are not on the main page of the website.</p>"
            before.innerHTML = "Go to the "
            link.innerText = "main page";
            after.innerHTML =  ".";
        }
    }
)();