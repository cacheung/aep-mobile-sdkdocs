"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2357],{46613:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return g}});var n,i=t(87462),s=t(63366),p=(t(15007),t(64983)),d=t(91515),o=["components"],r={},m=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),l={_frontmatter:r},c=d.Z;function g(e){var a=e.components,t=(0,s.Z)(e,o);return(0,p.mdx)(c,(0,i.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"validate-in-app-messaging-using-adobe-experience-platform-assurance"},"Validate in-app messaging using Adobe Experience Platform Assurance"),(0,p.mdx)("p",null,"This guide will walk you through steps necessary to ensure your app is properly configured for in-app messaging with Adobe Journey Optimizer (AJO)."),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"#prerequisites"},"Complete prerequisites for your app")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"#validate-the-correct-extensions-are-registered"},"Validate the correct extensions are registered")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"#validate-the-event-requesting-message-definitions"},"Validate the event requesting message definitions")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("a",{parentName:"li",href:"#validate-the-event-containing-a-message-definition-response"},"Validate the event containing a message definition response"))),(0,p.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"Your app must have the ",(0,p.mdx)("strong",{parentName:"p"},"AEPMessaging")," SDK extension installed. Integrate ",(0,p.mdx)("strong",{parentName:"p"},"AEPMessaging")," by following the guide on ",(0,p.mdx)("a",{parentName:"p",href:"../setup.md"},"setting up AEPMessaging SDK"),".")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"This troubleshooting guide uses validation provided by the ",(0,p.mdx)("strong",{parentName:"p"},"AEPAssurance")," extension and the ",(0,p.mdx)("strong",{parentName:"p"},"Adobe Assurance UI"),". Integrate ",(0,p.mdx)("strong",{parentName:"p"},"AEPAssurance")," in your application by following the ",(0,p.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/experience-platform/assurance/home.html"},"Adobe Experience Platform Assurance installation guide"),"."))),(0,p.mdx)("h2",{id:"validate-the-correct-extensions-are-registered"},"Validate the correct extensions are registered"),(0,p.mdx)("p",null,"Ensure that your app has registered all necessary AEP SDK extensions by doing the following:"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Launch your application with an ",(0,p.mdx)("strong",{parentName:"p"},"AEPAssurance")," session active")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the Assurance UI, click on ",(0,p.mdx)("strong",{parentName:"p"},"Shared States")," in the left-rail navigation")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click the ",(0,p.mdx)("strong",{parentName:"p"},"+")," button next to the row with a ",(0,p.mdx)("strong",{parentName:"p"},"State Path")," of ",(0,p.mdx)("strong",{parentName:"p"},"com.adobe.module.eventhub"))),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Open the ",(0,p.mdx)("strong",{parentName:"p"},"extensions")," object and validate that each of the required extensions exist, ensuring it meets the minimum version requirements. The table below shows the minimum versions required for in-app messaging dependencies:"))),(0,p.mdx)("table",null,(0,p.mdx)("thead",{parentName:"table"},(0,p.mdx)("tr",{parentName:"thead"},(0,p.mdx)("th",{parentName:"tr",align:null},"Extension (iOS)"),(0,p.mdx)("th",{parentName:"tr",align:"right"},"Min. Version (iOS)"),(0,p.mdx)("th",{parentName:"tr",align:null},"Extension (Android)"),(0,p.mdx)("th",{parentName:"tr",align:"right"},"Min. Version (Android)"))),(0,p.mdx)("tbody",{parentName:"table"},(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"AEPCore"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"3.7.4"),(0,p.mdx)("td",{parentName:"tr",align:null},"core"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"2.0.1")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"AEPEdge"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"1.1.0"),(0,p.mdx)("td",{parentName:"tr",align:null},"edge"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"2.0.0")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"AEPEdgeIdentity"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"1.0.0"),(0,p.mdx)("td",{parentName:"tr",align:null},"edgeidentity"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"2.0.0")),(0,p.mdx)("tr",{parentName:"tbody"},(0,p.mdx)("td",{parentName:"tr",align:null},"AEPMessaging"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"1.1.0"),(0,p.mdx)("td",{parentName:"tr",align:null},"messaging"),(0,p.mdx)("td",{parentName:"tr",align:"right"},"2.0.0")))),(0,p.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"If your app uses the ",(0,p.mdx)("a",{parentName:"p",href:"../../consent-for-edge-network/index.md"},"Edge Consent extension"),", the device must be consenting (i.e. - a consent value of ",(0,p.mdx)("inlineCode",{parentName:"p"},"Yes"),") in order to download in-app messages."),(0,p.mdx)("p",null,"A sample view in the Assurance UI can be seen below:"),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"105.31249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/5530d/message-configuration.webp 320w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/0c8fb/message-configuration.webp 640w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/94b1e/message-configuration.webp 1280w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/d4217/message-configuration.webp 1459w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/dd4a7/message-configuration.png 320w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/0f09e/message-configuration.png 640w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/bbbf7/message-configuration.png 1280w","/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/3b533/message-configuration.png 1459w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/541356815ac2ae73104cfb42a254a04a/bbbf7/message-configuration.png",alt:"correct extensions registered",title:"correct extensions registered",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h2",{id:"validate-the-event-requesting-message-definitions"},"Validate the event requesting message definitions"),(0,p.mdx)("p",null,"When the AEPMessaging extension has finished registration with the AEP SDK and a valid configuration exists, it will automatically initiate a network request to fetch message definitions from the remote."),(0,p.mdx)("p",null,"Completing the following steps will validate that your app is making the necessary request to retrieve in-app message definitions:"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Launch your application with an ",(0,p.mdx)("strong",{parentName:"p"},"AEPAssurance")," session active")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the Assurance UI, click on ",(0,p.mdx)("strong",{parentName:"p"},"Events")," in the left-rail navigation")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the event list, select the event with type ",(0,p.mdx)("strong",{parentName:"p"},"Retrieve message definitions")))),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.31249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/5530d/message-request.webp 320w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/0c8fb/message-request.webp 640w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/94b1e/message-request.webp 1280w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/0532e/message-request.webp 1798w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/dd4a7/message-request.png 320w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/0f09e/message-request.png 640w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/bbbf7/message-request.png 1280w","/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/ababd/message-request.png 1798w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/e92831d191c1ebf9317454db3eea84e7/bbbf7/message-request.png",alt:"Retrieve message definitions",title:"Retrieve message definitions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("ol",{start:4},(0,p.mdx)("li",{parentName:"ol"},"Expand the ",(0,p.mdx)("strong",{parentName:"li"},"Payload")," section in the right window and ensure the correct ",(0,p.mdx)("strong",{parentName:"li"},"surface")," is being used. The ",(0,p.mdx)("strong",{parentName:"li"},"surface")," URI represents a collection of messages specific for your application and is identifiable based on its bundle identifier. The format for the URI will be ",(0,p.mdx)("inlineCode",{parentName:"li"},"mobileapp://APP_BUNDLE_IDENTIFIER"),".  From the screenshot above, the surface in use is ",(0,p.mdx)("inlineCode",{parentName:"li"},"mobileapp://com.adobe.MessagingDemoApp"),".")),(0,p.mdx)("h2",{id:"validate-the-event-containing-a-message-definition-response"},"Validate the event containing a message definition response"),(0,p.mdx)("p",null,"After the request from the previous step returns, the ",(0,p.mdx)("strong",{parentName:"p"},"AEPEdge")," extension will dispatch a response event containing data returned by the remote server."),(0,p.mdx)("p",null,"Complete the following steps to validate a response containing in-app messages:"),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Launch your application with an ",(0,p.mdx)("strong",{parentName:"p"},"AEPAssurance")," session active")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the Assurance UI, click on ",(0,p.mdx)("strong",{parentName:"p"},"Events")," in the left-rail navigation")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the event list, select the event with type ",(0,p.mdx)("strong",{parentName:"p"},"AEP Response Event Handle"),". There will likely be several events with this type - ensure the one selected has an ",(0,p.mdx)("strong",{parentName:"p"},"AEPExtensionEventSource")," of ",(0,p.mdx)("inlineCode",{parentName:"p"},"personalization:decisions")))),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.31249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/5530d/message-response.webp 320w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/0c8fb/message-response.webp 640w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/94b1e/message-response.webp 1280w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/0f190/message-response.webp 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/dd4a7/message-response.png 320w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/0f09e/message-response.png 640w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/bbbf7/message-response.png 1280w","/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/28bdc/message-response.png 1800w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/ceda3ed340915d41b5ebf10d363c92fc/bbbf7/message-response.png",alt:"AEP Response Event Handle",title:"AEP Response Event Handle",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("ol",{start:4},(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Expand the ",(0,p.mdx)("strong",{parentName:"p"},"Payload")," section in the right window. Each entry in the ",(0,p.mdx)("strong",{parentName:"p"},"payload")," array contains the rule for a single in-app message that has been previously published in AJO and is now live. The full path to find a message definition is:"),(0,p.mdx)("pre",{parentName:"li"},(0,p.mdx)("code",{parentName:"pre"},"ACPExtensionEventData.payload.N.items.0.data.content\n")),(0,p.mdx)("p",{parentName:"li"},"To find definitions for other live in-app messages, follow the above path for each object in the ",(0,p.mdx)("strong",{parentName:"p"},"payload")," array."),(0,p.mdx)("p",{parentName:"li"},(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.31249999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/5530d/message-response-payload.webp 320w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/0c8fb/message-response-payload.webp 640w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/94b1e/message-response-payload.webp 1280w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/0532e/message-response-payload.webp 1798w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/dd4a7/message-response-payload.png 320w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/0f09e/message-response-payload.png 640w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/bbbf7/message-response-payload.png 1280w","/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/ababd/message-response-payload.png 1798w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/ce908f45d7f7f0290afbf8530647c3d5/bbbf7/message-response-payload.png",alt:"AEP Response Event Handle Payload",title:"AEP Response Event Handle Payload",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,p.mdx)("h2",{id:"use-the-in-app-messaging-assurance-ui-plugin"},"Use the In-App Messaging Assurance UI plugin"),(0,p.mdx)("p",null,"Once all of the above validation sections are complete, you can use the ",(0,p.mdx)("strong",{parentName:"p"},"In-App Messaging")," plugin view in the Assurance UI to further debug your app."),(0,p.mdx)("h4",{id:"install-the-in-app-messaging-plugin"},"Install the In-App Messaging plugin"),(0,p.mdx)(m,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"If you have already installed the ",(0,p.mdx)("strong",{parentName:"p"},"In-App Messaging")," plugin in your Assurance UI setup, skip this section."),(0,p.mdx)("ol",null,(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"In the Assurance UI, click on ",(0,p.mdx)("strong",{parentName:"p"},"Configure")," button at the bottom of the left-rail navigation")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Search for the row named ",(0,p.mdx)("strong",{parentName:"p"},"In-App Messaging")," under the ",(0,p.mdx)("strong",{parentName:"p"},"ADOBE JOURNEY OPTIMIZER (BETA)")," heading, and click the ",(0,p.mdx)("strong",{parentName:"p"},"+")," button on its right")),(0,p.mdx)("li",{parentName:"ol"},(0,p.mdx)("p",{parentName:"li"},"Click the ",(0,p.mdx)("strong",{parentName:"p"},"Save")," button"))),(0,p.mdx)("p",null,(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/5530d/install-iam-plugin.webp 320w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/0c8fb/install-iam-plugin.webp 640w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/94b1e/install-iam-plugin.webp 1280w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/f7f14/install-iam-plugin.webp 1919w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/dd4a7/install-iam-plugin.png 320w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/0f09e/install-iam-plugin.png 640w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/bbbf7/install-iam-plugin.png 1280w","/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/1fcef/install-iam-plugin.png 1919w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/f07a08d8fa40daa2e9917b07256cab1b/bbbf7/install-iam-plugin.png",alt:"Install the In-App Messaging plugin",title:"Install the In-App Messaging plugin",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,p.mdx)("h4",{id:"inspecting-a-downloaded-message"},"Inspecting a downloaded message"),(0,p.mdx)("p",null,"Using the IAM plugin you can do the following for each message downloaded by the client:"),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"Rules")," tab - view the rules defining when the message will be shown to the user")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"History")," tab - review a history of client events, including a comparison between the event's contents and the message's triggering criteria")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"Message Preview")," window - see a preview of the message's html")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"Message Behavior")," window - review message behavior, including its supported gestures and animations")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"In the ",(0,p.mdx)("strong",{parentName:"p"},"Message Behavior")," window - review message size and positioning properties")),(0,p.mdx)("li",{parentName:"ul"},(0,p.mdx)("p",{parentName:"li"},"Clicking the ",(0,p.mdx)("strong",{parentName:"p"},"Simulate on Device")," button - trigger the currently selected message, causing it to be displayed on the connected client"),(0,p.mdx)("p",{parentName:"li"},"  ",(0,p.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,p.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,p.mdx)("picture",{parentName:"span"},"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/5530d/iam-simulation.webp 320w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/0c8fb/iam-simulation.webp 640w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/94b1e/iam-simulation.webp 1280w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/0b34d/iam-simulation.webp 1920w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,p.mdx)("source",{parentName:"picture",srcSet:["/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/dd4a7/iam-simulation.png 320w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/0f09e/iam-simulation.png 640w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/bbbf7/iam-simulation.png 1280w","/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/ac7a9/iam-simulation.png 1920w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,p.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/aep-mobile-sdkdocs/static/abddcd251fb333b6953b3e3fcec5682c/bbbf7/iam-simulation.png",alt:"Inspecting a downloaded message",title:"Inspecting a downloaded message",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))),(0,p.mdx)("h2",{id:"faqs"},"FAQs"),(0,p.mdx)("h3",{id:"q-what-do-i-do-when-one-of-the-required-extensions-is-missing"},"Q: What do I do when one of the required extensions is missing?"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"A:")," Ensure that each required extension is linked to your project and registered by ",(0,p.mdx)("inlineCode",{parentName:"p"},"MobileCore"),". For more information, please read the ",(0,p.mdx)("a",{parentName:"p",href:"../../mobile-core/api-reference.md#registerextensions"},"Mobile Core API reference"),"."),(0,p.mdx)("h3",{id:"q-why-cant-i-find-an-event-named-retrieve-message-definitions"},"Q: Why can't I find an event named ",(0,p.mdx)("inlineCode",{parentName:"h3"},"Retrieve message definitions"),"?"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"A:")," Ensure that each of the required extensions is at the minimum required version."),(0,p.mdx)("h3",{id:"q-i-see-an-aep-error-response-event-is-that-a-problem"},"Q: I see an ",(0,p.mdx)("inlineCode",{parentName:"h3"},"AEP Error Response")," event, is that a problem?"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"A:")," If you open the EventData and the ",(0,p.mdx)("inlineCode",{parentName:"p"},"detail"),' key has a value of "The Decisioning Package was not found.", this likely means the Messaging extension was unable to find the messages for your app. Check the below items to try and resolve the issue:'),(0,p.mdx)("ul",null,(0,p.mdx)("li",{parentName:"ul"},"Make sure that messages have been published in the AJO Campaigns UI for your app surface"),(0,p.mdx)("li",{parentName:"ul"},"Make sure that the bundle identifier (iOS) or package name (Android) matches the value used for your app surface"),(0,p.mdx)("li",{parentName:"ul"},"Make sure that the ",(0,p.mdx)("strong",{parentName:"li"},"environment")," and ",(0,p.mdx)("strong",{parentName:"li"},"sandbox")," being used in AJO matches those being used to configure the app"),(0,p.mdx)("li",{parentName:"ul"},"Make sure that your Adobe organization is provisioned for Offers on Edge (this may require contacting your account manager)")),(0,p.mdx)("h3",{id:"q-why-dont-i-see-any-messages-in-my-aep-response-event-handle-event"},"Q: Why don't I see any messages in my ",(0,p.mdx)("inlineCode",{parentName:"h3"},"AEP Response Event Handle")," event?"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"A:")," In the ",(0,p.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/@/journey-optimizer/home"},"Adobe Journey Optimizer UI"),", make sure that there are in-app messages with a ",(0,p.mdx)("strong",{parentName:"p"},"Live")," status for your application."),(0,p.mdx)("h3",{id:"q-why-arent-there-any-messages-to-select-in-the-in-app-messaging-assurance-ui-plugin"},"Q: Why aren't there any messages to select in the ",(0,p.mdx)("inlineCode",{parentName:"h3"},"In-App Messaging")," Assurance UI plugin?"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"A:")," The ",(0,p.mdx)("inlineCode",{parentName:"p"},"In-App Messaging")," plugin view will only be populated when there are messages returned in the ",(0,p.mdx)("inlineCode",{parentName:"p"},"AEP Response Event Handle")," event."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-journey-optimizer-tutorials-validate-messages-md-a70d5e460be84ca0fd21.js.map