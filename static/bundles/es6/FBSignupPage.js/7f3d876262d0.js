__d(function(g,r,i,a,m,e,d){"use strict";function t({children:t,isSmallWidth:o,showHeader:n=!0}){return a(d[16]).createElement("div",{className:"_lTir"},a(d[16]).createElement(i(d[23]),null),a(d[16]).createElement(i(d[24]),null),a(d[16]).createElement(i(d[25]),{id:i(d[6]).fbSignupPage,title:u}),a(d[16]).createElement("div",{className:"_0r0cu"},n&&a(d[16]).createElement("div",{className:"w8Ejx"},a(d[16]).createElement(i(d[26]),{className:`Szr5J t98Id ${o?"":"coreSpriteLoggedOutWordmark"} ${o?"coreSpriteMobileNavTypeLogo":""}`,href:"/"},r(d[3])(2452))),t))}function o({url:t}){return a(d[16]).createElement("div",{className:"BdFXH"},a(d[16]).createElement("img",{alt:r(d[3])(2982),className:"ulnoR",src:t}))}function n(){return a(d[16]).createElement("div",{className:"_ltf8"},a(d[16]).createElement(r(d[27]).Spinner,{position:"absolute",size:"medium"}))}function s({message:t,onGoHome:o}){return a(d[16]).createElement("div",{className:"rYEZO"},a(d[16]).createElement(r(d[27]).Text.Body,null,t),a(d[16]).createElement(r(d[27]).Box,{marginTop:5},a(d[16]).createElement(r(d[27]).Button,{color:"ig-secondary-button",onClick:o},r(d[3])(1525))))}function l({requestInFlight:t}){return a(d[16]).createElement(i(d[28]),{pageIdentifier:i(d[6]).fbSignupPage,requestInFlight:t})}Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]),r(d[2]);const u=r(d[3])(3100),c=5e3,p=1;const h=r(d[21]).withIGRouter(r(d[22]).connect(function(t){var o,n,s,l,u,c,p,h,f,v,b,E;const{auth:P,fb:F,signup:S,twoFactor:I}=t,_=(null===S||void 0===S?void 0:S.requestInFlight)||(null===I||void 0===I?void 0:I.requestInFlight)||!1;return{accessToken:null===S||void 0===S?void 0:null===(o=S.fbOAuth)||void 0===o?void 0:o.accessToken,accountId:null===S||void 0===S?void 0:null===(n=S.fbProfile)||void 0===n?void 0:n.id,errorNonce:(null===S||void 0===S?void 0:S.submissionCount)||0,fbConnectStatus:F.status,fbEmail:null===S||void 0===S?void 0:null===(s=S.fbProfile)||void 0===s?void 0:null===(l=s.result)||void 0===l?void 0:l.email,fbName:null===S||void 0===S?void 0:null===(u=S.fbProfile)||void 0===u?void 0:null===(c=u.result)||void 0===c?void 0:c.name,fbPhone:null===S||void 0===S?void 0:null===(p=S.fbProfile)||void 0===p?void 0:null===(h=p.result)||void 0===h?void 0:h.phone,fbPictureUrl:null===S||void 0===S?void 0:null===(f=S.fbProfile)||void 0===f?void 0:null===(v=f.result)||void 0===v?void 0:v.profilePictureUrl,fbProfileError:null===S||void 0===S?void 0:null===(b=S.fbProfile)||void 0===b?void 0:b.error,fbUserID:Number(null===F||void 0===F?void 0:null===(E=F.authResponse)||void 0===E?void 0:E.userID),igAccount:(null===F||void 0===F?void 0:F.igProfile)||null,igAccounts:(null===F||void 0===F?void 0:F.igProfiles)||null,isSmallWidth:t.displayProperties.viewportWidth<640,oAuthResponse:null===S||void 0===S?void 0:S.fbOAuth,requestInFlight:_,signupResult:null===S||void 0===S?void 0:S.signupResult,hasTwoFactorChallenge:!!I,usernameSuggestions:null===S||void 0===S?void 0:S.usernameSuggestions,nextUrl:P.next}},function(t){return{onLinkAccountToFB(o){if(null!=o){const{accessToken:n,returnURL:s}=o;t(r(d[19]).linkAccountToFB(n,s))}},onLoadFBSignupOAuthLandingPage(){t(r(d[20]).loadFBSignupOAuthLandingPage())},onFocusChange(o,n){t(r(d[20]).changeFBSignupFormFocus(o,n))},async onSignupWithFB(o,n,s){await t(r(d[20]).signupWithFB(o,i(d[6]).fbSignupPage))}}})(class extends a(d[16]).Component{constructor(t){var o;super(t),this.$Page3=(t=>{this.props.igAccount||this.setState({earlyError:a(d[4]).ERROR_FB_COULDNT_LOAD_INFO})}),this.$Page4=(()=>{this.props.history.push('/')}),this.$Page1=null,this.$Page2=null,this.state={earlyError:(null===(o=t.oAuthResponse)||void 0===o?void 0:o.success)?void 0:a(d[4]).ERROR_SIGNUP_UNKNOWN}}getExtraDataForLogger(){return{type:'fb',platform:r(d[5]).getAppPlatform(),source:i(d[6]).fbSignupPage}}componentDidMount(){window.history.replaceState&&window.history.replaceState({},'',r(d[7]).SIGNUP_PATH);let t=p;const o=setInterval(()=>{t-- >0?i(d[8]).reloadSDK():(clearInterval(o),i(d[9])._("79bd1bc421163e1cf897231646323ff7")||r(d[10]).logAction_DEPRECATED('signupFBConnectFailed',this.getExtraDataForLogger()),i(d[11]).incr('web.signup.signup_fb_connect_failed'),r(d[12]).logLoggedOutCtaEvent({ctaType:'fb_signup_page',ctaVersion:'',eventName:'fb_connect_failed'}),this.$Page3())},c);if(i(d[8]).sdkReady(()=>clearInterval(o)),r(d[5]).isLoggedIn()){var n;if((null===(n=this.props.oAuthResponse)||void 0===n?void 0:n.accessToken)&&!0===i(d[13])._("f32ccf5136ea284a177598172705431b","48d7c64d7adf7cbd2f84bfcb56bd6d62")){var s;const t=null===(s=this.props.oAuthResponse)||void 0===s?void 0:s.accessToken;r(d[14]).saveAccessToken(t),this.props.onLinkAccountToFB(this.props.oAuthResponse)}else i(d[15])('fb oauth token is missing'),this.props.history.push('/')}else this.props.onLoadFBSignupOAuthLandingPage()}componentDidUpdate(t,o){this.$Page1&&!this.isFormVisible(t)&&this.$Page1.focusUsername()}isFormVisible(t){return null===t.igAccount&&null!=t.fbPictureUrl&&null!==t.usernameSuggestions&&void 0!==t.usernameSuggestions}needEmailOrPhone(){const{fbEmail:t,fbPhone:o}=this.props;return!(t||!t&&o)}render(){let u,c=!0;if(this.state.earlyError)u=a(d[16]).createElement(s,{message:this.state.earlyError,onGoHome:this.$Page4});else if(this.props.fbProfileError&&!this.props.igAccount)u=a(d[16]).createElement(s,{message:a(d[4]).ERROR_FB_COULDNT_LOAD_INFO,onGoHome:this.$Page4});else if(this.props.hasTwoFactorChallenge)u=a(d[16]).createElement(a(d[16]).Fragment,null,a(d[16]).createElement("h1",{className:"Szr5J SIUqf coreSpriteLock"}),a(d[16]).createElement(l,{requestInFlight:this.props.requestInFlight}));else if(this.isFormVisible(this.props)){const{fbName:t,fbPictureUrl:n}=this.props;n&&t||i(d[17])(0),this.props.fbEmail||this.props.fbPhone||i(d[17])(0),u=a(d[16]).createElement(a(d[16]).Fragment,null,a(d[16]).createElement(o,{url:n}),a(d[16]).createElement(i(d[18]),{canUsePhone:!1,className:"c3Opt",errorNonce:this.props.errorNonce,fbConnectedStatus:this.props.fbConnectStatus,fbUserID:this.props.fbUserID,gdprRequired:!1,hideFBOption:!0,hideHeader:!0,initialFullName:t,needEmailOrPhone:this.needEmailOrPhone(),needPassword:!0,onSignupFocusChange:this.props.onFocusChange,onSubmit:t=>{this.props.onSignupWithFB(t,this.props.accessToken,this.props.accountId)},pageIdentifier:i(d[6]).fbSignupPage,ref:t=>this.$Page1=t,requestInFlight:this.props.requestInFlight,requireUsername:!0,signupResult:this.props.signupResult,usernameSuggestions:this.props.usernameSuggestions||[]}))}else c=!1,u=a(d[16]).createElement(n,null);return a(d[16]).createElement(t,{isSmallWidth:this.props.isSmallWidth,showHeader:c},u)}}));e.PAGE_ID=i(d[6]).fbSignupPage,e.FBSignupPage=h},7077888,[13566072,7077889,13566050,13500476,13566001,13500421,13500657,13500661,13500872,13500473,13500518,13500501,13500878,13500526,13500877,13500508,3,3276908,13304389,13500869,13500880,13500843,5,13566419,3801093,13566415,13566014,13566002,13304399]);
__d(function() {},7077889,[]);