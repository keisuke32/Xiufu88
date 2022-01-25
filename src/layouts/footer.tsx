import styled from 'styled-components';
import css from '@styled-system/css';
import { FormattedMessage } from 'react-intl';
import {FooterContainer,FooterContainer1,FooterContainer2} from './layout.style';
import weixin from 'assets/images/weixin.png';
const Box = styled.div(
  css({
    background: '#F2F2F2',
    border: '1px solid #E0E0E0',
    padding:'39px 127px'
  }),
  {
    marginTop: 50,
    width: '100%'
  }
);
const Footer = () => {
  return (
    <Box>
     <FooterContainer>
       <div className="item">
        <div className="brand">优</div>
        <div className="infocontainer">
          <h1 className="title">品质保障</h1>
          <p className="info">品质护航 购物无忧</p>
        </div>
       </div>
       <div className="item">
        <div className="brand">七</div>
        <div className="infocontainer">
          <h1 className="title">品质保障</h1>
          <p className="info">品质护航 购物无忧</p>
        </div>
       </div>
       <div className="item">
        <div className="brand">特</div>
        <div className="infocontainer">
          <h1 className="title">品质保障</h1>
          <p className="info">品质护航 购物无忧</p>
        </div>
       </div>
       <div className="item">
        <div className="brand">帮</div>
        <div className="infocontainer">
          <h1 className="title">品质保障</h1>
          <p className="info">品质护航 购物无忧</p>
        </div>
       </div>
     </FooterContainer>
     <FooterContainer1>
       <div>
         <ul>
          <li><h1>购物指南</h1></li>
          <li>免费注册</li>
          <li>开通支付宝</li>
          <li>支付宝充值</li>
         </ul>
       </div>
       <div>
         <ul>
          <li><h1>吉腾保障</h1></li>
          <li>发票保障</li>
          <li>售后规则</li>
          <li>缺货赔付</li>
         </ul>
       </div>
       <div>
         <ul>
          <li><h1>支付方式</h1></li>
          <li>快捷支付</li>
          <li>信用卡</li>
          <li>余额宝</li>
          <li>蚂蚁花呗</li>
          <li>货到付款</li>
         </ul>
       </div>
       <div>
         <ul>
          <li><h1>商家服务</h1></li>
          <li>天猫规则</li>
          <li>商家入驻</li>
          <li>商家中心</li>
          <li>天猫智库</li>
          <li>物流服务</li>
          <li>喵言喵语</li>
          <li>运营服务</li>
         </ul>
       </div>
       <div>
         <h1>手机吉腾</h1>
         <img src={weixin}></img>
       </div>
     </FooterContainer1>
     <FooterContainer2>
       <div className="item">
         <ul>
           <li>关于我们</li> <li>联系我们</li>  <li>联系客服</li>  <li>合作招商</li>  <li>商家帮助</li>  <li>营销中心</li>
           <li> 手机吉腾</li>  <li>友情链接</li> <li> 销售联盟</li>  <li>吉腾社区</li>  <li>风险监测</li>  <li>隐私政策</li>
           <li>吉腾公益</li>  <li>English Site</li>  <li>Media & IR</li>
         </ul>
       </div>
       <div>
         <p>吉腾网安备 11000002000088号|吉腾ICP证070359号| 互联网药品信息服务资格证编号(吉腾)-经营性-2014-0008|新出发吉腾 字第大120007号 </p>

         <p>互联网出版许可证编号新出网证(吉腾)字150号| 出版物经营许可证| 网络文化经营许可证吉腾网文[2014]2148-348号|违法和不良信息举报电话：4006561155</p>

          <p>Copyright © 2019 - 2020 京东JD.com 版权所有|消费者维权热线：4006067733 经营证照 | (吉腾)网械平台备字(2018)第00003号 | 营业执照</p>
       </div>
     </FooterContainer2>
    </Box>
  );
};
export default Footer;
