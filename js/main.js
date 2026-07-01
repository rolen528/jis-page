// 애니메이션 초기화
AOS.init({ once: true, offset: 50 });

// 모바일 메뉴 토글
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// --- 이미지 확대(모달) 기능 ---
// --- 이미지 확대(모달) 및 텍스트 표시 기능 ---
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text'); // 글자가 들어갈 공간
const closeModalBtn = document.getElementById('modal-close');

// 갤러리 섹션의 모든 이미지 박스 선택
const galleryItems = document.querySelectorAll('#gallery .group');

// 각 이미지 박스에 클릭 이벤트 추가
galleryItems.forEach(item => {
item.addEventListener('click', () => {
const img = item.querySelector('img');
const span = item.querySelector('span'); // 이미지 위에 뜨던 글자 요소 찾기

if(img) {
    modalImg.src = img.src; // 사진 경로 전달
    // 글자가 있으면 넣고, 없으면 비워둠
    modalText.textContent = span ? span.textContent : ''; 
    
    modal.classList.remove('hidden'); // 모달 뼈대 보이기
    
    // 약간의 시차를 두어 부드러운 애니메이션 실행
    setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalImg.classList.remove('scale-95');
    modalImg.classList.add('scale-100');
    modalText.classList.remove('opacity-0'); // 글자도 부드럽게 나타남
    }, 10);
}
});
});

// 모달 닫기 함수
const closeImageModal = () => {
modal.classList.add('opacity-0'); // 전체 페이드 아웃
modalImg.classList.remove('scale-100');
modalImg.classList.add('scale-95'); // 사진 살짝 작아짐
modalText.classList.add('opacity-0'); // 글자 숨김

// 애니메이션이 끝난 후 완전히 숨김 및 데이터 초기화 (0.3초 후)
setTimeout(() => {
modal.classList.add('hidden');
modalImg.src = '';
modalText.textContent = '';
}, 300);
};

// 닫기 버튼 클릭 시 닫음
closeModalBtn.addEventListener('click', closeImageModal);

// 이미지 바깥의 어두운 배경 클릭 시 닫음 (사진이나 글자를 클릭했을 땐 안 닫히게 예외 처리)
modal.addEventListener('click', (e) => {
if (e.target === modal || e.target.classList.contains('modal-content-area')) {
closeImageModal();
}
});