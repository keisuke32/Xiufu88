import {GetStaticProps,NextPage} from 'next';
import styled from 'styled-components';
import css from '@styled-system/css';
import {initializeApollo} from 'utils/apollo';
import usebrand from 'data/use-allbrand';
import uselivecategories from 'data/use-livecategories'
import useexperiences from 'data/use-experience'
import { Box } from 'components/box';
import {TabContainer,TabContent} from 'components/shoplive/shoplivefilter';
import {ShopLiveFilter} from '../components/product-grid/shoplivefilter';
import {useState} from 'react'
import useCategory from 'data/use-category';


export const Main = styled.div<any>(
    css({
      backgroundColor: 'gray.200',
      position: 'relative',
      marginTop:'30px'
    })
  );

  const PAGE_TYPE = 'bakery';

  const ShopliveFiter:NextPage<{}> = ({}) => {
    const productsizes = [{name:"XS",value:'xs'},{name:'XXS',value:'xxs'},{name:'S',value:'s'},{name:'M',value:'m'},{name:'均码',value:'one'},
  {name:"L",value:'l'},{name:'XL',value:'xl'},{name:'2XL',value:'2xl'},{name:'XXXL',value:'3xl'},{name:'XXXXL',value:'4xl'},{name:'XXXXXL',value:'5xl'}]
  const users_size = [{name:'17周岁以下',value:'<17'},{name:'18-24周岁',value:'18-24'},{name:'25-29周岁',value:'25-29'},{name:'30-34周岁',value:'30-34'},{name:'35-39周岁',value:'35-39'},{name:"40周岁以上",value:"40<"}]

    const {data,error,loading} = usebrand({livestream:true})
    const productcategory = useCategory({hasProduct: true})
    const livecategories = uselivecategories()
    const liveexperiences = useexperiences()

    const [selectedcategories,setcategories] = useState([])
    const [selectedexperiences,setexperiences] = useState([])
    const [productfilter,setfilter] = useState({brands:[],categories:[],variations:[],price:false})

    const selectcategory = (id) => {
      var index = selectedcategories.indexOf(id)
      let categorylist = [...selectedcategories]
      if(index >= 0)
      {
        categorylist.splice(index,1)
        setcategories(categorylist)
      }
      else
      {
        categorylist.push(id)
        setcategories(categorylist)
      }
    }

    const setexperience = (id) => {
      var index = selectedexperiences.indexOf(id)
      let experiencelist = [...selectedexperiences]
      if(index >= 0)
      {
        experiencelist.splice(index,1)
        setexperiences(experiencelist)
      }
      else
      {
        experiencelist.push(id)
        setexperiences(experiencelist)
      }

    }

    const updatedata = (id,list) => {
      if(list.indexOf(id) > -1)
      {
        list.splice(list.indexOf(id),1)
      }
      else
      {
        list.push(id)
      }
      console.log(list)
      return list
    }

    const selectproductcategory = (id) => {
      let categorylist = [...productfilter.categories]
      if(categorylist.indexOf(id) > -1)
      {
        categorylist.splice(categorylist.indexOf(id),1)
      }
      else
      {
        categorylist.push(id)
      }

      setfilter({
        ...productfilter,
        categories:categorylist
      })
    }

    const changepricefilter = (name,value) => {
      let pricefilter = productfilter.price as any

      if(!pricefilter)
      {
        if(value)
        {
          pricefilter = {} as any
          pricefilter[name] = {
            amount:value,
            currency:"CNY"
          }
          setfilter({
            ...productfilter,
            price:pricefilter
          })
        }
      }
      else
      {
        pricefilter[name] = {
          amount:value,
          currency:"CNY"
        }
        var enable = true;

        console.log('pricefilter',pricefilter)
        for(let item in pricefilter as any)
        {
          if(!pricefilter[item].amount)
          {
            pricefilter[item] = undefined
          }
          else
          {
            enable = false;
          }
        }

        if(enable)
        {
          pricefilter = false
        }

        setfilter({
          ...productfilter,
          price:pricefilter
        })
      }
    }

    console.log(productfilter)

      return (
          <Main>
            <div className="container">
              <Box>
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                      <TabContainer>
                        <li className="active">现场产品</li>
                        <li>现场购物</li>
                      </TabContainer>
                      <TabContent>
                        <div className="toptitle">
                          <span>所有分类 {'>'}</span>
                          <select style={{marginLeft:'auto'}}>
                            <option value="收起筛选">收起筛选</option>
                          </select>
                        </div>
                        <div className="topfilter">
                          <div className="topfilteritem">
                            <div className="leftpanel">品牌</div>
                            <div className="panelcontent">
                              {
                                data && data.map((item,index)=>{
                                  return (
                                    <div
                                      key={index}
                                      className={productfilter.brands.indexOf(item.id) > -1?'panelitem selected':'panelitem'}
                                      onClick={()=>setfilter({...productfilter,brands:updatedata(item.id,[...productfilter.brands])})}>
                                        {item.name}
                                    </div>
                                  )
                                })
                              }
                            </div>
                            <div className="rightpanel">
                              <span className="btn-rect">多选</span>
                              <span>更多</span>
                            </div>
                          </div>
                          {/* <div className="topfilteritem">
                            <div className="leftpanel">尺码</div>
                            <div className="panelcontent">
                              {
                                productsizes.map((item,index)=>(
                                  <div className="panelitem" key={index}>{item.name}</div>
                                ))
                              }
                            </div>
                          </div>
                          <div className="topfilteritem">
                            <div className="leftpanel">适用年龄</div>
                            <div className="panelcontent">
                              {
                                users_size.map((item,index)=>(
                                  <div className="panelitem" key={index}>{item.name}</div>
                                ))
                              }
                            </div>
                            <div className="rightpanel">
                              <span className="btn-rect">多选</span>
                              <span>更多</span>
                            </div>
                          </div> */}
                          {/* <div className="topfilteritem">
                            <div className="leftpanel">女裝</div>
                            <div className="panelcontent">
                              <div className="panelitem">大码女装</div>
                              <div className="panelitem">连衣裙</div>
                              <div className="panelitem">T恤</div>
                              <div className="panelitem">牛仔裤</div>
                              <div className="panelitem">休闲裤</div>
                              <div className="panelitem">衬衫</div>
                              <div className="panelitem">针织衫</div>
                              <div className="panelitem">卫衣/绒衫</div>
                              <div className="panelitem">短外套</div>
                            </div>
                            <div className="rightpanel">
                              <span className="btn-rect"></span>
                              <span>更多</span>
                            </div>
                          </div> */}
                          <div className="topfilteritem">
                            <div className="leftpanel">你是不是想找</div>
                            <div className="panelcontent">
                              {
                                (!productcategory.error && !productcategory.loading) && productcategory.data.map((item,index)=>(
                                  <div className={productfilter.categories.indexOf(item.id) > -1?"panelitem selected":"panelitem"} onClick={()=>selectproductcategory(item.id)}>{item.name}</div>
                                ))
                              }
                            </div>
                            <div className="rightpanel">
                              <span className="btn-rect"></span>
                              <span>更多</span>
                            </div>
                          </div>
                        </div>
                        <div className="topfilter" style={{marginTop:15}}>
                          <div className="topfilteritem">
                            <div className="leftpanel">类别</div>
                            <div className="panelcontent">
                              {
                                !livecategories.error && livecategories.data.map((item,index)=>{
                                  return (
                                    <div className={selectedcategories.indexOf(item.id)>-1?"panelitem selected":"panelitem"} key={index} onClick={()=>selectcategory(item.id)}>{item.name}</div>
                                  )
                                })
                              }
                            </div>
                          </div>
                          <div className="topfilteritem">
                            <div className="leftpanel">经验</div>
                            <div className="panelcontent">
                                {
                                  !liveexperiences.error && liveexperiences.data.map((item,index)=>{
                                    return (
                                      <div className={selectedexperiences.indexOf(item.id)>-1?"panelitem selected":"panelitem"} key={index}  onClick={()=>setexperience(item.id)}>{item.name}</div>
                                    )
                                  })
                                }
                            </div>
                          </div>
                        </div>
                      </TabContent>
                    </div>
                  </div>
                  <div className="row" style={{marginTop:20}}>
                      <div className="col-lg-12">
                          <ShopLiveFilter categories={selectedcategories} experiences={selectedexperiences} productfilter={productfilter} changepricefilter={changepricefilter}></ShopLiveFilter>
                      </div>
                  </div>
              </Box>
            </div>
          </Main>
      )
  }


export default ShopliveFiter;
