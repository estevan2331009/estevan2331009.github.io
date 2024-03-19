"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[64414],{56354:e=>{var t,i,l,r,n,s={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CreatorCard_pin",selections:[t={alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"typeName",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryPinMetadataField",kind:"LinkedField",name:"metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"templateType",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"adMatchReason",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doneByMe",storageKey:null},{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[t,{alias:null,args:null,kind:"ScalarField",name:"imageThumbnailUrl",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPromoted",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"pinner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isAdsOnlyProfile",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"adsOnlyProfileSite",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"explicitlyFollowedByMe",storageKey:null},t,r={alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSmallUrl",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[r,n],storageKey:null},{alias:null,args:null,concreteType:"PinRecommendationReason",kind:"LinkedField",name:"recommendationReason",plural:!1,selections:[{alias:null,args:null,concreteType:"Board",kind:"LinkedField",name:"board",plural:!1,selections:[t,i,l],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reason",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reasonId",storageKey:null},{alias:null,args:null,concreteType:"PinThroughProperties",kind:"LinkedField",name:"throughProperties",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"data",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"key",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Sponsorship",kind:"LinkedField",name:"sponsorship",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"creator",plural:!1,selections:[{alias:"creatorId",args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sponsor",plural:!1,selections:[{alias:"sponsorId",args:null,kind:"ScalarField",name:"id",storageKey:null},r,n],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null},{alias:null,args:null,concreteType:"Interest",kind:"LinkedField",name:"sourceInterest",plural:!1,selections:[t,i,{alias:null,args:null,kind:"ScalarField",name:"urlName",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useCreatorRecsPrevStateCloseup_pin"}],type:"Pin",abstractKey:null};s.hash="b49e47e39a3bebf3bfd6f2c19c5e99cc",e.exports=s},172767:e=>{var t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCreatorRecsPrevStateCloseup_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"promotedIsLeadAd",storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"typeName",storageKey:null}],storageKey:null},{kind:"ClientExtension",selections:[{alias:null,args:null,kind:"ScalarField",name:"showSuggestedCreatorRecs",storageKey:null}]}],type:"Pin",abstractKey:null};t.hash="a1f87ab2b8198cdc7fd8fc3cdaa872f0",e.exports=t},536237:(e,t,i)=>{i.d(t,{Z:()=>O});var l,r,n=i(667294),s=i(702664);i(167912);var o=i(883119),a=i(407043),d=i(319915),c=i(701500),u=i(422578),p=i(273213);let h=function(e,t,i){let l=(0,p.B)(e);switch(l.type){case"deprecated":return t;case"graphqlRef":{let e=(0,u.useRelayEnvironment)();return t=>(0,u.commitLocalUpdate)(e,e=>i(e,t))}default:throw l.type,Error("Unexpected case")}};var m=i(916117),_=i(898781),y=i(615568),g=i(947599),f=i(19121),v=i(784590),w=i(349700),b=i(829407),x=i(356997),P=i(694379),S=i(142103),T=i(777906),j=i(785893);let C=({creatorData:e,onTap:t,onUserFollow:i})=>{let l=(0,_.ZP)(),r=(0,f.Z)(),{explicitly_followed_by_me:n,follower_count:s=0,full_name:a,id:d,image_medium_url:c,username:u,verified_identity:p,is_verified_merchant:h}=e||{},m=`/${u}/`;return(0,j.jsx)(o.sg,{span:4,children:(0,j.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{padding:"0px 2px"}},direction:"column",display:"flex",marginBottom:1,children:[(0,j.jsx)(o.Tg,{href:m,onTap:()=>t(d),children:(0,j.jsxs)(o.kC,{alignItems:"center",direction:"column",justifyContent:"start",children:[(0,j.jsx)(o.xu,{height:60,width:60,children:(0,j.jsx)(x.qE,{name:a??"",size:"fit",src:c??"",verified:!1})}),(0,j.jsxs)(o.xu,{marginBottom:1,paddingY:2,children:[(0,j.jsx)(o.xu,{marginBottom:1,children:(0,j.jsx)(o.xv,{align:"center",lineClamp:1,size:"100",weight:"bold",children:p||h?(0,j.jsx)(T.Z,{badgeSize:"xs",badgeSpacing:2,fullName:a??"",isVerifiedIdentity:p?.verified,isVerifiedMerchant:h}):a})}),(0,j.jsx)(o.xv,{align:"center",size:"100",children:(0,w.nk)(l.nbt(["{{ followerCount }} pengikut"], s, "suggestedCreatorRep.creator.followerCount", true),{followerCount:(0,j.jsx)(P.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:s},s)})})]})]})}),(0,j.jsx)(S.Z,{fullName:a,id:d,imageUrl:c,isOwnProfile:r.isAuth&&r.id===d,isSecondaryButton:!0,onUserFollow:e=>i({userIsNowFollowing:e,creatorId:d}),profileUrl:`/${u}/`,shouldStopEventPropagation:!0,size:"sm",userFollowed:n,viewParameter:156,viewType:3})]})})},k=({creatorRecs:e,fullName:t,pinId:i,viewParameter:l,viewType:r})=>{let{logContextEvent:n}=(0,a.v)(),s=(0,_.ZP)();(0,b.Z)(()=>{n({event_type:13,component:13891,view_parameter:l,view_type:r,aux_data:{...i?{pin_id:i}:{}}})});let d=e=>{n({event_type:101,component:13891,view_parameter:l,view_type:r,object_id_str:e,aux_data:{...i?{pin_id:i}:{}}})},c=({userIsNowFollowing:e,creatorId:t})=>{e?n({event_type:45,component:13891,object_id_str:t,view_parameter:l,view_type:r,aux_data:{...i?{pin_id:i}:{}}}):n({event_type:46,component:13891,object_id_str:t,view_parameter:l,view_type:r,aux_data:{...i?{pin_id:i}:{}}})};return(0,j.jsx)(o.xu,{minWidth:432,paddingY:4,children:(0,j.jsxs)(o.xu,{borderStyle:"shadow",paddingX:5,paddingY:4,rounding:4,children:[t&&(0,j.jsx)(o.X6,{align:"center",size:"300",children:(0,w.nk)(s.bt("Lebih banyak yang seperti {{creatorName}}", "More like {{creatorName}}", "suggestedCreatorRecs.title", undefined, true),{creatorName:t})}),(0,j.jsx)(o.xu,{display:"flex",justifyContent:"between",marginTop:4,width:"100%",children:e.map(e=>(0,j.jsx)(C,{creatorData:e.user,onTap:d,onUserFollow:c},e.user_id))})]})})},I=3,A=["creatorrecommendationitem.user_id","creatorrecommendationitem.user()","user.explicitly_followed_by_me","user.id","user.follower_count","user.full_name","user.image_medium_url","user.username","user.verified_identity","user.is_verified_merchant"],z=({fullName:e,id:t,numCreatorsToShow:i=I,pinId:l,viewParameter:r,viewType:n})=>{let s=(0,v.Z)({name:"ApiResource",options:{url:"/v3/orientation/nux_creator_recommendations/",data:{fields:A.join(","),page_size:i,referrer:4,target_user:t}}});if(!s.isLoaded||!(s.data&&s.data.length===i))return null;let o=s.data||[];return(0,j.jsx)(k,{creatorRecs:o,fullName:e,pinId:l,viewParameter:r,viewType:n})};var F=i(558068);let R=void 0!==l?l:l=i(172767),U=e=>e.includes("/:username"),B=function(e){let t=function(){let{forward:e}=(0,F.Hv)(),t=e&&e.length>0&&e[0].match&&e[0].match.path?e[0].match.path:null,i=!!t&&U(t);return!!i}(),i=(0,m.Z)(R,e);if(!t||!i)return{creatorRecsPrevState:!1};{let e=!!i.promotedIsLeadAd,t=i.richSummary?.typeName==="product",l=!!i&&!e&&!t&&!!i.showSuggestedCreatorRecs;return{creatorRecsPrevState:l}}};var N=i(312918),K=i(447948);function Z(e,t,i){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let E=void 0!==r?r:r=i(56354),L=(0,n.lazy)(()=>Promise.all([i.e(67316),i.e(5147),i.e(71219)]).then(i.bind(i,188814)));class D extends n.PureComponent{constructor(...e){super(...e),Z(this,"state",{shouldShowCreatorRecs:this.props.suggestedCreatorRecsPrevState,user:this.props.officialUser}),Z(this,"anchorElementRef",(0,n.createRef)()),Z(this,"handleNavigateAndLog",(e,t)=>{let{pin:i}=this.props,l=!!i.storyPinDataId;e===t?this.props.logContextEvent({event_type:101,element:13382,view_type:this.viewType,view_parameter:this.viewParameter,...l?{component:230}:Object.freeze({}),object_id_str:i.entityId,aux_data:{pin_id:i.entityId,creator_id:i.sponsorship?.creator?.creatorId,aop_origin:"CreatorCard",...l?{story_pin_template_type:i.storyPinData?.metadata?.templateType}:{}}}):this.props.logContextEvent({event_type:101,view_type:this.viewType,view_parameter:this.viewParameter,element:11619,...l?{component:230}:Object.freeze({}),object_id_str:i.entityId,aux_data:{pin_id:i.entityId,creator_id:i.sponsorship?.creator?.creatorId,...l?{story_pin_template_type:i.storyPinData?.metadata?.templateType}:{}}})}),Z(this,"handleNavigateAndLogSponsorClick",()=>{let{pin:e}=this.props,t=e.entityId,i=e.sponsorship?.creator?.creatorId,l=e.sponsorship?.sponsor?.sponsorId,r=!!e.storyPinDataId;i&&l&&this.props.logContextEvent({event_type:101,view_type:this.viewType,view_parameter:this.viewParameter,element:11619,...r?{component:230}:Object.freeze({}),object_id_str:t,aux_data:{pin_id:t,creator_id:i,sponsor_id:l}})}),Z(this,"handleUserFollow",(e,t)=>{let{setShowSuggestedCreatorRecs:i,pin:{entityId:l,doneByMe:r},clientTrackingParams:n}=this.props;l.length,t?(this.props.logContextEvent({event_type:45,view_type:this.viewType,view_parameter:this.viewParameter,object_id_str:e,view_data:{isCurrentUser:r,viewObjectId:l,viewObjectIdStr:l},aux_data:{pin_id:l},clientTrackingParams:n}),this.setState({shouldShowCreatorRecs:!0}),i()):this.props.logContextEvent({event_type:46,view_type:this.viewType,view_parameter:this.viewParameter,object_id_str:e,aux_data:{pin_id:l},clientTrackingParams:n})})}static getDerivedStateFromProps(e,t){let i=e.officialUser;if(i&&i!==t.user)return{...t,user:i};let l=e.suggestedCreatorRecsPrevState;return l&&!t.shouldShowCreatorRecs?{...t,shouldShowCreatorRecs:l}:null}get viewType(){return this.props.viewType||3}get viewParameter(){return this.props.viewParameter||156}render(){let{user:e}=this.state;if(!e)return(0,j.jsx)(o.xu,{});let{pin:t,viewerUserId:i,isORBACProfileManager:l,clientTrackingParams:r}=this.props,{full_name:n,follower_count:s,id:a,image_medium_url:u,is_verified_merchant:p,username:h}=e,m=!!e.verified_identity?.verified,_=!!t.promotedIsLeadAd,y=t.richSummary?.typeName==="product",f=!!(!_&&!y&&this.state.shouldShowCreatorRecs),v=!!i&&i===a,w=t.pinner?.isAdsOnlyProfile&&t.pinner.adsOnlyProfileSite?t.pinner.adsOnlyProfileSite:`/${h}/`;return(0,j.jsx)(o.xu,{position:"relative",children:(0,j.jsxs)(o.xu,{children:[(0,j.jsxs)(o.kC,{alignItems:"center",justifyContent:"start",children:[(0,j.jsx)(o.xu,{flex:"grow",children:(0,j.jsx)(N.Z,{followerCount:s,fullName:n,imageUrl:u,isPromoted:!!(t.promoter&&t.isPromoted),isVerifiedIdentity:m,isVerifiedMerchant:p,onNavigateClick:()=>this.handleNavigateAndLog(w,t.pinner?.adsOnlyProfileSite),onNavigateSponsorClick:this.handleNavigateAndLogSponsorClick,openNewTab:w===t.pinner?.adsOnlyProfileSite,profileUrl:w,sponsorName:t.sponsorship?.sponsor?.fullName??"",sponsorshipStatus:t.sponsorship?.status,sponsorUsername:t.sponsorship?.sponsor?.username??""})}),!l&&(t.promoter&&t.isPromoted?(0,j.jsx)(d.Z,{name:"SafeSuspense_CreatorCard_LegacyPinFeedbackButton",children:(0,j.jsx)(g.Z,{children:(0,j.jsx)(L,{ad_match_reason:t.adMatchReason,board:t.board&&{entityId:t.board.entityId,imageThumbnailUrl:t.board.imageThumbnailUrl,name:t.board.name,url:t.board.url},isPromoted:!!t.promoter&&t.isPromoted,pinId:t.entityId,pinner:t.pinner&&{explicitlyFollowedByMe:t.pinner.explicitlyFollowedByMe,entityId:t.pinner.entityId,fullName:t.pinner.fullName,imageSmallUrl:t.pinner.imageSmallUrl,username:t.pinner.username},promoter:t.promoter&&{fullName:t.promoter.fullName,username:t.promoter.username},recommendationReason:t.recommendationReason&&{board:t.recommendationReason.board&&{entityId:t.recommendationReason.board.entityId,name:t.recommendationReason.board.name,url:t.recommendationReason.board.url},reason:t.recommendationReason.reason,reasonId:t.recommendationReason.reasonId,throughProperties:t.recommendationReason.throughProperties?.map(({data:e,key:t})=>({data:e,key:t}))},sourceInterest:t.sourceInterest&&{entityId:t.sourceInterest.entityId,name:t.sourceInterest.name,urlName:t.sourceInterest.urlName},viewType:this.viewType})})}):(0,j.jsx)(o.xu,{flex:"none",children:(0,j.jsx)(o.xu,{children:!v&&(0,j.jsx)(c.Z,{anchor:".followButton",anchorElementRef:this.anchorElementRef.current,children:(0,j.jsx)(o.xu,{ref:this.anchorElementRef,children:(0,j.jsx)(S.Z,{button:({followText:e,onClick:t,userFollowed:i})=>(0,j.jsx)(o.xu,{"data-test-id":`user-${i?"unfollow":"follow"}-button`,children:(0,j.jsx)(o.zx,{accessibilityLabel:i?this.props.i18n.bt("Mengikuti", "Following", "creatorCard.followingButton.accessibilityLabel", undefined, true):this.props.i18n.bt("Ikuti", "Follow", "creatorCard.followButton.accessibilityLabel", undefined, true),fullWidth:!0,onClick:t,selected:!!i,size:"lg",text:e})}),clientTrackingParams:r,fullName:n,id:a,imageUrl:u||"",inline:!0,isOwnProfile:v,onUserFollow:e=>this.handleUserFollow(a,e),profileUrl:w,size:"md",viewParameter:this.viewParameter,viewType:this.viewType})})})})}))]}),f&&(0,j.jsx)(o.xu,{marginEnd:1,marginStart:1,children:(0,j.jsx)(z,{fullName:n,id:a,pinId:t.entityId,viewParameter:this.viewParameter,viewType:this.viewType})})]})})}}let O=(0,y.Z)(function(e){let{logContextEvent:t}=(0,a.v)(),i=(0,_.ZP)(),l=(0,m.Z)(E,e.input),r=(0,s.useDispatch)(),n=h(e.input,()=>{r((0,K.Vw)(l.entityId))},e=>{let t=e.get(l.entityId);t&&t.setValue(!0,"showSuggestedCreatorRecs")}),o=(0,f.Z)(),{creatorRecsPrevState:d}=B(l);return(0,j.jsx)(D,{...e,i18n:i,logContextEvent:t,pin:l,setShowSuggestedCreatorRecs:n,suggestedCreatorRecsPrevState:d,viewerUserId:o.isAuth?o.id:null})})},783810:(e,t,i)=>{i.d(t,{Z:()=>r});var l=i(784590);function r({creatorId:e,children:t}){let{data:i}=(0,l.Z)({name:"UserResource",options:{field_set_key:"grid_item",user_id:e}});return t(i)}},820621:(e,t,i)=>{i.d(t,{Z:()=>r});var l=i(214494);async function r(e,t){let i=async()=>{let e={name:t.bt("Simpan Cepat", "Quick Saves", "quickSave.defaultBoardName", undefined, true),layout:"quick_saves",privacy:"public",return_existing:!0};return l.Z.create("BoardResource",e).callCreate()},{resource_response:{data:r}}=await i(),n=async t=>l.Z.create("RepinResource",{board_id:t,description:e.description||"",is_removable:e.promotedIsRemovable??void 0,link:e.link,pin_id:e.entityId||"",title:e.title||""}).callCreate({showError:!1});return await n(r.id),r}},918301:(e,t,i)=>{i.d(t,{CB:()=>h,y9:()=>p});var l=i(667294),r=i(425288),n=i(883119),s=i(186656),o=i(121151),a=i(898781),d=i(785893);let c=({onConfirm:e})=>{let t=(0,a.ZP)(),[i,r]=(0,l.useState)(!1),c=()=>{r(!0),(0,s.Z)({url:"/v3/users/email/verify/resend/",method:"POST"})};return(0,d.jsx)(o.ZP,{accessibilityModalLabel:t.bt("Verifikasi email Anda", "Verify your email", "Accessible label for email verification being required", undefined, true),footer:(0,d.jsxs)(n.kC,{gap:{row:2,column:0},justifyContent:"end",children:[i?(0,d.jsx)(n.zx,{color:"gray",disabled:i,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Email dikirimkan", "Email sent", "Button text for verification email being sent", undefined, true)}):(0,d.jsx)(n.zx,{color:"gray",disabled:i,fullWidth:!0,onClick:c,size:"lg",text:t.bt("Kirim ulang email", "Resend email", "Button text for resending email verification email", undefined, true)}),(0,d.jsx)(n.zx,{color:"red",fullWidth:!0,onClick:e,size:"lg",text:t.bt("Oke", "Got it", "Button text for acknowledging email verificaiton is required", undefined, true)})]}),heading:t.bt("Verifikasi email Anda", "Verify your email", "Accessible label for email verification being required", undefined, true),onDismiss:e,role:"alertdialog",children:(0,d.jsx)(n.xu,{padding:8,children:(0,d.jsx)(n.xv,{align:"center",size:"300",children:t.bt("Jaga keamanan akun Anda dengan memverifikasi alamat email. Periksa kotak masuk yang terkait dengan akun ini untuk menemukan email dari kami guna terus menggunakan Pinterest.", "Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.", "Inform users that they need to verify their email to keep their account secure and continue using Pinterest", undefined, true)})})})},{Provider:u,useHook:p}=(0,r.Z)("EmailVerificationReminderModal");function h({children:e}){let[t,i]=(0,l.useState)(!1),r=(0,l.useMemo)(()=>({showEmailVerificationReminderModal:()=>{i(!0)}}),[]);return(0,d.jsxs)(l.Fragment,{children:[(0,d.jsx)(u,{value:r,children:e}),t&&(0,d.jsx)(c,{onConfirm:()=>{i(!1)}})]})}},615568:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(667294),r=i(407043),n=i(704115),s=i(19121),o=i(357787),a=i(785893);function d(e,t,i){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let c=(0,n.Z)()&&(0,n.Z)().debug_impression_log,u={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Story:{impressionType:"storyImpression",idType:"idStr",eventType:170},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061}};function p(e){let t=(0,o.Z)(e);class i extends l.Component{constructor(...e){super(...e),d(this,"currentNs",()=>1e6*Date.now()),d(this,"startTime",0),d(this,"debugPinImpressions",c&&"Pin"===this.props.impressionType&&this.props.viewer.isAuth&&this.props.viewer.isEmployee),d(this,"handleVisibilityChanged",e=>{let{componentType:t,contextLogData:i,impressionAuxFields:l,impressionType:r,loggingId:n,slotIndex:s,viewParameter:o,viewType:a,viewData:d,logContextEvent:c}=this.props;if(e)this.startTime=this.currentNs(),this.debugPinImpressions&&console.log(s+" started timer");else{let e=u[r],p=e.idType,h=this.currentNs(),m={endTime:h,[p]:n,slotIndex:s,time:this.startTime,renderDuration:h-this.startTime,...l};c({event_type:e.eventType,component:t,event_data:{[e.impressionType]:[m]},view_type:a,view_parameter:o,view_data:d,aux_data:{...i}}),this.debugPinImpressions&&console.log(s+" logged for "+(h-this.startTime)/1e9+"s")}})}render(){return(0,a.jsx)(t,{onVisibilityChanged:this.handleVisibilityChanged,...this.props})}}return function(e){let{logContextEvent:t}=(0,r.v)(),l=(0,s.Z)();return(0,a.jsx)(i,{...e,logContextEvent:t,viewer:l})}}},357787:(e,t,i)=>{i.d(t,{Z:()=>h});var l=i(667294),r=i(973935),n=i(785893);function s(e,t,i){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let o=new Map,a=null,d=e=>{e.forEach(e=>{let t=o.get(e.target);t&&t(e)})},c=e=>{a.unobserve(e),o.delete(e)},u=(e,t="-64px 0px 0px 0px",i)=>{let l={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:t,threshold:[0,.5,1]};a=a||new window.IntersectionObserver(d,l),o.set(e,i),a.observe(e)},p=e=>o.has(e),h=e=>{class t extends l.Component{constructor(...e){super(...e),s(this,"seen",!1),s(this,"enter",e=>{let t=e.intersectionRatio>0||e.isIntersecting;this.seen=t,this.seen&&this.props.onVisibilityChanged(!0)}),s(this,"leave",()=>{let e=this._node;e&&p(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)}),s(this,"observe",e=>{try{this._node=r.findDOMNode(this)}catch(e){return}if(!this._node)return;let{inAdsDesktopVideoExperiment:t}=this.props,i=this._node;u(i,e,e=>{if(!o.has(i))return;let l=t?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,r=this.props.trackFullVisible?e.intersectionRatio>=1:l,n=this.props.trackFullVisible?0===e.intersectionRatio:!r;!this.seen&&r?this.enter(e):this.seen&&n&&this.leave()})})}componentDidMount(){let{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){let e=this._node;e&&(this.leave(),c(e))}render(){return(0,n.jsx)(e,{...this.props})}}return s(t,"displayName",`DeprecatedWithVisibilityChanged(${e.displayName||e.name})`),t}},426975:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(883119),r=i(785893);function n({children:e}){return(0,r.jsx)(l.xu,{marginTop:4,minHeight:48,children:e})}},142103:(e,t,i)=>{i.d(t,{Z:()=>j});var l=i(667294),r=i(702664),n=i(883119),s=i(464232),o=i(407043),a=i(11363),d=i(946984),c=i(918301),u=i(898781),p=i(349700),h=i(584595),m=i(957161),_=i(343341),y=i(829407),g=i(694379),f=i(785893);let v=({followText:e,followerCount:t,userFollowed:i})=>{let l=(0,u.ZP)();return(0,p.nk)(l.bt("{{ followCount }} {{ followText }}", "{{ followCount }} {{ followText }}", " - ", undefined, true),{followCount:(0,f.jsx)(n.xu,{"data-test-id":"followCount",opacity:i?void 0:.8,paddingX:1,children:(0,f.jsx)(n.xv,{color:i?"subtle":"inverse",children:(0,f.jsx)(g.Z,{shortform:!0,shortformMaximumFractionDigits:0,value:t})})},"followCount"),followText:(0,f.jsx)(n.xu,{"data-test-id":"followText",paddingX:1,children:(0,f.jsx)(n.xv,{color:i?"default":"inverse",weight:"bold",children:e})},"followText")})};var w=i(807532),b=i(461773),x=i(698330),P=i(201155);function S(e,t,i){var l;return(t="symbol"==typeof(l=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=typeof l)return l;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?l:String(l))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class T extends l.PureComponent{constructor(...e){super(...e),S(this,"handleButtonClick",({event:e})=>{let{requireAuth:t,i18n:i,userFollowed:l}=this.props;if(t){e.stopPropagation(),t({loginModalHeader:(0,a.N4)({i18n:i,toFollow:!l})});return}let{shouldStopEventPropagation:r,loggingData:n}=this.props;r&&(e.preventDefault(),e.stopPropagation()),this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,clientTrackingParams:this.props.clientTrackingParams,...n||Object.freeze({})}),this.toggleFollowUnfollow()}),S(this,"handleClick",({event:e})=>{let{requireAuth:t}=this.props;if((t||this.props.shouldStopEventPropagation)&&e.stopPropagation(),t){t();return}this.toggleFollowUnfollow()}),S(this,"toggleFollowUnfollow",()=>{let{id:e,mostRecentPinId:t,loggingData:i,userFollowed:l,viewType:r,viewParameter:n,clientTrackingParams:s}=this.props;l?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:r,view_parameter:n,aux_data:{pin_id:t},clientTrackingParams:s,...i||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:r,view_parameter:n,aux_data:{pin_id:t},clientTrackingParams:s,...i||Object.freeze({})}),this.follow())}),S(this,"follow",()=>{let{follow:e,id:t,onUserFollow:i,mostRecentPinId:l,setMostRecentPinId:r,inviteCode:n,handleFollowSuccessFromInvite:s,loggingData:o,viewType:a,viewParameter:d}=this.props;e(t,l,()=>{n?(s?.(),this.props.logContextEvent({event_type:14858,object_id_str:t,view_type:a,view_parameter:d,...o||Object.freeze({})})):this.showConfirmation()},this.showError),i&&i(!0),r(null)}),S(this,"showToast",e=>{let{id:t,imageUrl:i,profileUrl:l,toastManagerContext:r,suppressToasts:n}=this.props;n||r.showOneToast(({hideToast:r})=>(0,f.jsx)(P.Z,{handleHide:r,href:l,imageUrl:i,text:e,userId:t}))}),S(this,"showConfirmation",()=>{let e=(0,f.jsx)(n.xv,{children:this.props.i18n.bt("Mengikuti! Pin yang mereka buat akan muncul di sajian beranda Anda!", "Following! Their created Pins will show up in your home feed!", "userFollowButton.informationalToastText2", undefined, true)});this.showToast(e)}),S(this,"showError",e=>{let{fullName:t,userFollowed:i,showEmailVerificationReminderModal:l,loggingData:r,inviteCode:s,id:o,viewParameter:a,viewType:d}=this.props,c=i?this.props.i18n.bt("Gagal berhenti mengikuti {{ usernameComponent }}.", "Error unfollowing {{ usernameComponent }}.", "UserFollowButton.error.unfollowing", undefined, true):this.props.i18n.bt("Gagal mengikuti {{ usernameComponent }}.", "Error following {{ usernameComponent }}.", "UserFollowButton.error.following", undefined, true);if(e&&e.api_error_code===h.H9){l();return}let u=(0,f.jsx)(n.xv,{children:(0,p.nk)(c,{usernameComponent:(0,f.jsx)(n.xv,{inline:!0,weight:"bold",children:t})})});this.showToast(u),!i&&s&&this.props.logContextEvent({event_type:14859,object_id_str:o,view_type:d,view_parameter:a,...r||Object.freeze({})})}),S(this,"unfollow",()=>{let{id:e,onUserFollow:t,unfollow:i,mostRecentPinId:l,setMostRecentPinId:r}=this.props;i(e,l,()=>{},this.showError),t&&t(!1),r(null)})}renderButton(){let{button:e,followerCount:t,inline:i=!1,isOwnProfile:l,invertButtonColor:r,isSecondaryButton:s,size:o,showFollowerCount:a,userFollowed:d}=this.props,c=d?this.props.i18n.bt("Mengikuti", "Following", "User follow button", undefined, true):this.props.i18n.bt("Ikuti", "Follow", "User follow button", undefined, true);if(e)return e({followText:c,onClick:this.handleButtonClick,userFollowed:d});if(l)return(0,f.jsx)(n.zx,{disabled:!0,fullWidth:!0,text:this.props.i18n.bt("Ini Anda", "This is you", "Button label to note that this is your Profile", undefined, true)});if(!a)return(0,f.jsx)(n.xu,{"data-test-id":`user-${d?"unfollow":"follow"}-button`,display:"inlineBlock",children:(0,f.jsx)(n.zx,{accessibilityLabel:d?this.props.i18n.bt("Berhenti Ikuti", "Unfollow", "userUnfollowButton.button.accessibilityLabel", undefined, true):this.props.i18n.bt("Ikuti", "Follow", "userFollowButton.button.accessibilityLabel", undefined, true),color:s||d?"gray":"red",fullWidth:i,onClick:this.handleButtonClick,selected:r?!d:!!d,size:o??void 0,text:c})});{let e="number"==typeof t?(0,f.jsx)(v,{followerCount:t,followText:c,userFollowed:d}):c;return(0,f.jsx)(n.iP,{onTap:this.handleClick,children:(0,f.jsx)(n.xu,{color:d?"secondary":"primary",paddingX:3,paddingY:3,rounding:2,children:(0,f.jsx)(n.kC,{alignItems:"center",justifyContent:"start",children:e})})})}}render(){let{showPulsar:e,userFollowed:t}=this.props;return(0,f.jsxs)(n.xu,{display:"flex",position:"relative",children:[this.renderButton(),e&&(0,f.jsx)(n.iP,{onTap:this.handleClick,children:(0,f.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},display:"inlineBlock",position:"absolute",children:(0,f.jsx)(n.o3,{paused:t||!1})})})]})}}function j(e){let{logContextEvent:t}=(0,o.v)(),i=(0,u.ZP)(),{id:l,setMostRecentPinId:n}=(0,w.f)(),a=(0,d.Z)(),p=(0,r.useDispatch)(),{showEmailVerificationReminderModal:h}=(0,c.y9)(),g=(0,x.mN)()(e.id),v=g?.follower_count,P=g?g.explicitly_followed_by_me:e.userFollowed;return(0,y.Z)(()=>{let{id:t}=e,i=m.Z.getItem(s.AG)||"";i&&i===t&&(m.Z.removeItem(s.AG),p((0,b.ZN)(i,e.clientTrackingParams)))}),(0,f.jsx)(T,{...e,follow:(t,i,l,r)=>{p((0,b.yA)(t,i,e.clientTrackingParams,e.inviteCode)).then(l).catch(e=>{r(e)})},followerCount:v,i18n:i,logContextEvent:t,mostRecentPinId:l,requireAuth:a,setMostRecentPinId:n,showEmailVerificationReminderModal:h,toastManagerContext:(0,_.F9)(),unfollow:(t,i,l,r)=>{p((0,b.KF)(t,i,e.clientTrackingParams)).then(l,r)},userFollowed:P})}},807532:(e,t,i)=>{i.d(t,{C:()=>a,f:()=>o});var l=i(667294),r=i(425288),n=i(785893);let{Provider:s,useHook:o}=(0,r.Z)("MostRecentPin");function a({children:e}){let[t,i]=(0,l.useState)(),[r,o]=(0,l.useState)(),a=(0,l.useCallback)(e=>{let t=r?r.slice(0,10):[],i=[e].concat(t.filter(t=>t!==e));o(i)},[r]),d=(0,l.useMemo)(()=>({id:t,plpImageSignatures:r,setMostRecentPinId:i,setMostRecentPinImage:a}),[t,r,a]);return(0,n.jsx)(s,{value:d,children:e})}},970576:(e,t,i)=>{i.d(t,{Z:()=>a});var l=i(883119),r=i(499128),n=i(898781),s=i(349700),o=i(785893);function a({boardName:e,boardUrl:t,isBoardlessPin:i,isFromPinBuilder:a,hasNewPin:d,onChangeButtonClick:c,onVisitButtonClick:u=()=>{},onHide:p,onUndo:h,pinImageUrl:m}){let _;let y=(0,n.ZP)();return a?_={accessibilityLabel:y.bt("Kunjungi Pin", "Visit Pin", "PostSavedPinToast.a11yVisitButton", undefined, true),label:y.bt("Kunjungi", "Visit", "PostSavedPinToast.VisitButton", undefined, true),size:"lg",onClick:u}:(c||h)&&(_={accessibilityLabel:d&&i&&c?y.bt("Ubah tujuan Pin", "Change Pin destination", "PostSavedPinToast.a11yChangeButton", undefined, true):y.bt("Urungkan Menyimpan Pin", "Undo Saved Pin", "PostSavedPinToast.a11yUndoButton", undefined, true),label:d&&i&&c?y.bt("Ganti", "Change", "PostSavedPinToast.ChangeButton", undefined, true):y.bt("Urungkan", "Undo", "PostSavedPinToast.UndoButton", undefined, true),size:"lg",onClick:d&&i&&c?()=>c():h}),(0,o.jsx)(r.ZP,{duration:i?6e3:3e3,imageUrl:m,onHide:p,primaryAction:_,text:(0,o.jsx)(l.xv,{overflow:"normal",size:"200",children:(0,s.nk)(y.bt("Disimpan ke {{ destination }}", "Saved to {{ destination }}", "PostSavedPinToast.SavedToBoardLabel", undefined, true),{destination:(0,o.jsx)(l.rU,{href:i?"/me/":t??"",children:(0,o.jsx)(l.xv,{lineClamp:1,size:"200",weight:"bold",children:e},"PostSavedPinToastBoardName")})})}),thumbnail:i?{icon:(0,o.jsx)(l.JO,{accessibilityLabel:y.bt("Disimpan ke gambar mini profil", "Saved to profile thumbnail", "PostSavedPinToast.thumbnail.accessibilityLabel", undefined, true),color:"default",icon:"history",size:24})}:void 0})}},749147:(e,t,i)=>{function l(e){return{type:"PIN_QUICK_SAVE",payload:e}}function r(e){return{type:"UPDATE_PINS_WITH_QUICKSAVE_REPIN",payload:{newPin:e}}}i.d(t,{X:()=>r,d:()=>l})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/64414.id_ID-3f979b6ddf5353c0.mjs.map