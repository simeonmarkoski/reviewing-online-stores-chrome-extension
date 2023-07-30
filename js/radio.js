const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

console.log(st.flap);
console.log(st.toggle);

if (st.flap) {
    console.log("found");
    st.flap.addEventListener('transitionend', () => {
        console.log("check");
        if (st.choice1.checked) {
            st.toggle.style.transform = 'rotateY(-15deg)';
            setTimeout(() => st.toggle.style.transform = '', 400);
        } else {
            st.toggle.style.transform = 'rotateY(15deg)';
            setTimeout(() => st.toggle.style.transform = '', 400);
        }

    })
}

console.log("kkk");

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            if (st.flap) {
                st.flap.children[0].textContent = e.target.textContent;
            }
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (st.flap) {
        st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
    }

});

document.addEventListener('click', (e) => st.clickHandler(e));