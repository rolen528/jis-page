// 애니메이션 초기화
AOS.init({ once: true, offset: 50 });

// 모바일 메뉴 토글
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});