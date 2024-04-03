"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[984],{86969:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return s}});var n=a(87462),d=a(63366),r=(a(15007),a(64983)),i=a(91515),m=["components"],l={},o={_frontmatter:l},p=i.Z;function s(e){var t=e.components,a=(0,d.Z)(e,m);return(0,r.mdx)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"adobe-audience-manager-event-reference"},"Adobe Audience Manager event reference"),(0,r.mdx)("h2",{id:"events-handled"},"Events handled"),(0,r.mdx)("p",null,"The following events are handled by the Audience Manager extension:"),(0,r.mdx)("h3",{id:"audience-manager-content-request"},"Audience Manager content request"),(0,r.mdx)("p",null,"This event updates the profile for Audience Manager and is generated when the ",(0,r.mdx)("inlineCode",{parentName:"p"},"audienceSignalWithData")," API is called to send content to Audience Manager."),(0,r.mdx)("h4",{id:"event-details"},"Event details"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Source")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired Event")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.audienceManager")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.requestContent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"​",(0,r.mdx)("a",{parentName:"td",href:"#audience-manager-content-response"},"Audience Manager Content Response"),"​")))),(0,r.mdx)("h4",{id:"data-payload-definition"},"Data payload definition"),(0,r.mdx)("p",null,"The following lists the key-value pairs in this event:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Key or Key Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Value Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Optional")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"aamtraits")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String Map"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The data payload contains the traits (key-value pairs) that were sent by the customer.")))),(0,r.mdx)("h3",{id:"audience-manager-identity-request"},"Audience Manager identity request"),(0,r.mdx)("p",null,"This event is a request to retrieve the visitor profile from Audience Manager and is generated when the parent application requests an audience visitor profile by using ",(0,r.mdx)("inlineCode",{parentName:"p"},"audienceGetVisitorProfile"),"."),(0,r.mdx)("h4",{id:"event-details-1"},"Event details"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Source")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired Event")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.audienceManager")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.requestIdentity")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"​",(0,r.mdx)("a",{parentName:"td",href:"#audience-manager-identity-response"},"Audience Manager identity response"),"​")))),(0,r.mdx)("h4",{id:"data-payload-definition-1"},"Data payload definition"),(0,r.mdx)("p",null,"There are no key-value pair for this event."),(0,r.mdx)("h3",{id:"audience-manager-reset-request"},"Audience Manager reset request"),(0,r.mdx)("p",null,"This event clears the Audience Manager profile on the device and is generated when the ",(0,r.mdx)("inlineCode",{parentName:"p"},"audienceReset")," API is called to clear the Audience Manager profile."),(0,r.mdx)("h4",{id:"event-details-2"},"Event details"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Source")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired Event")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.audienceManager")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.requestReset")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"N/A")))),(0,r.mdx)("h4",{id:"data-payload-definition-2"},"Data payload definition"),(0,r.mdx)("p",null,"There are no key-value pairs for this event."),(0,r.mdx)("h4",{id:"hub-shared-state"},"Hub shared state"),(0,r.mdx)("p",null,"Audience Manager listens for the configuration shared state events."),(0,r.mdx)("h3",{id:"configuration-response-content"},"Configuration response content"),(0,r.mdx)("p",null,"The Audience Manager extension listens for configuration content response events to detect whether the privacy status was changed or the audience configuration was updated."),(0,r.mdx)("p",null,"For more information about the this event, see the configuration response content section of the ",(0,r.mdx)("a",{parentName:"p",href:"../adobe-analytics/event-reference.md#configuration-response-content"},"Adobe Analytics event reference"),"​."),(0,r.mdx)("h3",{id:"lifecycle-response-content"},"Lifecycle response content"),(0,r.mdx)("p",null,"This event is generated when there is a lifecycle session update such as a launch event or upgrade. The Audience Manager extension listens for the event and sends a new signal to Audience Manager with the lifecycle context data."),(0,r.mdx)("p",null,"For more information about the this event, see the lifecycle response content section of the ",(0,r.mdx)("a",{parentName:"p",href:"../adobe-analytics/event-reference.md#lifecycle-response-content"},"Adobe Analytics event reference"),"."),(0,r.mdx)("h3",{id:"analytics-response-content"},"Analytics response content"),(0,r.mdx)("p",null,"Audience Manager listens for Adobe Analytics response events, which are sent when audience forwarding is enabled, processes the events, and extracts the destinations where the new signals will be sent."),(0,r.mdx)("p",null,"For more information about this event, see the Analytics response content section of the ",(0,r.mdx)("a",{parentName:"p",href:"../adobe-analytics/event-reference.md#analytics-response-content"},"Adobe Analytics event reference"),"."),(0,r.mdx)("h2",{id:"events-dispatched"},"Events dispatched"),(0,r.mdx)("p",null,"The following events are dispatched by the Audience Manager extension:"),(0,r.mdx)("h3",{id:"audience-manager-content-response"},"Audience Manager content response"),(0,r.mdx)("p",null,"This event delivers the Audience Manager profile to the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The original requester."),(0,r.mdx)("li",{parentName:"ul"},"A module that might be listening for updates.")),(0,r.mdx)("p",null,"The event is generated when a request is made to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Update the Audience Manager profile."),(0,r.mdx)("li",{parentName:"ul"},"Retrieve the current Audience Manager profile.")),(0,r.mdx)("h4",{id:"event-details-3"},"Event details"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Source")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired Event")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.audienceManager")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.responseContent")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"​",(0,r.mdx)("a",{parentName:"td",href:"#audience-manager-content-request"},"Audience Manager Content Request"),"​")))),(0,r.mdx)("h4",{id:"data-payload-definition-3"},"Data payload definition"),(0,r.mdx)("p",null,"The following lists the key-value pairs in this event:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Key")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Value Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Optional")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"aamprofile")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String Map"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The data payload contains the customer key value pairs. The data payload is populated using the CV and CN values in the Audience Manager Stuff array.")))),(0,r.mdx)("h3",{id:"audience-manager-identity-response"},"Audience Manager identity response"),(0,r.mdx)("p",null,"This event delivers the Audience Manager profile to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The original requester"),(0,r.mdx)("li",{parentName:"ul"},"Any module that might be listening for updates")),(0,r.mdx)("p",null,"The event is generated when a request is made to update the Audience manager profile."),(0,r.mdx)("h4",{id:"event-details-4"},"Event details"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Event Source")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Paired Event")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventType.audienceManager")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"com.adobe.eventSource.responseIdentity")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"​",(0,r.mdx)("a",{parentName:"td",href:"#audience-manager-identity-request"},"Audience Manager identity request"),"​")))),(0,r.mdx)("h4",{id:"data-payload-definition-4"},"Data payload definition"),(0,r.mdx)("p",null,"Here are the key-value pairs in this event:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Key")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Value Type")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Optional")),(0,r.mdx)("th",{parentName:"tr",align:"left"},(0,r.mdx)("strong",{parentName:"th"},"Description")))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"aamprofile")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String Map"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Audience Manager Visitor Profile")))),(0,r.mdx)("h2",{id:"shared-states"},"Shared states"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"MODULE_NAME"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"com.adobe.module.audience")),(0,r.mdx)("p",null,"The shared state for this module is updated in the following scenarios:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"At Initialization"),": After the module is initialized, it updates the shared state by reading the previously set value from persistence."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"With Audience Manager API calls"),": The shared stare is updated when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"submitsignal")," API is called.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Key"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"uuid")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"String"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The UUID assigned by the Audience server.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("inlineCode",{parentName:"td"},"aamprofile")),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Dictionary/Map"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"The matching visitor profile segments associated with the user.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-solution-adobe-audience-manager-event-reference-md-0bac1bdebf8dda960386.js.map