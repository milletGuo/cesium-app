const Cesium = window.Cesium;

const defaultOptions = {
    timeline: true,
    animation: true,
    infoBox: false,
    shouldAnimate: true, //是否开启动画
    navigationHelpButton: false, // 是否显示右上角的帮助按钮 
    navigationInstructionsInitiallyVisible: false,
    //如果导航说明最初应该是可见的，则为true；如果直到用户明确单击该按钮，则不应显示，否则为false。
    baseLayerPicker: false,
    fullscreenButton: false, // 是否显示全屏按钮 
    geocoder: false, // 是否显示geocoder小器件，右上角查询按钮 
    homeButton: false, // 是否显示Home按钮 
    selectionIndicator: false, // 是否显示选取指示器组件 
    sceneModePicker: false, // 是否显示3D/2D选择器
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: 'http://www.google.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
        tilingScheme: new Cesium.WebMercatorTilingScheme(),
        minimumLevel: 1,
        maximumLevel: 20
    })
}

export default class MapControl {
    constructor(ref) {
        this.containerRef = ref;
        this.initalize();
    }

    // 初始化加载地球
    initalize() {
        this.viewer = new Cesium.Viewer(this.containerRef.current, defaultOptions);
        // 隐藏时间轴
        this.viewer.animation.container.style.visibility = 'hidden';
        this.viewer.timeline.container.style.visibility = 'hidden';
    }
}