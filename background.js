chrome.runtime.onMessage.addListener((msg, sender) => {
    if (msg.action === 'storage_set') {
        const obj = {};
        obj[msg["key"]] = msg["value"];
        chrome.storage.sync.set(obj);
        chrome.tabs.remove(sender.tab.id);
    }
});

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id,"toggle");
});

// cors
(() => {
    'use strict';

    const DEFAULT_METHODS = ['GET', 'PUT', 'POST', 'DELETE', 'HEAD', 'OPTIONS', 'PATCH', 'PROPFIND', 'PROPPATCH', 'MKCOL', 'COPY', 'MOVE', 'LOCK'];

    const prefs = {
        'enabled': true,
        'overwrite-origin': true,
        'methods': DEFAULT_METHODS,
        'remove-x-frame': true,
        'allow-credentials': true,
        'allow-headers-value': '*',
        'allow-origin-value': '*',
        'expose-headers-value': '*',
        'allow-headers': false,
        'unblock-initiator': true
    };

    const redirects = {};
    chrome.tabs.onRemoved.addListener(tabId => delete redirects[tabId]);
    const cors = {};

    cors.onBeforeRedirect = d => {
        if (d.type === 'main_frame') {
            return;
        }
        redirects[d.tabId] = redirects[d.tabId] || {};
        redirects[d.tabId][d.requestId] = true;
    };

    cors.onHeadersReceived = d => {
        if (d.type === 'main_frame') {
            return;
        }
        const {initiator, originUrl, responseHeaders, requestId, tabId} = d;
        let origin = '';
        if (!chrome.extension.getURL('/').toString().startsWith(initiator)) {
            return;
        }

        const redirect = redirects[tabId] ? redirects[tabId][requestId] : false;
        if (prefs['unblock-initiator'] && redirect !== true) {
            try {
                const o = new URL(initiator || originUrl);
                origin = o.origin;
            } catch (e) {
                console.warn('cannot extract origin for initiator', initiator);
            }
        } else {
            origin = '*';
        }
        if (redirects[tabId]) {
            delete redirects[tabId][requestId];
        }

        if (prefs['overwrite-origin'] === true) {
            const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-origin');

            if (o) {
                if (o.value !== '*') {
                    o.value = origin || prefs['allow-origin-value'];
                }
            } else {
                responseHeaders.push({
                    'name': 'Access-Control-Allow-Origin',
                    'value': origin || prefs['allow-origin-value']
                });
            }
        }
        if (prefs.methods.length > 3) {
            const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-methods');
            if (o) {
                o.value = [...new Set([...prefs.methods, ...o.value.split(/\s*,\s*/).filter(a => {
                    return DEFAULT_METHODS.indexOf(a) === -1;
                })])].join(', ');
            } else {
                responseHeaders.push({
                    'name': 'Access-Control-Allow-Methods',
                    'value': prefs.methods.join(', ')
                });
            }
        }
        if (prefs['allow-credentials'] === true) {
            const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-origin');
            if (!o || o.value !== '*') {
                const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-credentials');
                if (o) {
                    o.value = 'true';
                } else {
                    responseHeaders.push({
                        'name': 'Access-Control-Allow-Credentials',
                        'value': 'true'
                    });
                }
            }
        }
        if (prefs['allow-headers'] === true) {
            const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-allow-headers');
            if (o) {
                o.value = prefs['allow-headers-value'];
            } else {
                responseHeaders.push({
                    'name': 'Access-Control-Allow-Headers',
                    'value': prefs['allow-headers-value']
                });
            }
        }
        if (prefs['allow-headers'] === true) {
            const o = responseHeaders.find(({name}) => name.toLowerCase() === 'access-control-expose-headers');
            if (o) {
                o.value = prefs['expose-headers-value'];
            } else {
                responseHeaders.push({
                    'name': 'Access-Control-Expose-Headers',
                    'value': prefs['expose-headers-value']
                });
            }
        }
        if (prefs['remove-x-frame'] === true) {
            const i = responseHeaders.findIndex(({name}) => name.toLowerCase() === 'x-frame-options');
            if (i !== -1) {
                responseHeaders.splice(i, 1);
            }
        }
        return {responseHeaders};
    };
    cors.install = () => {
        cors.remove();
        const extra = ['blocking', 'responseHeaders'];
        if (/Firefox/.test(navigator.userAgent) === false) {
            extra.push('extraHeaders');
        }
        chrome.webRequest.onHeadersReceived.addListener(cors.onHeadersReceived, {
            urls: ['<all_urls>']
        }, extra);
        chrome.webRequest.onBeforeRedirect.addListener(cors.onBeforeRedirect, {
            urls: ['<all_urls>']
        });
    };
    cors.remove = () => {
        chrome.webRequest.onHeadersReceived.removeListener(cors.onHeadersReceived);
        chrome.webRequest.onBeforeRedirect.removeListener(cors.onBeforeRedirect);
    };

    cors.install();

})();