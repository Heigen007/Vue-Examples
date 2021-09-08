import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import examples from '../views/Examples.vue'
import SpiderEx from '../views/SpiderEx.vue'
import DisappearingText from '../views/DisappearingText.vue'
import ImageHoverEffect from '../views/ImageHoverEffect.vue'
import ScrollEffect from '../views/ScrollEffect.vue'
import ScrollEffect2 from '../views/ScrollEffect2.vue'
import ImageFlipEffect from '../views/ImageFlipEffect.vue'
import DotsCSSPreloader from '../views/DotsCSSPreloader.vue'
import CSSCardHoverEffect from '../views/CSSCardHoverEffect.vue'
import ImageAppearingAnimation from '../views/ImageAppearingAnimation.vue'
import Error404 from '../views/Error404.vue'
import ClipPathImageEffect from '../views/ClipPathImageEffect.vue'
import CardParalaxEffect from '../views/CardParalaxEffect.vue'
import WavyTextAnimation from '../views/WavyTextAnimation.vue'
import NeonTextEffect from '../views/NeonTextEffect.vue'
import ThreeDFlipCard from '../views/ThreeDFlipCard.vue'
import BackToTopButton from '../views/BackToTopButton.vue'
import TouchSlider from '../views/TouchSlider.vue'
import LiquidLoaderAnimationEffect from '../views/LiquidLoaderAnimationEffect.vue'
import BackgroundBlendMode from '../views/BackgroundBlendMode.vue'
import PulseAnimationEffect from '../views/PulseAnimationEffect.vue'
import ThreeDIsometricTextEffect from '../views/ThreeDIsometricTextEffect.vue'
import ResponsiveLogRegisterForm from '../views/ResponsiveLogRegisterForm.vue'
import ButtonRippleEffectOnClickEffect from '../views/ButtonRippleEffectOnClickEffect.vue'
import ResponsiveCardHoverEffect from '../views/ResponsiveCardHoverEffect.vue'
import CopyToClipboardEffect from '../views/CopyToClipboardEffect.vue'
import Animated404Page from '../views/Animated404Page.vue'
import ThreeDImageHoverEffect from '../views/ThreeDImageHoverEffect.vue'
import CloudBannerParallaxEffect from '../views/CloudBannerParallaxEffect.vue'
import PopupAfterLoad from '../views/PopupAfterLoad.vue'
import ResponsiveSidebarMenu from '../views/ResponsiveSidebarMenu.vue'
import TabsEffect from '../views/TabsEffect.vue'
import GlassmorphismProductCard from '../views/GlassmorphismProductCard.vue'
import RecordPlayer from '../views/RecordPlayer.vue'
import Webcam from '../views/Webcam.vue'
import TypingAnimation from '../views/TypingAnimation.vue'
import CSSClips from '../views/CSSClips.vue'
import VoiceAndText from '../views/VoiceAndText.vue'
import LeavingPreventMessage from '../views/LeavingPreventMessage.vue'
import JSTextAnimation from '../views/JSTextAnimation.vue'
import ChartjsLineChart from '../views/ChartjsLineChart.vue'
import THREEJSTunnel from '../views/THREEJSTunnel.vue'
import THREEJSProductCard from '../views/THREEJSProductCard.vue'
import MicrosoftHomepage from '../views/MicrosoftHomepage.vue'
import NetflixLandingPage from '../views/NetflixLandingPage.vue'
import RellaxJsPage from '../views/RellaxJsPage.vue'
import VideoLandingPage from '../views/VideoLandingPage.vue'
import CSSGridWebsiteLayout from '../views/CSSGridWebsiteLayout.vue'
import TurningPages from '../views/TurningPages.vue'
import SpaceXLandingPage from '../views/SpaceXLandingPage.vue'
import RxJsPaintClone from '../views/RxJsPaintClone'
import ChatThemes from '../views/ChatThemes.vue'
import FaceRecogniser from '../views/FaceApiJs-FaceRecogniser.vue'
import NavigatorAbilities from '../views/NavigatorAbilities.vue'
import WebRtcChat from '../views/WebRtcChat.vue'
import CryptoWall from '../views/CryptoWall.vue'

Vue.use(VueRouter)

const routes = [
  { 
   path: '/ChatThemes',
   name: 'ChatThemes',
   component: ChatThemes },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/examples',
    name: 'Examples',
    component: examples
  },
  {
    path: '/Spider',
    name: 'Spider',
    component: SpiderEx
  },
  {
    path: '/DisappearingText',
    name: 'DisappearingText',
    component: DisappearingText
  },
  {
    path: '/ImageHoverEffect',
    name: 'ImageHoverEffect',
    component: ImageHoverEffect
  },
  {
    path: '/ScrollEffect',
    name: 'ScrollEffect',
    component: ScrollEffect
  },
  {
    path: '/ScrollEffect2',
    name: 'ScrollEffect2',
    component: ScrollEffect2
  },
  {
    path: '/ImageFlipEffect',
    name: 'ImageFlipEffect',
    component: ImageFlipEffect
  },
  {
    path: '/DotsCSSPreloader',
    name: 'DotsCSSPreloader',
    component: DotsCSSPreloader
  },
  {
    path: '/CSSCardHoverEffect',
    name: 'CSSCardHoverEffect',
    component: CSSCardHoverEffect
  },
  {
    path: '/ImageAppearingAnimation',
    name: 'ImageAppearingAnimation',
    component: ImageAppearingAnimation
  },
  {
    path: '/Error404',
    name: 'Eror404',
    component: Error404
  },
  {
    path: '/ClipPathImageEffect',
    name: 'ClipPathImageEffect',
    component: ClipPathImageEffect
  },
  {
    path: '/CardParalaxEffect',
    name: 'CardParalaxEffect',
    component: CardParalaxEffect
  },
  {
    path: '/WavyTextAnimation',
    name: 'WavyTextAnimation',
    component: WavyTextAnimation
  },
  {
    path: '/NeonTextEffect',
    name: 'NeonTextEffect',
    component: NeonTextEffect
  },
  {
    path: '/3DFlipCard',
    name: '3DFlipCard',
    component: ThreeDFlipCard
  },
  {
    path: '/BackToTopButton',
    name: 'BackToTopButton',
    component: BackToTopButton
  },
  {
    path: '/TouchSlider',
    name: 'TouchSlider',
    component: TouchSlider
  },
  {
    path: '/LiquidLoaderAnimationEffect',
    name: 'LiquidLoaderAnimationEffect',
    component: LiquidLoaderAnimationEffect
  },
  {
    path: '/BackgroundBlendMode',
    name: 'BackgroundBlendMode',
    component: BackgroundBlendMode
  },
  {
    path: '/PulseAnimationEffect',
    name: 'PulseAnimationEffect',
    component: PulseAnimationEffect
  },
  {
    path: '/3DIsometricTextEffect',
    name: 'ThreeDIsometricTextEffect',
    component: ThreeDIsometricTextEffect
  },
  {
    path: '/ResponsiveLogRegisterForm',
    name: 'ResponsiveLogRegisterForm',
    component: ResponsiveLogRegisterForm
  },
  {
    path: '/ButtonRippleEffectOnClickEffect',
    name: 'ButtonRippleEffectOnClickEffect',
    component: ButtonRippleEffectOnClickEffect
  },
  {
    path: '/ResponsiveCardHoverEffect',
    name: 'ResponsiveCardHoverEffect',
    component: ResponsiveCardHoverEffect
  },
  {
    path: '/CopyToClipboardEffect',
    name: 'CopyToClipboardEffect',
    component: CopyToClipboardEffect
  },
  {
    path: '/Animated404Page',
    name: 'Animated404Page',
    component: Animated404Page
  },
  {
    path: '/3DImageHoverEffect',
    name: '3DImageHoverEffect',
    component: ThreeDImageHoverEffect
  },
  {
    path: '/CloudBannerParallaxEffect',
    name: 'CloudBannerParallaxEffect',
    component: CloudBannerParallaxEffect
  },
  {
    path: '/PopupAfterLoad',
    name: 'PopupAfterLoad',
    component: PopupAfterLoad
  },
  {
    path: '/ResponsiveSidebarMenu',
    name: 'ResponsiveSidebarMenu',
    component: ResponsiveSidebarMenu
  },
  {
    path: '/TabsEffect',
    name: 'TabsEffect',
    component: TabsEffect
  },
  {
    path: '/GlassmorphismProductCard',
    name: 'GlassmorphismProductCard',
    component: GlassmorphismProductCard
  },
  {
    path: '/RecordPlayer',
    name: 'RecordPlayer',
    component: RecordPlayer
  },
  {
    path: '/Webcam',
    name: 'Webcam',
    component: Webcam
  },
  {
    path: '/TypingAnimation',
    name: 'TypingAnimation',
    component: TypingAnimation
  },
  {
    path: '/CSSClips',
    name: 'CSSClips',
    component: CSSClips
  },
  {
    path: '/VoiceAndText',
    name: 'VoiceAndText',
    component: VoiceAndText
  },
  {
    path: '/LeavingPreventMessage',
    name: 'LeavingPreventMessage',
    component: LeavingPreventMessage
  },
  {
    path: '/JSTextAnimation',
    name: 'JSTextAnimation',
    component: JSTextAnimation
  },
  {
    path: '/ChartjsLineChart',
    name: 'ChartjsLineChart',
    component: ChartjsLineChart
  },
  {
    path: '/THREEJSTunnel',
    name: 'THREEJSTunnel',
    component: THREEJSTunnel
  },
  {
    path: '/THREEJSProductCard',
    name: 'THREEJSProductCard',
    component: THREEJSProductCard
  },
  {
    path: '/MicrosoftHomepage',
    name: 'MicrosoftHomepage',
    component: MicrosoftHomepage
  },
  {
    path: '/NetflixLandingPage',
    name: 'NetflixLandingPage',
    component: NetflixLandingPage
  },
  {
    path: '/RellaxJsPage',
    name: 'RellaxJsPage',
    component: RellaxJsPage
  },
  {
    path: '/VideoLandingPage',
    name: VideoLandingPage,
    component: VideoLandingPage
  },
  {
    path: '/CSSGridWebsiteLayout',
    name: 'CSSGridWebsiteLayout',
    component: CSSGridWebsiteLayout
  },
  {
    path: '/TurningPages',
    name: 'TurningPages',
    component: TurningPages
  },
  {
    path: '/SpaceXLandingPage',
    name: 'SpaceXLandingPage',
    component: SpaceXLandingPage
  },
  {
    path: '/RxJsPaintClone',
    name: 'RxJsPaintClone',
    component: RxJsPaintClone
  },
  {
    path: '/ChatThemes',
    name: 'ChatThemes',
    component: ChatThemes
  },
  {
    path: '/FaceRecogniser',
    name: 'FaceRecogniser',
    component: FaceRecogniser
  },
  {
    path: '/NavigatorAbilities',
    name: 'NavigatorAbilities',
    component: NavigatorAbilities
  },
  {
    path: '/WebRtcChat',
    name: 'WebRtcChat',
    component: WebRtcChat
  },
  {
    path: '/CryptoWall',
    name: 'CryptoWall',
    component: CryptoWall
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
