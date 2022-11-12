// 关于 handTrack 初始化
import * as handTrack from 'handtrackjs'

const defaultParams = {
  flipHorizontal: true, // 翻转水平
  outputStride: 16, // 输出步幅
  imageScaleFactor: 1, // 图像缩放因子
  maxNumBoxes: 5, // 最大数量框
  iouThreshold: 0.2, // iou阈值
  scoreThreshold: 0.6, // 分数阈值
  modelType: 'ssd320fpnlite', // 模型类型
  modelSize: 'large', // 模型大小
  bboxLineWidth: '2', // box线宽
  fontSize: 17,
}

let model = null
let canvasRef = null
let videoRef = null
let isVideo = false

export const handInit = async (canvas, video) => {
  canvasRef = canvas
  videoRef = video
  model = await handTrack.load(defaultParams)
  console.log('model准备完成')
}

export const startVideo = async () => {
  console.log('start')
  const status = await handTrack.startVideo(videoRef)
  if (status) {
    isVideo = true
    console.log('开始监测', status)
    runDetection()
  } else {
    console.log('请启用视频')
  }
}

export const stopVideo = async () => {
  isVideo = false
  handTrack.stopVideo(videoRef)
  console.log('停止监测')
}

export const toggleVideo = () => {}

const runDetection = async () => {
  const predictions = await model.detect(videoRef)
  console.log('Predictions: ', predictions)
  model.renderPredictions(
    predictions,
    canvasRef,
    canvasRef.getContext('2d'),
    videoRef,
  )
  if (isVideo) {
    requestAnimationFrame(runDetection)
  }
}
