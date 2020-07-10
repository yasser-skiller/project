import styled from 'styled-components';

export const Btncontainer =styled.button`
 text-transform : capitalize;
 font-size : 1.4rem;
 background : ${props=> props.top ? "var(--mainYellow)" : "var(--mainBlue)"};
 border : 0.05rem solid var(--mainBlue);
 border-color : ${props=> props.top ? "var(--mainYellow)" : "var(--mainBlue)"};
 color : var(--textwhite );
 border-radius : 0.5rem;
 cursor : pointer;
 padding : 0.2rem 0.5rem;
 margin : 0.2rem 0.5rem 0.2rem 0;
 transition : all 0.5s ease-in-out;
 &:hover{
    background :  var(--textwhite );
    color : ${props=> props.top ? "var(--mainYellow)" : "var(--mainBlue)"};
}
 &:focus{
  outline: none;
 }
`;
