import './index.scss'
import { getBlogname } from '@cnblog'
import { isVisitor } from '@constants/cnblog'
import {
    cnblogHome,
    index,
    newPost,
    send,
    rss,
    admin,
} from '@constants/links'
import {
    getLinksOptions,
    getThemeOptions,
    getGithubOptions,
} from '@config/extra'

const links = getLinksOptions()
const githubOptions = getGithubOptions()
const { avatar } = getThemeOptions()

const buildLeftside = () => {
    const el = $(`
    <div id='left-side'>
        <div class='logo'>
            <a href="https://www.cnblogs.com/">CNBLOG</a>
        </div>
    </div>`)
    if (links.length) {
        const favourite = `
        <div class="favourite side-wrapper">
            <h3>FAVOURITE</h3>
            <ul></ul>
        </div>
        `
        el.append(favourite)
    }
    $('#home').append(el)
}

const buildCustomLinksToLeftSide = () => {
    for (const { name, link } of links) {
        $('#left-side').find('ul').append(`
            <li><a href="${link}" target="_blank">${name}</a></li>
        `)
    }
}

const removeHeaderToLeftside = () => {
    const navList = [
        {
            icon: 'fa-blog',
            title: '博客园',
            url: cnblogHome,
            allowVisit: true,
        },
        {
            icon: 'fa-home',
            title: '首页',
            url: index,
            allowVisit: true,
        },
        {
            icon: 'fa-pen-square',
            title: '新随笔',
            url: newPost,
            allowVisit: true,
        },
        {
            icon: 'fa-envelope',
            title: '联系',
            url: send,
            allowVisit: true,
        },
        {
            icon: 'fa-rss-square',
            title: '订阅',
            url: rss,
            allowVisit: true,
        },
        {
            icon: 'fa-cog',
            title: '管理',
            url: admin,
            allowVisit: false,
        },
    ]

    const el = $(`
    <div id="cnblog-nav" class="side-wrapper">
        <h3>MENU</h3>
        <ul></ul>
    </div>
    `)

    for (const {
        icon,
        title,
        url,
        allowVisit,
    } of navList) {
        const target = title === '首页' ? '_self' : '_blank'
        const item = `<a href="${url}" target="${target}">
            <li>
                <span class="fas ${icon}"></span>
                <span>${title}</span>
            </li>
        </a>`

        if (isVisitor && !allowVisit) {
            continue
        }

        el.find('ul').append(item)
    }

    $('#left-side .logo').after(el)
}

const buildLeftsideBottomBtns = () => {
    const userName = getBlogname()
    const el = `
    <div class="leftside-bottom">
    <a href="${githubOptions.url}" class="follow-me" target="_blank">
        <span class="follow-text"><i class="fas fa-github"></i><span>Fork me on GitHub</span></span>
        <span class="developer">
            <img src="${avatar}">
            <span>${userName}</span>
        </span>
    </a>
    </div>`
    $('#left-side').append(el)
}

export default () => {
    buildLeftside()
    buildCustomLinksToLeftSide()
    removeHeaderToLeftside()
    buildLeftsideBottomBtns()
}
