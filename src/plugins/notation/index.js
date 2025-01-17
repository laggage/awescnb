import { notationJs } from '@constants/urls'
import { notationConfig } from '@config/plugins'
import {
    pageName as currentPage,
    cacheScript,
} from '@tools'

const pageName = currentPage()
const annotateList = []

/**
 * 构建 annotate group
 * @param {*} annotate
 * @param {*} customList
 */
const buildGroup = (annotate, customList) => {
    const group = []
    for (let { selector, page, config } of customList) {
        if (page === 'all' || pageName === page) {
            const element = document.querySelectorAll(
                selector,
            )
            if (!element.length) continue
            if (element.length === 1) {
                group.push(
                    annotate(
                        document.querySelector(selector),
                        config,
                    ),
                )
            }
            if (element.length > 1) {
                element.forEach(function(item) {
                    group.push(annotate(item, config))
                })
            }
        }
    }
    return group
}

/**
 * 构建 notation
 * @param {*} annotate
 * @param {*} annotationGroup
 * @param {*} customList
 */
const buildNotation = (
    annotate,
    annotationGroup,
    customList,
) => {
    setTimeout(() => {
        const group = buildGroup(annotate, customList)
        const ag = annotationGroup(group)
        ag.show()
    }, 2000)
}

export default (devOptions, customList = annotateList) => {
    if (pageName !== 'post') return
    const { enable } = notationConfig(devOptions)
    if (!enable) return
    if (!customList.length) return

    cacheScript(notationJs, () => {
        const {
            annotate,
            annotationGroup,
        } = window.RoughNotation
        buildNotation(annotate, annotationGroup, customList)
    })
}

// How to use ?
// const annotateList = [
//     {
//         page: 'all',
//         selector: '#Header1_HeaderTitle',
//         config: {
//             type: 'underline',
//             color: '#2196F3',
//         },
//     },
// ]
