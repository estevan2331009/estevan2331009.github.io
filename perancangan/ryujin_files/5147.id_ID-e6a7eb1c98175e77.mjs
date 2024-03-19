"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5147],{705147:(e,o,t)=>{t.d(o,{Z:()=>T});var i=t(667294),n=t(702664),a=t(616550),s=t(883119),l=t(827896),r=t(407043),d=t(898781),p=t(349700),c=t(55275),_=t(680046),h=t(915446),m=t(760372),u=t(813401),f=t(149230),y=t(567316),P=t(379884),b=t(814197),w=t(920085),k=t(447948),g=t(350118),A=t(785893);function x(e,o,t){var i;return(o="symbol"==typeof(i=function(e,o){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,o||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(o,"string"))?i:String(i))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}class z extends i.Component{constructor(e){super(e),x(this,"getRecommendationDescription",()=>{let{i18n:e,ad_match_reason:o,board:t,feedbackType:i,pinner:n,promoter:a,recommendationReason:s,sourceInterest:l,thirdPartyAdAttributes:r}=this.props,d={i18n:e,makeNavigateLink:this.makeNavigateLink};switch(i){case"pfy":return(0,_.Ud)({...d,feedback:{type:"pfy"}});case"pfyBoard":return(0,_.Ud)({...d,feedback:{type:"pfyBoard",recommendationReasonBoard:s?.board&&{name:s.board.name??"",url:s.board.url??""}}});case"topic":return(0,_.Ud)({...d,feedback:{type:"topic",sourceInterest:l&&l.name&&l.urlName?{name:l.name,url_name:l.urlName}:null}});case"followed":return(0,_.Ud)({...d,feedback:{type:"followed",followed:n?.explicitlyFollowedByMe?{type:"pinner",pinner:n.fullName?{full_name:n.fullName,username:n.username??""}:null}:{type:"board",board:t&&t.name&&t.url?{name:t.name,url:t.url}:null}}});case"promoted":return(0,_.Ud)({...d,feedback:{type:"promoted",promoter:!o&&a?.fullName?{full_name:a.fullName,username:a.username}:null,thirdPartyAdAttributes:r}});default:return null}}),x(this,"getRecommendationDescriptionImage",()=>{let e,o,t;let{board:i,feedbackType:n,pinner:a,recommendationReason:l}=this.props;return"followed"!==n&&"pfyBoard"!==n?null:(a&&a.explicitlyFollowedByMe?(e=a.imageSmallUrl,o="50%",t=`/${a.username??""}`):i&&i.imageThumbnailUrl&&(e=i.imageThumbnailUrl,o="4px",t=l?.board?.url||i.url),e)?(0,A.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{borderRadius:o}},flex:"none",marginStart:3,overflow:"hidden",children:(0,A.jsx)(s.iP,{onTap:()=>this.props.history.push(t??""),children:(0,A.jsx)(s.zd,{height:40,wash:!0,width:40,children:(0,A.jsx)(s.Ee,{alt:"",fit:"cover",naturalHeight:1,naturalWidth:1,src:e})})})}):null}),x(this,"getUnfollowAction",()=>{let{board:e,feedbackType:o,i18n:t,pinner:i,sourceInterest:n}=this.props;switch(o){case"followed":if(!i||!e)return null;return(0,_.oK)({i18n:t,makeNavigateLink:this.makeNavigateLink,boardId:e.entityId,display:i.explicitlyFollowedByMe?{type:"pinner",data:{full_name:i.fullName,username:i.username}}:{type:"board",data:{name:e.name,url:e.url}}});case"topic":if(!n)return null;let{entityId:a,name:s,urlName:l}=n;return a&&s&&l?(0,_.Iv)({i18n:t,makeNavigateLink:this.makeNavigateLink,sourceInterest:{id:a,name:s,url_name:l}}):null;default:return null}}),x(this,"makeNavigateLink",(e,o,t,i)=>(0,A.jsx)(s.rU,{display:"inlineBlock",href:o,onClick:this.props.onLinkClick,underline:"hover",children:(0,A.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:i?{display:"inline",color:"white",textDecorationColor:"white"}:{display:"inline"}},children:t})},e)),x(this,"reportPinOption",()=>{let{thirdPartyAdAttributes:e}=this.props;return{action:"reportPin",elementType:974,text:this.props.i18n.bt("Laporkan pin", "Report Pin", "Report a pin in the dropdown", undefined, true),description:this.props.i18n.bt("Bertentangan dengan pedoman komunitas Pinterest", "This goes against Pinterest's community guidelines", "Description for the report pin option", undefined, true),callback:this.props.reportPin,dataTestId:"report-pin-option",isThirdPartyAd:e?.isThirdPartyAd}}),x(this,"hidePinOption",e=>{let{clientTrackingParams:o,feedbackData:t,feedbackType:i,pinId:n,recommendationReason:a,thirdPartyAdAttributes:s}=this.props,l="search"===i?973:982,{action:r,actionOptions:d}=(0,h.Z)({feedbackData:t,feedbackType:i,pinId:n,pinFeedbackType:"pfy"===i?4:10,recommendationReason:a&&{board:a.board&&{entityId:a.board.entityId},reasonId:a.reasonId,reason:a.reason,throughProperties:a.throughProperties},clientTrackingParams:o(n),isThirdPartyAd:s?.isThirdPartyAd}),p=this.props.i18n.bt("Sembunyikan pin", "Hide Pin", "message displayed in pin feedback list", undefined, true);return{action:r,actionOptions:d,feedbackText:this.pinHiddenFeedbackText(e),text:p,description:this.props.i18n.bt("Lihat lebih sedikit pin seperti ini", "See fewer Pins like this", "Description for the hide pin option", undefined, true),elementType:l}}),x(this,"stopRecommendationOption",()=>{let{clientTrackingParams:e,feedbackData:o,feedbackType:t,pinId:i,recommendationReason:n}=this.props,a="pfyBoard"===t,{action:s,actionOptions:l}=(0,h.Z)({feedbackData:o,feedbackType:t,pinId:i,pinFeedbackType:a?2:4,recommendationReason:n&&{board:n.board&&{entityId:n.board.entityId},reasonId:n.reasonId,reason:n.reason,throughProperties:n.throughProperties},clientTrackingParams:e(i)}),r=n?.board&&n.board.url&&n.board.name?this.makeNavigateLink("boardUrl",n.board.url,n.board.name,!0):"",d=a&&n?(0,p.nk)(this.props.i18n.bt("Kami tidak akan menampilkan pin yang terinspirasi oleh papan Anda {{ formattedBoard }} lagi.", "We won't show you Pins inspired by your board {{ formattedBoard }} anymore.", "Primary caption displayed in pin feedback list to unfollow a board", undefined, true),{formattedBoard:r}):this.props.i18n.bt("Paham! Kami tidak akan menampilkan pin dari seperti ini di kemudian hari.", "Got it! We won't show you Pins like this in the future.", "message displayed after stopping recommendations from a pin", undefined, true),c=a&&n?(0,p.nk)(this.props.i18n.bt("Berhenti melihat pin yang terinspirasi oleh {{ boardName }}", "Stop seeing Pins inspired by {{ boardName }}", "Primary caption displayed in pin feedback list to unfollow a board", undefined, true),{boardName:n.board?.name}):this.props.i18n.bt("Lihat lebih sedikit pin seperti ini", "See fewer Pins like this", "Feedback option to stop recommendations inspired by this Pin", undefined, true);return{action:s,actionOptions:l,feedbackText:{subTitle:d},text:c,elementType:284}}),x(this,"unfollowBoardOption",()=>{let{board:e}=this.props,o=e?this.makeNavigateLink("boardUrl",e.url??"",e.name??"",!0):"",t=(0,p.nk)(this.props.i18n.bt("Berhenti Ikuti {{ boardName }}", "Unfollow {{ boardName }}", "Primary caption displayed in pin feedback list to unfollow a board", undefined, true),{boardName:e?.name}),i=(0,p.nk)(this.props.i18n.bt("Paham! Anda berhenti mengikuti {{ formattedBoard }} dan tidak akan melihat pin yang disimpan di sini di kemudian hari.", "Got it! You unfollowed {{ formattedBoard }} and won't see Pins saved to it in the future.", "Confirmation text after unfollowing a board", undefined, true),{formattedBoard:o});return{action:"unfollowBoard",actionOptions:{board_id:e?.entityId},feedbackText:{title:"",subTitle:i},text:t,description:(0,p.nk)(this.props.i18n.bt("Berhenti melihat pin dari papan \"{{ boardName }}\"", "Stop seeing Pins from the board \"{{ boardName }}\"", "Secondary caption displayed in pin feedback list to unfollow a board", undefined, true),{boardName:e?.name}),elementType:10614}}),x(this,"unfollowTopicOption",()=>{let{sourceInterest:e}=this.props;if(!e)return null;{let{entityId:o,name:t="",urlName:i}=e,n=`/topics/${i??""}`,a=this.makeNavigateLink("topicUrl",n,t??"",!0),s=(0,p.nk)(this.props.i18n.bt("Lihat lebih sedikit pin dari {{ topicName }}", "See fewer Pins from {{ topicName }}", "Primary caption displayed in pin feedback list to unfollow a topic", undefined, true),{topicName:t}),l=(0,p.nk)(this.props.i18n.bt("Kami akan menampilkan lebih sedikit pin dari {{ formattedTopic }} di kemudian hari.", "We'll show you fewer Pins from {{ formattedTopic }} in the future.", "Confirmation text after unfollowing a topic", undefined, true),{formattedTopic:a});return{action:"unfollowTopic",actionOptions:{interest_id:o,interest_list:m.X},feedbackText:{title:"",subTitle:l},text:s,description:(0,p.nk)(this.props.i18n.bt("Berhenti melihat pin dari topik \"{{ topicName }}\"", "Stop seeing Pins from the topic \"{{ topicName }}\"", "Secondary caption displayed in pin feedback list to unfollow a topic", undefined, true),{topicName:e.name}),elementType:976}}}),x(this,"unfollowUserOption",()=>{let{pinner:e}=this.props,{entityId:o,username:t,fullName:i}=e??{},n=`/${t}`,a=e?this.makeNavigateLink("pinnerUrl",n,i??"",!0):"",s=(0,p.nk)(this.props.i18n.bt("Paham! Anda berhenti mengikuti {{ formattedUser }} dan tidak akan melihat pin yang disimpannya di kemudian hari.", "Got it! You unfollowed {{ formattedUser }} and won't see Pins they save in the future.", "Confirmation text after unfollowing a user", undefined, true),{formattedUser:a});return{action:"unfollowPinner",actionOptions:{user_id:o},feedbackText:{title:"",subTitle:s},text:(0,p.nk)(this.props.i18n.bt("Berhenti Ikuti {{ fullName }}", "Unfollow {{ fullName }}", "Primary caption displayed in pin feedback list to unfollow a user", undefined, true),{fullName:i}),description:this.props.i18n.bt("Berhenti melihat semua pin mereka", "Stop seeing all their Pins", "Secondary caption displayed in pin feedback list to unfollow a user", undefined, true),elementType:10640}}),x(this,"downloadPinOption",()=>({action:"downloadPin",text:this.props.i18n.bt("Unduh gambar", "Download image", "Button to download Pin image", undefined, true),elementType:10836})),x(this,"_pinFeedbackText",()=>{let{location:e,feedbackType:o,hideDownload:t,pinner:i}=this.props,n="followed"===this.props.feedbackType,a=e.pathname.includes("following"),s=(n||"topic"===o)&&!a,l=this.hidePinOption(s),r=this.reportPinOption(),d="promoted"!==o&&!t;switch(o){case"followed":let p=!a&&this.getRecommendationDescription(),c=i?.explicitlyFollowedByMe?this.unfollowUserOption():this.unfollowBoardOption(),_=[l,...s||a?[c]:[],..."promoted"!==o?[this.downloadPinOption()]:[],r];return{...p?{description:p}:{},options:_};case"promoted":let{pinId:h,showAdReasonsModal:m}=this.props,u={dataTestId:"why-am-i-seeing-this-ad-reasons",action:"showAdReasons",text:this.props.i18n.bt("Mengapa saya melihat iklan ini?", "Why am I seeing this ad?", "app.common.react.components.PinFeedbackDropdown.adReasonText", undefined, true),callback:()=>{m(h)}};return{description:this.getRecommendationDescription()??void 0,options:[l,u,r]};case"topic":let f=this.unfollowTopicOption(),y=[l,...s&&f?[f]:[],...d?[this.downloadPinOption()]:[],r];return{description:this.getRecommendationDescription()??void 0,options:y};case"pfy":case"pfyBoard":let P=[l,..."pfyBoard"===o?[this.stopRecommendationOption()]:[],...d?[this.downloadPinOption()]:[],r];return{description:this.getRecommendationDescription()??void 0,options:P};default:let b=[l,...d?[this.downloadPinOption()]:[],r];return{description:this.getRecommendationDescription()??void 0,options:b}}}),x(this,"pinHiddenFeedbackText",e=>{let{isPromoted:o,promoter:t}=this.props,i=e?null:this.getUnfollowAction();return o&&t?.fullName?{title:"",subTitle:(0,p.nk)(this.props.i18n.bt("{{ promoter }} membayar agar Pin ini ditampilkan di tempat yang lebih mudah terlihat oleh Anda.", "{{ promoter }} has paid to have this pin show up where you'd be more likely to notice it.", "webapp.app.pinFeedbackDropdown.promotedFeedbackText.subtitle", undefined, true),{promoter:t.fullName})}:i?{title:"",subTitle:this.getRecommendationDescription(),unfollow:i}:{title:"",subTitle:this.props.i18n.bt("Paham! Kami tidak akan menampilkan pin ini di kemudian hari.", "Got it! We won't show you this Pin in the future.", "message displayed after hiding a pin", undefined, true)}});let o=this._pinFeedbackText();this.state={pinFeedbackConfig:o,showSecondary:!1}}onPinFeedbackActionButtonClick(e,o,t){e.stopPropagation(),o.auxData?this.handleClickLogging(o.elementType,o.auxData):this.handleClickLogging(o.elementType),(0,c.t)(o.action,o.actionOptions,t,this.props.logContextEvent)}onPinHide(e,o,t,i){let{onHide:n,pinId:a,showPinFeedback:s,showPinFeedbackOverlay:l,viewParameter:r,viewType:d}=this.props;s(a,o&&t&&i?{...e,undoCallbackProps:{actionOptions:t,action:i,viewType:d,viewParameter:r}}:e),t&&!t.promoted&&(10===t.feedback_type||4===t.feedback_type)?(this.setState({showSecondary:!0}),l(a)):n()}handleClickLogging(e,o={}){let{feedbackType:t,viewParameter:i,viewType:n,logContextEvent:a}=this.props;a({event_type:101,view_type:n,view_parameter:i,element:e,component:(0,_.nb)(t),aux_data:{...o}})}renderButtons(){let{hideDownload:e,onDownloadHideFlyout:o,pinId:t,viewType:i,viewParameter:n,logContextEvent:a,isWindowsPwa:l}=this.props,{pinFeedbackConfig:r}=this.state,{options:d}=r,p=[],_=d.length;for(let r=0;r<_;r+=1){let _=d[r],h=c.P.includes(_.action),m=_.callback?_.callback:()=>this.onPinHide(_.feedbackText,h,_.actionOptions,_.action);if("downloadPin"!==_.action){let e=(0,f.Z)({url:_.link||""}),o="";Array.isArray(_.text)?o=_.text.join(""):("string"==typeof _.text||"number"==typeof _.text)&&(o=_.text.toString()),p.push(_.link?(0,A.jsx)(s.Lt.Link,{dataTestId:_.dataTestId||"",href:_.link,isExternal:e,option:{value:_.action||"",label:o}}):(0,A.jsx)(s.Lt.Item,{dataTestId:_.dataTestId||"",onSelect:({event:e})=>this.onPinFeedbackActionButtonClick(e,_,m),option:{value:_.action||"",label:o}}))}else if(!e&&!1===l){let{bestPinImgSrc:e,pinTitle:l,pinDescription:r,pinCategory:d}=this.props;p.push((0,A.jsx)(s.Lt.Item,{onSelect:()=>{(0,w.Z)({category:d,filename:l||r,imageDownloadSuccessCallback:()=>{o&&o()},imgSrc:e,pinId:t,viewParameter:n,viewType:i},a)},option:{value:"downloadImage",label:this.props.i18n.bt("Unduh gambar", "Download image", "pinRep.pinFeedbackDropdown.downloadImage", undefined, true)}}))}}return p}render(){let{pinFeedbackConfig:e,showSecondary:o}=this.state,{anchor:t,onDismiss:n,feedbackData:a,feedbackType:l,hideAdReasonsModal:r,pinId:d,onHide:p,recommendationReason:c,viewParameter:_,viewType:h}=this.props,{description:m}=e,{pin:u}=this.props,{show_ad_reasons:f=!1}=u??{},w=this.getRecommendationDescriptionImage();return(0,A.jsxs)(i.Fragment,{children:[o?(0,A.jsx)(P.Z,{anchor:t,feedbackData:a,feedbackType:l,onDismiss:n,onHide:p,pinId:d,recommendationReason:c&&{board:c.board&&{entityId:c.board.entityId},reasonId:c.reasonId,reason:c.reason,throughProperties:c.throughProperties?.map(({data:e,key:o})=>({data:e,key:o}))},viewParameter:_,viewType:h}):(0,A.jsx)(s.Lt,{anchor:t,disableMobileUI:!0,headerContent:m&&(0,A.jsxs)(s.kC,{alignItems:"center",children:[(0,A.jsx)(s.xu,{"data-pin-recommendation-reason":c?.reason,maxHeight:56,overflow:"hidden",children:(0,A.jsx)(s.xv,{color:"default",overflow:"normal",size:"200",children:m})}),w]}),id:"pin-action-dropdown",idealDirection:"down",onDismiss:n,zIndex:b.lI,children:this.renderButtons()}),f&&(0,A.jsx)(y.ZP,{onDismiss:()=>r(d),pinKey:null!=u?{type:"deprecated",data:u}:null})]})}}function T(e){let{logContextEvent:o}=(0,r.v)(),t=(0,l.Z)(),i=(0,d.ZP)(),s=(0,g.S6)()(e.pinId),p=(0,u.kf)(),c=(0,n.useDispatch)();return(0,A.jsx)(z,{...e,clientTrackingParams:t,hideAdReasonsModal:e=>c((0,k.yj)(e)),hidePinFeedback:e=>c((0,k.I1)(e)),history:(0,a.k6)(),i18n:i,isWindowsPwa:p,location:(0,a.TH)(),logContextEvent:o,pin:s,showAdReasonsModal:e=>c((0,k.b9)(e)),showPinFeedback:(e,o)=>c((0,k.q1)({id:e,text:o})),showPinFeedbackOverlay:e=>c((0,k.Ib)(e))})}},379884:(e,o,t)=>{t.d(o,{Z:()=>c});var i=t(883119),n=t(407043),a=t(898781),s=t(55275),l=t(680046),r=t(915446),d=t(814197),p=t(785893);function c({anchor:e,feedbackData:o,feedbackType:t,pinId:c,onDismiss:_,onHide:h,recommendationReason:m,viewParameter:u,viewType:f}){let{logContextEvent:y}=(0,n.v)(),P=(0,a.ZP)(),b=e=>{y({event_type:101,view_type:f,view_parameter:u,element:e,component:(0,l.nb)(t)})},w=(e,i)=>{let{action:n,actionOptions:a}=(0,r.Z)({feedbackData:o,feedbackType:t,pinId:c,recommendationReason:m&&{board:m.board&&{entityId:m.board.entityId},reasonId:m.reasonId,reason:m.reason,throughProperties:m.throughProperties},complaintReason:e});b(i),(0,s.t)(n,a,void 0,y),h()},k="promoted"===t?[{text:P.bt("Tidak relevan bagi saya", "Not relevant to me", "homefeed.hideReasons.reason.notRelevant", undefined, true),reason:10,elementType:1296},{text:P.bt("Terlalu sering melihat pin ini", "Seen Pin too many times", "homefeed.hideReasons.reason.seenTooMany", undefined, true),reason:3,elementType:11172},{text:P.bt("Gambar buram atau samar", "Blurry or pixelated image", "homefeed.hideReasons.reason.lowQualityPicture", undefined, true),reason:13,elementType:10898}]:[{text:P.bt("Tidak relevan bagi saya", "Not relevant to me", "homefeed.hideReasons.reason.notRelevant", undefined, true),reason:10,elementType:1296},{text:P.bt("Tidak dalam bahasa yang saya mengerti", "Not in a language I understand", "homefeed.hideReasons.reason.languageDontUnderstand", undefined, true),reason:15,elementType:11178},{text:P.bt("Terlalu sering melihat pin ini", "Seen Pin too many times", "homefeed.hideReasons.reason.seenTooMany", undefined, true),reason:3,elementType:295},{text:P.bt("Gambar buram atau samar", "Blurry or pixelated image", "homefeed.hideReasons.reason.lowQualityPicture", undefined, true),reason:13,elementType:10898},{text:P.bt("Lainnya", "Other", "homefeed.hideReasons.reason.other", undefined, true),reason:8,elementType:11179}];return(0,p.jsx)(i.Lt,{anchor:e,disableMobileUI:!0,id:"pin-action-dropdown",idealDirection:"down",onDismiss:_,zIndex:d.lI,children:(0,p.jsx)(i.Lt.Section,{label:P.bt("Ada waktu? Beri tahu kami alasannya.", "Got a moment? Tell us why.", "homefeed.hideReasons.title", undefined, true),children:k.map(({text:e,reason:o,elementType:t})=>(0,p.jsx)(i.Lt.Item,{dataTestId:"hide-reason",onSelect:()=>w(o,t),option:{value:`hide-reason-${e.split(" ").join("-")}`,label:e}}))})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/5147.id_ID-e6a7eb1c98175e77.mjs.map