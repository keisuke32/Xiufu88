import React from 'react';
import { FormattedMessage } from "react-intl";
import Link from "next/link";
import Image from "components/image/image";
import WechatIcon from "assets/images/wechat.png";
import WeiboIcon from "assets/images/weibo.png";
import TencentQQIcon from "assets/images/tencentQQ.png";

import { FollowBox, FollowItem } from "./bottombar.style";

const Follow: React.FC<{}> = () => {
    return (
        <FollowBox>
            <span>
                <FormattedMessage id="nav.follow" defaultMessage="Follow Us"/>
            </span>
            <FollowItem>
                <Link href="/">
                    <a href="/">
                        <Image
                            url={ WechatIcon }
                            className="wechat-icon"
                        />
                    </a>
                </Link>
            </FollowItem>
            <FollowItem>
                <Link href="/">
                    <a href="/">
                        <Image
                            url={ WeiboIcon }
                            className="weibo-icon"
                        />
                    </a>
                </Link>
            </FollowItem>
            <FollowItem>
                <Link href="/">
                    <a href="/">
                        <Image
                            url={ TencentQQIcon }
                            className="tencentqq-icon"
                        />
                    </a>
                </Link>
            </FollowItem>
        </FollowBox>
    );
}

export default Follow;