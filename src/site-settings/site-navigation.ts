import FooterImage1 from "../assets/images/footer/quality.png";
import FooterImage2 from "../assets/images/footer/service-experience.png";
import FooterImage3 from "../assets/images/footer/safe-payment.png";
import FooterImage4 from "../assets/images/footer/payment-nav.png";

export const HOME_PAGE = '/';
export const GROCERY_PAGE = '/grocery';
export const GROCERY_PAGE_TWO = '/grocery-two';
export const MAKEUP_PAGE = '/makeup';
export const CLOTHING_PAGE = '/clothing';
export const BAGS_PAGE = '/bags';
export const BAKERY_PAGE = '/bakery';
export const BOOK_PAGE = '/book';
export const FURNITURE_PAGE = '/furniture';
export const FURNITURE_PAGE_TWO = '/furniture-two';
export const MEDICINE_PAGE = '/medicine';
export const RESTAURANT_PAGE = '/restaurant';
export const REQUEST_MEDICINE_PAGE = '/request-medicine';
export const CHECKOUT_PAGE = '/checkout';
export const CHECKOUT_PAGE_TWO = '/checkout-alternative';
export const ORDER_RECEIVED_PAGE = '/order-received';
export const HELP_PAGE = '/help';
export const TERMS_AND_SERVICES_PAGE = '/terms';
export const PRIVACY_POLICY_PAGE = '/privacy';

/* Custom Site Pages */
export const PROFILE_PAGE = '/profile';
export const PROFILE_SECURITY_PAGE = '/profile-security';
export const PROFILE_INFORMATION_PAGE = '/profile-information';
export const PROFILE_TRANSACTION_PAGE = '/profile-transaction';
export const PROFILE_SHIPPING_ADDRESS_PAGE = '/profile-shipping-address';
export const YOUR_ORDER_PAGE = '/profile?t=buyer&p=profile.order';
export const OFFER_PAGE = '/offer';
export const SITE_NAVIGATION_PAGE = '/site_navigation';
export const MOBILE_SHOW_PAGE = '/mobile_show';
export const WISHLIST_PAGE = '/wishlist';
export const SHOPLIVE_PAGE = '/shoplive';
export const GETLIVE_PAGE = '/addgetlive';
export const LIVEPRODUCT_PAGE = '/liveproduct';
export const WHOLESALEPRODUCT_PAGE = '/wholesaleproduct';

/* Custom Site Navigations */
export const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE,
};
export const WISHLIST_MENU_ITEM = {
  id: 'nav.wishlist',
  defaultMessage: 'Wishlist',
  href: WISHLIST_PAGE,
};
export const ORDER_MENU_ITEM = {
  id: 'nav.order',
  defaultMessage: 'Order',
  href: YOUR_ORDER_PAGE,
};
export const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Service',
  href: OFFER_PAGE,
};

export const AUTHORIZED_TOPBAR_MENU_ITEMS = [
  WISHLIST_MENU_ITEM,
  ORDER_MENU_ITEM,
  OFFER_MENU_ITEM
];

export const TOPBAR_MENU_ITEMS = [
  {
    id: 'nav.sitemap',
    defaultMessage: 'Sitemap',
    href: SITE_NAVIGATION_PAGE,
  },
  {
    id: 'nav.app',
    defaultMessage: 'App',
    href: MOBILE_SHOW_PAGE,
  }
];


export const LOCATION_MENU = [
  {
    id: 'zh',
    defaultMessage: 'Chinese',
  },
  {
    id: 'en',
    defaultMessage: 'English',
  },
  // {
  //   id: 'ar',
  //   defaultMessage: 'Arabic',
  // },
];

export const SHOPLIVE_MENU_ITEM = {
  id: 'nav.shoplive',
  defaultMessage: 'Shop Live',
  href: SHOPLIVE_PAGE,
};
export const GETLIVE_MENU_ITEM = {
  id: 'nav.getlive',
  defaultMessage: 'Get Live',
  href: GETLIVE_PAGE,
};
export const LIVEPRODUCT_MENU_ITEM = {
  id: 'nav.liveproduct',
  defaultMessage: 'Live Product',
  href: LIVEPRODUCT_PAGE,
};
export const WHOLESALEPRODUCT_MENU_ITEM = {
  id: 'nav.wholesaleproduct',
  defaultMessage: 'Wholesale Product',
  href: WHOLESALEPRODUCT_PAGE,
}

/* Middle Footer Navigation Item */

// shopping guide
export const INVOICE_SYSTEM_MENU_ITEM = {
  id: 'nav.invoice_system',
  defaultMessage: '发票制度',
  // href: '/helpcenter/Social%20Pages%20Terms'
  href: 'http://gxjiteng.cn/index-home_view_index_84.html'
}

export const COMMON_PROBLEM_MENU_ITEM = {
  id: 'nav.common_problem',
  defaultMessage: '常见问题',
  // href: '/helpcenter/Social%20Pages%20Terms'
  href: 'http://gxjiteng.cn/index-home_view_index_83.html'
}

export const ADDITIONAL_TERMS_MENU_ITEM = {
  id: 'nav.additional_terms',
  defaultMessage: '附加条款',
  href: 'http://gxjiteng.cn/index-home_view_index_82.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const SHOPPING_PROCESS_MENU_ITEM = {
  id: 'nav.shopping_process',
  defaultMessage: '购物流程',
  href: 'http://gxjiteng.cn/index-home_view_index_81.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const PREFERENTIAL_POLICY_MENU_ITEM = {
  id: 'nav.preferential_policy',
  defaultMessage: '优惠政策',
  href: 'http://gxjiteng.cn/index-home_view_index_80.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

// after sale service
export const REFUND_REPLACEMENT_MENU_ITEM = {
  id: 'nav.refund_replacement',
  defaultMessage: '退款换货',
  href: 'http://gxjiteng.cn/index-home_view_index_90.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const CANCEL_ORDER_MENU_ITEM = {
  id: 'nav.cancel_order',
  defaultMessage: '取消订单',
  href: 'http://gxjiteng.cn/index-home_view_index_89.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const RIGHT_PROTECTION_MENU_ITEM = {
  id: 'nav.right_protection',
  defaultMessage: '维权流程',
  href: 'http://gxjiteng.cn/index-home_view_index_88.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const PRICE_PROTECTION_MENU_ITEM = {
  id: 'nav.price_protection',
  defaultMessage: '价格保护',
  href: 'http://gxjiteng.cn/index-home_view_index_87.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const AFTERSALE_POLICY_MENU_ITEM = {
  id: 'nav.aftersale_policy',
  defaultMessage: '售后政策',
  href: 'http://gxjiteng.cn/index-home_view_index_86.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

// payment methods
export const ONLINE_PAYMENTS_MENU_ITEM = {
  id: 'nav.online_payments',
  defaultMessage: '在线支付',
  href: 'http://gxjiteng.cn/index-home_view_index_95.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const POST_OFFICE_REMITTANCE_MENU_ITEM = {
  id: 'nav.post_office_remittance',
  defaultMessage: '邮局汇款',
  href: 'http://gxjiteng.cn/index-home_view_index_94.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const CASH_DELIVERY_MENU_ITEM = {
  id: 'nav.cash_delivery',
  defaultMessage: '货到付款',
  href: 'http://gxjiteng.cn/index-home_view_index_93.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const COMPANY_TRANSFER_MENU_ITEM = {
  id: 'nav.company_transfer',
  defaultMessage: '公司转账',
  href: 'http://gxjiteng.cn/index-home_view_index_92.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const INSTALLMENT_MENU_ITEM = {
  id: 'nav.installment',
  defaultMessage: '分期付款',
  href: 'http://gxjiteng.cn/index-home_view_index_91.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

// business cooperation

export const OFFLINE_PROMOTION_MENU_ITEM = {
  id: 'nav.offline_promotion',
  defaultMessage: '线下推广',
  href: 'http://gxjiteng.cn/index-home_view_index_100.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const MERCHANTS_JOIN_MENU_ITEM = {
  id: 'nav.merchants_join',
  defaultMessage: '商家加盟',
  href: 'http://gxjiteng.cn/index-home_view_index_99.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const CARGO_BUSINESS_COOPERATION_MENU_ITEM = {
  id: 'nav.cargo_business_cooperation',
  defaultMessage: '合作招商',
  href: 'http://gxjiteng.cn/index-home_view_index_98.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const PROMOTING_ADS_MENU_ITEM = {
  id: 'nav.promoting_ads',
  defaultMessage: '广告推广',
  href: 'http://gxjiteng.cn/index-home_view_index_97.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const MEDIA_COOPERATION_MENU_ITEM = {
  id: 'nav.media_cooperation',
  defaultMessage: '媒体合作',
  href: 'http://gxjiteng.cn/index-home_view_index_96.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

// Mall news

export const DELIVERY_QUERY_MENU_ITEM = {
  id: 'nav.delivery_query',
  defaultMessage: '配送查询',
  href: 'http://gxjiteng.cn/index-home_view_index_105.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const EXPENSE_DESCRIPTION_MENU_ITEM = {
  id: 'nav.expense_description',
  defaultMessage: '费用说明',
  href: 'http://gxjiteng.cn/index-home_view_index_104.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const LOGISTICS_TIME_MENU_ITEM = {
  id: 'nav.logistics_time',
  defaultMessage: '海外配送',
  href: 'http://gxjiteng.cn/index-home_view_index_103.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const DELIVERY_NOTE_MENU_ITEM = {
  id: 'nav.delivery_note',
  defaultMessage: '配送说明',
  href: 'http://gxjiteng.cn/index-home_view_index_102.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

export const MALL_DELIVERY_MENU_ITEM = {
  id: 'nav.mall_delivery',
  defaultMessage: '商城配送',
  href: 'http://gxjiteng.cn/index-home_view_index_101.html'
  // href: '/helpcenter/Social%20Pages%20Terms'
}

//--------------------------------
export const FREE_REGISTRATION_MENU_ITEM = {
  id: 'nav.free_registration',
  defaultMessage: 'Free Registration',
  href: '/#'
}

export const OPEN_ALIPAY_MENU_ITEM = {
  id: 'nav.open_alipay',
  defaultMessage: 'Open Alipay',
  href: '/#'
}

export const RECHARGE_ALIPAY_MENU_ITEM = {
  id: 'nav.recharge_alipay',
  defaultMessage: 'Recharge on Alipay',
  href: '/#'
}

export const FEEDBACK_MENU_ITEM = {
  id: 'nav.feedback',
  defaultMessage: 'Feedback',
  href: '/helpcenter/feedback'
}

export const CREATE_ACCOUNT_MENU_ITEM = {
  id: 'nav.create_account',
  defaultMessage: 'Create an Account',
  href: '/helpcenter/create_account'
}

export const FRAUD_POLICY_MENU_ITEM = {
  id: 'nav.fraud.policy',
  defaultMessage: 'Fraud Policy',
  href: '/helpcenter/fraud'
}

export const TERMS_SERVICE_MENU_ITEM = {
  id: 'nav.terms.service',
  defaultMessage: 'Terms of Service',
  href: '/helpcenter/service'
}

export const TERMS_USE_MENU_ITEM = {
  id: 'nav.terms.use',
  defaultMessage: 'Terms of Use',
  href: '/helpcenter/use'
}

export const DISPUTE_SETTLEMENT_MENU_ITEM = {
  id: 'nav.dispute.settlement',
  defaultMessage: 'Dispute Settlement',
  href: '/helpcenter/dispute'
}

export const GUARDIANSHIP_MENU_ITEM = {
  id: 'nav.guardianship',
  defaultMessage: 'Parental Guardianship',
  href: '/helpcenter/guardianship'
}

export const DATA_REQUEST_POLICY_MENU_ITEM = {
  id: 'nav.data.request.policy',
  defaultMessage: 'Data Request Policy',
  href: '/helpcenter/data_request'
}

export const USER_GENERATED_CONTENT_MENU_ITEM = {
  id: 'nav.user.generated.content',
  defaultMessage: 'User-generated Content',
  href: '/helpcenter/user_generated'
}

export const ANTI_ADDICTION_MENU_ITEM = {
  id: 'nav.ani.addiction',
  defaultMessage: 'Anti-addiction for minors',
  href: '/helpcenter/anti_addiction'
}

export const HACKED_ACCOUNT_MENU_ITEM = {
  id: 'nav.hacked.account',
  defaultMessage: 'Hacked or forget Account',
  href: '/helpcenter/hack'
}

export const USER_GUIDE_MENU_ITEM = {
  id: 'nav.user_guide',
  defaultMessage: 'User Guide',
  children: [
    FEEDBACK_MENU_ITEM,
    CREATE_ACCOUNT_MENU_ITEM,
    FRAUD_POLICY_MENU_ITEM,
    TERMS_SERVICE_MENU_ITEM,
    TERMS_USE_MENU_ITEM,
    DISPUTE_SETTLEMENT_MENU_ITEM,
    GUARDIANSHIP_MENU_ITEM,
    DATA_REQUEST_POLICY_MENU_ITEM,
    USER_GENERATED_CONTENT_MENU_ITEM,
    ANTI_ADDICTION_MENU_ITEM,
    HACKED_ACCOUNT_MENU_ITEM
  ]
}

export const SHOPPING_GUIDE_MENU_ITEM = {
  id: 'nav.shopping_guide',
  defaultMessage: 'Shopping Guide',
  href: "http://gxjiteng.cn/index-home_view_index_122.html",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
    INVOICE_SYSTEM_MENU_ITEM,
    COMMON_PROBLEM_MENU_ITEM,
    ADDITIONAL_TERMS_MENU_ITEM,
    SHOPPING_PROCESS_MENU_ITEM,
    PREFERENTIAL_POLICY_MENU_ITEM,
  ]
}

export const AFTER_SALE_MENU_ITEM = {
  id: 'nav.afterSale',
  defaultMessage: '售后服务',
  href: "http://gxjiteng.cn/index-home_view_index_123.html",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
    REFUND_REPLACEMENT_MENU_ITEM,
    CANCEL_ORDER_MENU_ITEM,
    RIGHT_PROTECTION_MENU_ITEM,
    PRICE_PROTECTION_MENU_ITEM,
    AFTERSALE_POLICY_MENU_ITEM,
  ]
}

export const PAYMENT_METHOD_MENU_ITEM = {
  id: 'nav.payment_method',
  defaultMessage: 'Payment Method',
  href: "http://gxjiteng.cn/index-home_view_index_124.html",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
    ONLINE_PAYMENTS_MENU_ITEM,
    POST_OFFICE_REMITTANCE_MENU_ITEM,
    CASH_DELIVERY_MENU_ITEM,
    COMPANY_TRANSFER_MENU_ITEM,
    INSTALLMENT_MENU_ITEM,
  ]
}

export const BUSINESS_COOPERATION_MENU_ITEM = {
  id: 'nav.business_cooperation',
  defaultMessage: '商务合作',
  href: "http://gxjiteng.cn/index-home_view_index_125.html",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
    OFFLINE_PROMOTION_MENU_ITEM,
    MERCHANTS_JOIN_MENU_ITEM,
    CARGO_BUSINESS_COOPERATION_MENU_ITEM,
    PROMOTING_ADS_MENU_ITEM,
    MEDIA_COOPERATION_MENU_ITEM,
  ]
}

export const MALL_NEWS_MENU_ITEM = {
  id: 'nav.mall_news',
  defaultMessage: '商城快讯',
  href: "http://gxjiteng.cn/index-home_view_index_126.html",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
    DELIVERY_QUERY_MENU_ITEM,
    EXPENSE_DESCRIPTION_MENU_ITEM,
    LOGISTICS_TIME_MENU_ITEM,
    DELIVERY_NOTE_MENU_ITEM,
    MALL_DELIVERY_MENU_ITEM,
  ]
}

export const CONTACT_US_MENU_ITEM = {
  id: 'nav.contactus',
  defaultMessage: 'Contact Us',
  href: "/support",
  // href: "/helpcenter/Social%20Pages%20Terms",
  children: [
  ]
}

export const BOTTOM_FOOTER_NAVIGATIONS_ITEMS = [
  SHOPPING_GUIDE_MENU_ITEM,
  AFTER_SALE_MENU_ITEM,
  PAYMENT_METHOD_MENU_ITEM,
  BUSINESS_COOPERATION_MENU_ITEM,
  MALL_NEWS_MENU_ITEM,
  CONTACT_US_MENU_ITEM
]

export const INVOICE_PROTECTION_MENU_ITEM = {
  id: 'nav.invoice_protection',
  defaultMessage: 'Invoice Protection',
  href: '/#'
}
export const SALES_RULE_MENU_ITEM = {
  id: 'nav.sales_rule',
  defaultMessage: 'After-sales rules',
  href: '/#'
}
export const OUT_OF_STOCK_MENU_ITEM = {
  id: 'nav.out_of_stock',
  defaultMessage: 'Stock Compensation',
  href: '/#'
}
export const XIUFU_GUARANTEE_MENU_ITEM = {
  id: 'nav.xiufu_guarantee',
  defaultMessage: 'JiTeng Guarantee',
  children: [
    INVOICE_PROTECTION_MENU_ITEM,
    SALES_RULE_MENU_ITEM,
    OUT_OF_STOCK_MENU_ITEM
  ]
}

export const COMMUNICATION_MENU_ITEM = {
  id: 'nav.communication',
  defaultMessage: 'Communication',
  href: '/helpcenter/communcation'
}
export const POLICY_MENU_ITEM = {
  id: 'nav.policy',
  defaultMessage: 'Policy',
  href: '/helpcenter/policy'
}
export const ZERO_TOLERANCE_MENU_ITEM = {
  id: 'nav.zero.tolerance',
  defaultMessage: 'zero tolerance',
  href: '/helpcenter/tolerance'
}

export const COPYRIGHT_POLICY_MENU_ITEM = {
  id: 'nav.copyright.policy',
  defaultMessage: 'Copyright policy',
  href: '/helpcenter/copyright'
}
export const LIMITATION_LIABILITY_MENU_ITEM = {
  id: 'nav.limitation.liability',
  defaultMessage: 'Limitation of Liability',
  href: '/helpcenter/limitation'
}
export const CODE_CONDUCT_MENU_ITEM = {
  id: 'nav.code.conduct',
  defaultMessage: 'code of Conduct',
  href: '/helpcenter/code_conduct'
}

export const PRIVACY_POLICY_FOOTER_MENU_ITEM = {
  id: 'nav.privacy.policy.footer',
  defaultMessage: 'Privacy Policy',
  href: '/helpcenter/privacy'
}
export const REPORT_ABUSE_MENU_ITEM = {
  id: 'nav.report.abuse',
  defaultMessage: 'Report abuse',
  href: '/helpcenter/report'
}
export const SUSPICIOUS_MESSAGE_MENU_ITEM = {
  id: 'nav.suspicious.message',
  defaultMessage: 'Suspicious message',
  href: '/helpcenter/suspicious'
}

export const TRUST_SAFETY_MENU_ITEM = {
  id: 'nav.trust.safety',
  defaultMessage: 'Trust and safety',
  href: '/helpcenter/trust'
}
export const ANTI_BULLYING_MENU_ITEM = {
  id: 'nav.anti.bullying',
  defaultMessage: 'Anti-discrimination and anti-bullying',
  href: '/helpcenter/anti_discrimination'
}

export const FAIRVIEW_POLICY_MENU_ITEM = {
  id: 'nav.fairview.policy',
  defaultMessage: 'Fairview Policy',
  children: [
    COMMUNICATION_MENU_ITEM,
    POLICY_MENU_ITEM,
    ZERO_TOLERANCE_MENU_ITEM,
    COPYRIGHT_POLICY_MENU_ITEM,
    LIMITATION_LIABILITY_MENU_ITEM,
    CODE_CONDUCT_MENU_ITEM,
    PRIVACY_POLICY_FOOTER_MENU_ITEM,
    REPORT_ABUSE_MENU_ITEM,
    SUSPICIOUS_MESSAGE_MENU_ITEM,
    TRUST_SAFETY_MENU_ITEM,
    ANTI_BULLYING_MENU_ITEM
  ]
}


export const QUICK_PAYMENT_MENU_ITEM = {
  id: 'nav.quick_payment',
  defaultMessage: 'Quick Payment',
  href: '/#'
}
export const CREDIT_CARD_MENU_ITEM = {
  id: 'nav.credit_card',
  defaultMessage: 'Credit Card',
  href: '/#'
}
export const ALIPAY_YUEBAO_MENU_ITEM = {
  id: 'nav.alipay_yuebao',
  defaultMessage: 'Alipay Yuebao',
  href: '/#'
}
export const ANT_FLOWER_MENU_ITEM = {
  id: 'nav.ant_flower',
  defaultMessage: 'Ant Flower',
  href: '/#'
}
export const CASH_ON_DELIVERY_MENU_ITEM = {
  id: 'nav.cash_on_delivery',
  defaultMessage: 'Cash on delivery',
  href: '/#'
}
export const TMALL_RULES_MENU_ITEM = {
  id: 'nav.tmall_rules',
  defaultMessage: 'Tmall rules',
  href: '/#'
}
export const SELLER_SET_MENU_ITEM = {
  id: 'nav.seller_settled',
  defaultMessage: 'Seller Settled',
  href: '/#'
}
export const SELLER_CENTER_MENU_ITEM = {
  id: 'nav.seller_center',
  defaultMessage: 'Seller Center',
  href: '/#'
}
export const TMALL_THINK_TANK_MENU_ITEM = {
  id: 'nav.tmall_think_tank',
  defaultMessage: 'Tmall Think Tank',
  href: '/#'
}
export const LOGISTICS_SERVICE_MENU_ITEM = {
  id: 'nav.logistic_service',
  defaultMessage: 'Logistics Service',
  href: '/#'
}
export const MEOW_WORDS_MENU_ITEM = {
  id: 'nav.meow_words',
  defaultMessage: 'Meow Words',
  href: '/#'
}
export const OPERATION_SERVICE = {
  id: 'nav.operation_service',
  defaultMessage: 'Operation Service',
  href: '/#'
}
export const SELLER_SERVICE_MENU_ITEM = {
  id: 'nav.seller_service',
  defaultMessage: 'Seller Service',
  children: [
    TMALL_RULES_MENU_ITEM,
    SELLER_SET_MENU_ITEM,
    SELLER_CENTER_MENU_ITEM,
    TMALL_THINK_TANK_MENU_ITEM,
    LOGISTICS_SERVICE_MENU_ITEM,
    MEOW_WORDS_MENU_ITEM,
    OPERATION_SERVICE
  ]
}

export const DELIVERY_MENU_ITEM = {
  id: 'nav.delivery',
  defaultMessage: 'Delivery',
  href: '/helpcenter/delivery'
}
export const CANCEL_MENU_ITEM = {
  id: 'nav.cancel',
  defaultMessage: 'cancel',
  href: '/helpcenter/cancel'
}
export const TRADING_RULES_MENU_ITEM = {
  id: 'nav.trading.rules',
  defaultMessage: 'Trading Rules',
  href: '/helpcenter/trading'
}
export const PRODUCTION_RETURN_POLICY_MENU_ITEM = {
  id: 'nav.production.return.policy',
  defaultMessage: 'Production return policy',
  href: '/helpcenter/production_return'
}
export const CONNECTION_SERVICE_REFUND_POLICY_MENU_ITEM = {
  id: 'nav.connection.service.refund.policy',
  defaultMessage: 'Connection service refund policy',
  href: '/helpcenter/refund'
}
export const CANCELLATION_AVOID_MENU_ITEM = {
  id: 'nav.cancellation.avoid',
  defaultMessage: 'Cancellation and how to avoid',
  href: '/helpcenter/cancellation'
}

export const PAYMENT_LOGISTICS_MENU_ITEM = {
  id: 'nav.payment.logistics',
  defaultMessage: 'PAYMENT AND LOGISTICS',
  children: [
    DELIVERY_MENU_ITEM,
    CANCEL_MENU_ITEM,
    TRADING_RULES_MENU_ITEM,
    PRODUCTION_RETURN_POLICY_MENU_ITEM,
    CONNECTION_SERVICE_REFUND_POLICY_MENU_ITEM,
    CANCELLATION_AVOID_MENU_ITEM
  ]
}

export const RULE_MENU_ITEM = {
  id: 'nav.rule',
  defaultMessage: 'Rule',
  href: '/helpcenter/rule'
}
export const SKILL_MENU_ITEM = {
  id: 'nav.skill',
  defaultMessage: 'skill',
  href: '/helpcenter/skill'
}
export const NEW_FEE_MENU_ITEM = {
  id: 'nav.new.fee',
  defaultMessage: 'New fee',
  href: '/helpcenter/new_fee'
}
export const ADVERTISING_POLICY_MENU_ITEM = {
  id: 'nav.advertising.policy',
  defaultMessage: 'Advertising policy',
  href: '/helpcenter/advertising'
}
export const ANIMAL_POLICY_MENU_ITEM = {
  id: 'nav.animal.policy',
  defaultMessage: 'Animal policy',
  href: '/helpcenter/animal'
}
export const BRAND_POLICY_MENU_ITEM = {
  id: 'nav.brand.policy',
  defaultMessage: 'Brand policy',
  href: '/helpcenter/brand'
}
export const GUN_POLICY_MENU_ITEM = {
  id: 'nav.gun.policy',
  defaultMessage: 'Gun policy',
  href: '/helpcenter/gun'
}

export const HELP_CENTER_MENU_ITEM = {
  id: 'nav.help.center',
  defaultMessage: 'Help center',
  href: '/helpcenter/help'
}
export const PRICING_POLICY_MENU_ITEM = {
  id: 'nav.pricing.policy',
  defaultMessage: 'Pricing policy',
  href: '/helpcenter/pricing'
}
export const PROMOTION_POLICY_MENU_ITEM = {
  id: 'nav.promotion.policy',
  defaultMessage: 'Promotion policy',
  href: '/helpcenter/promotion'
}
export const PRODUCT_LAUNCH_POLICY_MENU_ITEM = {
  id: 'nav.product.launch.policy',
  defaultMessage: 'Product launch policy',
  href: '/helpcenter/product_launch'
}
export const RESPONSIBLE_DISCLOSURE_MENU_ITEM = {
  id: 'nav.responsible.disclosure',
  defaultMessage: 'Website is responsible for disclosure',
  href: '/helpcenter/responsible'
}
export const SOCIAL_PAGE_MENU_ITEM = {
  id: 'nav.social.page',
  defaultMessage: 'Social page terms',
  href: '/helpcenter/social'
}
export const INTELLECTUAL_PROPERTY_MENU_ITEM = {
  id: 'nav.intellectual.property',
  defaultMessage: 'Intellectual Property Complaints',
  href: '/helpcenter/intellectual'
}
export const PROMOTION_TERMS_MENU_ITEM = {
  id: 'nav.promotion.terms',
  defaultMessage: 'Promotion terms and conditions',
  href: '/helpcenter/promotion'
}
export const ACCEPTABLE_MENU_ITEM = {
  id: 'nav.acceptable',
  defaultMessage: 'Acceptable use policy',
  href: '/helpcenter/acceptable'
}
export const USER_LICENSE_MENU_ITEM = {
  id: 'nav.user.license',
  defaultMessage: 'End User License Agreement',
  href: '/helpcenter/license'
}

export const MERCHANT_SERVICE_MENU_ITEM = {
  id: 'nav.merchant.service',
  defaultMessage: 'Merchant Service',
  children: [
    RULE_MENU_ITEM,
    SKILL_MENU_ITEM,
    NEW_FEE_MENU_ITEM,
    ADVERTISING_POLICY_MENU_ITEM,
    ANIMAL_POLICY_MENU_ITEM,
    BRAND_POLICY_MENU_ITEM,
    GUN_POLICY_MENU_ITEM,
    HELP_CENTER_MENU_ITEM,
    PRICING_POLICY_MENU_ITEM,
    PROMOTION_POLICY_MENU_ITEM,
    PRODUCT_LAUNCH_POLICY_MENU_ITEM,
    RESPONSIBLE_DISCLOSURE_MENU_ITEM,
    SOCIAL_PAGE_MENU_ITEM,
    INTELLECTUAL_PROPERTY_MENU_ITEM,
    PROMOTION_TERMS_MENU_ITEM,
    ACCEPTABLE_MENU_ITEM,
    USER_LICENSE_MENU_ITEM

  ]
}

/* Bottom Footer Navigation Item */
export const ABOUT_MENU_ITEM = {
  id: 'nav.about',
  defaultMessage: 'About Us',
  href: '/#'
}
export const CONTACT_MENU_ITEM = {
  id: 'nav.contact',
  defaultMessage: 'Contact Us',
  href: '/#'
}
export const CUSTOMER_SERVICE_MENU_ITEM = {
  id: 'nav.customer_service',
  defaultMessage: 'Customer Service',
  href: '/#'
}
export const COOPERATION_INVESTMENT_MENU_ITEM = {
  id: 'nav.cooperation_investment',
  defaultMessage: 'Cooperation Investment',
  href: '/#'
}
export const SELLER_HELP_MENU_ITEM = {
  id: 'nav.seller_help',
  defaultMessage: 'Seller Help',
  href: '/#'
}
export const MARKETING_CENTER_MENU_ITEM = {
  id: 'nav.marketing_center',
  defaultMessage: 'Marketing Center',
  href: '/#'
}
export const MOBILE_VIEW_MENU_ITEM = {
  id: 'nav.mobile_view',
  defaultMessage: 'Mobile View',
  href: '/#'
}
export const FRIENDLY_LINK_MENU_ITEM = {
  id: 'nav.friendly_link',
  defaultMessage: 'Friendly Link',
  href: '/#'
}
export const SALES_ALLIANCE_MENU_ITEM = {
  id: 'nav.sales_alliance',
  defaultMessage: 'Sales Alliance',
  href: '/#'
}
export const XIUFU_COMMUNITY_MENU_ITEM = {
  id: 'nav.xiufu_community',
  defaultMessage: 'JiTeng Community',
  href: '/#'
}
export const RISK_MONITORING_MENU_ITEM = {
  id: 'nav.risk_monitoring',
  defaultMessage: 'Risk Monitoring',
  href: '/#'
}
export const PRIVACY_POLICY_MENU_ITEM = {
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: '/#'
}
export const XIUFU_CHARITY_MENU_ITEM = {
  id: 'nav.xiufu_charity',
  defaultMessage: 'JiTeng Charity',
  href: '/#'
}
export const CHINESE_SITE_MENU_ITEM = {
  id: 'nav.chinese_site',
  defaultMessage: 'Chinese Site',
  href: '/#'
}
export const MEDIA_IR_MENU_ITEM = {
  id: 'nav.media_ir',
  defaultMessage: 'Media & IR',
  href: '/#'
}

export const HOME_FOOTER_ITEM = {
  id: 'nav.home.footer',
  defaultMessage: "Home",
  href: "/"
}

export const SHOPPING_GUID_FOOTER_ITEM = {
  id: 'nav.shopping_guide',
  defaultMessage: "Shopping Guide",
  href: "http://gxjiteng.cn/index-home_view_index_122.html"
  // href: "/helpcenter/Social%20Pages%20Terms"
}

export const AFTER_SALE_FOOTER_ITEM = {
  id: 'nav.afterSale',
  defaultMessage: "After-sales Service",
  href: "http://gxjiteng.cn/index-home_view_index_123.html"
  // href: "/helpcenter/Social%20Pages%20Terms"
}

export const PAYMENT_METHODS_FOOTER_ITEM = {
  id: 'nav.payment_method',
  defaultMessage: "Payment Methods",
  href: "http://gxjiteng.cn/index-home_view_index_124.html"
  // href: "/helpcenter/Social%20Pages%20Terms"
}

export const BOT_FOOTER_NAV_ITEMS = [
    HOME_FOOTER_ITEM,
    SHOPPING_GUID_FOOTER_ITEM,
    AFTER_SALE_FOOTER_ITEM,
    PAYMENT_METHODS_FOOTER_ITEM
];
// export const BOT_FOOTER_NAV_ITEMS = [
//   ABOUT_MENU_ITEM,
//   CONTACT_MENU_ITEM,
//   CUSTOMER_SERVICE_MENU_ITEM,
//   COOPERATION_INVESTMENT_MENU_ITEM,
//   SELLER_HELP_MENU_ITEM,
//   MARKETING_CENTER_MENU_ITEM,
//   MOBILE_VIEW_MENU_ITEM,
//   FRIENDLY_LINK_MENU_ITEM,
//   SALES_ALLIANCE_MENU_ITEM,
//   XIUFU_COMMUNITY_MENU_ITEM,
//   RISK_MONITORING_MENU_ITEM,
//   PRIVACY_POLICY_MENU_ITEM,
//   XIUFU_CHARITY_MENU_ITEM,
//   CHINESE_SITE_MENU_ITEM,
//   MEDIA_IR_MENU_ITEM
//
// ];

export const BOT_FOOTER_TEXT = [
  {
    id: "bot-footer.text-one",
    defaultMessage: "JiTeng Network Security No. 11000002000088 | JiTeng ICP Certificate No. 070359 | Internet Drug Information Service Qualification Certificate Number (JiTeng)-Operational-2014-0008 | New Start JiTeng Zi No. 120007",
    values: null
  },
  {
    id: "bot-footer.text-two",
    defaultMessage: "Internet Publishing License Number New Net Certificate (JiTeng) No. 150 | Publication Operation License | Network Culture Operation License JiTeng Net Wen [2014] No. 2148-348 | Illegal and Bad Information Report Tel: 4006561155",
    values: null
  },
  {
    id: "bot-footer.text-three",
    defaultMessage: "Copyright © 2019-2020 JiTeng xiufu88.com All rights reserved | Consumer Rights Protection Hotline: 4006067733 Business License | (JiTeng) Net Equipment Platform Preparation (2018) No. 00003 | Business License",
    values: {year: new Date().getFullYear()}
  }
];

/* Profile Menu Items */
const PROFILE_SETTING_MENU_ITEMS = {
  id: 'profile.profile-setting',
  defaultMessage: 'Profile Setting',
  href: PROFILE_PAGE,
  children: [
    {
      id: 'profile.security',
      defaultMessage: 'Security',
      href: PROFILE_SECURITY_PAGE
    },
    {
      id: 'profile.personal-information',
      defaultMessage: 'Information',
      href: PROFILE_INFORMATION_PAGE
    },
    {
      id: 'profile.personal-transaction',
      defaultMessage: 'Transaction',
      href: PROFILE_TRANSACTION_PAGE
    },
    {
      id: 'profile.shipping-address',
      defaultMessage: 'Shipping Address',
      href: PROFILE_SHIPPING_ADDRESS_PAGE
    }
  ]
}
const PROFILE_ORDER_MENU_ITEM = {
  id: "profile.order",
  defaultMessage: "Order",
  href: '',
  children: []
}
const PURCHASED_STORE_MENU_ITEM = {
  id: 'profile.purchased-store',
  defaultMessage: 'Purchased Store',
  href: '',
  children: []
}
const CART_MENU_ITEM = {
  id: 'profile.cart',
  defaultMessage: 'My Cart',
  href: '',
  children: []
}
const PROFILE_WISHLIST_MENU_ITEM = {
  id: 'profile.wishlist',
  defaultMessage: 'Wishlist',
  href: '',
  children: []
}
const EVALUATION_MENU_ITEM = {
  id: 'profile.evaluation',
  defaultMessage: 'Evaluation',
  href: '',
  children: []
}
const REFUND_MENU_ITEM = {
  id: 'profile.refund',
  defaultMessage: 'Refund',
  href: '',
  children: []
}
const HISTORY_MENU_ITEM = {
  id: 'profile.history',
  defaultMessage: 'History',
  href: '',
  children: []
}
export const BUYER_PROFILE_MENU_ITEMS = [
  PROFILE_SETTING_MENU_ITEMS,
  PROFILE_ORDER_MENU_ITEM,
  PURCHASED_STORE_MENU_ITEM,
  CART_MENU_ITEM,
  PROFILE_WISHLIST_MENU_ITEM,
  EVALUATION_MENU_ITEM,
  REFUND_MENU_ITEM,
  HISTORY_MENU_ITEM
]

const STORE_MANAGEMENT_MENU_ITEMS = {
  id: 'profile.store-management',
  defaultMessage: 'Store Management',
  href: '',
  children: [
    {
      id: 'profile.open-store',
      defaultMessage: 'Open Store',
      href: ''
    },
    {
      id: 'profile.store-setting',
      defaultMessage: 'Store Setting',
      href: ''
    },

  ]
}
const TRANSACTION_MANAGEMENT_MENU_ITEMS = {
  id: 'profile.transaction-management',
  defaultMessage: 'Transaction Management',
  href: '',
  children: [
    {
      id: 'profile.receive-order',
      defaultMessage: 'Receive Order',
      href: ''
    },
    {
      id: 'profile.evaluation',
      defaultMessage: 'Evaluation',
      href: ''
    }
  ]
}
const SHIP_MANAGEMENT_MENU_ITEMS = {
  id: 'profile.ship-management',
  defaultMessage: 'Ship Management',
  href: '',
  children: [
    {
      id: 'profile.ship-ship',
      defaultMessage: 'Ship',
      href: ''
    },
    {
      id: 'profile.ship-tools',
      defaultMessage: 'Ship Tools',
      href: ''
    }
  ]
}
const PRODUCT_MANAGEMENT_MENU_ITEMS = {
  id: 'profile.product-management',
  defaultMessage: 'Product Management',
  href: '',
  children: [
    {
      id: 'profile.release-products',
      defaultMessage: 'Release Products',
      href: ''
    }
  ]
}
const CUSTOMER_SERVICE_MENU_ITEMS = {
  id: 'nav.customer_service',
  defaultMessage: 'Customer Service',
  href: '',
  children: [
    {
      id: 'profile.refund-products',
      defaultMessage: 'Refund Products',
      href: ''
    },
    {
      id: 'profile.violation-history',
      defaultMessage: 'Violation History',
      href: ''
    }
  ]
}
export const SELLER_PROFILE_MENU_ITEMS = [
    STORE_MANAGEMENT_MENU_ITEMS,
    TRANSACTION_MANAGEMENT_MENU_ITEMS,
    SHIP_MANAGEMENT_MENU_ITEMS,
    PRODUCT_MANAGEMENT_MENU_ITEMS,
    CUSTOMER_SERVICE_MENU_ITEMS
]

// Mobile Drawer Menus

export const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE,
};

export const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE,
};
export const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE,
};
export const AUTHORIZED_MENU_ITEMS = [
  PROFILE_MENU_ITEM,
  {
    id: 'nav.checkout',
    defaultMessage: 'Checkout',
    href: CHECKOUT_PAGE,
  },
  {
    id: 'alternativeCheckout',
    href: CHECKOUT_PAGE_TWO,
    defaultMessage: 'Checkout Alternative',
  },
  ORDER_MENU_ITEM,
  {
    id: 'nav.order_received',
    href: ORDER_RECEIVED_PAGE,
    defaultMessage: 'Order invoice',
  },
  {
    id: 'nav.terms_and_services',
    defaultMessage: 'Terms and Services',
    href: TERMS_AND_SERVICES_PAGE,
  },
  {
    id: 'nav.privacy_policy',
    defaultMessage: 'Privacy Policy',
    href: PRIVACY_POLICY_PAGE,
  },
];
// category menu items for header navigation
export const CATEGORY_MENU_ITEMS = [
  {
    id: 'nav.grocery',
    href: GROCERY_PAGE,
    defaultMessage: 'Grocery',
    icon: 'FruitsVegetable',
    dynamic: true,
  },
  {
    id: 'nav.grocery-two',
    href: GROCERY_PAGE_TWO,
    defaultMessage: 'Grocery Two',
    icon: 'FruitsVegetable',
    dynamic: false,
  },
  {
    id: 'nav.bakery',
    href: BAKERY_PAGE,
    defaultMessage: 'Bakery',
    icon: 'Bakery',
    dynamic: false,
  },
  {
    id: 'nav.makeup',
    defaultMessage: 'Makeup',
    href: MAKEUP_PAGE,
    icon: 'FacialCare',
    dynamic: true,
  },
  {
    id: 'nav.bags',
    defaultMessage: 'Bags',
    href: BAGS_PAGE,
    icon: 'Handbag',
    dynamic: true,
  },
  {
    id: 'nav.clothing',
    defaultMessage: 'Clothing',
    href: CLOTHING_PAGE,
    icon: 'DressIcon',
    dynamic: true,
  },
  {
    id: 'nav.furniture',
    defaultMessage: 'Furniture',
    href: FURNITURE_PAGE,
    icon: 'FurnitureIcon',
    dynamic: true,
  },
  {
    id: 'nav.furniture-two',
    defaultMessage: 'Furniture Two',
    href: FURNITURE_PAGE_TWO,
    icon: 'FurnitureIcon',
    dynamic: false,
  },
  {
    id: 'nav.book',
    defaultMessage: 'Book',
    href: BOOK_PAGE,
    icon: 'BookIcon',
    dynamic: true,
  },
  {
    id: 'nav.medicine',
    defaultMessage: 'Medicine',
    href: MEDICINE_PAGE,
    icon: 'MedicineIcon',
    dynamic: true,
  },
];

export const MOBILE_DRAWER_MENU = [
  HOME_MENU_ITEM,
  ...AUTHORIZED_MENU_ITEMS,
  HELP_MENU_ITEM,
  OFFER_MENU_ITEM,
];

export const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, HELP_MENU_ITEM];
export const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];

export const LANGUAGE_MENU = [
  {
    id: 'ar',
    defaultMessage: 'Arabic',
    icon: 'SAFlag',
  },
  {
    id: 'zh',
    defaultMessage: 'Chinese',
    icon: 'CNFlag',
  },
  {
    id: 'en',
    defaultMessage: 'English',
    icon: 'USFlag',
  },
  {
    id: 'de',
    defaultMessage: 'German',
    icon: 'DEFlag',
  },
  {
    id: 'he',
    defaultMessage: 'Hebrew',
    icon: 'ILFlag',
  },
  {
    id: 'es',
    defaultMessage: 'Spanish',
    icon: 'ESFlag',
  },
];


export const FOOTER_SERVICE_ITEMS = [
  {
    id: 1,
    image: FooterImage1,
    title: "正品保障",
    text: "正品行货 放心选购"
  },{
    id: 2,
    image: FooterImage2,
    title: "便宜运费",
    text: "廉价国际运输"
  },{
    id: 3,
    image: FooterImage3,
    title: "售后无忧",
    text: "3天无理由退货"
  },{
    id: 4,
    image: FooterImage4,
    title: "帮助中心",
    text: "您的购物指南"
  },
];
