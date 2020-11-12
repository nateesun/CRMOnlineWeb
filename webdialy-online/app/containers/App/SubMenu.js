import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as path from './constants';

const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 10px;
    color: black;
    border-radius: 10px;
    height: 50px;
    font-weight: bold;
    padding: 10px;
`;

const SubMenu = props => {
    if(props.profile.member_role !== 'member'){
        return <span></span>
    }
    return (
        <div>
            {props.leftMenu && props.leftMenu.map(item => {
                return <StyledLink key={item.id} to={`${path.publicPath}${item.to_path}`}>{item.id}</StyledLink>
            })}
        </div>
    )
}

export default SubMenu;
