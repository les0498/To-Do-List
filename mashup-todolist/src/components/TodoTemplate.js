import React from 'react';
import styled from 'styled-components';
import starImage from '../img/star.jpg'; 


const TodoTemplateBlock = styled.div`
  background-image: url(${starImage}); 
  background-size: cover;
  width: 300px;
  height: 600px;

  position: relative;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);

  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  
`;

function TodoTemplate({children})  {
  return <TodoTemplateBlock>
            {children}
          </TodoTemplateBlock>
}

export default TodoTemplate;