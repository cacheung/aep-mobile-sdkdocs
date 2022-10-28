"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[612],{2016:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return x}});var i,o=t(87462),a=t(63366),l=(t(15007),t(64983)),d=t(91515),r=["components"],s={},p=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),m={_frontmatter:s},u=d.Z;function x(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.mdx)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"ios-app-extension-implementation"},"iOS App Extension implementation"),(0,l.mdx)("p",null,"You can use supported Adobe Experience Platform mobile extensions in your App Extensions to collect usage data. The supported Platform mobile extensions are listed ",(0,l.mdx)("a",{parentName:"p",href:"../current-sdk-versions.md#ios--swift"},"here"),"."),(0,l.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"This tutorial assumes a basic understanding of how to use the iOS AEP Mobile SDK in applications. For more details see ",(0,l.mdx)("a",{parentName:"li",href:"../getting-started/index.md"},"Getting Started"),"."),(0,l.mdx)("li",{parentName:"ul"},"You should have CocoaPods installed.")),(0,l.mdx)("h2",{id:"adding-the-aep-mobile-extensions"},"Adding the AEP mobile extensions"),(0,l.mdx)("p",null,"Adding the Mobile SDK to your App Extension works the same way as adding the Mobile SDK to your application."),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"In the Podfile, add a new target for your app extension and include the Adobe pods:")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-pod"},"target 'YourApp' do\n  pod 'AEPServices'\n  pod 'AEPCore'\n  pod 'AEPLifecycle'\n  pod 'AEPIdentity'\n  pod 'AEPAnalytics'\nend\n\ntarget 'YourAppExtension' do\n  pod 'AEPServices'\n  pod 'AEPCore'\n  pod 'AEPLifecycle'\n  pod 'AEPIdentity'\n  pod 'AEPAnalytics'\nend\n\n")),(0,l.mdx)("ol",{start:2},(0,l.mdx)("li",{parentName:"ol"},"Run ",(0,l.mdx)("inlineCode",{parentName:"li"},"pod install")," from the command line to install the pods to the App Extension target.")),(0,l.mdx)("h2",{id:"registering-extensions"},"Registering Extensions"),(0,l.mdx)("p",null,"This tutorial uses the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ShareExtension")," as the example."),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Depending on the type of App Extension you are using, the registration and usage of the SDK will look different. Make sure you understand the lifecycle of your App Extension in order to know where best to register the SDK and call lifecycle start/pause. "),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Make sure that your ",(0,l.mdx)("inlineCode",{parentName:"li"},"ShareViewController")," has the proper imports for the SDK. ")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport Social\nimport AEPCore\nimport AEPIdentity\nimport AEPAnalytics\nimport AEPLifecycle\n")),(0,l.mdx)("ol",{start:2},(0,l.mdx)("li",{parentName:"ol"},"Register the SDK in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"ShareViewController"),"'s ",(0,l.mdx)("inlineCode",{parentName:"li"},"presentationAnimationDidFinish")," method:")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Swift")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},'override func presentationAnimationDidFinish() {\n        MobileCore.registerExtensions([Identity.self, Lifecycle.self, AnalyticsAppExtension.self], {\n            MobileCore.configureWith(appId: "your-app-id")\n            MobileCore.lifecycleStart(additionalContextData: nil)\n        })\n    }\n')),(0,l.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,l.mdx)("p",null,"Please note that in order to register AEPAnalytics, you must use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"AnalyticsAppExtension")," class instead of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Analytics")," class used when registering from an application."),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"Managing lifeycle from a Share Extension should be done in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"didSelectCancel")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"didSelectPost")," methods which are the delegate methods called when the ShareViewController is dismissed.")),(0,l.mdx)("h3",{id:"swift"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"    override func didSelectCancel() {\n        MobileCore.lifecyclePause()\n    }\n\n    override func didSelectPost() {\n        MobileCore.lifecyclePause()\n        ...\n    }\n")),(0,l.mdx)("p",null,"You are now ready to use the SDK in your App Extension."))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-user-guides-app-extension-md-9409540b156ae7fe64ef.js.map