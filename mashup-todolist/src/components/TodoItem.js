import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from 'react-icons/md'; 

const Remove = styled.div` 
  display: flex; 
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #dee2e6;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`; 

const TodoItemBlock = styled.div` // 개별 할 일 항목 
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  &:hover{
    ${Remove} {
      display: initial;
    }
  }

`; 

const CheckCircle = styled.div` // 할일 완료 여부 표시
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 3px solid #ced4da;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  ${props =>
    props.done &&
    css `
      border: 3px solid #38d9a9;
      color: #38d9a9;
    `}
`; 

const Text = styled.div `  // 할일 텍스트 표시
    flex: 1;
    font-size: 14px;
    color: #495057;
    ${props =>
      props.done &&
      css `
        color: #ced4da;
      `}
`; 

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}


export default TodoItem;
