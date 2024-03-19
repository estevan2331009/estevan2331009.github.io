"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[67316],{897328:e=>{var a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"AdReasonsModalContainer_pin",selections:[{alias:null,args:null,concreteType:"AdTargetingAttribution",kind:"LinkedField",name:"adTargetingAttribution",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isCustomerListMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingRetargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isActalikeMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEngagementMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isExpandTargetingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isFromGpsLocation",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isVisitorMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isShoppingProspectingMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isPlPersonaMatched",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedAgeBucket",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedLocale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedInterest",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedGender",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"matchedDevice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoRegion",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"geoPostalCode",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promoter",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"fullName",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAdvertiserName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"promotedPartnershipAttributionName",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPromotedPartnership",storageKey:null}],type:"Pin",abstractKey:null};a.hash="ee7db6c842dc59bc7c3fde7a6b1774cf",e.exports=a},170168:(e,a,n)=>{n.d(a,{Ag:()=>s,C0:()=>r,L1:()=>g,Vi:()=>i,YD:()=>_,kS:()=>t,oo:()=>l,p3:()=>p,vC:()=>c,vI:()=>d});var o=n(401060);let t="https://www.pinterest.com/business/hub/",s="https://www.pinterest.com/homefeed/",i="www.pinterest.com",l="https://help.pinterest.com",r=`${(0,o.Z)({site:"www"})}`,c=(0,o.Z)({site:"developers"}),d=`${(0,o.Z)({site:"sterling"})}`,_=`${(0,o.Z)({site:"analytics"})}`,g=`${(0,o.Z)({site:"trends"})}`,p=`${(0,o.Z)({site:"www",path:"/product-catalogs/data-source/?advertiserId="})}`},567316:(e,a,n)=>{n.d(a,{ZP:()=>w,we:()=>j,nn:()=>z,zn:()=>M});var o,t=n(667294);n(167912);var s=n(407043),i=n(916117),l=n(780280),r=n(784590),c=n(19121),d=n(883119),_=n(121151),g=n(898781),p=n(349700),m=n(966113),h=n(170168),u=n(785893);function A({iconAccessibilityLabel:e,icon:a,linkAccessibilityLabel:n,showNavigationIcon:o,text:t}){return(0,u.jsxs)(d.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,u.jsx)(d.xu,{"data-test-id":"ad-reason-icon",children:(0,u.jsx)(d.Sj,{accessibilityLabel:e,bgColor:"lightGray",icon:a,iconColor:"darkGray"})}),(0,u.jsx)(d.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,u.jsx)(d.xv,{children:t})}),o&&n&&(0,u.jsx)(d.kC,{direction:"column",justifyContent:"center",children:(0,u.jsx)(d.JO,{accessibilityLabel:n,color:"default",icon:"arrow-forward"})})]})}var P=n(698330);function x({brandName:e,language:a,geoRegion:n,geoPostalCode:o,ageBucketMatch:t,localeMatch:s,interestMatch:i,genderMatch:l,deviceMatch:r,isCustomerListMatched:_,isShoppingTargetingRematched:m,isActAlikeMatched:h,isEngagementMatched:x,isExpandTargetingMatched:b,isFromGPSLocation:f,isVisitorMatched:y,isShoppingProspectingMatched:k,isPlPersonaMatched:v,gender:R,device:M}){let z=(0,g.ZP)(),{id:j}=(0,c.Z)(),w=(0,P.mN)()(j??""),L=w?.gender??"";return(0,u.jsx)(d.xu,{"data-test-id":"ad-reasons",children:(0,u.jsxs)(d.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[""!==t&&(0,u.jsx)(A,{icon:"person",iconAccessibilityLabel:z.bt("Ikon untuk kelompok usia penargetan iklan", "Icon for ad targeting age bucket", "app.common.react.components.PinRep.components.AdReasons.ageIcon", undefined, true),text:(0,p.nk)(z.bt("Usia {{ ageBucketMatch }}", "Age {{ ageBucketMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.ageBucketMatch", undefined, true),{ageBucketMatch:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:t},"ad-reasons-age-bucket")})}),""!==l&&"unspecified"!==L&&(0,u.jsx)(A,{icon:"person",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan jenis kelamin", "Icon for ad targeting gender", "app.common.react.components.PinRep.components.AdReasons.genderIcon", undefined, true),text:(0,p.nk)(z.bt("{{ gender }}", "{{ gender }}", "app.common.react.components.PinRep.components.AdReasonsModal.genderMatch", undefined, true),{gender:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:R},"ad-reasons-gender")})}),""!==n&&(0,u.jsx)(A,{icon:"location",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan lokasi", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),text:(0,p.nk)(z.bt("Berlokasi di {{geoRegion}}", "Based in {{geoRegion}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoRegion:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-country-name")})}),""!==o&&(0,u.jsx)(A,{icon:"location",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan lokasi", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),text:(0,p.nk)(z.bt("Berlokasi di {{geoPostalCode}}", "Based in {{geoPostalCode}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoPostalCode:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:o},"ad-reasons-country-name")})}),""!==s&&(0,u.jsx)(A,{icon:"globe",iconAccessibilityLabel:z.bt("Ikon untuk wilayah penargetan iklan", "Icon for ad targeting locale", "app.common.react.components.PinRep.components.AdReasons.localeIcon", undefined, true),text:(0,p.nk)(z.bt("Bahasa {{ language }}", "Language {{ language }}", "app.common.react.components.PinRep.components.AdReasonsModal.localeMatch", undefined, true),{language:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-locale")})}),""!==r&&(0,u.jsx)(A,{icon:"desktop",iconAccessibilityLabel:z.bt("Ikon untuk perangkat penargetan iklan", "Icon for ad targeting device", "app.common.react.components.PinRep.components.AdReasons.deviceIcon", undefined, true),text:(0,p.nk)(z.bt("Menggunakan {{ device }}", "Using {{ device }}", "app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch", undefined, true),{device:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:M},"ad-reasons-device")})}),""!==i&&(0,u.jsx)(A,{icon:"heart",iconAccessibilityLabel:z.bt("Ikon untuk minat penargetan iklan", "Icon for ad targeting interest", "app.common.react.components.PinRep.components.AdReasons.interestIcon", undefined, true),text:(0,p.nk)(z.bt("Tertarik pada {{ interestMatch }}", "Interested in {{ interestMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.interestMatch", undefined, true),{interestMatch:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:i},"ad-reasons-interest")})}),m&&(0,u.jsx)(A,{icon:"history",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna berdasarkan daftar audiens", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.shoppingTargeting", undefined, true),text:(0,p.nk)(z.bt("Berinteraksi dengan {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.shoppingTargeting", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-shopping-targeting")})}),y&&(0,u.jsx)(A,{icon:"history",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pelanggan yang berinteraksi dengan merek ini sebelumnya, pengunjung cocok", "Icon for ad targeting customers who interacted with this brand previously, visitor matched", "app.common.react.components.PinRep.components.AdReasonsModal.visitorMatchIcon", undefined, true),text:(0,p.nk)(z.bt("Berinteraksi dengan {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.visitorTargetingText", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reason-visitor")})}),_&&(0,u.jsx)(A,{icon:"menu",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna berdasarkan daftar audiens", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.listIcon", undefined, true),text:(0,p.nk)(z.bt("Berdasarkan daftar yang disediakan oleh {{brandName}}", "On a list provided by {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.customerListTargeting", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),x&&(0,u.jsx)(A,{icon:"pin",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna berdasarkan audiens keterlibatan", "Icon for ad targeting user on engagement audience", "app.common.react.components.PinRep.components.AdReasons.engagementIcon", undefined, true),text:(0,p.nk)(z.bt("Berinteraksi dengan {{brandName}} di Pinterest", "Interacted with {{brandName}} on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.engagementTargeting", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-engagement")})}),h&&(0,u.jsx)(A,{icon:"graph-bar",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna yang bertindak serupa", "Icon for ad targeting user on act alike", "app.common.react.components.PinRep.components.AdReasons.actAlikeIcon", undefined, true),text:(0,p.nk)(z.bt("Demografi atau minat serupa dengan pelanggan {{brandName}} lainnya", "Similar demographic or interest as other {{brandName}} customers", "app.common.react.components.PinRep.components.AdReasonsModal.", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")})}),(b||k||v)&&(0,u.jsx)(A,{icon:"pinterest",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna berdasarkan perluasan penargetan", "Icon for ad targeting user on expand targeting", "app.common.react.components.PinRep.components.AdReasons.expandTargeting", undefined, true),text:z.bt("Aktivitas yang relevan di Pinterest", "Relevant activity on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.expandTargeting", undefined, true)}),f&&(0,u.jsx)(A,{icon:"location",iconAccessibilityLabel:z.bt("Ikon untuk iklan yang menargetkan pengguna berdasarkan GPS", "Icon for ad targeting user on GPS", "app.common.react.components.PinRep.components.AdReasons.GPS", undefined, true),text:z.bt("Lokasi GPS", "GPS Location", "app.common.react.components.PinRep.components.AdReasonsModal.GPS", undefined, true)})]})})}function b({onDismiss:e,brandName:a,userName:n,language:o,geoRegion:t,geoPostalCode:i,ageBucketMatch:l,localeMatch:r,interestMatch:c,genderMatch:A,deviceMatch:P,isCustomerListMatched:b,isShoppingTargetingRematched:f,isActAlikeMatched:y,isEngagementMatched:k,isExpandTargetingMatched:v,isFromGPSLocation:R,isVisitorMatched:j,isShoppingProspectingMatched:w,isPlPersonaMatched:L,thirdPartyAdAttributes:S}){let{logContextEvent:T}=(0,s.v)(),I=(0,g.ZP)(),C=M(A,I),N=z(P,I),F=f||b||k||y||v||R||j||L||w||""!==l||""!==r||""!==c||""!==C||""!==N||""!==t||""!==i,B=h.C0+`/${n}/`;return(0,u.jsx)(_.ZP,{accessibilityModalLabel:I.bt("Mengapa saya melihat Iklan ini?", "Why am I seeing this Ad?", "app.common.react.components.PinRep.components.AdReasonsModal", undefined, true),onDismiss:e,children:(0,u.jsxs)(d.xu,{paddingX:8,paddingY:6,children:[(0,u.jsxs)(d.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,u.jsx)(d.xu,{left:!0,position:"absolute",children:(0,u.jsx)(d.hU,{accessibilityLabel:I.bt("Tutup", "Close", "app.common.react.components.PinRep.components.AdReasonsModal.closeModal", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:()=>{T({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,u.jsx)(d.X6,{align:"center",size:"500",children:I.bt("Alasan Anda melihat iklan ini", "Why you're seeing this ad", "Heading for promoted Pins explanation", undefined, true)})]}),(0,u.jsxs)(d.xu,{children:[(0,u.jsx)(d.kC,{direction:"column",gap:{row:0,column:4},children:F&&(0,u.jsx)(d.xu,{"data-test-id":"waista-reason-text",marginBottom:4,children:(0,u.jsx)(d.xv,{children:S?.isEligibleForPromotedPartnership?(0,p.nk)(I.bt("{{ promotedPartnershipAdvertiserName }} mencoba menjangkau kelompok orang tertentu, melalui kemitraan dengan {{ promotedPartnershipAttributionName }}. Berdasarkan apa yang telah Anda sampaikan kepada kami atau informasi lainnya, kami rasa Anda cocok dengan beberapa grup tersebut:", "{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people, through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{promotedPartnershipAdvertiserName:S.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:S.promotedPartnershipAttributionName}):(0,p.nk)(I.bt("{{ brandName }} mencoba menjangkau kelompok orang tertentu. Berdasarkan apa yang telah Anda sampaikan kepada kami atau informasi lainnya, kami rasa Anda cocok dengan beberapa grup tersebut:", "{{ brandName }} is trying to reach specific groups of people. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{brandName:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(d.rU,{display:"inlineBlock",href:B,onClick:()=>{T({event_type:101,component:13756,element:13407})},target:"blank",underline:"hover",children:a})},"ad-reasons-brand-name")})})})}),(0,u.jsx)(d.xu,{"data-test-id":"ad-reasons",children:(0,u.jsxs)(d.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,u.jsx)(x,{ageBucketMatch:l,brandName:a,device:N,deviceMatch:P,gender:C,genderMatch:A,geoPostalCode:i,geoRegion:t,interestMatch:c,isActAlikeMatched:y,isCustomerListMatched:b,isEngagementMatched:k,isExpandTargetingMatched:v,isFromGPSLocation:R,isPlPersonaMatched:L,isShoppingProspectingMatched:w,isShoppingTargetingRematched:f,isVisitorMatched:j,language:o,localeMatch:r}),F&&(0,u.jsx)(d.xu,{marginBottom:1,children:(0,u.jsx)(d.xv,{children:(0,p.nk)(I.bt("Jika ini tidak benar, {{ changeUserSettings }}", "If this isn't right, {{ changeUserSettings }}", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText", undefined, true),{changeUserSettings:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(d.rU,{display:"inline",href:`${h.C0}${m.AHp}`,onClick:()=>{T({event_type:101,component:13756,element:13361})},target:"blank",underline:"hover",children:I.bt("perbarui informasi pribadi Anda", "update your personal information", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings", undefined, true)})},"ad-reasons-change-user-settings")})})})]})}),(0,u.jsxs)(d.kC,{direction:"column",gap:{row:0,column:1},children:[(0,u.jsx)(d.xu,{marginBottom:1,marginTop:1,children:(0,u.jsx)(d.X6,{size:"400",children:I.bt("Iklan di Pinterest", "Ads on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading", undefined, true)})}),(0,u.jsx)(d.xu,{marginBottom:4,children:(0,u.jsx)(d.xv,{children:(0,p.nk)(I.bt("Tinjau {{adPreferencesLink}} Anda untuk mengubah preferensi iklan.", "Review your {{adPreferencesLink}} to change your ad preferences.", "app.common.react.components.PinRep.components.AdReasonsModal.change.adPreferencesText", undefined, true),{adPreferencesLink:(0,u.jsx)(d.xu,{"data-test-id":"ad-reasons-review-ad-preferences",display:"inlineBlock",children:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(d.rU,{display:"inline",href:`${h.C0}${m.Gxc}`,onClick:()=>{T({event_type:101,component:13756,element:13401})},target:"blank",underline:"hover",children:I.bt("Pengaturan Privasi", "Privacy Settings", "app.common.react.components.PinRep.components.AdReasonsModal.privacy.settings", undefined, true)})},"ad-reasons-review-ad-preferences")})})})}),(0,u.jsx)(d.xu,{marginBottom:4,children:(0,u.jsx)(d.xv,{children:(0,p.nk)(I.bt("Untuk informasi lebih lanjut tentang cara kami mengumpulkan dan menggunakan data, {{ privacyPolicyLink }}", "For more about how we collect and use data, {{ privacyPolicyLink }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{privacyPolicyLink:(0,u.jsx)(d.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(d.rU,{display:"inline",href:m.R_9,onClick:()=>{T({event_type:101,component:13756,element:13402})},target:"blank",underline:"hover",children:I.bt("baca Kebijakan Privasi kami", "read our Privacy Policy", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLink", undefined, true)})},"ad-reasons-privacy-policy")})})})}),(0,u.jsx)(d.xu,{marginBottom:4,children:(0,u.jsx)(d.xv,{children:(0,p.nk)(I.bt("Untuk berhenti melihat konten dari pengiklan, {{ blockAccounts }}", "To stop seeing content from an advertiser, {{ blockAccounts }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{blockAccounts:(0,u.jsx)(d.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,u.jsx)(d.xv,{inline:!0,weight:"bold",children:(0,u.jsx)(d.rU,{display:"inline",href:m.K_Y,onClick:()=>{T({event_type:101,component:13756,element:12058})},target:"blank",underline:"hover",children:I.bt("pelajari cara memblokir akun", "learn how to block accounts", "app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink", undefined, true)})},"ad-reasons-block-accounts")})})})})]})]})]})})}let f=void 0!==o?o:o=n(897328),y=e=>e.bt("Wanita", "Female", "waista.modal.attribute.female", undefined, true),k=e=>e.bt("Pria", "Male", "waista.modal.attribute.male", undefined, true),v=e=>e.bt("Web", "Web", "waista.modal.attribute.web", undefined, true),R=e=>e.bt("Web Seluler", "Mobile Web", "waista.modal.attribute.mWeb", undefined, true);function M(e,a){return"FEMALE"===e?y(a):"MALE"===e?k(a):""}function z(e,a){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?v(a):"AppType_WEB_MOBILE"===e?R(a):""}function j(e,a){let{name:n=""}=e.find(e=>e.key===a)??{};return n}function w({pinKey:e,onDismiss:a}){let{logContextEvent:n}=(0,s.v)(),{locale:o}=(0,l.B)(),{country:d=""}=(0,c.Z)(),_=(0,r.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),g=(0,r.Z)({name:"LocalesResource"}),p=(0,i.Z)(f,e);(0,t.useEffect)(()=>{n({event_type:120,component:13756})},[n]);let{promoter:m,isEligibleForPromotedPartnership:h,promotedPartnershipAttributionName:A,promotedPartnershipAdvertiserName:P}=p??{},x={isCustomerListMatched:p?.adTargetingAttribution?.isCustomerListMatched??!1,isShoppingRetargetingMatched:p?.adTargetingAttribution?.isShoppingRetargetingMatched??!1,isActalikeMatched:p?.adTargetingAttribution?.isActalikeMatched??!1,isEngagementMatched:p?.adTargetingAttribution?.isEngagementMatched??!1,isExpandTargetingMatched:p?.adTargetingAttribution?.isExpandTargetingMatched??!1,isFromGpsLocation:p?.adTargetingAttribution?.isFromGpsLocation??!1,isVisitorMatched:p?.adTargetingAttribution?.isVisitorMatched??!1,isShoppingProspectingMatched:p?.adTargetingAttribution?.isShoppingProspectingMatched??!1,isPlPersonaMatched:p?.adTargetingAttribution?.isPlPersonaMatched??!1,matchedAgeBucket:p?.adTargetingAttribution?.matchedAgeBucket??"",matchedLocale:p?.adTargetingAttribution?.matchedLocale??"",matchedInterest:p?.adTargetingAttribution?.matchedInterest??"",matchedGender:p?.adTargetingAttribution?.matchedGender??"",matchedDevice:p?.adTargetingAttribution?.matchedDevice??"",geoRegion:p?.adTargetingAttribution?.geoRegion??"",geoPostalCode:p?.adTargetingAttribution?.geoPostalCode??""},{isCustomerListMatched:y=!1,isShoppingRetargetingMatched:k=!1,isActalikeMatched:v=!1,isEngagementMatched:R=!1,isExpandTargetingMatched:M=!1,isFromGpsLocation:z=!1,isVisitorMatched:w=!1,isShoppingProspectingMatched:L=!1,isPlPersonaMatched:S=!1,matchedAgeBucket:T="",matchedLocale:I="",matchedInterest:C="",matchedGender:N="",matchedDevice:F="",geoRegion:B="",geoPostalCode:E=""}=function(e=null,a=4){return e&&Object.keys(e).filter(a=>"boolean"==typeof e[a]||"string"==typeof e[a]).filter(a=>!1!==e[a]&&""!==e[a]).slice(0,a).reduce((a,n)=>({...a,[n]:e[n]}),{})}(x)??{},K=m?.fullName??"",G=function(e,a){let{name:n=""}=e.find(e=>e.key===a)??{};return n}(_.data??[],d),U=j(g.data??[],o),Z=m?.username??"";return(0,u.jsx)(b,{ageBucketMatch:T,brandName:K,country:G,deviceMatch:F,genderMatch:N,geoPostalCode:E,geoRegion:B,interestMatch:C,isActAlikeMatched:v,isCustomerListMatched:y,isEngagementMatched:R,isExpandTargetingMatched:M,isFromGPSLocation:z,isPlPersonaMatched:S,isShoppingProspectingMatched:L,isShoppingTargetingRematched:k,isVisitorMatched:w,language:U,localeMatch:I,onDismiss:a,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:h,promotedPartnershipAttributionName:A,promotedPartnershipAdvertiserName:P},userName:Z})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/67316.id_ID-37e6e8840014a6e8.mjs.map