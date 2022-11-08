// 关于 handTrack 初始化
import * as handTrack from 'handtrackjs'

const defaultParams = {
  flipHorizontal: true, // 翻转水平
  outputStride: 16, // 输出步幅
  imageScaleFactor: 1, // 图像缩放因子
  maxNumBoxes: 20, // 最大数量框
  iouThreshold: 0.2, // iou阈值
  scoreThreshold: 0.6, // 分数阈值
  modelType: 'ssd320fpnlite', // 模型类型
  modelSize: 'large', // 模型大小
  bboxLineWidth: '2', // box线宽
  fontSize: 17,
}

export const handInit = async ref => {
  const model = await handTrack.load(defaultParams)
  model.dispose() // 使用gpu处理模型数据
  console.log('model准备完成')
  const predictions = await model.detect(ref)
  console.log('predictions准备完成')
  return { model, predictions }
}
