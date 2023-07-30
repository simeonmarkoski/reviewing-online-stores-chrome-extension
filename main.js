(async () => {
    let _;
    const popup = document.querySelector('#popup-body');

    const strings = {
        "Safety": {
            "en": "Safety",
            "mk": "Безбедност"
        },
        "(Only for stores)": {
            "en": "(Only for stores)",
            "mk": "(За продавници)"
        },
        "Consumer's rating": {
            "en": "Consumer's rating",
            "mk": "Оценка од потрошувачи"
        },
        "Ratings": {
            "en": "Ratings",
            "mk": "Оценки"
        },
        "Information": {
            "en": "Information",
            "mk": "Информации"
        },
        "Reviews": {
            "en": "Reviews",
            "mk": "Критики"
        },
        "Main Information": {
            "en": "Main Information",
            "mk": "Главни информации"
        },
        "Company": {
            "en": "Company",
            "mk": "Компанија"
        },
        "Email": {
            "en": "Email",
            "mk": "Е-пошта"
        },
        "Phone Number": {
            "en": "Phone Number",
            "mk": "Телефонски број"
        },
        "Location": {
            "en": "Location",
            "mk": "Локација"
        },
        "Facebook": {
            "en": "Facebook",
            "mk": "Facebook"
        },
        "Instagram": {
            "en": "Instagram",
            "mk": "Instagram"
        },
        "Twitter": {
            "en": "Twitter",
            "mk": "Twitter"
        },
        "LinkedIn": {
            "en": "LinkedIn",
            "mk": "LinkedIn"
        },
        "YouTube": {
            "en": "YouTube",
            "mk": "YouTube"
        },
        "Top Countries Visits": {
            "en": "Top Countries Visits",
            "mk": "Посети од врвни земји"
        },
        "Engagements": {
            "en": "Engagements",
            "mk": "Зависност"
        },
        "Bounce Rate": {
            "en": "Bounce Rate",
            "mk": "Стапка на отскокнување"
        },
        "Pages Per Visitor": {
            "en": "Pages Per Visitor",
            "mk": "Страници по посетител"
        },
        "Monthly Visits": {
            "en": "Monthly Visits",
            "mk": "Месечни посети"
        },
        "Visit Duration": {
            "en": "Visit Duration",
            "mk": "Времетраење на посета"
        },
        "Estimated Monthly Visits": {
            "en": "Estimated Monthly Visits",
            "mk": "Проценети месечни посети"
        },
        "Traffic Sources": {
            "en": "Traffic Sources",
            "mk": "Извори на посетителите"
        },
        "Social": {
            "en": "Social",
            "mk": "Социјални"
        },
        "Paid Referrals": {
            "en": "Paid Referrals",
            "mk": "Платени препораки"
        },
        "Referrals": {
            "en": "Referrals",
            "mk": "Препораки"
        },
        "Search": {
            "en": "Search",
            "mk": "Пребарување"
        },
        "Direct": {
            "en": "Direct",
            "mk": "Директно"
        },
        "Are you satisfied with this website?": {
            "en": "Are you satisfied with this website?",
            "mk": "Дали сте задоволни со оваа веб-страница?"
        },
        "Yes": {
            "en": "Yes",
            "mk": "Да"
        },
        "No": {
            "en": "No",
            "mk": "Не"
        },
        "Add a comment": {
            "en": "Add a comment",
            "mk": "Додај коментар"
        },
        "Add a screenshot image": {
            "en": "Add a screenshot image",
            "mk": "Додајте слика од екранот"
        },
        "Submit": {
            "en": "Submit",
            "mk": "Потврди"
        },
        "Other Reviews": {
            "en": "Other Reviews",
            "mk": "Други критики"
        },
        " has voted ": {
            "en": " has voted ",
            "mk": " има гласано "
        },
        "positively": {
            "en": "positively",
            "mk": "позитивно"
        },
        "negatively": {
            "en": "negatively",
            "mk": "негативно"
        },
        " because: ": {
            "en": " because: ",
            "mk": " затоа што: "
        },
        "Log in with Google": {
            "en": "Log in with Google",
            "mk": "Најавете се со Google"
        },
        "It must convey your opinion.": {
            "en": "It must convey your opinion.",
            "mk": "Мора да го венесе вашето мислење."
        },
        "You have already posted an opinion on this page.": {
            "en": "You have already posted an opinion on this page.",
            "mk": "Веќе имате пратено мислење за оваа страница."
        },
        "We can not scan the content of the page.": {
            "en": "We can not scan the content of the page.",
            "mk": "Не можеме да ја скенираме соддржината од страницата."
        },
        "We did not detect a Facebook page for sale.": {
            "en": "We did not detect a Facebook page for sale.",
            "mk": "Не детектиравме Facebook страна за продавање."
        },
        "Error": {
            "en": "Error",
            "mk": "Грешка"
        },
        "Click to hide this.": {
            "en": "Click to hide this.",
            "mk": "Кликнете за да го скриете ова."
        },
        "Likes": {
            "en": "Likes",
            "mk": "Допаѓања"
        },
        "Followers": {
            "en": "Followers",
            "mk": "Следбеници"
        },
        "People Checked": {
            "en": "People Checked",
            "mk": "Чекирани луѓе"
        },
        "Page Created": {
            "en": "Page Created",
            "mk": "Создавање на страницата"
        },
        "Your rating has been sent": {
            "en": "Your rating has been sent",
            "mk": "Вашиот рејтинг е испратен"
        },
        "If you want to see more information about this website ": {
            "en": "If you want to see more information about this website ",
            "mk": "Ако сакате да видите повеќе информации за оваа веб страна "
        },
        "click here.": {
            "en": "click here.",
            "mk": "кликнете тука."
        }
    };

    const lang = await new Promise(resolve => {
        Api.getLanguage(lang => resolve(lang));
    });

    function translate(str) {
        return strings[str][lang];
    }

    async function continueWithGoogle() {
        const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
        chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
            const [tab] = tabs;
            chrome.tabs.sendMessage(tab.id, "toggle");
            window.open(Api.url + "google.php", "GooglePopup", windowFeatures);
            chrome.tabs.sendMessage(tab.id, "unload");
        });

    }

    function abbreviateNumber(value) {
        let newValue = value;
        const suffixes = ["", "K", "M", "B", "T"];
        let suffixNum = 0;
        while (newValue >= 1000) {
            newValue /= 1000;
            suffixNum++;
        }

        newValue = newValue.toPrecision(3);

        newValue += suffixes[suffixNum];
        return newValue === '0.00' ? '0' : newValue;
    }

    const globals = {};

    function dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: mimeString});
        return blob;
    }


    async function takeScreenshot(parent) {
// noinspection JSCheckFunctionSignatures
        if (globals.screenshot_url !== "") {
            return;
        }
        chrome.tabs.query({active: true, currentWindow: true}, async function (tabs) {
            const [tab] = tabs;
            chrome.tabs.sendMessage(tab.id, "toggle");
            await new Promise(resolve => setTimeout(() => resolve(), 500));
            chrome.tabs.captureVisibleTab(screenshotUrl => {
                Api.upload_data(screenshotUrl, result => {
                    const screenshot = document.createElement('img');
                    screenshot.src = URL.createObjectURL(dataURItoBlob(screenshotUrl)).toString();
                    screenshot.style.width = "60%";
                    screenshot.style.marginTop = "20px";
                    screenshot.style.borderRadius = "3px";
                    screenshot.style.boxShadow = "0px 0px 5px rgb(0 76 143)";
                    parent.appendChild(screenshot);
                    globals.screenshot_url = result;
                    chrome.tabs.sendMessage(tab.id, "toggle");

                });
            });
        });
    }

    async function getData(key) {
        return new Promise(resolve =>
            chrome.storage.sync.get([key], result => resolve(result[key])));
    }

    async function setData(key, value) {
        return new Promise(resolve =>
            chrome.storage.sync.set({key: value}, () => resolve()));
    }

    function afterSubmit(parent) {
        const analysisBox = document.createElement('div');
        parent.appendChild(analysisBox);

        const sentRating = document.createElement("h1");
        sentRating.style.marginTop = "30px";
        sentRating.className = "table-attributes";
        sentRating.style.padding = "20px";
        const moreInfo = document.createElement("p");
        const linkMoreInfo = document.createElement("a");
        linkMoreInfo.target = "_blank";
        linkMoreInfo.href = Api.url + "proverka.php?url=" + globals.url;
        linkMoreInfo.textContent = translate("click here.");
        linkMoreInfo.style.color = "rgb(42, 62, 82)";
        moreInfo.textContent = translate("If you want to see more information about this website ");
        moreInfo.style.color = "rgb(42, 62, 82)";
        moreInfo.append(linkMoreInfo);
        sentRating.textContent = translate("Your rating has been sent");
        sentRating.style.color = "rgb(42, 62, 82)";
        sentRating.append(moreInfo);
        analysisBox.append(sentRating);
    }

    /*
    async function fbApi(uniqueId) {
        const url = 'https://graph.facebook.com' + uniqueId + "?access_token="+ globals.fb_data.get('access_token');
        console.log(url);
        const response = await fetch(url);
        return response.json();
    }
    */

    function switchToReport(parent) {
        Api.auth.stat(async stat => {
            if (stat["uid"] !== null) {
                const box = document.createElement('div');
                box.className = "table-attributes";
                box.style.paddingLeft = "20px";
                box.style.paddingBottom = "20px";
                box.style.paddingRight = "20px";
                box.style.paddingTop = "10px";

                let opinion = false;
                const submit = document.createElement('button');
                submit.disabled = true;
                const comment = document.createElement('div');
                const rating = document.createElement('div');
                const screenshot = document.createElement('div');

                const divRatingTitle = document.createElement("div");
                divRatingTitle.style.display = "flex";
                divRatingTitle.style.justifyContent = "start";
                const ratingTitle = document.createElement('h2');
                ratingTitle.textContent = translate("Are you satisfied with this website?");
                ratingTitle.style.color = "rgb(42, 62, 82)";
                ratingTitle.style.fontSize = "14px";
                divRatingTitle.append(ratingTitle);


                // test make radio button
                const divRadio = document.createElement("div");
                divRadio.className = "radio-toolbar";
                const inputRadio1 = document.createElement("input");
                inputRadio1.type = "radio";
                inputRadio1.id = "radioApple";
                inputRadio1.name = "radioFruit";
                inputRadio1.value = "apple";
                inputRadio1.checked = true;
                const labelRadio1 = document.createElement("label");
                labelRadio1.setAttribute("for", "radioApple");
                labelRadio1.className = "lblradio1";
                labelRadio1.innerText = translate("Yes");
                const inputRadio2 = document.createElement("input");
                inputRadio2.type = "radio";
                inputRadio2.id = "radioBanana";
                inputRadio2.name = "radioFruit";
                inputRadio2.value = "banana";
                const labelRadio2 = document.createElement("label");
                labelRadio2.className = "lblradio2";
                labelRadio2.setAttribute("for", "radioBanana");
                labelRadio2.innerText = translate("No");
                divRadio.append(inputRadio1, labelRadio1, inputRadio2, labelRadio2);

                opinion = true;

                if (inputRadio1.checked == true) {
                    screenshot.style.display = "none";
                }

                inputRadio1.onclick = () => {
                    opinion = true;
                    submit.disabled = false;
                    screenshot.style.display = "none";
                    comment.style.display = "block";
                    console.log("BOKICA");
                };
                inputRadio2.onclick = () => {
                    opinion = false;
                    submit.disabled = false;
                    screenshot.style.display = "block";
                    comment.style.display = "block";
                    console.log("EVA");
                };
                rating.append(divRatingTitle);

                const commentDiv = document.createElement("div");
                const commentTextarea = document.createElement("textarea");
                commentDiv.className = "form-group";
                commentTextarea.className = "form-control";
                commentTextarea.name = "message";
                commentTextarea.id = "message";
                commentTextarea.cols = "30";
                commentTextarea.rows = "7";
                commentTextarea.textContent = "";
                commentTextarea.placeholder = translate("Add a comment");
                commentDiv.append(commentTextarea);

                comment.append(commentDiv);

                const screenshotBox = document.createElement("div");
                screenshotBox.className = "btn-circle";
                const cameraImg = document.createElement("img");
                cameraImg.src = "./img/icons/camera_icon.png";
                cameraImg.width = 20;
                cameraImg.height = 20;
                cameraImg.style.marginTop = "14px";
                screenshotBox.append(cameraImg);
                screenshotBox.onclick = () => {
                    screenshotBox.disabled = true;
                    takeScreenshot(screenshot);
                };
                const textScreenshot = document.createElement("h2");
                textScreenshot.style.color = "rgb(42, 62, 82)";
                textScreenshot.style.fontSize = "14px";
                textScreenshot.style.marginTop = "20px";
                textScreenshot.textContent = translate("Add a screenshot image");
                screenshot.append(textScreenshot, screenshotBox);

                async function submitReview() {
                    if (opinion === null) {
                        Api.error(translate("It must convey your opinion."));
                        return false;
                    }

                    if (opinion) {
                        const s = await new Promise(resolve => (globals.is_fb ? Api.fb : Api.web).positive(globals.url.replaceAll("www.", ""), commentTextarea.value, success => resolve(success)));
                        if (!s) {
                            Api.error(translate("You have already posted an opinion on this page."));
                            return false;
                        }
                    } else {
                        if (globals.is_fb) {
                            const pageId = globals.url.substring(globals.url.lastIndexOf("/")).replaceAll("www.", "");

                            const s = await new Promise(resolve => Api.fb.negative
                            (
                                globals.url.replaceAll("www.", ""),
                                commentTextarea.value,
                                null,
                                null,
                                globals.screenshot_url,
                                globals.created_at,
                                success => resolve(success)
                            ));
                            if (!s) {
                                Api.error(translate("You have already posted an opinion on this page."));
                                return false;
                            }

                        } else {
                            const s  = await new Promise(resolve => Api.web.negative
                            (
                                globals.url.replaceAll("www.", ""),
                                commentTextarea.value,
                                null,
                                null,
                                null,
                                globals.screenshot_url,
                                success => resolve(success)
                            ));

                            if (!s) {
                                Api.error(translate("You have already posted an opinion on this page."));
                                return false;
                            }
                        }
                    }

                    return true;
                }

                const textSubmit = document.createElement("h2");
                textSubmit.style.color = "rgb(42, 62, 82)";
                textSubmit.style.fontSize = "14px";
                textSubmit.style.marginTop = "20px";
                textSubmit.innerText = translate("Submit");

                const submitDiv = document.createElement("div");
                submitDiv.className = "btn-circle";
                const submitImg = document.createElement("img");
                submitImg.src = "svg/tick.svg";
                submitImg.width = 20;
                submitImg.height = 20;
                submitImg.style.marginTop = "14px";

                const sex = document.createElement('div');
                parent.appendChild(sex);
                submitDiv.append(submitImg);
                submitDiv.onclick = async () => {
                    if ((await submitReview()) == true) {
                        console.log("jako e");
                        box.style.display = "none";
                        submitDiv.style.display = "none";
                        afterSubmit(sex);
                    }
                };
                box.append(rating, divRadio, comment, screenshot, textSubmit, submitDiv);

                parent.appendChild(box);
            } else {
                const continueWithGoogle0 = document.createElement('button');
                continueWithGoogle0.className = "btn-google";
                continueWithGoogle0.textContent = translate("Log in with Google");
                continueWithGoogle0.onclick = () => continueWithGoogle();
                parent.appendChild(continueWithGoogle0);
            }

            const textOtherReviews = document.createElement("h2");
            textOtherReviews.innerText = translate("Other Reviews");
            textOtherReviews.className = "textOtherReviews";

            const hrLine = document.createElement("hr");
            hrLine.className = "hrline";
            hrLine.style.marginBottom = "25px";
            hrLine.style.marginTop = "15px";

            parent.append(textOtherReviews, hrLine);
        });

    }

    function onDom(html, fn) {
        const iframe = document.createElement('iframe');
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        const iframeWindow = iframe.contentWindow;
        iframeWindow.console.error = function () {
        };
        iframe.contentDocument.write(html);
        const val = fn(iframe.contentDocument);
        document.body.removeChild(iframe);
        return val;
    }

    /*function ecommerce4all () {
        chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
            const [tab] = tabs;
            chrome.tabs.sendMessage(tab.id, "ecommerce4all");
        });
    }*/

    const getHostname = (url) => {
        // use URL constructor and return hostname
        if (globals.is_fb) {
            try {
                const returnValue = onDom(globals.domInnerHTML, dom => {
                    return dom.querySelector('.d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.embtmqzv.fe6kdd0r.mau55g9w.c8b282yb.hrzyx87i.m6dqt4wy.h7mekvxk.hnhda86s.oo9gr5id.hzawbc8m').innerText;
                });
                return returnValue;
                //return dom.querySelector(".d2edcug0.hpfvmrgz.qv66sw1b.c1et5uql.lr9zc1uh.a8c37x1j.keod5gw0.nxhoafnm.aigsh9s9.embtmqzv.fe6kdd0r.mau55g9w.c8b282yb.hrzyx87i.m6dqt4wy.h7mekvxk.hnhda86s.oo9gr5id.hzawbc8m").className;
            } catch (e) {
                return URL(url)["hostname"].replaceAll("www.facebook.com/", "");
            }
        }
        return new URL(url)["hostname"].replaceAll("www.", "");
    }

    function secondsToTime(e) {
        var h = Math.floor(e / 3600).toString().padStart(2, '0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
            s = Math.floor(e % 60).toString().padStart(2, '0');

        return h + ':' + m + ':' + s;
        //return `${h}:${m}:${s}`;
    }

    async function finishedLoading(parent, url) {
        const color = onDom(globals.domInnerHTML, dom => {

        });

        const backgroundWhite = document.createElement("div");
        backgroundWhite.style.backgroundColor = "rgb(245, 249, 253)";
        backgroundWhite.style.width = "100%";
        backgroundWhite.style.zIndex = "-10000";
        backgroundWhite.style.top = "0";
        backgroundWhite.style.height = "280px";
        backgroundWhite.style.position = "absolute";

        let favIconURL;
        if (globals.is_fb) {
            console.log(new URL(url)["pathname"]);
            favIconURL = "https://graph.facebook.com/" + (new URL(url)["pathname"].split("/")[1]) + "/picture";
        } else {
            favIconURL = "chrome://favicon/size/32@1x/" + url;
        }

        console.log("favIconUrl: ", favIconURL);
        const imgIcon = document.createElement("img");
        imgIcon.style.borderRadius = "15%";
        imgIcon.src = favIconURL;
        imgIcon.width = 40;
        imgIcon.height = 40;

        const imgBadge = document.createElement("img");
        imgBadge.src = "img/icons/badge.png";
        imgBadge.width = 20;
        imgBadge.height = 20;
        imgBadge.style.marginLeft = "10px";

        const urlText = document.createElement("div");

        urlText.textContent = getHostname(url);
        urlText.style.fontSize = "20px";
        urlText.style.marginLeft = "8px";
        urlText.style.whiteSpace = "nowrap";
        urlText.style.overflow = "hidden";
        urlText.style.textOverflow = "ellipsis";
        urlText.style.paddingLeft = "10px";
        urlText.style.color = "#787878";

        const urlTitle = document.createElement("div");
        urlTitle.style.marginTop = "10px";
        urlTitle.style.display = "flex";
        urlTitle.style.alignItems = "center";
        urlTitle.append(imgIcon, urlText);



        const format = document.createElement("div");
        format.className = "format";

        const starsBox = document.createElement('div');
        const stars = Math.round(globals.risk * 6);
        console.log("STARS");
        console.log(stars);
        for (let i = 0; i < 6; i++) {
            const star = document.createElement('span');
            star.className = "fa fa-star fa-3x";
            if (i < stars) {
                star.style.color = "orange";
            }
            starsBox.appendChild(star);
        }
        starsBox.style.width = "auto";
        starsBox.style.paddingBottom = "40px";
        starsBox.style.paddingTop = "40px";

        const divStars = document.createElement("div");
        divStars.style.display = "flex";
        divStars.style.justifyContent = "center";
        divStars.append(starsBox);

        const ratingValue = globals.rating * 10;
        const tableAttr = document.createElement("div");
        tableAttr.className = "table-attributes marginTableAtts";
        const tableRow = document.createElement("div");
        tableRow.className = "table-row";

        const tableColumn_risk = document.createElement("a");
        tableColumn_risk.className = "table-column";
        tableColumn_risk.href = "/secure.html";
        tableColumn_risk.style.textDecoration = "none";
        const tableElementTitle_risk = document.createElement("div");
        tableElementTitle_risk.className = "table-element table-title";
        tableElementTitle_risk.innerHTML = translate("Safety") + "<br><span style='color: gray;font-weight: normal;font-size: 11px;overflow: auto;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;'>" + translate("(Only for stores)") + "</span>";
        const tableElement_risk = document.createElement("div");
        tableElement_risk.className = "table-element";
        tableElement_risk.style.paddingTop = "10px";
        tableElement_risk.style.color = ((globals.risk * 100) > 50) ? "green" : "red";
        tableElement_risk.textContent = (globals.risk * 100).toFixed(2) + "%";

        tableColumn_risk.append(tableElementTitle_risk);
        tableColumn_risk.append(tableElement_risk);
        // tableRow.append(tableColumn_risk);

        const tableColumn_rating = document.createElement("div");
        tableColumn_rating.className = "table-column";
        const tableElementTitle_rating = document.createElement("div");
        tableElementTitle_rating.className = "table-element table-title";
        tableElementTitle_rating.textContent = translate("Consumer's rating");
        const tableElement_rating = document.createElement("div");
        tableElement_rating.className = "table-element";
        tableElement_rating.style.paddingTop = "10px";
        tableElement_rating.textContent = ratingValue.toFixed(1) + " / 10.0";

        tableColumn_rating.append(tableElementTitle_rating);
        tableColumn_rating.append(tableElement_rating);
        tableRow.append(tableColumn_rating);

        const tableColumn_count = document.createElement("div");
        tableColumn_count.className = "table-column";
        const tableElementTitle_count = document.createElement("div");
        tableElementTitle_count.className = "table-element table-title";
        tableElementTitle_count.textContent = translate("Ratings");
        const tableElement_count = document.createElement("div");
        tableElement_count.style.paddingTop = "10px";
        tableElement_count.className = "table-element";
        tableElement_count.textContent = globals.count;

        tableColumn_count.append(tableElementTitle_count);
        tableColumn_count.append(tableElement_count);
        tableRow.append(tableColumn_count);

        tableAttr.append(tableRow);

        const ratingText = document.createElement('div');

        ratingText.append(tableAttr);

        const tabInformation = document.createElement("div");


        const tabReviews = document.createElement("div");
        tabReviews.style.display = "none";

        const reportBox = document.createElement('div');
        switchToReport(reportBox);
        tabReviews.appendChild(reportBox);

        // add main navigation bar
        const divAll = document.createElement("div");
        divAll.style.display = "flex";
        divAll.style.justifyContent = "space-between";
        divAll.style.marginLeft = "20%";
        divAll.style.marginRight = "20%";
        divAll.style.marginTop = "30px";
        divAll.style.marginBottom = "5px";
        divAll.style.paddingBottom = "18px";

        const divInformation = document.createElement("a");
        divInformation.className = "information";
        divInformation.innerText = translate("Information");
        divInformation.onclick = () => {
            tabReviews.style.display = "none";
            tabInformation.style.display = "block";
            divReviews.href = "#";
            divInformation.removeAttribute('href');
            divInformation.style.color = "#4154f1";
            divReviews.style.color = "black";
        };

        const divReviews = document.createElement("a");
        divReviews.className = "reviews";
        divReviews.innerText = translate("Reviews");
        divReviews.href = "#";
        divReviews.onclick = () => {
            tabReviews.style.display = "block";
            tabInformation.style.display = "none";
            divReviews.removeAttribute('href');
            divInformation.href = "#";
            divReviews.style.color = "#4154f1";
            divInformation.style.color = "black";
        };

        const divLine = document.createElement("hr");
        divLine.className = "line";
        divLine.style.marginBottom = "25px";

        divAll.append(divInformation, divReviews);

        ratingText.append(divAll, divLine, tabInformation, tabReviews);

        // all posts
        const postsDiv = document.createElement('div');
        tabReviews.append(postsDiv);
        Api.getPosts(globals.url, async posts => {
            for (const post of posts) {
                const postEl = document.createElement('div');
                postEl.className = "postEl";
                postsDiv.appendChild(postEl);
                const profileLink = Api.url + "profile.php?uid=" + post["Uid"];
                const profileName = post["User"]["Name"];
                const comment = post["Comment"];
                if (comment == "") {
                    if (post["Opinion"] == 1) {
                        postEl.innerHTML = `<b>${profileName}</b>` + translate(" has voted ") + `<span style="color: green;">` + translate("positively") + `</span></br>`;
                    } else {
                        // negative
                        postEl.innerHTML = `<b>${profileName}</b>` + translate(" has voted ") + `<span style="color: red;">` + translate("negatively") + `</span></br>`;
                        if (post["ScreenshotUrl"] !== null) {
                            const dataUrl = await (await fetch(Api.url + post["ScreenshotUrl"])).text();
                            const blob = await (await fetch(dataUrl)).blob();
                            const url = URL.createObjectURL(blob);
                            const image = document.createElement('img');
                            image.src = url;
                            image.style.width = "60%";
                            image.style.border = "1px solid gray";

                            const aImgNewTab = document.createElement("a");
                            aImgNewTab.href = url;
                            aImgNewTab.target = "_blank";

                            aImgNewTab.append(image);
                            postEl.append(aImgNewTab);
                        }
                    }
                } else {
                    if (post["Opinion"] == 1) {
                        postEl.innerHTML = `<b>${profileName}</b>` + translate(" has voted ") + `<span style="color: green;">` + translate("positively") + `</span>` + translate(" because: ") + `</br><i>` + comment + "</i></br>";
                    } else {
                        // negative
                        postEl.innerHTML = `<b>${profileName}</b>` + translate(" has voted ") + `<span style="color: red;">` + translate("negatively") + `</span>` + translate(" because: ") + `</br><i>` + comment + "</i></br>";
                        if (post["ScreenshotUrl"] !== null) {
                            const dataUrl = await (await fetch(Api.url + post["ScreenshotUrl"])).text();
                            const blob = await (await fetch(dataUrl)).blob();
                            const url = URL.createObjectURL(blob);
                            const image = document.createElement('img');
                            image.src = url;
                            image.style.width = "60%";
                            image.style.border = "1px solid gray";

                            const aImgNewTab = document.createElement("a");
                            aImgNewTab.href = url;
                            aImgNewTab.target = "_blank";

                            aImgNewTab.append(image);
                            postEl.append(aImgNewTab);
                        }
                    }
                }
            }
        });

        if (globals.is_fb && (globals.email.length != 0 || globals.location.length != 0 || globals.likes != null || globals.followers != null || globals.visits != null || globals.created != null)) {
            const tableAttrMainInformations = document.createElement("div");
            tableAttrMainInformations.className = "table-attributes";
            tableAttrMainInformations.style.marginTop = "20px";

            const tableRowTitleMain = document.createElement("div");
            tableRowTitleMain.className = "table-main";
            tableRowTitleMain.textContent = translate("Main Information");
            tableAttrMainInformations.append(tableRowTitleMain);

            // email
            if (globals.email.length != 0) {
                // remove duplicates
                globals.email = globals.email.filter((v, i) => globals.email.indexOf(v) == i);

                for (let s = 0; s < globals.email.length; s++) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "mailto:" + globals.email[s];
                    tableRowAtts.style.textDecoration = "none";

                    if (s == globals.email.length - 1) {
                        tableRowAtts.className = "table-hor-phone-last";
                    } else {
                        tableRowAtts.className = "table-hor-phone";
                    }

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/email_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.innerText = translate("Email");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.email[s];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
            }
            // location
            if (globals.location.length != 0) {
                // remove duplicates
                globals.location = globals.location.filter((v, i) => globals.location.indexOf(v) == i);

                for (let s = 0; s < globals.location.length; s++) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://www.google.com/maps/dir/?api=1&destination=" + globals.location[s];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";

                    if (s == globals.location.length - 1) {
                        tableRowAtts.className = "table-hor-phone-last";
                    } else {
                        tableRowAtts.className = "table-hor-phone";
                    }

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/location_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("Location");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.innerHTML = globals.location[s].replaceAll(",", "<br/>");

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
            }
            // likes
            if (globals.likes != null) {
                const tableRowAtts = document.createElement("a");
                tableRowAtts.className = "table-hor-insights";

                const tableRowAttsLeft = document.createElement("div");
                tableRowAttsLeft.className = "table-hor-left";
                const tableRowAttsLeftImg = document.createElement("img");
                tableRowAttsLeftImg.style.width = "17px";
                tableRowAttsLeftImg.style.height = "17px";
                tableRowAttsLeftImg.src = "./img/icons/likes_icon.png";
                const tableRowAttsLeftText = document.createElement("div");
                tableRowAttsLeftText.className = "table-hor-left-text";
                tableRowAttsLeftText.textContent = translate("Likes");
                tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                const tableRowAttsRight = document.createElement("div");
                tableRowAttsRight.className = "table-hor-right";
                tableRowAttsRight.textContent = globals.likes;

                tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                tableAttrMainInformations.append(tableRowAtts);
            }
            // followers
            if (globals.likes != null) {
                const tableRowAtts = document.createElement("a");
                tableRowAtts.className = "table-hor-insights";

                const tableRowAttsLeft = document.createElement("div");
                tableRowAttsLeft.className = "table-hor-left";
                const tableRowAttsLeftImg = document.createElement("img");
                tableRowAttsLeftImg.style.width = "17px";
                tableRowAttsLeftImg.style.height = "17px";
                tableRowAttsLeftImg.src = "./img/icons/followers_icon.png";
                const tableRowAttsLeftText = document.createElement("div");
                tableRowAttsLeftText.className = "table-hor-left-text";
                tableRowAttsLeftText.textContent = translate("Followers");
                tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                const tableRowAttsRight = document.createElement("div");
                tableRowAttsRight.className = "table-hor-right";
                tableRowAttsRight.textContent = globals.followers;

                tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                tableAttrMainInformations.append(tableRowAtts);
            }
            // visits
            if (globals.visits != null) {
                const tableRowAtts = document.createElement("a");
                tableRowAtts.className = "table-hor-insights";

                const tableRowAttsLeft = document.createElement("div");
                tableRowAttsLeft.className = "table-hor-left";
                const tableRowAttsLeftImg = document.createElement("img");
                tableRowAttsLeftImg.style.width = "17px";
                tableRowAttsLeftImg.style.height = "17px";
                tableRowAttsLeftImg.src = "./img/icons/visits_icon.png";
                const tableRowAttsLeftText = document.createElement("div");
                tableRowAttsLeftText.className = "table-hor-left-text";
                tableRowAttsLeftText.textContent = translate("People Checked");
                tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                const tableRowAttsRight = document.createElement("div");
                tableRowAttsRight.className = "table-hor-right";
                tableRowAttsRight.textContent = globals.visits;

                tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                tableAttrMainInformations.append(tableRowAtts);
            }
            // created
            if (globals.created != null) {
                const tableRowAtts = document.createElement("a");
                tableRowAtts.className = "table-hor-insights";

                const tableRowAttsLeft = document.createElement("div");
                tableRowAttsLeft.className = "table-hor-left";
                const tableRowAttsLeftImg = document.createElement("img");
                tableRowAttsLeftImg.style.width = "17px";
                tableRowAttsLeftImg.style.height = "17px";
                tableRowAttsLeftImg.src = "./img/icons/company_icon.png";
                const tableRowAttsLeftText = document.createElement("div");
                tableRowAttsLeftText.className = "table-hor-left-text";
                tableRowAttsLeftText.textContent = translate("Page Created");
                tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                const tableRowAttsRight = document.createElement("div");
                tableRowAttsRight.className = "table-hor-right";
                tableRowAttsRight.textContent = globals.created;

                tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                tableAttrMainInformations.append(tableRowAtts);
            }

            tabInformation.append(tableAttrMainInformations);

            format.append(urlTitle, divStars, ratingText);

            parent.append(backgroundWhite, format);

        } else if (!globals.is_fb && (globals.fb_profile != null || globals.ig_profile != null || globals.tw_profile != null || globals.ln_profile != null || globals.yt_profile != null || globals.phoneNumbers.length != 0 || globals.phoneNumbersNames.length != 0 || globals.email.length != 0 || globals.location.length != 0 || globals.company == true || globals.companyName != null || Object.keys(globals.jsonSimilarweb).length != 0)) {
            if (globals.fb_profile != null || globals.ig_profile != null || globals.tw_profile != null || globals.ln_profile != null || globals.yt_profile != null || globals.phoneNumbers.length != 0 || globals.email.length != 0 || globals.location.length != 0 || globals.companyName == true) {
                const tableAttrMainInformations = document.createElement("div");
                tableAttrMainInformations.className = "table-attributes";
                tableAttrMainInformations.style.marginTop = "20px";

                const tableRowTitleMain = document.createElement("div");
                tableRowTitleMain.className = "table-main";
                tableRowTitleMain.innerText = translate("Main Information");
                tableAttrMainInformations.append(tableRowTitleMain);

                // company
                if (globals.company == true && globals.companyName != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.className = "table-hor";
                    tableRowAtts.href = "https://ecommerce4all.mk/";
                    tableRowAtts.target = "_blank";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/company_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("Company");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.companyName;

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);

                    urlTitle.append(imgBadge);
                }

                // email
                console.log("NIKOLA GRUEVSKI: ", globals.email);
                if (globals.email.length != 0) {
                    // remove duplicates
                    globals.email = globals.email.filter((v, i) => globals.email.indexOf(v) == i);

                    for (let s = 0; s < globals.email.length; s++) {
                        const tableRowAtts = document.createElement("a");
                        tableRowAtts.href = "mailto:" + globals.email[s];
                        tableRowAtts.style.textDecoration = "none";

                        if (s == globals.email.length - 1) {
                            tableRowAtts.className = "table-hor-phone-last";
                        } else {
                            tableRowAtts.className = "table-hor-phone";
                        }

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/email_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Email");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = globals.email[s];

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        tableAttrMainInformations.append(tableRowAtts);
                    }
                }
                // phoneNumbers
                console.log("NIKOLA GRUEVSKI: ", globals.phoneNumbersNames);
                if (globals.phoneNumbersNames.length != 0) {
                    // remove duplicates
                    globals.phoneNumbersNames = globals.phoneNumbersNames.filter((v, i) => globals.phoneNumbersNames.indexOf(v) == i);
                    globals.phoneNumbers = globals.phoneNumbers.filter((v, i) => globals.phoneNumbers.indexOf(v) == i);

                    for (let s = 0; s < globals.phoneNumbersNames.length; s++) {
                        const tableRowAtts = document.createElement("a");
                        tableRowAtts.href = "tel:" + globals.phoneNumbersNames[s];
                        tableRowAtts.style.textDecoration = "none";

                        if (s == globals.phoneNumbersNames.length - 1) {
                            tableRowAtts.className = "table-hor-phone-last";
                        } else {
                            tableRowAtts.className = "table-hor-phone";
                        }

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/phone_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Phone Number");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = globals.phoneNumbersNames[s];

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        tableAttrMainInformations.append(tableRowAtts);
                    }
                }
                // location
                if (globals.location.length != 0) {
                    // remove duplicates
                    globals.location = globals.location.filter((v, i) => globals.location.indexOf(v) == i);

                    for (let s = 0; s < globals.location.length; s++) {
                        const tableRowAtts = document.createElement("a");
                        tableRowAtts.href = "https://www.google.com/maps/dir/?api=1&destination=" + globals.location[s];
                        tableRowAtts.target = "_blank";
                        tableRowAtts.style.textDecoration = "none";

                        if (s == globals.location.length - 1) {
                            tableRowAtts.className = "table-hor-phone-last";
                        } else {
                            tableRowAtts.className = "table-hor-phone";
                        }

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/location_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Location");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.innerHTML = globals.location[s].replaceAll(",", "<br/>");

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        tableAttrMainInformations.append(tableRowAtts);
                    }
                }
                // fb_profile
                if (globals.fb_profile != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://www.facebook.com/" + globals.fb_profile.replaceAll("https://www.facebook.com/", "").replaceAll("https://facebook.com/", "").replaceAll("http://www.facebook.com/", "").replaceAll("http://facebook.com/", "").split("/")[0];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";
                    tableRowAtts.className = "table-hor-phone-last";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/facebook_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("Facebook");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.fb_profile.replaceAll("https://www.facebook.com/", "").replaceAll("https://facebook.com/", "").replaceAll("http://www.facebook.com/", "").replaceAll("http://facebook.com/", "").split("/")[0];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
                // ig_profile
                if (globals.ig_profile != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://www.instagram.com/" + globals.ig_profile.replaceAll("https://www.instagram.com/", "").replaceAll("http://www.instagram.com/", "").replaceAll("https://instagram.com/", "").replaceAll("http://instagram.com/", "").split("/")[0];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";
                    tableRowAtts.className = "table-hor-phone-last";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/instagram_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("Instagram");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.ig_profile.replaceAll("https://www.instagram.com/", "").replaceAll("http://www.instagram.com/", "").replaceAll("https://instagram.com/", "").replaceAll("http://instagram.com/", "").split("/")[0];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
                // tw_profile
                if (globals.tw_profile != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://twitter.com/" + globals.tw_profile.replaceAll("https://www.twitter.com/", "").replaceAll("http://www.twitter.com/", "").replaceAll("https://twitter.com/", "").replaceAll("http://twitter.com/", "").split("/")[0];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";
                    tableRowAtts.className = "table-hor-phone-last";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/twitter_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("Twitter");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.tw_profile.replaceAll("https://www.twitter.com/", "").replaceAll("http://www.twitter.com/", "").replaceAll("https://twitter.com/", "").replaceAll("http://twitter.com/", "").split("/")[0];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
                // yt_profile
                if (globals.yt_profile != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://youtube.com/" + globals.yt_profile.replaceAll("https://www.youtube.com/", "").replaceAll("http://www.youtube.com/", "").replaceAll("https://youtube.com/", "").replaceAll("http://youtube.com/", "").replaceAll("user/", "").split("/")[0];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";
                    tableRowAtts.className = "table-hor-phone-last";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/youtube_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("YouTube");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.yt_profile.replaceAll("https://www.youtube.com/", "").replaceAll("http://www.youtube.com/", "").replaceAll("https://youtube.com/", "").replaceAll("http://youtube.com/", "").replaceAll("user/", "").split("/")[0];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }
                // ln_profile
                if (globals.ln_profile != null) {
                    const tableRowAtts = document.createElement("a");
                    tableRowAtts.href = "https://linkedin.com/" + globals.ln_profile.replaceAll("https://www.linkedin.com/", "").replaceAll("http://www.linkedin.com/", "").replaceAll("https://linkedin.com/", "").replaceAll("http://linkedin.com/", "").split("/")[0];
                    tableRowAtts.target = "_blank";
                    tableRowAtts.style.textDecoration = "none";
                    tableRowAtts.className = "table-hor-phone-last";

                    const tableRowAttsLeft = document.createElement("div");
                    tableRowAttsLeft.className = "table-hor-left";
                    const tableRowAttsLeftImg = document.createElement("img");
                    tableRowAttsLeftImg.style.width = "17px";
                    tableRowAttsLeftImg.style.height = "17px";
                    tableRowAttsLeftImg.src = "./img/icons/linkedin_icon.png";
                    const tableRowAttsLeftText = document.createElement("div");
                    tableRowAttsLeftText.className = "table-hor-left-text";
                    tableRowAttsLeftText.textContent = translate("LinkedIn");
                    tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                    const tableRowAttsRight = document.createElement("div");
                    tableRowAttsRight.className = "table-hor-right";
                    tableRowAttsRight.textContent = globals.ln_profile.replaceAll("https://www.linkedin.com/", "").replaceAll("http://www.linkedin.com/", "").replaceAll("https://linkedin.com/", "").replaceAll("http://linkedin.com/", "").split("/")[0];

                    tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                    tableAttrMainInformations.append(tableRowAtts);
                }

                tabInformation.append(tableAttrMainInformations);
            }

            if (Object.keys(globals.jsonSimilarweb).length != 0) {
                const codesResponse = await fetch("/ISO/ISO3166CountryCodes.json");
                const codesJson = await codesResponse.json();
                const countries = new Map();
                for (const country of codesJson) {
                    countries.set(parseInt(country.numericCode), country);
                }

                function getCountryFlag(id) {
                    const code = countries.get(id)["alpha-2Code"];
                    return "/ISO/countriesImg/" + code + ".svg";
                }

                function getCountryName(id) {
                    const name = countries.get(id)["countryName"];
                    return name === "North Macedonia" ? "Macedonia" : name;
                }

                // TopCountryShares
                console.log(globals.jsonSimilarweb);
                if (globals.jsonSimilarweb.hasOwnProperty("TopCountryShares")) {
                    const tableAttrInsights = document.createElement("div");
                    tableAttrInsights.className = "table-attributes";
                    tableAttrInsights.style.marginTop = "20px";

                    const tableRowTitle = document.createElement("div");
                    tableRowTitle.className = "table-main";
                    tableRowTitle.textContent = translate("Top Countries Visits");
                    tableAttrInsights.append(tableRowTitle);

                    console.log("ahhahahah");
                    for (let t = 0; t < globals.jsonSimilarweb["TopCountryShares"].length; t++) {
                        if (globals.jsonSimilarweb["TopCountryShares"][t].hasOwnProperty("Value") && globals.jsonSimilarweb["TopCountryShares"][t].hasOwnProperty("Country")) {
                            const tableRowAtts = document.createElement("div");
                            tableRowAtts.className = "table-hor-insights";

                            const countryId = globals.jsonSimilarweb["TopCountryShares"][t]["Country"];
                            const tableRowAttsLeft = document.createElement("div");
                            tableRowAttsLeft.className = "table-hor-left";
                            const tableRowAttsLeftImg = document.createElement("div");
                            tableRowAttsLeftImg.style.width = "17px";
                            tableRowAttsLeftImg.style.height = "17px";
                            tableRowAttsLeftImg.className = "fill";

                            const actualFlag = document.createElement("img");
                            actualFlag.src = getCountryFlag(countryId);
                            actualFlag.style.height = "17px";
                            tableRowAttsLeftImg.append(actualFlag);

                            const tableRowAttsLeftText = document.createElement("div");
                            tableRowAttsLeftText.className = "table-hor-left-text";
                            tableRowAttsLeftText.textContent = getCountryName(countryId);
                            tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                            const tableRowAttsRight = document.createElement("div");
                            tableRowAttsRight.className = "table-hor-right";
                            tableRowAttsRight.textContent = (globals.jsonSimilarweb["TopCountryShares"][t]["Value"] * 100).toFixed(2) + "%";

                            tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                            console.log("wtf");
                            tableAttrInsights.append(tableRowAtts);
                        }
                    }

                    tabInformation.append(tableAttrInsights);
                }

                // Engagements
                if (globals.jsonSimilarweb.hasOwnProperty("Engagments")) {
                    const tableAttrInsights = document.createElement("div");
                    tableAttrInsights.className = "table-attributes";
                    tableAttrInsights.style.marginTop = "20px";

                    const tableRowTitle = document.createElement("div");
                    tableRowTitle.className = "table-main";
                    tableRowTitle.textContent = translate("Engagements");
                    tableAttrInsights.append(tableRowTitle);

                    // BounceRate
                    if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("BounceRate")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/bounceRate_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Bounce Rate");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (globals.jsonSimilarweb["Engagments"]["BounceRate"] * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // PagePerVisit
                    if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("PagePerVisit")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/pagesPerVisit_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Pages Per Visitor");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["Engagments"]["PagePerVisit"])).toFixed(2);

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Visits
                    if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("Visits")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/monthlyVisits_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Monthly Visits");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["Engagments"]["Visits"])).toLocaleString();

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // TimeOnSite
                    if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("TimeOnSite")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/visitDuration_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Visit Duration");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = secondsToTime(parseInt(globals.jsonSimilarweb["Engagments"]["TimeOnSite"]));

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    tabInformation.append(tableAttrInsights);
                }

                // EstimatedMonthlyVisits
                if (globals.jsonSimilarweb.hasOwnProperty("EstimatedMonthlyVisits")) {
                    const tableAttrInsights = document.createElement("div");
                    tableAttrInsights.className = "table-attributes";
                    tableAttrInsights.style.marginTop = "20px";

                    const tableRowTitle = document.createElement("div");
                    tableRowTitle.className = "table-main";
                    tableRowTitle.textContent = translate("Estimated Monthly Visits");
                    tableAttrInsights.append(tableRowTitle);

                    if (Object.keys(globals.jsonSimilarweb["EstimatedMonthlyVisits"]).length > 0) {
                        const chartCanvas = document.createElement('canvas');
                        chartCanvas.style.padding = "5px 10px";
                        tableAttrInsights.append(chartCanvas);
                        const context = chartCanvas.getContext('2d');

                        const labels = [];
                        for (const monthStr of Object.keys(globals.jsonSimilarweb["EstimatedMonthlyVisits"])) {
                            const monthParts = monthStr.split('-');
                            const date = new Date(parseInt(monthParts[0]), parseInt(monthParts[1]) - 1, parseInt(monthParts[2]));
                            labels.push(date.toLocaleString('default', {month: "long"}));
                        }

                        const myChart = new Chart(context, {
                            type: 'line',
                            data: {
                                labels: labels,
                                datasets: [{
                                    label: "Visits",
                                    data: Object.values(globals.jsonSimilarweb["EstimatedMonthlyVisits"]),
                                    borderWidth: 1,
                                    borderColor: "rgb(0, 76, 143)",
                                    backgroundColor: "rgb(0, 76, 143)"
                                }]
                            },
                            options: {
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: {
                                            font: {
                                                size: 10,
                                            },
                                            callback: function (label, index, labels) {
                                                return abbreviateNumber(label);
                                            }
                                        }
                                    },
                                    x: {
                                        ticks: {
                                            font: {
                                                size: 10,
                                            }
                                        }
                                    },
                                }
                            }
                        });
                    }

                    tabInformation.append(tableAttrInsights);
                }

                // TrafficSources
                if (globals.jsonSimilarweb.hasOwnProperty("TrafficSources")) {
                    const tableAttrInsights = document.createElement("div");
                    tableAttrInsights.className = "table-attributes";
                    tableAttrInsights.style.marginTop = "20px";

                    const tableRowTitle = document.createElement("div");
                    tableRowTitle.className = "table-main";
                    tableRowTitle.textContent = translate("Traffic Sources");
                    tableAttrInsights.append(tableRowTitle);

                    // Social
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Social")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/social_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Social");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Social"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Paid Referrals
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Paid Referrals")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/paidReferrals_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Paid Referrals");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Paid Referrals"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Mail
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Mail")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/email_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Email");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Mail"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Referrals
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Referrals")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/referral_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Referrals");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Referrals"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Search
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Search")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/search_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Search");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Search"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    // Direct
                    if (globals.jsonSimilarweb["TrafficSources"].hasOwnProperty("Direct")) {
                        const tableRowAtts = document.createElement("div");
                        tableRowAtts.className = "table-hor-insights";

                        const tableRowAttsLeft = document.createElement("div");
                        tableRowAttsLeft.className = "table-hor-left";
                        const tableRowAttsLeftImg = document.createElement("img");
                        tableRowAttsLeftImg.style.width = "17px";
                        tableRowAttsLeftImg.style.height = "17px";
                        tableRowAttsLeftImg.src = "./img/icons/direct_icon.png";
                        const tableRowAttsLeftText = document.createElement("div");
                        tableRowAttsLeftText.className = "table-hor-left-text";
                        tableRowAttsLeftText.textContent = translate("Direct");
                        tableRowAttsLeft.append(tableRowAttsLeftImg, tableRowAttsLeftText);

                        const tableRowAttsRight = document.createElement("div");
                        tableRowAttsRight.className = "table-hor-right";
                        tableRowAttsRight.textContent = (parseFloat(globals.jsonSimilarweb["TrafficSources"]["Direct"]) * 100).toFixed(2) + "%";

                        tableRowAtts.append(tableRowAttsLeft, tableRowAttsRight);

                        console.log("wtf");
                        tableAttrInsights.append(tableRowAtts);
                    }

                    tabInformation.append(tableAttrInsights);
                }

            }

            // image website via api from similarweb
            let jsonSimilarweb;
            try {
                jsonSimilarweb = await Api.similarweb(getHostname(url));
            } catch (error) {
                console.log(error);
                jsonSimilarweb = {};
            }
            console.log("json: ", jsonSimilarweb);
            if (jsonSimilarweb.hasOwnProperty("LargeScreenshot")) {
                const imgSimilarweb = document.createElement("img");
                imgSimilarweb.src = jsonSimilarweb["LargeScreenshot"];
                imgSimilarweb.style.width = "175px";
                imgSimilarweb.style.height = "80px";
                imgSimilarweb.style.display = "block";
                imgSimilarweb.style.margin = "0 auto";
                imgSimilarweb.style.borderTopLeftRadius = "5px";
                imgSimilarweb.style.borderTopRightRadius = "5px";

                format.append(urlTitle, divStars, imgSimilarweb, ratingText);
            } else {
                format.append(urlTitle, divStars, ratingText);
            }

            parent.append(backgroundWhite, format);
        }

        // if its fb and has no information
        if (globals.is_fb) {
            format.append(urlTitle, divStars, ratingText);

            parent.append(backgroundWhite, format);
        }

    }

    function normalMain(parent) {
        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            const tab = tabs[0];
            chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, dom => {
                if (typeof dom[0] !== "string" || typeof dom[1] !== "string") {
                    Api.error(translate("We can not scan the content of the page."), true);
                } else {
                    globals.domInnerHTML = dom[0];
                    globals.domInnerText = dom[1];
                    console.log("safaskl");
                    console.log(globals.domInnerHTML);
                    globals.lowerCaseDom = globals.domInnerText.toLocaleLowerCase('mk');
                    const url = new URL(tab.url);
                    globals.screenshot_url = "";
                    globals.screenshot_size = 0;
                    globals.ssl = url.protocol === "https:";
                    globals.is_fb = url.host === "www.facebook.com";
                    globals.has_company = false;
                    globals.company = null;

                    if (globals.is_fb) {
                        (async () => {
                            const data = await getData("fb_data");
                            if (data === undefined) {
                                document.location = "/login.html";
                            } else {
                                globals.fb_data = new URLSearchParams(data.toString().substring(1));
                                if (globals.fb_data.get('access_token') === null) {
                                    document.location = "/login.html";
                                }
                            }
                        })();
                    }

                    console.log("HRISTIJAN MICKOVSKI");
                    console.log(globals.is_fb);
                    console.log(globals.lowerCaseDom.includes("shop"));
                    console.log(globals.lowerCaseDom.includes("купи"));
                    console.log(globals.lowerCaseDom);
                    // fb page
                    if (globals.is_fb && !(globals.lowerCaseDom.includes("Clothing") || globals.lowerCaseDom.includes("store") || globals.lowerCaseDom.includes("колекција") || globals.lowerCaseDom.includes("цена") || globals.lowerCaseDom.includes("продажба") || globals.lowerCaseDom.includes("часовници") || globals.lowerCaseDom.includes("достава") || globals.lowerCaseDom.includes("shop") || globals.lowerCaseDom.includes("купи") || globals.lowerCaseDom.includes("продавница") || globals.lowerCaseDom.includes("понуда") || globals.lowerCaseDom.includes("ceni") || globals.lowerCaseDom.includes("cena") || globals.lowerCaseDom.includes("prodavam") || globals.lowerCaseDom.includes("Jewelry"))) {
                        Api.error(translate("We did not detect a Facebook page for sale."), true);
                        return;
                    }


                    console.log("Bojan");
                    console.log(url);

                    // check if url is home page
                    if (!globals.is_fb && url.pathname != "/" && url.pathname != "/en/home-en/" && url.pathname != "/en/" && url.pathname != "/en" && url.pathname != "/mk" && url.pathname != "/mk/" && url.pathname != "/index.php/") {
                        console.log("kiko");
                        document.location = "/nomain.html"
                        return;
                    }

                    globals.url = globals.is_fb ? (url.origin + url.pathname) : (url.origin + "/");
                    console.log("MIHAIL");
                    console.log(globals.url);


                    var body = document.body;
                    body.style.background = "rgb(245, 249, 253)";
                    body.style.backgroundSize = "20%";
                    body.style.backgroundPosition = "center";

                    let divLoading = document.createElement("div");
                    divLoading.className = "lds-ripple";
                    let divLoadingDiv1 = document.createElement("div");
                    let divLoadingDiv2 = document.createElement("div");
                    divLoading.append(divLoadingDiv1, divLoadingDiv2);

                    parent.append(divLoading);

                    Api.check(globals.url, async (rating, count) => {
                        globals.rating = rating;
                        globals.count = count;

                        if (globals.rating < 0.5 && globals.count !== 0) {
                            globals.risk = 1;
                        } else if (globals.count > 0) {
                            globals.risk = 1 - globals.rating;
                        } else {
                            globals.risk = 0.5;
                        }
                        // fb
                        if (globals.is_fb) {
                            let bullets = [];
                            globals.email = []; // 10 points
                            globals.location = []; // 10 points
                            globals.likes = null; // 25 points
                            globals.followers = null; // 25 points
                            globals.visits = null; // 5 points
                            globals.created = null; // 25 points

                            let points = 0;

                            let estimatedMonthlyVisits = [];

                            const splittedHTML = globals.domInnerHTML.split(" ");

                            // if contains in innerHTML
                            for (let i = 0; i < splittedHTML.length; i++) {
                                // location
                                if (splittedHTML[i].includes("href=\"https://www.google.com/maps/dir/?api=1&destination=")) {
                                    globals.location.push(splittedHTML[i].split("href=\"https://www.google.com/maps/dir/?api=1&destination=")[1].split("\"")[0]);

                                    if (global.location.length == 1) {
                                        points += 10;
                                    }
                                }

                                // email
                                if (splittedHTML[i].includes("href=\"mailto:")) {
                                    let el = splittedHTML[i].split("href=\"")[1].split("\"")[0].split(">")[0].split(":");
                                    el = el.length > 1 ? el[1] : el[0];
                                    console.log("Email: ", el);
                                    el = el.split(": ");
                                    globals.email.push(el.length > 1 ? el[1] : el[0]);

                                    if (globals.email.length == 1) {
                                        points += 10;
                                    }
                                }
                            }

                            console.log("MIHAOL NAJDOBAR");
                            console.log(globals.location);
                            // else in innerText
                            const splittedInnerText = globals.domInnerText.split("\n");
                            for (let j = 0; j < splittedInnerText.length; j++) {
                                console.log(splittedInnerText[j]);
                                // location
                                if (globals.location == null && (splittedInnerText[j].trim().toLowerCase().includes("скопје") && splittedInnerText[j].trim().toLowerCase().includes("македонија")) || splittedInnerText[j].trim().toLowerCase().includes("ул.") || splittedInnerText[j].trim().toLowerCase().includes("ul.") || splittedInnerText[j].trim().toLowerCase().includes("улица") || splittedInnerText[j].trim().toLowerCase().includes("ulica")) {
                                    globals.location.push(splittedInnerText[j].trim());

                                    points += 10;
                                }
                                // likes
                                if (splittedInnerText[j].toLowerCase().includes("people like this")) {
                                    globals.likes = splittedInnerText[j].toLowerCase().split(" ")[0];

                                    if (parseInt(globals.likes.replaceAll(",", "")) > 100000) {
                                        points += 25;
                                    } else if (parseInt(globals.likes.replaceAll(",", "")) > 50000) {
                                        points += 20;
                                    } else if (parseInt(globals.likes.replaceAll(",", "")) > 10000) {
                                        points += 15;
                                    } else if (parseInt(globals.likes.replaceAll(",", "")) > 5000) {
                                        points += 10;
                                    } else if (parseInt(globals.likes.replaceAll(",", "")) > 1000) {
                                        points += 5;
                                    }
                                }

                                // followers
                                if (splittedInnerText[j].toLowerCase().includes("people follow this")) {
                                    globals.followers = splittedInnerText[j].toLowerCase().split(" ")[0];

                                    if (parseInt(globals.followers.replaceAll(",", "")) > 100000) {
                                        points += 25;
                                    } else if (parseInt(globals.followers.replaceAll(",", "")) > 50000) {
                                        points += 20;
                                    } else if (parseInt(globals.followers.replaceAll(",", "")) > 10000) {
                                        points += 15;
                                    } else if (parseInt(globals.followers.replaceAll(",", "")) > 5000) {
                                        points += 10;
                                    } else if (parseInt(globals.followers.replaceAll(",", "")) > 1000) {
                                        points += 5;
                                    }
                                }

                                // visits
                                if (splittedInnerText[j].toLowerCase().includes("people checked in here")) {
                                    globals.visits = splittedInnerText[j].toLowerCase().split(" ")[0];

                                    if (parseInt(globals.visits) > 100) {
                                        points += 5;
                                    } else if (parseInt(globals.visits) > 80) {
                                        points += 4;
                                    } else if (parseInt(globals.visits) > 60) {
                                        points += 3;
                                    } else if (parseInt(globals.visits) > 40) {
                                        points += 2;
                                    } else if (parseInt(globals.visits) > 20) {
                                        points += 1;
                                    }
                                }

                                // created
                                if (splittedInnerText[j].toLowerCase().includes("page created - ")) {
                                    globals.created = splittedInnerText[j].toLowerCase().split(" - ")[1];

                                    let tempMonth = globals.created.split(" ")[0].toLowerCase();
                                    if (tempMonth == "january") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".01." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "february") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".02." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "march") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".03." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "april") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".04." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "may") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".05." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "june") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".06." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "july") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".07." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "august") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".08." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "september") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".09." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "october") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".10." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "november") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".11." + globals.created.split(" ")[2];
                                    } else if (tempMonth == "december") {
                                        globals.created = globals.created.split(" ")[1].replaceAll(",", "") + ".12." + globals.created.split(" ")[2];
                                    }

                                    if (globals.created.includes("2021")) {
                                        points += 10;
                                    } else if (globals.created.includes("2020")) {
                                        points += 15;
                                    } else if (globals.created.includes("2019")) {
                                        points += 20;
                                    } else {
                                        points += 25;
                                    }
                                }
                            }

                            // secure final result
                            if (points >= 100) {
                                globals.risk = 1;
                            } else {
                                globals.risk = points / 100;
                            }

                            console.log("Points - ", globals.risk);
                        }
                        // website risk
                        else {
                            let bullets = [];
                            globals.fb_profile = null; // 4 points
                            globals.ig_profile = null; // 4 points
                            globals.tw_profile = null; // 4 points
                            globals.ln_profile = null; // 4 points
                            globals.yt_profile = null; // 4 points
                            globals.phoneNumbers = []; // 5 points
                            globals.phoneNumbersNames = [];
                            let hasPhoneHTML = false;
                            globals.email = []; // 5 points
                            globals.location = []; // 5 points
                            globals.company = false; // 45 points
                            globals.companyName = null;

                            // similarweb
                            globals.topCountryShares = [];

                            globals.bounceRate = null; // 5 points
                            globals.month = null;
                            globals.year = null;
                            globals.pagePerVisit = null; // 5 points
                            globals.visits = null; // 5 points
                            globals.timeOnSite = null; // 5 points

                            globals.estimatedMonthlyVisits = [];

                            globals.globalRank = null;
                            globals.countryRankName = null;
                            globals.countryRank = null;

                            globals.trafficSourcesSocial = null;
                            globals.trafficSourcesPaidReferrals = null;
                            globals.trafficSourcesMail = null;
                            globals.trafficSourcesReferrals = null;
                            globals.trafficSourcesSearch = null;
                            globals.trafficSourcesDirect = null;

                            const website_name = url["host"].replaceAll("www.", "").replaceAll(".com", "").replaceAll(".mk", "");

                            // check if get data from api (similarweb)
                            console.log(getHostname(url));
                            globals.jsonSimilarweb = {};
                            try {
                                globals.jsonSimilarweb = await Api.similarweb(getHostname(url));
                                console.log("hhihihihii");
                                console.log(globals.jsonSimilarweb);
                            } catch (error) {
                                console.log("ERROR ", error);
                                globals.jsonSimilarweb = {};
                            }

                            // points
                            let points = 0;

                            // verified
                            await fetch("./companies/verified.txt")
                                .then(response => response.text())
                                .then(async data => {
                                    let companiesNames = data.split("\n");

                                    // web
                                    for (let t = 0; t < companiesNames.length; t++) {
                                        if (companiesNames[t].includes(website_name)) {
                                            globals.company = true;
                                            globals.companyName = companiesNames[t + 1];
                                            points += 100;

                                            break;
                                        }
                                    }
                                });

                            // TopCountryShares
                            if (globals.jsonSimilarweb.hasOwnProperty("TopCountryShares")) {
                                // topCountryShares
                                for (let y = 0; y < globals.jsonSimilarweb["TopCountryShares"].length; y++) {
                                    globals.jsonSimilarweb[""]
                                }
                            }

                            // Engagments
                            if (globals.jsonSimilarweb.hasOwnProperty("Engagments")) {
                                // bounceRate
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("BounceRate")) {
                                    globals.bounceRate = globals.jsonSimilarweb["Engagments"]["BounceRate"];

                                    if (parseFloat(globals.bounceRate) > 0.5) {
                                        points += 5;
                                    } else if (parseFloat(globals.bounceRate) > 0.4) {
                                        points += 4;
                                    } else if (parseFloat(globals.bounceRate) > 0.3) {
                                        points += 3;
                                    } else if (parseFloat(globals.bounceRate) > 0.2) {
                                        points += 2;
                                    } else if (parseFloat(globals.bounceRate) > 0.1) {
                                        points += 1;
                                    }
                                }
                                // month
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("Month")) {
                                    globals.month = globals.jsonSimilarweb["Engagments"]["Month"];
                                }
                                // year
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("Year")) {
                                    globals.year = globals.jsonSimilarweb["Engagments"]["Year"];
                                }
                                // pagePerVisit
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("pagePerVisit")) {
                                    globals.pagePerVisit = globals.jsonSimilarweb["Engagments"]["pagePerVisit"];

                                    if (parseInt(globals.pagePerVisit) > 10) {
                                        points += 5;
                                    } else if (parseInt(globals.pagePerVisit) > 8) {
                                        points += 4;
                                    } else if (parseInt(globals.pagePerVisit) > 6) {
                                        points += 3;
                                    } else if (parseInt(globals.pagePerVisit) > 4) {
                                        points += 2;
                                    } else if (parseInt(globals.pagePerVisit) > 2) {
                                        points += 1;
                                    }
                                }
                                // Visits
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("Visits")) {
                                    globals.visits = globals.jsonSimilarweb["Engagments"]["Visits"];

                                    if (parseInt(globals.visits) > 250000) {
                                        points += 5;
                                    } else if (parseInt(globals.visits) > 150000) {
                                        points += 4;
                                    } else if (parseInt(globals.visits) > 50000) {
                                        points += 3;
                                    } else if (parseInt(globals.visits) > 10000) {
                                        points += 2;
                                    } else if (parseInt(globals.visits) > 5000) {
                                        points += 1;
                                    }
                                }
                                // TimeOnSite
                                if (globals.jsonSimilarweb["Engagments"].hasOwnProperty("TimeOnSite")) {
                                    globals.timeOnSite = globals.jsonSimilarweb["Engagments"]["TimeOnSite"];

                                    if (parseInt(globals.timeOnSite) > 250) {
                                        points += 5;
                                    } else if (parseInt(globals.timeOnSite)) {
                                        points += 4;
                                    } else if (parseInt(globals.timeOnSite)) {
                                        points += 3;
                                    } else if (parseInt(globals.timeOnSite)) {
                                        points += 2;
                                    } else if (parseInt(globals.timeOnSite)) {
                                        points += 1;
                                    }
                                }
                            }

                            // EstimatedMonthlyVisits
                            if (globals.jsonSimilarweb.hasOwnProperty("EstimatedMonthlyVisits")) {
                                for (let j of Object.keys(globals.jsonSimilarweb["EstimatedMonthlyVisits"])) {
                                    globals.estimatedMonthlyVisits.push(globals.jsonSimilarweb["EstimatedMonthlyVisits"][j]);
                                }
                            }

                            const splittedHTML = globals.domInnerHTML.split("<");
                            console.log(splittedHTML);

                            // if contains in innerHTML
                            for (let i = 0; i < splittedHTML.length; i++) {
                                // fb_profile
                                if (globals.fb_profile == null && (splittedHTML[i].includes("href=\"https://www.facebook.com/") || splittedHTML[i].includes("href=\"http://www.facebook.com/") || splittedHTML[i].includes("href=\"https://facebook.com/") || splittedHTML[i].includes("href=\"http://www.facebook.com/"))) {
                                    console.log("AHAHAHAHAHA: ", splittedHTML[i].split("href=\"")[1].split("\"")[0]);
                                    globals.fb_profile = splittedHTML[i].split("href=\"")[1].split("\"")[0];

                                    points += 4;
                                }
                                // ig_profile
                                if (globals.ig_profile == null && (splittedHTML[i].includes("href=\"https://www.instagram.com/") || splittedHTML[i].includes("href=\"http://www.instagram.com/") || splittedHTML[i].includes("href=\"https://instagram.com/") || splittedHTML[i].includes("href=\"http://instagram.com/"))) {
                                    globals.ig_profile = splittedHTML[i].split("href=\"")[1].split("\"")[0];

                                    points += 4;
                                }
                                // tw_profile
                                if (globals.tw_profile == null && (splittedHTML[i].includes("href=\"https://www.twitter.com/") || splittedHTML[i].includes("href=\"http://www.twitter.com/") || splittedHTML[i].includes("href=\"https://twitter.com/") || splittedHTML[i].includes("href=\"http://twitter.com/"))) {
                                    globals.tw_profile = splittedHTML[i].split("href=\"")[1].split("\"")[0];

                                    points += 4;
                                }
                                // ln_profile
                                if (globals.ln_profile == null && (splittedHTML[i].includes("href=\"https://www.linkedin.com/") || splittedHTML[i].includes("href=\"http://www.linkedin.com/") || splittedHTML[i].includes("href=\"https://linkedin.com/") || splittedHTML[i].includes("href=\"http://linkedin.com/"))) {
                                    globals.ln_profile = splittedHTML[i].split("href=\"")[1].split("\"")[0];

                                    points += 4;
                                }
                                // yt_profile
                                if (globals.yt_profile == null && (splittedHTML[i].includes("href=\"https://www.youtube.com/user/") || splittedHTML[i].includes("href=\"http://www.youtube.com/user/") || splittedHTML[i].includes("href=\"https://youtube.com/user/") || splittedHTML[i].includes("href=\"http://youtube.com/user/"))) {
                                    console.log("Youttube: ", splittedHTML[i]);
                                    globals.yt_profile = splittedHTML[i].split("href=\"")[1].split("\"")[0];

                                    points += 4;
                                }
                                // phoneNumbers
                                if (splittedHTML[i].includes("href=\"tel:") && (splittedHTML[i].split("href=\"tel:")[1].startsWith("07") || splittedHTML[i].split("href=\"tel:")[1].startsWith("02"))) {
                                    console.log("KIKO");
                                    console.log("Phone: ", splittedHTML[i]);
                                    globals.phoneNumbersNames.push(splittedHTML[i].split("href=\"tel:")[1].split("\"")[0]);
                                    globals.phoneNumbers.push(splittedHTML[i].split("href=\"")[1].split("\"")[0]);

                                    hasPhoneHTML = true;

                                    if (globals.phoneNumbersNames.length == 1) {
                                        points += 5;
                                    }
                                }
                                // email
                                if (splittedHTML[i].includes("href=\"mailto:")) {
                                    let el = splittedHTML[i].split("href=\"mailto:")[1].split("\"")[0].split(">")[0].split(":");
                                    console.log("Email1: ", el);
                                    el = el.length > 1 ? el[1] : el[0]; // el.length > 1
                                    console.log("Email: ", el);
                                    el = el.split(": ");
                                    globals.email.push(el.length > 1 ? el[1] : el[0]);

                                    if (globals.email.length == 1) {
                                        points += 5;
                                    }
                                }
                                // location
                                if (splittedHTML[i].includes("href=\"https://goo.gl/maps/")) {
                                    globals.location.push(splittedHTML[i].split("href=\"https://goo.gl/maps/")[1].split('\"')[0]);

                                    if (globals.location.length == 1) {
                                        console.log("Location: ", globals.location);
                                        points += 5;
                                    }
                                }
                            }
                            // else in innerText
                            const splittedInnerText = globals.domInnerText.split("\n");
                            for (let j = 0; j < splittedInnerText.length; j++) {
                                // fb_profile
                                if (globals.fb_profile == null && (splittedInnerText[j].toLowerCase().includes("fb") || splittedInnerText[j].toLowerCase().includes("facebook"))) {
                                    points += 4;
                                }
                                // ig_profile
                                if (globals.ig_profile == null && (splittedInnerText[j].toLowerCase().includes("ig") || splittedInnerText[j].toLowerCase().includes("instagram"))) {
                                    points += 4;
                                }
                                // tw_profile
                                if (globals.tw_profile == null && (splittedInnerText[j].toLowerCase().includes("tw") || splittedInnerText[j].toLowerCase().includes("twitter"))) {
                                    points += 4;
                                }
                                // ln_profile
                                if (globals.ln_profile == null && (splittedInnerText[j].toLowerCase().includes("ln") || splittedInnerText[j].toLowerCase().includes("linkedin"))) {
                                    points += 4;
                                }
                                // yt_profile
                                if (globals.yt_profile == null && (splittedInnerText[j].toLowerCase().includes("yt") || splittedInnerText[j].toLowerCase().includes("youtube"))) {
                                    points += 4;
                                }
                                // phoneNumbers
                                if (hasPhoneHTML == false && (splittedInnerText[j].trim().startsWith("+389") || splittedInnerText[j].trim().startsWith("071") || splittedInnerText[j].trim().startsWith("072") || splittedInnerText[j].trim().startsWith("073") || splittedInnerText[j].trim().startsWith("074") || splittedInnerText[j].trim().startsWith("075") || splittedInnerText[j].trim().startsWith("076") || splittedInnerText[j].trim().startsWith("077") || splittedInnerText[j].trim().startsWith("078") || splittedInnerText[j].trim().startsWith("079")) && splittedInnerText[j][splittedInnerText[j].length - 1] >= '0' && splittedInnerText[j][splittedInnerText[j].length - 1] <= '9') {
                                    console.log("MIKI");
                                    globals.phoneNumbersNames.push(splittedInnerText[j].trim());
                                    globals.phoneNumbers.push(null);

                                    points += 5;
                                }
                                // email
                                if (splittedInnerText[j].trim().includes("@") && (splittedInnerText[j].trim().endsWith(".mk") || splittedInnerText[j].trim().endsWith(".com"))) {
                                    let el = splittedInnerText[j].trim().split(":");
                                    console.log("Email1: ", el);
                                    el = el.length > 1 ? el[1] : el[0]; // el.length > 1
                                    console.log("Email: ", el);
                                    el = el.split(": ");
                                    el = el.length > 1 ? el[1] : el[0];

                                    function validateEmail(email) {
                                        var re = /\S+@\S+\.\S+/;
                                        return re.test(email);
                                    }

                                    console.log("Bojan: ", el);
                                    if (validateEmail(el)) {
                                        globals.email.push(el);

                                        if (globals.email.length == 1) {
                                            points += 5;
                                        }
                                    }
                                }
                                // location
                                if (globals.location == null && (splittedInnerText[j].trim().toLowerCase().includes("скопје") && splittedInnerText[j].trim().toLowerCase().includes("македонија")) || splittedInnerText[j].trim().toLowerCase().includes("ул.") || splittedInnerText[j].trim().toLowerCase().includes("ul.") || splittedInnerText[j].trim().toLowerCase().includes("улица") || splittedInnerText[j].trim().toLowerCase().includes("ulica")) {
                                    globals.location.push(splittedInnerText[j].trim());
                                }
                                // company
                                if (globals.company == false && splittedInnerText[j].includes("ДООЕЛ") || splittedInnerText[j].includes("ДОО")) {
                                    globals.company = true;

                                    points += 45;
                                }
                            }

                            // secure final result
                            if (points >= 100) {
                                globals.risk = 1;
                            } else {
                                globals.risk = points / 100;
                            }

                            console.log("Points - ", globals.risk);
                        }
                        parent.innerHTML = "";
                        await finishedLoading(parent, url);
                    });
                }
            });
        });

    }

    const popupError = document.querySelector('#popup-error');
    let script_dead = false;
    popupError.addEventListener('click', () => {
        if (!script_dead) {
            popupError.style.display = "none";
        }
    });
    Api.error = (message, dead) => {
        popupError.innerHTML =
            "<div id='error-body'>" +
            "<h1 style='font-size: 23px;'>" + translate("Error") + "</h1>" +
            "<p style='font-size: 15px;'>" + message + "</p>" +
            (dead === undefined ? "<p style='font-size: 13px'><i>" + translate("Click to hide this.") + "</i></p>" : "") +
            "</div>";
        popupError.style.display = "block";
        if (dead !== undefined) {
            script_dead = true;
        }
    };

    normalMain(popup);
})();