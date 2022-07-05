const storage = {
  fetch() {
    const arr = [];
    // 로컬 스토리지의 아이템 목록 뿌리기
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (
          localStorage.key(i) !== 'loglevel:webpack-dev-server' &&
          localStorage.key(i) !== 'csCursors' &&
          localStorage.key(i) !== 'csPointers' &&
          localStorage.key(i) !== 'userName'
        ) {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
  fetchName() {
    // 로컬 스토리지의 사용자 이름 가져오기
    if (localStorage.getItem('userName')) {
      const userName = localStorage.getItem('userName');
      return userName;
    }
  },
};

export default storage;
