import React from 'react'

export function Setting({color="currentColor",width="24px",height="25px"})
{
    return (
        <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1411 13.4359C19.1771 13.1359 19.2011 12.8239 19.2011 12.4999C19.2011 12.1759 19.1771 11.8639 19.1291 11.5639L21.1571 9.9799C21.3371 9.8359 21.3851 9.5719 21.2771 9.3679L19.3571 6.0439C19.2371 5.8279 18.9851 5.7559 18.7691 5.8279L16.3811 6.7879C15.8771 6.4039 15.3491 6.0919 14.7611 5.8519L14.4011 3.3079C14.3651 3.0679 14.1611 2.8999 13.9211 2.8999H10.0811C9.84108 2.8999 9.64908 3.0679 9.61308 3.3079L9.25308 5.8519C8.66508 6.0919 8.12508 6.4159 7.63308 6.7879L5.24508 5.8279C5.02908 5.7439 4.77708 5.8279 4.65708 6.0439L2.73708 9.3679C2.61708 9.5839 2.66508 9.8359 2.85708 9.9799L4.88508 11.5639C4.83708 11.8639 4.80108 12.1879 4.80108 12.4999C4.80108 12.8119 4.82508 13.1359 4.87308 13.4359L2.84508 15.0199C2.66508 15.1639 2.61708 15.4279 2.72508 15.6319L4.64508 18.9559C4.76508 19.1719 5.01708 19.2439 5.23308 19.1719L7.62108 18.2119C8.12508 18.5959 8.65308 18.9079 9.24108 19.1479L9.60108 21.6919C9.64908 21.9319 9.84108 22.0999 10.0811 22.0999H13.9211C14.1611 22.0999 14.3651 21.9319 14.3891 21.6919L14.7491 19.1479C15.3371 18.9079 15.8771 18.5839 16.3691 18.2119L18.7571 19.1719C18.9731 19.2559 19.2251 19.1719 19.3451 18.9559L21.2651 15.6319C21.3851 15.4159 21.3371 15.1639 21.1451 15.0199L19.1411 13.4359ZM12.0011 16.0999C10.0211 16.0999 8.40108 14.4799 8.40108 12.4999C8.40108 10.5199 10.0211 8.8999 12.0011 8.8999C13.9811 8.8999 15.6011 10.5199 15.6011 12.4999C15.6011 14.4799 13.9811 16.0999 12.0011 16.0999Z" fill={color}/>
        </svg>

    )
}