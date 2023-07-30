(() => {
    chrome.runtime.onMessage.addListener( (msg, sender, sendResponse) => {
        if (msg === 'main') {
            document.location = "/";
            return;
        }
        if (msg === 'toggle') {
            console.log("toggle");
            toggle();
            return;
        }

        if (msg === 'unload') {
            console.log("unload");
            unload();
            return;
        }

        if (msg.text === 'report_back') {
            console.log("report_back")
            sendResponse([document.body.innerHTML, document.body.innerText]);
        }
    });

    const ex = document.createElement('div');
    ex.style.zIndex = "9000000000000000000";
    ex.style.height = "100%";
    ex.style.width = "0px";
    ex.style.position = "fixed";
    ex.style.top = "0px";
    ex.style.left = "0px";
    // ex.style.opacity = "0.2";
    // ex.style.background = "black";
    ex.onclick = ev => {
        toggle();
    };

    const back = "-420px";
    const iframe = document.createElement('iframe');
    iframe.style.height = "96%";
    iframe.style.width = "400px";
    iframe.style.position = "fixed";
    iframe.style.top = "0px";
    iframe.style.right = back;
    iframe.style.zIndex = "9000000000000000000";
    iframe.frameBorder = "none";
    iframe.style.borderRadius = "7px";
    iframe.style.boxShadow = "5px 6px 5px #888888";
    iframe.style.marginTop = "10px";
    iframe.style.marginBottom = "10px";
    iframe.style.marginRight = "10px";
    iframe.src = "about:blank";
    iframe.className = "scrollbar";

    document.body.append(ex, iframe);

    let toggled = false;

    function unload() {
        iframe.src = "about:blank";
    }

    function toggle() {
        if (!toggled) {
            // pokazi
            if (iframe.src === "about:blank") {
                iframe.src = chrome.extension.getURL("popup.html");
            }
            console.log("pokazi");
            iframe.style.right = "0";
            ex.style.width = "100%";
            iframe.style.transition = "0.5s";
            toggled = true;

        } else {
            // trgni
            console.log("trgini");
            iframe.style.right = back;
            ex.style.width = "0px";
            toggled = false;
        }
    }
})();

setTimeout( async () => {
    const hash = document.getElementsByTagName('hash');
    if (hash.length > 0) {
        const data = hash[0].getAttribute('value');
        chrome.runtime.sendMessage({"action": "storage_set", "key": "fb_data", "value": data});
    }
}, 1000);


window.addEventListener('load', () => {
    const proveri = document.getElementById('proveri_prodavnica_extension_status');
    if (proveri) {
        proveri.setAttribute('loaded', 'true');
    }
});
