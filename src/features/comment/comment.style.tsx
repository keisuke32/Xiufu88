const CommentsWrapper = styled.div`
  margin-top: 50px;
  .wrapper {
        border: 1px solid ${themeGet('colors.gray.900')};
        .comments-header {
            display: flex;
            justify-content: space-between;
            background-color: ${themeGet('colors.checkout.gray1')};
            height: 50px;
            border-bottom: 1px solid red;
            label {
                background-color: red;
                height: 100%;
                padding: 15px 30px;
                color: ${themeGet('colors.white')};
            }
            .order-info {
                padding: 15px 30px;
                span {
                    padding-right: 50px;
                }
            }
      }
      .comments-content {
            padding: 30px;
            display: flex;
            .comments-content-image {
                img {
                    width: 200px;
                    height: 200px;
                }
                div {
                    width: 200px;
                    padding-top: 20px;
                }
            }
            .comments-content-main {
                padding-left: 50px;
                padding-top: 10px;
                width: 100%;
                .header {
                    height: 30px;
                }
                .content {
                    textarea {
                        height: 160px;
                        width: 100%;
                    }
                    div {
                        padding-top: 20px;
                        button {
                            margin-right: 20px;
                            border-radius: 3px;
                            color: ${themeGet('colors.white')};
                            border: 1px solid ${themeGet('colors.checkout.button.border')};
                            background-color: ${themeGet('colors.checkout.button.photo')};
                        }
                    }
                }
            }
      }
  }
  .post-comment {
        text-align: center;
        padding-top: 50px;
        button.post-comment-btn{
            padding: 10px 30px;
            background-color: ${themeGet('colors.blue.regular')};
            border: 0;
            border-radius: 3px;
            color: ${themeGet('colors.white')};
        }
  }
`;
import styled from 'styled-components';

import { themeGet } from '@styled-system/theme-get';

export default CommentsWrapper;