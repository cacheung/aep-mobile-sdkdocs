"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5234],{81455:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return u}});var t=n(87462),i=n(63366),r=(n(15007),n(64983)),o=n(91515),l=["components"],d={},m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",a)}},p=m("Variant"),s=m("InlineNestedAlert"),c={_frontmatter:d},x=o.Z;function u(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.mdx)(x,(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(p,{platform:"android",task:"add",repeat:"8",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/index.md"},"Mobile Core")," and Analytics extensions to your project using the app's Gradle file.")),(0,r.mdx)(s,{variant:"warning",header:"false",iconPosition:"left",mdxType:"InlineNestedAlert"},(0,r.mdx)("p",null,"Using dynamic dependency versions is ",(0,r.mdx)("strong",{parentName:"p"},"not")," recommended for production apps. Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../manage-gradle-dependencies.md"},"managing Gradle dependencies guide")," for more information.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"implementation platform('com.adobe.marketing.mobile:sdk-bom:2.+')\nimplementation 'com.adobe.marketing.mobile:core'\nimplementation 'com.adobe.marketing.mobile:identity'\nimplementation 'com.adobe.marketing.mobile:analytics'\n")),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},"Import the Analytics extension in your application's main activity.")),(0,r.mdx)("h4",{id:"java"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.MobileCore;\nimport com.adobe.marketing.mobile.Identity;\nimport com.adobe.marketing.mobile.Analytics;\n")),(0,r.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},"import com.adobe.marketing.mobile.MobileCore\nimport com.adobe.marketing.mobile.Identity\nimport com.adobe.marketing.mobile.Analytics\n")),(0,r.mdx)(p,{platform:"ios",task:"add",repeat:"7",mdxType:"Variant"}),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Add the ",(0,r.mdx)("a",{parentName:"li",href:"../mobile-core/index.md"},"Mobile Core")," and Analytics extensions to your project using Cocoapods."),(0,r.mdx)("li",{parentName:"ol"},"Add the following pods in your ",(0,r.mdx)("inlineCode",{parentName:"li"},"Podfile"),":")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ruby"},"pod 'AEPCore'\npod 'AEPAnalytics'\npod 'AEPIdentity'\n")),(0,r.mdx)("ol",{start:3},(0,r.mdx)("li",{parentName:"ol"},"Import the Analytics and Identity libraries:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Swift")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPAnalytics\nimport AEPIdentity\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Objective-C")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPAnalytics;\n@import AEPIdentity;\n")),(0,r.mdx)(p,{platform:"android",task:"register",repeat:"4",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-1"},"Java"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'public class MainApp extends Application {\n     private final String ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID";\n\n     @Override\n     public void onCreate() {\n         super.onCreate();\n\n         MobileCore.setApplication(this);\n         MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID);\n\n         List<Class<? extends Extension>> extensions = Arrays.asList(\n                 Analytics.EXTENSION, Identity.EXTENSION);\n         MobileCore.registerExtensions(extensions, o -> {\n             Log.d(LOG_TAG, "AEP Mobile SDK is initialized");\n         });\n     }\n }\n')),(0,r.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'class MyApp : Application() {\n    val ENVIRONMENT_FILE_ID = "YOUR_APP_ENVIRONMENT_ID"\n\n    override fun onCreate() {\n        super.onCreate()\n        MobileCore.setApplication(this)\n        MobileCore.configureWithAppID(ENVIRONMENT_FILE_ID)\n\n        val extensions = listOf(Analytics.EXTENSION, Identity.EXTENSION)\n        MobileCore.registerExtensions(extensions) {\n            Log.d(LOG_TAG, "AEP Mobile SDK is initialized")\n        }\n    }\n}\n')),(0,r.mdx)(p,{platform:"ios",task:"register",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift"},"Swift"),(0,r.mdx)("p",null,"In your app's ",(0,r.mdx)("inlineCode",{parentName:"p"},"_:didFinishLaunchingWithOptions")," function, register the Audience Manager extension with the Mobile Core:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n   MobileCore.registerExtensions([Analytics.self, Identity.self], {\n   MobileCore.configureWith(appId: "yourAppId")\n })  \n ...\n}\n')),(0,r.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,r.mdx)("p",null,"In your app's ",(0,r.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions"),", register Media with Mobile Core:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [AEPMobileCore registerExtensions:@[AEPMobileAnalytics.class, AEPMobileIdentity.class] completion:^{\n    [AEPMobileCore configureWithAppId: @"yourAppId"];\n  }];\n  ...\n}\n')),(0,r.mdx)(p,{platform:"android",task:"serialize",repeat:"8",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-2"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'cdata.put("&&events", "event1:12341234");\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'//create a context data dictionary\nHashMap cdata = new HashMap<String, Object>();\n\n// add events\ncdata.put("&&events", "event1:12341234");\n\n// send a tracking call - use either a trackAction or TrackState call.\n// trackAction example:\nMobileCore.trackAction("Action Name", cdata);\n// trackState example:\nMobileCore.trackState("State Name", cdata);\n')),(0,r.mdx)("h4",{id:"kotlin-2"},"Kotlin"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'//create a context data dictionary\nval cdata: Map<String, Any?> = mapOf(\n    "&&events" to "event1:12341234"\n)\n\n// send a tracking call - use either a trackAction or TrackState call.\n// trackAction example:\nMobileCore.trackAction("Action Name", cdata);\n// trackState example:\nMobileCore.trackState("State Name", cdata);\n')),(0,r.mdx)(p,{platform:"ios",task:"serialize",repeat:"10",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-1"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'contextdata["&&events"] = "event1:12341234"\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'//create a context data dictionary\nvar contextData = [String: Any]()\n\n// add events\ncontextData["&&events"] = "event1:12341234"\n\n// send the tracking call - use either a trackAction or trackState call.\n// trackAction example:\nMobileCore.track(action: "Action Name" as String, data: contextData)\n\n// trackState example:\nMobileCore.track(state: "State Name" as String, data: contextData)\n')),(0,r.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Syntax")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'[contextData setObject:@"eventN:serial number" forKey:@"&&events"];\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'//create a context data dictionary\nNSMutableDictionary *contextData = [NSMutableDictionary dictionary];\n\n// add events\n[contextData setObject:@"event1:12341234" forKey:@"&&events"];\n\n// send the tracking call - use either a trackAction or trackState call.\n// trackAction example:\n[AEPMobileCore trackAction:@"Action Name" data:contextData];\n// trackState example:\n[AEPMobileCore trackState:@"State Name" data:contextData];\n')),(0,r.mdx)(p,{platform:"android",task:"update",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"java-3"},"Java"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'HashMap<String, Object> data = new HashMap<String, Object>();\ndata.put("analytics.server", "sample.analytics.tracking.server");\ndata.put("analytics.rsids", "rsid1,rsid2");\ndata.put("analytics.batchLimit", 10);\ndata.put("analytics.offlineEnabled", true);\n\nMobileCore.updateConfiguration(data);\n')),(0,r.mdx)("h4",{id:"kotlin-3"},"Kotlin"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-kotlin"},'val data: Map<String, Any?> = mapOf(\n    "analytics.server" to "sample.analytics.tracking.server",\n    "analytics.rsids" to "rsid1,rsid2",\n    "analytics.batchLimit" to 10,\n    "analytics.offlineEnabled" to true\n)\n\nMobileCore.updateConfiguration(data)\n')),(0,r.mdx)(p,{platform:"ios",task:"update",repeat:"6",mdxType:"Variant"}),(0,r.mdx)("h4",{id:"swift-2"},"Swift"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-swift"},'let updatedConfig = ["analytics.server":"sample.analytics.tracking.server",\n                     "analytics.rsids":"rsid1,rsid2",\n                     "analytics.batchLimit":10,\n                     "analytics.offlineEnabled":true] as [String: Any]\nMobileCore.updateConfigurationWith(configDict: updatedConfig)\n')),(0,r.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSDictionary *updatedConfig = @{@"analytics.server":@"sample.analytics.tracking.server",\n                                @"analytics.rsids":@"rsid1,rsid2",\n                                @"analytics.batchLimit":@(10),\n                                @"analytics.offlineEnabled":@YES};\n[AEPMobileCore updateConfiguration:updatedConfig];\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-analytics-tabs-index-md-3185573800e4c25a0460.js.map