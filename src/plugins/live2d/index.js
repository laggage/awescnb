import live2dModels from './live2dModels'
import { live2d, live2djs } from '@constants/urls'
import { live2dConfig } from '@config/plugins.js'
import {
    pageName,
    userAgent,
    cacheScript,
    randomProperty,
} from '@tools'

/**
 * 构建模型容器
 * @param {String} position
 * @param {String} width
 * @param {String} height
 */
function buildContainer(position, width, height) {
    const ele = `<canvas id="model" style="position:fixed;${position}:0;bottom:0;z-index:30;pointer-events: none;" width="${width}"height="${height}" ></canvas>`
    $('body').append(ele)
}

/**
 * 设置间距
 * @param {String} position
 * @param {String} gap
 */
function setGap(position, gap) {
    if (gap === 'default') return
    $('#model').css(position, gap)
}

/**
 * 加载模型
 * @param {String} model
 */
function loadModel(model) {
    let live2dModel =
        model === 'random'
            ? live2dModels[randomProperty(live2dModels)]
            : live2dModels[model]

    const url = `${live2d.url}@${live2d.version}/${live2dModel}`
    cacheScript(live2djs, () => {
        loadlive2d('model', url)
    })
}

export default devOptions => {
    const {
        enable,
        page,
        agent,
        model,
        position,
        gap,
        width,
        height,
    } = live2dConfig(devOptions)

    if (!enable) return
    if (page !== pageName() && page !== 'all') return
    if (agent !== userAgent() && agent !== 'all') return

    buildContainer(position, width, height)
    setGap(position, gap)
    loadModel(model)
}
