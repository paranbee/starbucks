const searchE1 = document.querySelector('.search')
const searchInputE1 = searchE1.querySelector('input')

searchE1.addEventListener('click', () => {
  searchInputE1.focus();
})

// 포커스 될 때 
searchInputE1.addEventListener('focus', () => {
  searchE1.classList.add('focused'); // 클래스 내용 추가 -> .search.focused
  searchInputE1.setAttribute('placeholder', '통합검색'); // html 속성 지정 
})

// 블러 될 때 
searchInputE1.addEventListener('blur', () => {
  searchE1.classList.remove('focused'); // 클래스 내용 추가 
  searchInputE1.setAttribute('placeholder', ''); // html 속성 지정 
})