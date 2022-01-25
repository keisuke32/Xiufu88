import React from 'react';
export const RankingIcon = ({
                          color = 'currentColor',
                          width = '18px',
                          height = '18px',
                      }) => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <mask id="rankingMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                <rect width="21" height="21" fill="url(#rankingPattern)"/>
            </mask>
            <g mask="url(#rankingMask)">
                <rect x="-1.10547" y="-4.4209" width="27.6316" height="27.6316" fill="#4F4F4F"/>
            </g>
            <defs>
                <pattern id="rankingPattern" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#rankingImage" transform="scale(0.0025)"/>
                </pattern>
                <image id="rankingImage" width="400" height="400" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAABHNCSVQICAgIfAhkiAAAHRBJREFUeJzt3Xl8VPW9//H358xMmGSSsCckQF1KXdrqba/3Vn91wdYVC+5glbp7EavWfb21rfVaaxURNwQLihU3RCpre7X+qlbbq7d2sdq6IFQhbAnZl5nMnO/9A1FRVPJNyGRmXs/Hgz8Mc875PNTklbNLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgcFi2B0ABOHP8IB12+FA1dQTZHqVglMdD/fpXGzRr3sZsj4L8Fc32ACgAAyonBNUjLld5c0m2RykYpWVt4YDKn0m6O9ujIH8REGx/YZhQOlNlmTCe7VEKhUtnOhSGiWzPgfzGIQVsf2ZOpky2xygopozMXLbHQH4jIAAALwQEAOCFgAAAvBAQAIAXAgIA8EJAAABeCAgAwAsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPDC49yBjwqdXHFxUiXxtyUX++wFrFPt7RXW1j5YAb+ToXAQEGCz0MklildpWOVt4cw5i/XoL1vk3Ge/tdPM6YhDzoucduLlamzqhUGBvoGAAJvCsVxVw24MZ93/lObOX6c1a9q6tI76ho2KRLbTgEDfREBQmMJQSpTIxfs9a/0H3BHedf+LuvPONZJSXusz49gVCg4BQWHZHI6qyufC6bN/qgVL/6x3310n8cZEoKsICApDGEqJhMKqyvvc3bPu1fwly7VqVY0kXvsKeCIgyG9hKFeSaHRVlfe6u38+X48t/rtqauqyPRaQDwgI8tOmcLSqqvKn4R0z5utX/79Gb7/dmO2xgHxCQJB3XJjpcCNG3ubumztbDz++SuvWtWZ7JiAfERDkn0GDi9yUaSv1wLzXsz0KkM+49BB5x1paAjt23G4aPTqe7VmAfEZAkH/SadmI4Ttp8ODKbI8C5DMCgvyUCXeX0jtnewwgnxEQ5CcLdlRLa3WXllnw8Od1yCFf2E4TAXmHgCAvWWNDNDj3jFHb9OH7b9/JHvz5ncFOw3+lykHjtvNoQN7gKizkp86MXNWwHXXkkWVauLB5q5+5//adLFp8qQ2rPETJ5Oesrb2fOtPlvTwpkLMICPKTSZYJd3WRcGdJf9ni7+67fV+LFZ9jVRV7K5kaae3t/T60HM/EArYRAUH+smBntSeHa3NAZt3x/4J4/FJVVe6lZHKEtXfw/HWgGwgI8ldj49DgxGOrw0O+sUswrOIGVVXuZanUDmpvz/ZkQF4gIMhb1tkZuMqhPwqqh7VbJhxFOICeRUCQv8xkmXC4MmG2JwHyEpfxAgC8EBAAgBcCAgDwQkAAAF4ICADACwEBAHghIAAALwQEAOCFgAAAvBAQAIAXAgIA8EJAAABeCAgAwAsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeCEgAAAvBAQA4IWAAAC8EBAAgBcCAmwWBFJra5jtMYBcQUCAzZqaZSceX57tMYBcQUCAzVIpaZfPV2js2JJsjwLkAgICbGYmpTqLVFwcy/YoQC4gIMAWnFNRi8v2FEAuICAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeCEgAAAvBAT4sCDIaKOSXV6urS2tgG8nFJZotgcA+hJrbkm4cYcO11d2blRncWSbFspkmm3UiP5qat7O0wF9CwEBPiyZOiAYtcNcfXFUWs5sm5YxpdSZ2lnJ5KYHMgIFgoAAH2JmQ9WZHqrOtM/CPT8Q0Idx0BYA4IWAAAC8EBAAgBcCAgDwQkAAAF4ICADACwEBAHjJ6n0g9r1J96hfvEQum1MUFlde9idNn32f1qypzfYsAHJbVgMSHHbQWSorkxwF6S1u6JDqcPGT8wkIgO7KakBca1uDWTCAgPSieL8WdXaG2R4DQO7jHAgAwAsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeCEgAAAvBAQA4IWAAAC8EBAAgBcCAgDwQkAAAF4ICADACwEBAHjJ6itt+7QwlAYNlCIROalNznXIzD78CUmDTDI1NEqZTLYmBYCsICCbvRcMF4m8JqflrrRkvbtp2iuqq0vJqUYuSMm5DwIShKFk5ZINtHPOGK6qykrLhLvI6evW2FikzrS0RW8AIL8UdkBCJzdoQIMikReVSDwf3nzrctXWr1DaahSNNmrJkvptWY1b+qQ0Zky5k0bIMrsHk077koZX7W8bNx6sNHsmAPJT4QUkdNKgAXJB8IpLJBa4m6e9pHUN/9Cvf/1Wt9a7bFmTpNckvRYu/e/5OvqIXYJTT/qahlcfY/UNxyqd7pHxAaCvKJyAhE4aPFAukXg6vOm2x7Rx48ta+uT/bLft/XLpG+Evl76hMWN+G0yauFDDqy+z+oYvbTq0td22CgC9pjAC4pzcyOpXw5vvuEftrb/W/MX/6LVtL1u2Kly2bI6O+tabdtpJ5wXlpSeqPUlEAOS8vA+IC12zG1H1c3fnjMf0wCMvZG2QJ5a84GprVoZXXLYqSCQuIyLIQzFd9N2DrLV9TLYHKSimlGtL365f/OKd3t50/gekJH6ru3XWTzTngY5sz6Ln/1Tjvv/Ta8Prrkxbackl1p4s4kot5I299orZ2ad/I6it+162RykoZsq0tcwnINuBlcQzbs6cMNtzvO+vf211V/3XT3Tl+buoouIYy2S4mRP5IbbOWWNTmxqbsj1JQXGmFrV1ZOUqnfz/4dXSPllXXzg422Ns4bXXWlxb5w8U7/eGnMv2NADgJe8DYsnksOCE4w6UFMv2LFuY/L3X1Nh8i4sXNxIRALko7wMiM6mp9RJJpdke5aPCW678hVu9+nVF8/5IIoA8VBA/uayjYy9desFI3Txtm+4s13+csotCDZOFO8oFRbL3dhGcRRVquQaUrtTUu7p346EkPfPPDnfE2rlueNUulskM6Pb6AKAXFURAlEzKTjvh2+7maW9Kat/qZ84+/YvKpA+2Y8ftZgP6f0mZcIjMquUUlWnzMaaonN5VSXGNiwavuFTmKU2bvrBbs1UMuF/R6LnqSA7giiwAuaQwAmImW7v+DPefF92p66eu3uLvJp28nx199FgbULafwsw+1twaUX3jp61tFzU27mLjjjjQlSSOcrHofq4p+SPNnNnmNdvpFzW4+6e/pIqKnSyT6VvnaQDgUxRGQCRZR7JSE8f/u66fWiPJ6Zgjdg8mn3WUykpPssamPVTf0IWVmdTcImtq/pwdOeayMFHa3w0ceLluvPFTy/NJXM36562qeowymUE+ywNANuT/SfTNzBTUrD9b55wzQKdNPCk4+4y7TLrB6hv2UOh5m8h7IQlq1kwKTj/mPyQVe60nEntZznnFBwCypXACIkkdyYNt4pFTgrNOvtWcDuyxJ+QGJq1ee7G+f/nnvJYvH/yKimLNXM4LIJcUVEDMLBo0Np9ujU1Dvfc6PmndbcmqYOLx+2vUqH5dXvjss9vcP9/p4HJeALmkoAKyXQUm19C4n1pby7yWr1nTSUAA5BIC0oNM2kPFKvFaOBYzDmEByCUEpGdVqDPqdyluqtNxHwiAXMIxkx7l2hUEXidXbIeRMV57C2xnkYjUv/z9f3RSnaSIpCLTe0cPMhmpvkEK+P36sxCQnvWuMplUl5eadWOZqquK1doq9kKAHhKJyJWXN8u0StI6F9hyrd3Q4qbcue69T6Rk7m1JEZnFJBuu0MU0ZFCRfffM3ay1bbDkdrRM+AXVN2662hJbICA9JQzlBg58SfF4c5eXbUiOUrqzhHgAnpykWESurCwl6WUXC163NeveCKc98LZCrZHCDVLRCs2bt/VHGX10dW3pwa61dZCCcKQGD9jVJp+5p7W17W1h+FVi8gEC0lMSJXIz7n1ab73V0uVlXWQvyfpvh6mA/OacFIvKDej/nFuz7g9u9gN/Uxj+VSp6y82b1/Xvxc3uv79Omw5vvSnpaVfXEnHq3EuDBx4YTD5rP2tpHkdICEiPcYniDZo99w1JXT4HYunOfWXG03iBbeWcXCyWdgP7P2Sra34f3vfgs3po/qvbbXvz5mUkvSjpxbA59aAS0WeCyWecbDVr/6WQjxwQkJ4QhnJl5TNUVFTb5WXHfK3chlfvaek0/y2AbeCcS6tf/H/V0nyPu3/+Y27u3N59h+7cuaskTQnLEv9jEyecH9Ssm1CoEeGHVg9wJcV1btbsh7RhQ9d3mY884RCNHD5CLS2cQAe2RTSWcatrnnWnnTM7q3NMuet3LhV5PTzt+JpgzdoLC/H7l+vUuisMpZHVt2jKjLd9Fg/Kyk9SR8egQvyfD/Biikluj2yPIUm6/fYNbuHTl4RVlTcV4o3ABKQ7Qic3vOr5cOasn0vq6PLy06d8VSOq9+HwFbDtrLMzsB1GjtK9dw7L9iySpGuvDd2MB3/kqiqXFlpECEg3uJJ4XTj38at1890bfJa3svIr1NExlL0PoAvMpM50f9XVH5LtUd43c2Zb+MDcy11xfG22R+lNBMRX6KTqqps0ZdoLkrr+a8fMKV+3EdXfsHSatxACXRUEgyyTOSjbY2xh6j3/0LDK2wppL4SA+Aidwuphs8Lb77tTUtefP7LPPsVBovwHam8fzN4H0HWWTkdtePWXNXYvv4eXbh+Z8K57HnTF8VXZHqS3cOy9q0InV125yD206GrddZfXjUrB1Recq5L4AdaRihAQwEM6LVVXDdHRp35Zi//44id+bvToqCoqPq+ohip0O8jCQApGSIrIhetl2ihntVJ0pR55ZGW357pz1gY3ccIC60ie3+115QAC0hWhk6uqfDl8eP5Fuvn29V7rmHHr3iovvdha2ouJB+DJTArTg987D7JlQMaPL1bgDlTl4FF25sl7WGvrKEkVku2oTfeOv//qaSfVyalW0WCFO/mYF92D8xfqwXl/7MZkSde/fJk2NpxfCN/fBGRbbY7HvAUX6abbl3ut45t7V1oicb06UsOU//9vAduVpTOlNrx6//fPOJx5yldVWvI1O+M7+1hr60GWCUfqnVWf+lRdkwZr059dLRo73F0w+XBNPOHW8FvHP+Q5VkbTZ/1DR4+Vkl1/rmquISDbInRywyr/FM5/4mLdOO1Zr3WMHh23i875oRUXj7aOpBEQoJvSaVlVxefdvPsO1bKn/i24YNI4NTbvbe+ssvej0ZVHsmcystq6r7l40V3BL6YH4cnnzPWa646fd7hvH19rydQQr+VzCCfRP4t7Lx6PP3GRbpj6jO9qgkvPudDi/SZZRzJKPIAeYCa1dwwPyspnRM48+Xr756p9rKnZuvseD0ulByhadIXGjvYLQGUio9DVdGuIHEFAPs2meLzc7XgsevgsFcevslRnhHgAPcfMii2T3lENjT33AqgwlIYOHqmJp+7vtbyTyTxfbZ1jCMgncU6usmLTYatuxEOLHj5U8fiNlkyVf/aHAfQJmUw/a2z8utey61sjkvWNu+S3MwKyNZvj8fjCbu15aNHDhwbx+N2WSg3qwekAbHcWlcnv+/bs0wdYMlnawwP1SQTko3o+Hjv14HQAeoVLmul1jwWjwQVn76GOrj8aLxcRkA9zTq5y6NPh40+c3+14FMenEw8gR0WiLWFpYonHksVuY8OxhXAPiMRlvB/YtOexJHxiwUW64bY3vdezec8jSTyAnBSLyaVSD+ukSV1/w+GkkwdaMnXEdpiqT2IPRPogHvMen6z/8o9HsOjRk4J4/B72PIDc5GIxF2bS97qpM2/wWDywC86dbO3tBXH+Q2IPRHJO4bCKB9zjT1yun92+xnc1weJHJyleNM2SqXhPjgegF0Qicv3L/6r6xkfcXXNm6sknu/566klnfN3WrrukUA5fSYUeEOcUVlbc7m686yLNm5fxWsfBe/UPLr7iZMViPyMeQB8RiUhln74j4OQ2SlanIHjD1W38i5s9Z4nueeAFr+2dd0Z1cOapP7HVa4sISL5zTq68fKNLFN/nZjx4pXc89t33c3bRBZcpGjvHUp2RHp4SgI8gkKvduNY9suCBT/yMc0kX2N8Var1c5BXNmeP/IqjJJ1fYGafeZKvX7l9I8ZAKMSDOyVUMrQ8ffPT7uvXu6d7rOW7cnnbqxP8MioomKJX/D00DckY0Krdm/Qp37wOXbfdtnXPWnjbplMuCVWtOUlBY8ZAKLSDOyQ0duiJcsPhG3Xr3DO/1LHn0kGDIkGusvn5/4gH0Mc5J0cj2fdPnqaPjCkYcH0w6eZKtWrN/IcZDKqSAbNrz+FO4YMmPdcMtv/Rax+jR0eD6qyarqOgmS6XiKk307IwtrVLG72gagF5y2nf2t4snT7Dm1tNs1drSQo2HVCgB2bTn8Zdw0bILdMOU57zXs+uu5h58bLg6U3Oc1CHzeBf6p7D99z1AQwb/i4Uh51OAvsN0yinVsvSBdvG5/24tLUfYP1d9QUGgQo6HVAgBcU5uyJCl4cLF1+v6W/yusNhs5sxOJ13VQ5N93M47XWtVlbsrmSr+7A8D6DVf2y0RGTNmtFu95khJQwvtZPknye+AvB+PRWfpJ7d63+PRayKRUjke+A70MU7nXf1G5tJ3vq/mtnuVKN3TTjzhQGtr3duam3cq5JjkdUBcv37PhosWT8qJeADo226+e72k9ZJ+71rSs115v8NtwjHfsY6OcdbUXFyIIcnrgFi83x26furqbM8BIM/MnNkpaZFrSv7GlfabFEw4+nSrrd2z0CKS1wFxZjFJMUmd2Z4FQC/K9NLljDNntkm6NUzEXwrGHn6Nbag9rJAiktcBUeh4WCRQaMJQGjJwsMYefoRkH7+iMXCmjJJy6XcUsQ41pd7VM8+ku7XN6256PgzTZwZHjp1rG2pHF0pE8jsgAApPJiMbVrmTff/S+7T1n3EmqV3S3xWJtLm16153ifhfFAv+rCeWveK93eunrg6DonODsYc+ZhtqdyuEiBAQAHnHMpmI6jYO/ZSPDJBUJUkWi43VDy6Ti0Ze0FmnPRLeM3upFv76La8NX3fjq6Flrgz23+9hS+X/w1U5xAOgsGUyUt1G2boNX7dYdFpwzZW3afH8g73X9+Obl7jKIfPlevQ+4z4pvwNillEunUDPhGG2RwAKWiYjW79hTFAUmamlj37Tdy1u3oKprl9RW4/O1gfl9yGsVGdCJ31roDakUkql+voByQ4NHdxPNATIOutM7RT0i00PH7r3MJ14+souLu503ZS/6/lDnlSq86jtMV9fkd8BaWv9tp13wb8pEmQUur4dEFOrNTYfoFRnrNCfrwP0CenM561+46VOOs9j6ZRKSh9VfeNR+XwyPa8DYkFwkNU3HJTtObqEeAB9gjlF1L98jBv9xVI981pLFxdPh48u+HPkm/tJqdw5it5V+X0OBAB8haFUOTShyZfu6bX8DVNqXXG8voen6lMICAB8kkymKGho3MVr2dJSJ+dW9fBEfQoBAYBPlglNXT18tYlzJmd5fZqAgADAJzHrVEnJi/7LK68vqyQgALAVLjCnpubVOuXsd7xWkJBJKuvZqfoWAgIAWxOLZtTSNtt7+fWtTqbhPThRn0NAAOQcJ9fqIpEXXWnpKpWUqMcfGxKNynWmHwtfWDLHcw2BJhy7s6U6P/404DxCQADknqKiVWEqeUb4+MILw9/+bq6rHPKaKylxPRESF406hZl5bvajF2nmYr/HkVQpbtdeMVZt7d2epy/L6ysEAOShIJDqG+o04fRXJb3qpPkuzIy2WPRgHX7wv6qjY5RkIy0TFqu1Vdt0J3gQSIkSOQv+5lqal4azH52qefPWes+4RjGrq/9WPt+FLhEQADnGxaIp9/bKl7b44nU3PeOkZ1x9R7Fcx76S9rT+A75s3zp4hNqTQ2Suv2RDJBeVzEnOJGXkrFFB0KDGhpXu8UWvuiC2ULfc9kI3RzRNOHZ3S6W+0s319HkEBEBucdrgYtH/3urfTZ3aLukpSU85SS7pBqqjeScprJLZDpL6KXROgZmkTlm4RkGkRq++/bKWLUv2yHynHtU/uPjiH+jd1du295PDCAiA3BKJNKkk/r/b9Nmf/rReUq8+TiS48poxtnz5mHyPh8RJdAA5xAVBqA21K3TOZeuzPctWffu4r2rNmmsKIR4SAQGQS2Kx1vDtFc9me4ytOnFcZXD1xTdYa9vu2R6lt3AIC0DuCII6lZX9NttjfMz48YPs6guvsZXvHqagcH4vJyAAckMQSLW167Thspc++8O9aOL4Xe3KC78XrHz3u4UUD4mAAMgRLhYL3RtvvaVr+9ADCo8eNza44sLzbeW7hxZaPCQCAiBXpNNOFRWV+sYB31TTm3/QH9f43SXeE8Yf9ZXgh1cdpqamq+yf7/YvxHhIBARAjrB0OmI7jjzYTbnuX91bK2e6O+/5jRT5m555xv+O8a4YPz6idPuXg+uv+YYaGk+xFSu/qiBQocZDIiAAcoWZ1JmW1awdZP3LrnQ/u/Y8F4s+YW+vfDq8bcabcpGVeu651VIPHuIaPz6ide/srMEVI4MfXrKvmpqOseUrCj4cmxEQALnFTEqnZbV1pebcRJWVTQx+dt06FUV/pxXv/DmcdvcbMq1XGGxUkGpSu9uowRuTWvbWJ99pPmZMPzU1FalfplxplSsSrdCgIdXBDy8ZpdaWA5QJv2IrVg4hHFsiIABy1+aY1NVVyrnjVJo4LnLTj+Xk6iRbIanGOVuhWKTZJr1TE94y/eN3pVdWFtmPrxil5paEXFBt5qolt5tlwgqtWPlBMAjHxxAQAPnhvZiotk4mDdamPzJJcpJKEorcfN3Hl8tkpOUrtx4IovGpCAiA/Gd6Py5bRSi88G8NAOCFgAAAvBAQAIAXAgIA8EJAAABeCAgAwAsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeCEgAAAvBAQA4IWAAAC8EBAAgBcCAgDwQkAAAF4ICADACwEBAHghIAAALwQEAOCFgAAAvESzuvV4UULxuORcVscoKMXFcRWF1qvbjEZjVhxPKJ3u1c0WMiuOJxSNxnp3qyPk4sVFFo/37mYLnVlCYWdWdgayGhD34stLXLy4NJszFJzy8j9ofVN7r27zreXLw+d+v1jt7fxk6S3FxR16a/nyXt1mbW3ofvvcP8Lm5qd6dbsFz9rV2dqQ7SkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdM/W30w3dGipSkp40RMAYJO2thZt2NDy4S9tPSDPP3WcRTVeoevdV58CAPqewJyTHtPeBz/24S9v9ZW2trH2K0EQnNA7kwEA+row1NtO2iIgW30Ru5lLOcn1zlgAgL7MSc4Cl/zo17caEAAAPgsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeCEgAAAvBAQA4IWAAAC8EBAAgBcCAgDwQkAAAF4ICADACwEBAHghIAAALwQEAOCFgAAAvBAQAIAXAgIA8EJAAABeCAgAwAsBAQB4ISAAAC8EBADghYAAALwQEACAFwICAPBCQAAAXggIAMALAQEAeNl6QEIzk6yXZwEA9EEmmQs/3oToVj8djXS4QI1yRkQAoNCZcxaow33ky1sNSLh+w2+CUA0yR0AAoNA5c2GgP2Z7DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPSQ/wM7O//RhJiYkgAAAABJRU5ErkJggg=="/>
            </defs>
        </svg>
    );
};