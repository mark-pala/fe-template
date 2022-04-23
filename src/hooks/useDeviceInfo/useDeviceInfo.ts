enum DeviceOs {
    pc = 'pc',
    mobile = 'mobile',
    android = 'android',
    ios = 'ios',
  }
type DeviceInfo = {
    os: string
    version: number
    isMobile: boolean
    isIE9: boolean
    isIE10: boolean
    isIE: boolean
    isIE11: boolean
    isIOS: boolean
    deviceType: DeviceType
    isAndroid: boolean
    isSamsumgBrowser: boolean
    isChrome: boolean
    isPc: boolean
  }

enum DeviceType {
    pc = 'pc',
    mobile = 'mobile',
}
export function useDeviceInfo(): Partial<DeviceInfo> {
  const userAgent = window.navigator.userAgent
  // codepedia.tistory.com/entry/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-IE-userAgent-%ED%99%95%EC%9D%B8%EB%B0%A9%EB%B2%95
  const isMobile = /Mobile|Android|BlackBerry|iPhone|iPod|Opera Mini|IEMobile|WPDesktop|webOS/i.test(userAgent) && !/iPad/i.test(userAgent)
  const isPc = /Windows|Macintosh|X11/i.test(userAgent)
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent)
  const isAndroid = /Android/i.test(userAgent)
  const isIE9 = /Trident\/5.0/.test(userAgent)
  const isIE10 = /Trident\/6.0/.test(userAgent)
  const isIE = /Trident\/[5|6|7].0/.test(userAgent)
  const isIE11 = /Trident\/7.0/.test(userAgent)
  const isSamsumgBrowser = /SamsungBrowser/.test(userAgent)
  const isChrome = /Chrome/.test(userAgent) || /Whale/i.test(userAgent)

  let os
  let version

  if (isAndroid) {
    os = DeviceOs.android
    const match = userAgent.match(/Android\s+([\d.]+)/)
    version = parseFloat(match?.[1] as any)
  } else if (isIOS) {
    os = DeviceOs.ios
    const match = userAgent.match(/OS ((\d+_?){2,3})\s/)
    version = parseFloat(match?.[1]?.replace('_', '.') as any)
  } else if (isMobile) {
    os = DeviceOs.mobile
  } else if (isPc) {
    os = DeviceOs.pc
  } else {
    os = DeviceOs.mobile
  }

  const deviceType = os === DeviceOs.pc ? DeviceType.pc : DeviceType.mobile

  return { os, version, isMobile, isIE9, isIE10, isIE11, isIE,isPc, isIOS, isAndroid, isSamsumgBrowser, isChrome, deviceType }
}
