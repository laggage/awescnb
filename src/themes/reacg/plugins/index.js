import './style/index.scss'
import dragMenu from '@plugins/dragMenu'
import footer from '@plugins/footer'
import themeColor from '@plugins/themeColor'
import background from '@plugins/background'
import imagebox from '@plugins/imagebox'
import live2d from '@plugins/live2d'
import player from '@plugins/player'
import click from '@plugins/click'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import titleFavicon from '@plugins/titleFavicon'
import commentsAvatars from '@plugins/commentsAvatars'
import signature from '@plugins/signature'
import postSignature from '@plugins/postSignature'
import highlight from '@plugins/highlight'
import postMessage from '@plugins/postMessage'
import postTopimage from '@plugins/postTopimage'
import postBottomimage from '@plugins/postBottomimage'
import emoji from '@plugins/emoji'
import lock from '@plugins/lock'
import qrcode from '@plugins/qrcode'
import charts from '@plugins/charts'
import donation from '@plugins/donation'
import barrage from '@plugins/barrage'
import notice from '@plugins/notice'
import mode from '@plugins/mode'
import catalog from '@plugins/catalog'

const catalogDevConfig = {
    enable: true,
}

const catalogPluginConfig = {
    selector: '#main',
    fn: 'prepend',
}

const clickConfig = {
    enable: true,
}

const live2dConfig = {
    enable: true,
}

const postTopimageConfig = {
    enable: false,
}

const linenumbersConfig = {
    enable: true,
}

module.exports = () => {
    dragMenu()
    footer()
    themeColor()
    background()
    imagebox()
    barrage()
    live2d(live2dConfig)
    player()
    click(clickConfig)
    linenumbers(linenumbersConfig)
    titleFavicon()
    commentsAvatars()
    signature()
    postSignature()
    highlight()
    copy()
    emoji()
    lock()
    postMessage()
    postTopimage(postTopimageConfig)
    postBottomimage()
    qrcode()
    charts()
    donation()
    notice()
    mode()
    catalog(catalogDevConfig, catalogPluginConfig)
}
