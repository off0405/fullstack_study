import './App.css';
import { useState } from "react";
import PostDetail from './components/PostDetail';
import PostListItem from './components/PostListItem';

// POST앱 CRUD 만들기
// C: Create(등록)
// R: Read(목록, 상세보기)
// U: Update(수정)
// D: Delete(삭제)

function App() {



  return (
    <>
      <PostListItem/>
    </>
  );
}

export default App;

