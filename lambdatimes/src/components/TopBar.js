import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarCont>
        <TopBarContL>
          <TopBarContLSpan>TOPICS</TopBarContLSpan><TopBarContLSpan>SEARCH</TopBarContLSpan>
        </TopBarContL>
        <TopBarContC>
          <TopBarContCSpan>GENERAL</TopBarContCSpan><TopBarContCSpan>BROWNBAG</TopBarContCSpan><TopBarContCSpan>RANDOM</TopBarContCSpan><TopBarContCSpan>MUSIC</TopBarContCSpan><TopBarContCSpan>ANNOUNCEMENTS</TopBarContCSpan>
        </TopBarContC>
        <TopBarContR>
          <TopBarContRSpan>LOG IN</TopBarContRSpan>
        </TopBarContR>
      </TopBarCont>
    </TopBarDiv>
  )
}
const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const TopBarCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const TopBarContL = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const TopBarContLSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const TopBarContC = styled(TopBarContL)`
  justify-content: center;
  flex: 3;
  font-size: 9px;
`;
const TopBarContCSpan = styled(TopBarContLSpan)`
  margin-right: 5%;
  font-weight: inherit;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const TopBarContR = styled(TopBarContL)`
  font-weight: bold;
  justify-content: flex-end;
`;
const TopBarContRSpan = styled.span`
  cursor: pointer;
`;


export default TopBar;