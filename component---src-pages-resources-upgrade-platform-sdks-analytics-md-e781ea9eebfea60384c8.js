"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6124],{59171:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return u}});var n,i=t(87462),d=t(63366),r=(t(15007),t(64983)),o=t(91515),l=t(95429),m=["components"],s={},p=(n="TabsBlock",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={_frontmatter:s},x=o.Z;function u(e){var a=e.components,t=(0,d.Z)(e,m);return(0,r.mdx)(x,(0,i.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-mobile-library-v4-to-experience-platform-analytics-migration"},"Adobe Mobile Library (v4) to Experience Platform Analytics migration"),(0,r.mdx)("h2",{id:"configuration"},"Configuration"),(0,r.mdx)("p",null,"The Adobe Experience Platform Analytics extension uses ",(0,r.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/data-collection/"},"tags")," to configure the Experience Platform SDKs. This replaces the ADBMobileConfig.json which the Mobile Services SDK used for configuration. To get started with the AEP SDKs:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Create a mobile property on tags. ",(0,r.mdx)("br",null),"See ",(0,r.mdx)("a",{parentName:"li",href:"../../home/getting-started/create-a-mobile-property.md"},"Set up a mobile property")," for more information."),(0,r.mdx)("li",{parentName:"ol"},"Configure your mobile app with the create mobile property.",(0,r.mdx)("br",null),"The AEP Mobile Core extension provides general functionality required by all the Adobe AEP extensions. The Configuration extension is built into the Mobile Core and contains the configureWithAppId API. This API is used to link the tag mobile property with your mobile app. The documentation for this API can be seen at the ",(0,r.mdx)("a",{parentName:"li",href:"../../home/base/mobile-core/configuration/api-reference.md#configurewithappid"},"Configuration API Reference")," page. A code sample showing the usage of this API is provided below."),(0,r.mdx)("li",{parentName:"ol"},"Once all the Platform extensions are imported and configured correctly, remove the v4 Mobile SDK dependency. ",(0,r.mdx)("br",null),"This step is mandatory and a mix of v4 and AEP API calls is not supported.")),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(l.default,{query:"platform=android&task=config",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(l.default,{query:"platform=ios&task=config",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"analytics-migration-overview"},"Analytics Migration Overview"),(0,r.mdx)("p",null,"For an overview of the API mapping between the Mobile Services SDK and Adobe Experience Platform SDKs, see the ",(0,r.mdx)("a",{parentName:"p",href:"./api-changelog.md"},"API Change Log"),". This section describes the Analytics-specific changes made with the AEP Analytics extension."),(0,r.mdx)("h3",{id:"deprecated-api"},"Deprecated API"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"API"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackActionFromBackground"),(0,r.mdx)("td",{parentName:"tr",align:null},"Deprecated")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackLocation:data:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality is available in the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/places/index.md"},"Places extension"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackBeacon:Data:"),(0,r.mdx)("td",{parentName:"tr",align:null},"Support modified. ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/track-beacon.md"},"See guide"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackingClearCurrentBeacon"),(0,r.mdx)("td",{parentName:"tr",align:null},"Support modified. ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/track-beacon.md"},"See guide"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackLifetimeValueIncrease:data:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality can be recreated using the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/index.md"},"Analytics")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../home/base/profile/index.md"},"User Profile")," extensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackTimedActionStart:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality can be recreated using the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/index.md"},"Analytics")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../home/base/profile/index.md"},"User Profile")," extensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackTimedActionUpdate:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality can be recreated using the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/index.md"},"Analytics")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../home/base/profile/index.md"},"User Profile")," extensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackTimedActionEnd:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality can be recreated using the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/index.md"},"Analytics")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../home/base/profile/index.md"},"User Profile")," extensions.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"trackTimedActionExists:"),(0,r.mdx)("td",{parentName:"tr",align:null},"This functionality can be recreated using the ",(0,r.mdx)("a",{parentName:"td",href:"../../solution/adobe-analytics/index.md"},"Analytics")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../home/base/profile/index.md"},"User Profile")," extensions.")))),(0,r.mdx)("h2",{id:"experience-platform-extensions-installation-and-setup"},"Experience Platform extensions installation and setup"),(0,r.mdx)("h3",{id:"register-the-extensions-and-link-the-app-to-the-configuration-created-with-data-collection-tags"},"Register the extensions and link the app to the configuration created with Data Collection tags"),(0,r.mdx)("p",null,"In your app's Application class add the mobile extension registration and configuration code:"),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(l.default,{query:"platform=android&task=aep-install",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(l.default,{query:"platform=ios&task=aep-install",mdxType:"Tabs"}),(0,r.mdx)("p",null,"For more details, see ",(0,r.mdx)("a",{parentName:"p",href:"../../solution/adobe-analytics/index.md#add-analytics-to-your-application"},"Add Analytics to your application"),"."),(0,r.mdx)("h2",{id:"api-changes"},"API changes"),(0,r.mdx)("h3",{id:"track-app-states-and-actions"},"Track app states and actions"),(0,r.mdx)("h4",{id:"adobe-mobile-library-v4"},"Adobe Mobile Library (v4)"),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(l.default,{query:"platform=android&task=api-changes-v4",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(l.default,{query:"platform=ios&task=api-changes-v4",mdxType:"Tabs"}),(0,r.mdx)("h4",{id:"experience-platform-mobile-sdks"},"Experience Platform Mobile SDKs"),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(l.default,{query:"platform=android&task=api-changes-aep",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(l.default,{query:"platform=ios&task=api-changes-aep",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"privacy-status-changes-in-the-experience-platform-sdk"},"Privacy status changes in the Experience Platform SDK"),(0,r.mdx)("p",null,"The privacy APIs ",(0,r.mdx)("inlineCode",{parentName:"p"},"setPrivacyStatus")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"getPrivacyStatus")," can be found in the Mobile Core. Similar to the v4 SDK, the Analytics extension will follow these behaviors depending on the privacy status set:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Opted in:")," Analytics hits will be sent."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Unknown:")," Analytics hits will be queued."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Opted out:")," Analytics hits will be dropped.")),(0,r.mdx)("h3",{id:"experience-platform-mobile-sdks-1"},"Experience Platform Mobile SDKs"),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"2",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(l.default,{query:"platform=android&task=privacy-changes-aep",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(l.default,{query:"platform=ios&task=privacy-changes-aep",mdxType:"Tabs"}))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-upgrade-platform-sdks-analytics-md-e781ea9eebfea60384c8.js.map