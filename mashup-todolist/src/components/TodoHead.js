
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 30px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 22px;
  border-bottom: 2px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 20px;
    color: #343a40;
  }
  .day {
    margin-top: 6px;
    color: #868e96;
    font-size: 15px;
    font-weight: bold;
  }
  .tasks-left {
    margin-top: 25px;
    font-size: 12px;
    color: #2ECCFA;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  // 현재 날짜 생성 
  const today = new Date(); 
  // 날짜를 원하는 형식으로 변환
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  // 요일 가져오기 
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const dayName = dayNames[today.getDay()]; 



  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;


