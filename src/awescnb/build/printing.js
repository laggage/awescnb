// 控制台打印
import { prettyLog } from '@tools'

const log = [
    {
        str:
            '# # # # # # # # # # # # # # # # # # # # # # # #',
        color: '#1e90ff',
    },
    {
        str: '# Themed with awescnb-geek!',
        color: '#eb4d4b',
    },
    {
        str: '# Used by laggage',
        color: '#f0932b',
    },
    // {
    //     str: '# 👌 使用 awescnb 快速安装、构建、分享皮肤',
    //     color: '#a29bfe',
    // },
    // {
    //     str: '# 📧 QQ群:541802647(活跃)',
    //     color: '#55efc4',
    // },
    // {
    //     str:
    //         '# 📑 文档:https://www.yuque.com/awescnb',
    //     color: '#fd79a8',
    // },
    // {
    //     str: '# 📌 码云:https://gitee.com/guangzan/awescnb',
    //     color: '#7ed6df',
    // },
    // {
    //     str:
    //         '# 🌏 GitHub:https://github.com/guangzan/awescnb',
    //     color: '#f368e0',
    // },
    {
        str:
            '# # # # # # # # # # # # # # # # # # # # # # # #',
        color: '#1e90ff',
    },
]

export default () => {
    for (const { str, color } of log) {
        prettyLog(str, color)
    }
}
