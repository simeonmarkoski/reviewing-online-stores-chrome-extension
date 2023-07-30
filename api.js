class Auth {
    login(email, password) {
        fetch(Api.url
            + "requests/auth/login.php?email=" +encodeURIComponent(email)
            + "&password=" + encodeURIComponent(password), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    location.reload();
                }
            });
    }
    register(name, email, password) {
        fetch(
            Api.url
            + "requests/auth/register.php?email=" +encodeURIComponent(email)
            + "&password=" + encodeURIComponent(password)
            + "&name=" + encodeURIComponent(name),
            {
                mode: "cors",
                credentials: "include"
            })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    location.reload();
                }
            });
    }
    logout() {
        fetch(Api.url+'requests/auth/logout.php', {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    location.reload();
                }
            });
    }
    stat(callback) {
        fetch(Api.url+'requests/auth/stat.php', {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data);
                }
            });
    }
}

class FbAppend {
    negative(url, comment, followers, changed_name, screenshot_url, created_at, callback) {
        fetch(Api.url + 'requests/facebook/append_negative.php?url='+encodeURIComponent(url)
            + "&followers=" + encodeURIComponent(followers)
            + "&created_at=" + encodeURIComponent(created_at)
            + "&screenshot_url=" + encodeURIComponent(screenshot_url)
            + "&changed_name=" + (changed_name ? "true" : "false")
            + "&comment=" + encodeURIComponent(comment), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["success"]);
                }
            });
    }
    positive(url, comment, callback) {
        fetch(Api.url + 'requests/facebook/append_positive.php?url='+encodeURIComponent(url)
            + "&comment=" + encodeURIComponent(comment), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["success"]);
                }
            });
    }
}

class WebAppend {
    negative(url, comment, ssl, company, contact, screenshot_url, callback) {
        fetch(Api.url + 'requests/website/append_negative.php?url='+encodeURIComponent(url)
            + "&ssl=" + (ssl ? "true" : "false")
            + "&company=" + (company ? "true" : "false")
            + "&contact=" + (contact ? "true" : "false")
            + "&screenshot_url=" + encodeURIComponent(screenshot_url)
            + "&comment=" + encodeURIComponent(comment), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["success"]);
                }
            });
    }
    positive(url, comment, callback) {
        fetch(Api.url + 'requests/website/append_positive.php?url='+encodeURIComponent(url)
            + "&comment=" + encodeURIComponent(comment), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["success"]);
                }
            });
    }
}

class Api {
    static url = "https://proveriprodavnica.com/";
    static auth = new Auth();
    static fb = new FbAppend();
    static web = new WebAppend();
    static similarwebUrl = "https://data.similarweb.com/api/v1/data?domain="; // Api.url + "requests/similarweb.php?domain="
    static async similarweb(domain) {
        const resp = await fetch(Api.similarwebUrl + domain, {
            mode: "cors",
            credentials: "include"
        });
        return await resp.json();
    }
    static error = message => console.error(message);
    static upload_data(data, callback) {
        fetch(Api.url + "requests/upload/from_data.php", {
            mode: "cors",
            credentials: "include",
            method: "post",
            body: data
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["url"], data["size"]);
                }
            });
    }

    static setLanguage(language, callback) {
        fetch(Api.url+'requests/check/set_language.php?lang='+encodeURIComponent(language), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback();
                }
            });

    }

    static getLanguage(callback) {
        fetch(Api.url+'requests/check/language.php', {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                }
                callback(data);
            });
    }

    static getPosts(url, callback) {
        fetch(Api.url+'requests/check/get_posts.php?url='+encodeURIComponent(url), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data);
                }
            });
    }

    static check(url, callback) {
        fetch(Api.url+'requests/check/check.php?url='+encodeURIComponent(url), {
            mode: "cors",
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if (data.error !== undefined) {
                    Api.error(data.error);
                } else {
                    callback(data["rating"], data["count"]);
                }
            });
    }
}

const mainPageLink = document.getElementById("main-page-link");
if (mainPageLink) {
    mainPageLink.onclick = () => {
        chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
            const [tab] = tabs;
            chrome.tabs.sendMessage(tab.id, "toggle");
            chrome.tabs.sendMessage(tab.id, "main");
        });
    };
}


async function changeLanugage(lang) {
    await new Promise(resolve => Api.setLanguage(lang, () => {
        resolve();
    }));
    location.reload();
}

// za jazik
const langTool = document.getElementById('languages-toolbar');
if (langTool) {
    const macedonian = document.getElementById('mk');
    macedonian.onclick = () => changeLanugage("mk");
    const english = document.getElementById('en');
    english.onclick = () => changeLanugage("en");
}