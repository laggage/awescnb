import './style/index.scss'
import background from '@plugins/background'
import catalog from '@plugins/catalog'
import themeColor from '@plugins/themeColor'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import postMessage from '@plugins/postMessage'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import emoji from '@plugins/emoji'
import imagebox from '@plugins/imagebox'
import postSignature from '@plugins/postSignature'
import notice from '@plugins/notice'
import click from '@plugins/click'
import player from '@plugins/player'
import mode from '@plugins/mode'
import titleFavicon from '@plugins/titleFavicon'
import notation from '@plugins/notation'
import menu from './menu'
import env from '@constants/env'

const notationPluginConfig = [
    {
        page: 'post',
        selector: '#cb_post_title_url',
        config: {
            type: 'underline',
            color: 'var(--themeColor)',
        },
    },
    // {
    //     page: 'post',
    //     selector: '#cnblogs_post_body strong',
    //     config: {
    //         type: 'circle',
    //         color: '#eb4d4b',
    //     },
    // },
    {
        page: 'post',
        selector: '#cnblogs_post_body mark',
        config: {
            type: 'highlight',
            color: 'yellow',
        },
    },
    {
        page: 'post',
        selector: '#cnblogs_post_body u',
        config: {
            type: 'underline',
            color: '#10ac84',
        },
    },
    {
        page: 'post',
        selector: '#cnblogs_post_body s',
        config: {
            type: 'strike-through',
            color: '#ff4757',
        },
    },
]
const notationDevConfig = {
    enable: false,
}
const themeColorConfig = {
    color: '#1B86F9',
}
const signatureConfig = {
    enable: true,
    contents: [
        '欢迎使用皮肤<b style="color:#3742fa">Geek</b>',
        '快去自定义签名吧~',
    ],
}
const signaturePluginConfig = {
    selector: '.profile-signature',
}
const modeOptions = {
    enable: true,
    autoDark: false,
    autoLight: false,
}
const clickOptions = {
    enable: false,
    auto: false,
    colors: [],
    size: 30,
    maxCount: 15,
}
const playerOptions = {
    enable: false,
}
const catalogDevConfig = {
    enable: true,
}
const catalogPluginConfig = {
    selector: '#sidebar_news',
    fn: 'before',
    scrollContainer: '#mainContent',
}
const backgroundDevConfig = {
    enable: false,
}
const backgroundPluginConfig = {
    opacitySelector: '#left-side,#sideBar,#main',
}
const userNotationConfig = window.opts.notation
const enableNotation = userNotationConfig
    ? userNotationConfig.enable
    : false

if (
    (env === 'dev' && notationDevConfig.enable) ||
    (env !== 'dev' && enableNotation)
) {
    $('head').append(
        `<style>
            #cnblogs_post_body u,s {
                text-decoration: none;
            }
            #cnblogs_post_body mark {
                background: none;
            }
        </style>`,
    )
}

module.exports = () => {
    background(backgroundDevConfig, backgroundPluginConfig)
    catalog(catalogDevConfig, catalogPluginConfig)
    themeColor(themeColorConfig)
    highlight()
    copy()
    linenumbers()
    postMessage()
    commentsAvatars()
    signature(signatureConfig, signaturePluginConfig)
    emoji()
    imagebox()
    postSignature()
    notice()
    click(clickOptions)
    player(playerOptions)
    menu()
    mode(modeOptions)
    titleFavicon()
    notation(notationDevConfig, notationPluginConfig)
}
