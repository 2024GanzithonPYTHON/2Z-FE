import { create } from 'zustand';

// 상태를 관리하는 Zustand store
const useUserStore = create((set) => ({
  userId: localStorage.getItem('userId') || null,  // localStorage에서 userId 값을 가져옵니다 (초기값으로 설정)
  setUserId: (id) => {
    localStorage.setItem('userId', id);  // userId를 localStorage에 저장
    set({ userId: id });  // 상태 업데이트
  },
  clearUserId: () => {
    localStorage.removeItem('userId');  // localStorage에서 userId 제거
    set({ userId: null });  // 상태 초기화
  }
}));

export default useUserStore;
