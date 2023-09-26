const fontCarrier = require('font-carrier')
//创建空白字体对象
const font = fontCarrier.create()

// 参考：https://github.com/purplebamboo/font-carrier/blob/master/readme.md

// --------------------------- 案例二 从其他字体导出一些图标到自己的库里 ---------------------------

// // 从其他字体解析
// const transFont = fontCarrier.transfer('./assets/font/milky-term-cn-heavyitalic.ttf')

// const gs = transFont.getGlyph('安全监管中心')

// // 设置到空白字体里面
// font.setGlyph(gs)

// // 这样 font 导出的字体里面就有了「安全监管中心」对应的 SVG 形状了
// font.output({
//   path: './output/Milky-Han-Mono-CN-Heavy-Italic'
// })

// --------------------------- 案例二 从其他字体导出一些图标到自己的库里 ---------------------------

// 从其他字体解析
const transFont = fontCarrier.transfer('./assets/font/milky-term-cn-medium.ttf')

const gs = transFont.getGlyph('氮气氦气空气氧气氩气气瓶实时数据气体余量统计')

// 设置到空白字体里面
font.setGlyph(gs)

// 这样 font 导出的字体里面就有了「大榭石化安全监管中心」对应的 SVG 形状了
font.output({
  path: './output/milky-term-cn-medium'
})

// --------------------------- 案例三 对中文字体精简 ---------------------------

// const transFont = fontCarrier.transfer('./assets/font/milky-term-cn-heavyitalic.ttf')

// // 会自动根据当前的输入的文字过滤精简字体
// transFont.min('大榭石化安全监管中心')

// transFont.output({
//   path: './output/'
// })
