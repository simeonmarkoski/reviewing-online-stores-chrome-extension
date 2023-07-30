(async () => {
    const lang = await new Promise(resolve => {
        Api.getLanguage(lang => resolve(lang));
    });

    const root = document.getElementById('root');

    if (lang === 'mk') {
        root.innerHTML = `<h1 style="margin-left: 20px; font-size: 20px;">Калкулација за Безбедност</h1>
<div id="secure-body" style="margin-left: 20px; font-size: 15px; padding-bottom: 20px;">
    Калкулацијата е направена според следната критерија.
    <h4>За веб-страни:</h4>
    <ul>
        <li>Има линк до <i>Facebook</i> профил (4 поени);</li>
        <li>Има линк до <i>Instagram</i> профил (4 поени);</li>
        <li>Има линк до <i>Twitter</i> профил (4 поени);</li>
        <li>Има линк до <i>LinkedIn</i> профил (4 поени);</li>
        <li>Има линк до <i>YouTube</i> канал (4 поени);</li>
        <li>Има телефонски број за контакт (5 поени);</li>
        <li>Има емаил адреса за контакт (5 поени);</li>
        <li>Има адреса на компанија (5 поени);</li>
        <li>Е регистрирана компанија (45 поени);</li>
        <li>Корисниците не ја напуштаат страната брзо (5 поени);</li>
        <li>Корисниците килкаат на повеќе страни на посетување (5 поени);</li>
        <li>Има многу корисници (5 поени);</li>
        <li>Корисниците ја гледаат страната подолго време (5 поени);</li>
    </ul>
    <h4>За Facebook страни:</h4>
    <ul>
        <li>Има емаил адреса за контакт (10 поени);</li>
        <li>Има адреса на компанија (10 поени);</li>
        <li>Има голем број на допаѓања (25 поени);</li>
        <li>Има голем број на следбедици (25 поени);</li>
        <li>Не е нова страна (25 поени);</li>
        <li>Има многу проверки (5 поени);</li>
    </ul>
    <br/>
    <i style="font-size: 80%;">Корисничкиот рејтинг нема ефект на калкулацијата за безбедност.</i>
</div>
`;
    }

    if (lang === 'en') {
        root.innerHTML = `<h1 style="margin-left: 20px; font-size: 20px;">Safety Calculations</h1>
<div id="secure-body" style="margin-left: 20px; font-size: 15px; padding-bottom: 20px;">
    The calculation is done based on the following criteria.
    <h4>For websites:</h4>
    <ul>
        <li>Has a <i>Facebook</i> profile link (4 pts);</li>
        <li>Has an <i>Instagram</i> profile link (4 pts);</li>
        <li>Has a <i>Twitter</i> profile link (4 pts);</li>
        <li>Has a <i>LinkedIn</i> profile link (4 pts);</li>
        <li>Has a <i>YouTube</i> channel link (4 pts);</li>
        <li>Has a contact phone number (5 pts);</li>
        <li>Has a contact email (5 pts);</li>
        <li>Has a company address (5 pts);</li>
        <li>It belongs to a registered company (45 pts);</li>
        <li>Has a good bounce rate (5 pts);</li>
        <li>Has a high per pages per visitor count (5 pts);</li>
        <li>Has a high amount of traffic (5 pts);</li>
        <li>If users spend a high amount of time on the site (5 pts);</li>
    </ul>
    <h4>For Facebook pages:</h4>
    <ul>
        <li>Has a contact email (10 pts);</li>
        <li>Has a company address (10 pts);</li>
        <li>Has a high amount of likes (25 pts);</li>
        <li>Has a high amount of followers (25 pts);</li>
        <li>Is not a new page (25 pts);</li>
        <li>Has a high amount of checks (5 pts);</li>
    </ul>
    <br/>
    <i style="font-size: 80%;">The consumer's rating doesn't have an effect on the safety score.</i>
</div>
`;
    }
})();