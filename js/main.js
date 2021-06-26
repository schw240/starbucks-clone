const searchEl = document.querySelector('.search');
// 찾아논 searchEl안에서 input요소 찾기 결국 searchEl도 html객체
const searchInputEl = searchEl.querySelector('input')

// .search 요소를 클릭하면 그 안의 input요소를 focus하기
searchEl.addEventListener('click', function () {
    //Logic
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    // focus되면 focused라는 클래스 추가
    searchEl.classList.add('focused');
    // setAttribute는 HTML속성을 지정하기
    // placeholder는 input요소에 넣을 힌트같은것 작성하는것
    searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused')
    searchInputEl.setAttribute('placeholder', '')
})


// 일정값 이상 내려 갈 경우 뱃지 없애기
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap을 사용해 애니메이션 처리하기
        // gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            // display를 none으로 해주어야지 opacity만 0으로 할 경우
            // 투명해지기만 할 뿐 존재는 함 따라서 아래 속성 필요
            display: 'none'
        })
    } else {
        // 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300))
// _.throttle(함수, 시간) 시간만큼 부하주기 그냥 실행하면 함수가 너무 많이 실행되므로