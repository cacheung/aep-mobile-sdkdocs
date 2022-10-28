"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4379],{41749:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return c}});var r,s=a(87462),t=a(63366),p=(a(15007),a(64983)),m=a(91515),l=["components"],o={},i=(r="Variant",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),d={_frontmatter:o},x=m.Z;function c(e){var n=e.components,a=(0,t.Z)(e,l);return(0,p.mdx)(x,(0,s.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)(i,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"java"},"Java"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion()\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-java"},"Assurance.extensionVersion()\n")),(0,p.mdx)(i,{platform:"ios",api:"extension-version",repeat:"8",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"swift"},"Swift"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-swift"},"AEPAssurance.extensionVersion()\n")),(0,p.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (nonnull NSString*) extensionVersion;\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[AEPAssurance extensionVersion];\n")),(0,p.mdx)(i,{platform:"react-native",api:"extension-version",repeat:"3",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"javascript"},"JavaScript"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-objectivec"},'AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEP Assurance version: " + version));\n')),(0,p.mdx)(i,{platform:"flutter",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"dart"},"Dart"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-dart"},"static Future<String> get extensionVersion async\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-dart"},"assuranceVersion = await FlutterAssurance.extensionVersion;\n")),(0,p.mdx)(i,{platform:"cordova",api:"extension-version",repeat:"4",mdxType:"Variant"}),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"AEPAssurance.extensionVersion = function(success, fail);\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'AEPAssurance.extensionVersion(function(version) {  \n   console.log("AEPAssurance version: " + version);\n}, function(error) {  \n   console.log(error);  \n});\n')),(0,p.mdx)(i,{platform:"unity",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"c"},"C#"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},"public static string ExtensionVersion()\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},'string version = AEPAssurance.ExtensionVersion();\nprint(LOG_TAG + "Assurance version: "+version);\n')),(0,p.mdx)(i,{platform:"xamarin",api:"extension-version",repeat:"3",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"c-1"},"C#"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},'string version = AEPAssurance.ExtensionVersion()  \nConsole.WriteLine("AEPAssurance version installed is: " + version);\n')),(0,p.mdx)(i,{platform:"android",api:"start-session",repeat:"7",mdxType:"Variant"}),(0,p.mdx)("p",null,"This API is optional for Android."),(0,p.mdx)("p",null,"Android does not require this API to be called. When the ",(0,p.mdx)("inlineCode",{parentName:"p"},"registerExtension")," API is called, AEP Assurance extension registers the app lifecycle handlers which automatically pick up any deep links and use them to start the session."),(0,p.mdx)("h4",{id:"java-1"},"Java"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-java"},"public static void startSession(final String url)\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-java"}," Assurance.startSession(url);\n")),(0,p.mdx)(i,{platform:"ios",api:"start-session",repeat:"10",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"swift-1"},"Swift"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {\n    do {\n        AEPAssurance.startSession(url)\n        return false\n    }\n}\n")),(0,p.mdx)("p",null,"For SceneDelegate based applications"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-swift"},"    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n        AEPAssurance.startSession(URLContexts.first!.url)\n    }\n")),(0,p.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) startSession: (NSURL* _Nonnull) url;\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {\n    [AEPAssurance startSession:url];\n    return false;\n}\n")),(0,p.mdx)(i,{platform:"react-native",api:"start-session",repeat:"3",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'AEPAssurance.startSession("your-assurance-session-url");\n')),(0,p.mdx)(i,{platform:"flutter",api:"start-session",repeat:"5",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"dart-1"},"Dart"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-dart"},"static Future<void> startSession(String url);\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-dart"},"FlutterAssurance.startSession(url);\n")),(0,p.mdx)(i,{platform:"cordova",api:"start-session",repeat:"4",mdxType:"Variant"}),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},"AEPAssurance.startSession = function(sessionurl,success, fail);\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-javascript"},'AEPAssurance.startSession(url,function(result) {  \n   console.log("AdobeExperenceSDK: AEPAssurance session started succesfully: " + result);\n}, function(error) {  \n   console.log("AdobeExperenceSDK: Failed to start AEPAssurance session: " + error);\n});\n')),(0,p.mdx)(i,{platform:"unity",api:"start-session",repeat:"5",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"c-2"},"C#"),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Syntax")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},"public static void StartSession(string url)\n")),(0,p.mdx)("p",null,(0,p.mdx)("strong",{parentName:"p"},"Example")),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},"AEPAssurance.StartSession(url);\n")),(0,p.mdx)(i,{platform:"xamarin",api:"start-session",repeat:"2",mdxType:"Variant"}),(0,p.mdx)("h4",{id:"c-3"},"C#"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-csharp"},"AEPAssurance.StartSession(url);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-assurance-sdk-tabs-api-reference-md-217be0f0ce418ca07d83.js.map