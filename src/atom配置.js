navigator.getCurrentRoutes();
Dimensions,
duration,
shouldComponentUpdate
spring: 基础的单次弹跳物理模型，符合Origami设计标准
friction: 摩擦力，默认为7.
tension: 张力，默认40。
decay: 以一个初始速度开始并且逐渐减慢停止。
velocity: 起始速度，必填参数。
deceleration: 速度衰减比例，默认为0.997。
timing: 从时间范围映射到渐变的值。
duration: 动画持续的时间（单位是毫秒），默认为500。
easing：一个用于定义曲线的渐变函数。阅读Easing模块可以找到许多预定义的函数。iOS默认为Easing.inOut(Easing.ease)。
delay: 在一段时间之后开始动画（单位是毫秒），默认为0。
parallel（同时执行）、sequence（顺序执行）、stagger和delay
inputRange: [0,1],
outputRange: ['0deg', '360deg']
interpolate
measure,
chilren,
forceUpdate,
AndroidPermissions,
length,
Number,
entries,
DeviceEventEmitter
forEach
replace
PureComponent
InteractionManager
evt是一个合成事件，它包含以下结构：
require
nativeEvent
changedTouches - 在上一次事件之后，所有发生变化的触摸事件的数组集合（即上一次事件后，所有移动过的触摸点）
identifier - 触摸点的ID
locationX - 触摸点相对于父元素的横坐标
locationY - 触摸点相对于父元素的纵坐标
pageX - 触摸点相对于根元素的横坐标
pageY - 触摸点相对于根元素的纵坐标
target - 触摸点所在的元素ID
timestamp - 触摸事件的时间戳，可用于移动速度的计算
touches - 当前屏幕上的所有触摸点的集合

ActivityIndicatorIOS - ReactActivityIndicator
ActivityIndicator - ReactActivityIndicator
DatePickerIOS - ReactDatePicker TODO
DrawerLayoutAndroid - ReactDrawerLayout
Image - ReactImage
ListView - ReactListView
Modal - ReactModal
Navigator - ReactNavigator
PickerIOS ReactPicker
ProgressViewIOS - ReactProgressView
ScrollView - ReactScrollView
SegmentedControlIOS - ReactSegmentedControl
SliderIOS - ReactSlider
Switch - ReactSwitch
SwitchAndroid - ReactSwitch
SwitchIOS - ReactSwitch
RefreshControl - ReactRefreshControl
TabBarIOS - ReactTabBar
Text - ReactText
TextInput - ReactTextInput
ToastAndroid - ReactToast
Touchable - ReactTouchable
TouchableHighlight - ReactTouchableHighlight
TouchableOpacity - ReactTouchableOpacity
TouchableWithoutFeedback - ReactTouchableWithoutFeedback
View - ReactView
ViewPagerAndroid - ReactViewPager

Alert - ReactAlert
AlertIOS - ReactAlert
Animated - ReactAnimated
AppRegistry - ReactAppRegistry
AsyncStorage - ReactAsyncStorage
Dimensions - ReactDimensions
Easing - ReactEasing
InteractionManager - ReactInteractionManager
LayoutAnimation - ReactLayoutAnimation
PanResponder - ReactPanResponder
PixelRatio - ReactPixelRatio
StyleSheet - ReactStyleSheet

NativeModules - ReactNativeModules
Platform - ReactPlatform
processColor - ReactProcessColor

READ_CALENDAR: 'android.permission.READ_CALENDAR',
WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR',
CAMERA: 'android.permission.CAMERA',
READ_CONTACTS: 'android.permission.READ_CONTACTS',
WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS',
GET_ACCOUNTS:  'android.permission.GET_ACCOUNTS',
ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
RECORD_AUDIO: 'android.permission.RECORD_AUDIO',
READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE',
CALL_PHONE: 'android.permission.CALL_PHONE',
READ_CALL_LOG: 'android.permission.READ_CALL_LOG',
WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG',
ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL',
USE_SIP: 'android.permission.USE_SIP',
PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS',
BODY_SENSORS:  'android.permission.BODY_SENSORS',
SEND_SMS: 'android.permission.SEND_SMS',
RECEIVE_SMS: 'android.permission.RECEIVE_SMS',
READ_SMS: 'android.permission.READ_SMS',
RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH',
RECEIVE_MMS: 'android.permission.RECEIVE_MMS',
READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE',
WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE',

alignItems:'flex-start,center,flex-end,stretch',
constructor:'1',
alignSelf:'12',
backfaceVisibility:'124',
borderBottomColor:'123413',
borderBottomLeftRadius:'123',
borderBottomRightRadius:'123',
borderBottomWidth:'123',
borderColor:'1234',
borderLeftColor:'12',
borderLeftWidth:'123',
borderRadius:'123',
borderRightColor:'123',
borderStyle:'124',
borderTopColor:'124',
borderTopLeftRadius:'123',
borderTopRightRadius:'123',
borderTopWidth:'124',
borderWidth:1,
backgroundColor:1,
bottom:1,
color:1,
decomposedMatrix:1,
elevation:1,
flex:1,
flexBasis:1,
flexDirection:'row,column,row-reverse,column-reverse',
flexGrow:1,
flexShrink:1,
flexWrap:1,
fontFamily:1,
fontSize:1,
fontStyle:1,
fontVariant:1,
fontWeight:1
height:1,
justifyContent:'center,flex-start,flex-end,space-around,space-between',
left:1,
letterSpacing:1,
lineHeight:1,
margin:1,
marginBottom:1,
marginHorizontal:1,
marginLeft:1,
marginRight:1,
marginTop:1,
maxHeight:1,
maxWidth:1,
minWidth:1,
opacity:1,
overflow:1,
overlayColor:1,
padding:1,
paddingBottom:1,
paddingTop:1,
paddingVertical:1,
position:'absolute',
right:1,
resizeMode:1,
rotation:1,
scaleX:1,
scaleY:1,
shadowColor:1,
shadowOffset:1,
shadowOpacity:1,
shadowRadius:1,
textAlign:'auto', 'left', 'right', 'center', 'justify',
textAlignVertical:'auto', 'top', 'bottom', 'center',
textDecorationColor:1,
textDecorationLine:1,
textDecorationStyle:1,
textShadowColor:1,
textShadowOffset:1,
textShadowRadius:1,
tintColor:1,
top:1,
transform:1,
transformMatrix:1,
translateX:1,
translatrY:1,
width:1,
writingDirection:1,
zIndex:1,
