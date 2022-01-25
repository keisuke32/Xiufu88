import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SelectRegionWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 20vh;
    height: 80vh;
    background-color: ${themeGet('colors.white')};
    padding: 10px;
    .region_header {
        width: 100%;
        text-align: center;
        font-size: ${themeGet('fontSizes.xs', '12')}px;
    }
    .selected_region {
        padding-bottom: 20px;
        border-bottom: 1px solid ${themeGet('colors.gray.800', '#BDBDBD')};
        .region {
            display: flex;
            .region_icon {
                width: 10%;
                padding-bottom: 20px;
                div {
                    margin-top: 10px;
                    margin-left: 10px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    border: 1px solid ${themeGet('colors.primary.regular', '#F00000')};
                }
                div.selected {
                    margin-top: 10px;
                    margin-left: 10px;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: ${themeGet('colors.primary.regular', '#F00000')};
                }
            }
            .region_name {
                width: 80%;
            }
            .region_operation {
                width: 10%;
                text-align: right;
            }
        }
    }
    .region_selection {
        .selection_menu {
            padding-top: 20px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            .selected {
                color: ${themeGet('colors.primary.regular', '#F00000')};
                padding-bottom: 10px;
                border-bottom: 1px solid ${themeGet('colors.primary.regular', '#F00000')};
            }
        }
        .region_div {
            color: ${themeGet('colors.gray.900', '#828282')};
            .popular_cities {
                padding-top: 20px;
                .popular_title {
                    padding-bottom: 10px;
                    font-size: ${themeGet('fontSizes.xs', '12')}px;
                }
                .cities_content {
                    display: flex;
                    justify-content: space-around;
                    font-size: ${themeGet('fontSizes.base', '14')}px;
                }
            }
            .all_region {
                padding-top: 20px;
                .all_region_title {
                    font-size: ${themeGet('fontSizes.xs', '12')}px;
                }
                .all_region_content {
                    font-size: ${themeGet('fontSizes.base', '14')}px;
                    padding-top: 10px;
                    .region_content {
                        padding-top: 10px;
                        display: flex;
                        .region_alphabet {
                            width: 10%;
                        }
                        .region_name {
                            width: 90%;
                        }
                    }
                    .region_content.selected {
                        color: ${themeGet('colors.primary.regular', '#F00000')};
                        .region_name {
                            width: 80%;
                        }
                        .region_operation {
                            width: 10%;
                            text-align: right;
                        }
                    }
                }
            }
        }
    }
`;