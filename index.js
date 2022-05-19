const musicID = 115162;

window.onload = () => {
  const dom = document.getElementById('app');
  const neteaseDOM = document.createElement('iframe');
  neteaseDOM.setAttribute('frameborder', 'no');
  neteaseDOM.setAttribute('border', '0');
  neteaseDOM.setAttribute('marginwidth', '0');
  neteaseDOM.setAttribute('marginheight', '0');
  neteaseDOM.setAttribute('width', '330');
  neteaseDOM.setAttribute('height', '86');
  neteaseDOM.setAttribute('src', `https://music.163.com/outchain/player?type=2&id=${musicID}&auto=0&height=66`);
  neteaseDOM.style.position = "absolute";
  neteaseDOM.style.bottom = "0";
  neteaseDOM.style.right = "1rem";
  dom.appendChild(neteaseDOM);
}