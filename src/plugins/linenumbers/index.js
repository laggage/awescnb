// 构建代码行号
import { pageName, cacheScript } from '@tools'
import { linenumbersjs } from '@constants/urls'
import { linenumbersConfig } from '@config/plugins.js'

/**
 * 构建代码行号
 */
function buildLinenumbers() {
    cacheScript(linenumbersjs, () => {
        hljs.initLineNumbersOnLoad({
            singleLine: true,
        })
    })
}

export default devOptions => {
    const { enable } = linenumbersConfig(devOptions)
    if (pageName() !== 'post') return
    if (!enable) return
    if ($('.cnblogs_code').length > 0) return
    buildLinenumbers()
}
