(async () => {
    const strings = {
        "Configuration": {
            "en": "Configuration",
            "mk": "Конфигурација"
        },
        "You are logged in as ": {
            "en": "You are logged in as ",
            "mk": "Најавени сте како "
        },
        "You are not logged in.": {
            "en": "You are not logged in.",
            "mk": "Не сте најавени."
        },
        "Log out": {
            "en": "Log out",
            "mk": "Одјави се"
        }
    };

    async function changeLanugage(lang) {
        await new Promise(resolve => Api.setLanguage(lang, () => {
            resolve();
        }));
        location.reload();
    }


    const lang = await new Promise(resolve => {
        Api.getLanguage(lang => resolve(lang));
    });

    function translate(str) {
        return strings[str][lang];
    }

    function logout() {
        Api.auth.logout();
    }

    const config = document.getElementById("config");
    config.innerText = translate("Configuration");

    Api.auth.stat( async stat => {
        const options = document.querySelector('#options-body');
        const loginStat = document.createElement('div');
        loginStat.style.marginLeft = "20px";
        loginStat.style.fontSize = "15px";
        loginStat.style.paddingBottom = "20px";

        if (stat["uid"] !== null) {
            loginStat.innerHTML = translate("You are logged in as ") + "<b style='color: #4154f1'>" + stat["data"]["Name"] + "</b>.";
            const logoutButton = document.createElement('button');
            logoutButton.className = "btn";
            logoutButton.style.marginTop = "40px";
            logoutButton.innerText = translate("Log out");
            logoutButton.onclick = () => logout();
            loginStat.append(document.createElement('br'),logoutButton);
        } else {
            loginStat.innerText = translate("You are not logged in.");
        }
        options.appendChild(loginStat);
    });
})();

