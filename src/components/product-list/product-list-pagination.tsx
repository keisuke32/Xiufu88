import React from 'react';
import {themeGet} from '@styled-system/theme-get';
import styled from "styled-components";
import {ChevronLeft, ChevronRight} from "../../assets/icons/ChevronUp";

interface Props {
    totalPages?: number;
    active?: number;
}

export const ProductListPagination = (
    {
        totalPages,
        active = 1,
    }: Props) => {

    if(totalPages <= 1)
        return (<></>)

    return (
        <Pagination>
            <button className="button"><ChevronLeft/>上一页</button>
            {
                totalPages >= 5 ?
                    ([...Array(5)].map((_, i) => {
                        return (
                            <button className="button number {active == i+1 && 'active'}">{i + 1}</button>
                        )
                    })
                    ) :
                    ([...Array(totalPages)].map((_, i) => {
                        return (
                            <button className="button number">{i + 1}</button>
                        )
                    }))
            }
            {
                totalPages > 5 && (
                    <span>...</span>
                )
            }
            {/*{*/}
            {/*    totalPages>5 && <button className="button number">...</button>*/}
            {/*}*/}
            <button className="button">下一页<ChevronRight/></button>
            共{totalPages}页，到第&nbsp;
            <input type="number" min="1" max={totalPages}/>
            页
            <button className="goTo">确定</button>
        </Pagination>
    )
};

const Pagination = styled.div`
    color: ${themeGet("colors.gray.900")};
    text-align: center;
    .button {
        width: fit-content;
        padding: 10px 10px;
        border: 1px solid ${themeGet("colors.gray.900")};
        color: ${themeGet("colors.gray.900")};
        height: 40px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .number {
        width: 40px;
        height: 40px;
        margin: 0;
        color: ${themeGet("colors.black")};
    }
    span {
        margin-left: 20px;
    }
    .goTo {
        margin-left: 10px;
        width: fit-content;
        padding: 5px;
        border: 1px solid ${themeGet("colors.gray.900")};
    }
    input {
        width: 40px;
    }
`;
