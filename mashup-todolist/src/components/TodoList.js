import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;

`;

function TodoList() {
  return (
  <TodoListBlock>
    <TodoItem text="코테 문제 풀기" done={true} />
    <TodoItem text="TodoList main기능 구현하기" done={true} />
    <TodoItem text="카공하기" done={false} />
    <TodoItem text="헬스장 가기" done={false} />
  </TodoListBlock>
  
  );
}

export default TodoList;