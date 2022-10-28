"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3197],{24920:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return u}});var t,r=a(87462),i=a(63366),l=(a(15007),a(64983)),o=a(91515),d=["components"],p={},s=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),m={_frontmatter:p},c=o.Z;function u(e){var n=e.components,a=(0,i.Z)(e,d);return(0,l.mdx)(c,(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(s,{platform:"android",task:"add",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"java"},"Java"),(0,l.mdx)("p",null,"Import the library:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.*;\n")),(0,l.mdx)(s,{platform:"ios-aep",task:"add",repeat:"4",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPCore\nimport AEPIdentity\n")),(0,l.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPCore;\n@import AEPIdentity;\n")),(0,l.mdx)(s,{platform:"ios-acp",task:"add",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift-1"},"Swift"),(0,l.mdx)("p",null,"In Swift, the ACPCore library includes ACPIdentity:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"import ACPCore\n")),(0,l.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},'#import  "ACPIdentity.h"\n')),(0,l.mdx)(s,{platform:"react-native",task:"add",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"javascript"},"JavaScript"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import {ACPIdentity} from '@adobe/react-native-acpcore';\n")),(0,l.mdx)(s,{platform:"flutter",task:"add",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"dart"},"Dart"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter_acpcore/flutter_acpidentity.dart';\n")),(0,l.mdx)(s,{platform:"cordova",task:"add",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"cordova"},"Cordova"),(0,l.mdx)("p",null,"After creating your Cordova app and adding the Android and iOS platforms, the Identity extension for Cordova can be added with this command:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-cordova"},"cordova plugin add https://github.com/adobe/cordova-acpcore.git\n")),(0,l.mdx)(s,{platform:"unity",task:"add",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c"},"C#"),(0,l.mdx)("p",null,"After importing the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/adobe/unity-acpcore/blob/master/bin/ACPCore-0.0.1-Unity.zip"},"ACPCore.unitypackage"),", the Identity extension for Unity can be added with following code in the MainScript"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"using com.adobe.marketing.mobile;\n")),(0,l.mdx)(s,{platform:"xamarin",task:"add",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-1"},"C#"),(0,l.mdx)("p",null,"After adding the iOS ACPCore NuGet package or the Android ACPIdentity NuGet package, the Identity extension can be added by this import statement"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"using Com.Adobe.Marketing.Mobile;\n")),(0,l.mdx)(s,{platform:"android",task:"register",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("p",null,"After calling the ",(0,l.mdx)("inlineCode",{parentName:"p"},"setApplication()")," method in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"onCreate()")," method, register the extension. If the registration was not successful, an ",(0,l.mdx)("inlineCode",{parentName:"p"},"InvalidInitException")," is thrown."),(0,l.mdx)("h4",{id:"java-1"},"Java"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"public class MobiletApp extends Application {\n@Override\npublic void onCreate() {\nsuper.onCreate();\n     MobileCore.setApplication(this);\n     try {\n         Identity.registerExtension();\n     } catch (Exception e) {\n         //Log the exception\n     }\n  }\n}\n")),(0,l.mdx)(s,{platform:"ios-aep",task:"register",repeat:"6",mdxType:"Variant"}),(0,l.mdx)("p",null,"Register the Identity extension in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions")," function:"),(0,l.mdx)("h4",{id:"swift-2"},"Swift"),(0,l.mdx)("p",null,"When including both Identity and Identity for Edge Network extensions, register the extensions using their full Swift module names, such as ",(0,l.mdx)("inlineCode",{parentName:"p"},"AEPIdentity.Identity.self"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n     MobileCore.registerExtensions([Identity.self, ...], {\n       ...\n     })\n}\n")),(0,l.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n [AEPMobileCore registerExtensions:@[AEPMobileIdentity.class, ...] completion:^{\n   ...\n }];\n return YES;\n}\n")),(0,l.mdx)(s,{platform:"ios-acp",task:"register",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("p",null,"Register the Identity extension in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"didFinishLaunchingWithOptions")," function:"),(0,l.mdx)("h4",{id:"swift-3"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n  ACPIdentity.registerExtension();\n  // Override point for customization after application launch.\n  return true;\n}\n")),(0,l.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n  [ACPIdentity registerExtension];\n  // Override point for customization after application launch.\n  return YES;\n}\n")),(0,l.mdx)(s,{platform:"react-native",task:"register",repeat:"1",mdxType:"Variant"}),(0,l.mdx)("p",null,"When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs."),(0,l.mdx)(s,{platform:"flutter",task:"register",repeat:"1",mdxType:"Variant"}),(0,l.mdx)("p",null,"When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs."),(0,l.mdx)(s,{platform:"cordova",task:"register",repeat:"1",mdxType:"Variant"}),(0,l.mdx)("p",null,"When using React Native, registering Identity with Mobile Core should be done in native code, which is shown under the Android and iOS tabs."),(0,l.mdx)(s,{platform:"unity",task:"register",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("p",null,"Register the Identity extension in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"Start()")," function:"),(0,l.mdx)("h4",{id:"c-2"},"C#"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"void Start() {\n  ACPIdentity.RegisterExtension();\n}\n")),(0,l.mdx)(s,{platform:"xamarin",task:"register",repeat:"7",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-3"},"C#"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"iOS")),(0,l.mdx)("p",null,"Register the Identity extension in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"FinishedLaunching()")," function:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'public override bool FinishedLaunching(UIApplication app, NSDictionary options)\n{\n  global::Xamarin.Forms.Forms.Init();\n  LoadApplication(new App());\n    ACPIdentity.RegisterExtension();\n\n  // start core\n  ACPCore.Start(startCallback);\n\n  return base.FinishedLaunching(app, options);\n}\n\nprivate void startCallback()\n{\n  // set launch config\n  ACPCore.ConfigureWithAppID("yourAppId");\n}\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Android")),(0,l.mdx)("p",null,"Register the Identity extension in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"OnCreate()")," function:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'protected override void OnCreate(Bundle savedInstanceState)\n{\n  base.OnCreate(savedInstanceState);\n  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);\n  LoadApplication(new App());\n\n  ACPIdentity.RegisterExtension();\n\n  // start core\n  ACPCore.Start(new CoreStartCompletionCallback());\n}\n\nclass CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback\n{\n  public void Call(Java.Lang.Object callback)\n  {\n    // set launch config\n    ACPCore.ConfigureWithAppID("yourAppId");\n  }\n}\n')),(0,l.mdx)(s,{platform:"android",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"java-2"},"Java"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"String identityExtensionVersion = Identity.extensionVersion();\n")),(0,l.mdx)(s,{platform:"ios-aep",task:"version",repeat:"4",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift-4"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"var identityExtensionVersion  = Identity.extensionVersion\n")),(0,l.mdx)("h4",{id:"objective-c-4"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *identityExtensionVersion = [AEPMobileIdentity extensionVersion];\n")),(0,l.mdx)(s,{platform:"ios-acp",task:"version",repeat:"4",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift-5"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"var identityExtensionVersion  = ACPIdentity.extensionVersion()\n")),(0,l.mdx)("h4",{id:"objective-c-5"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *identityExtensionVersion = [ACPIdentity extensionVersion];\n")),(0,l.mdx)(s,{platform:"react-native",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.extensionVersion().then(identityExtensionVersion => console.log("Identity version: " + identityExtensionVersion));\n')),(0,l.mdx)(s,{platform:"flutter",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"dart-1"},"Dart"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dart"},"String identityExtensionVersion = await FlutterACPIdentity.extensionVersion;\n")),(0,l.mdx)(s,{platform:"cordova",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"cordova-1"},"Cordova"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.extensionVersion(function (handleCallback) {\n  console.log("AdobeExperienceSDK: ACPIdentity version: " + handleCallback)\n}, function (handleError) {\n  console.log("AdobeExperenceSDK: failed to get extension version : " + handleError)\n});\n')),(0,l.mdx)(s,{platform:"unity",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-4"},"C#"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"string identityVersion = ACPIdentity.ExtensionVersion();\n")),(0,l.mdx)(s,{platform:"xamarin",task:"version",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-5"},"C#"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"string identityVersion = ACPIdentity.ExtensionVersion();\n")),(0,l.mdx)(s,{platform:"android",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"java-3"},"Java"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"#appendtourl-appendvisitorinfoforurl"},"appendVisitorInfoForUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},'Identity.appendVisitorInfoForURL("https://example.com", new AdobeCallback<String>() {    \n    @Override    \n    public void call(String urlWithAdobeVisitorInfo) {        \n        //handle the new URL here        \n        //For example, open the URL on the device browser        \n        //        \n        Intent i = new Intent(Intent.ACTION_VIEW);        \n        i.setData(Uri.parse(urlWithAdobeVisitorInfo));        \n        startActivity(i);    \n    }\n});\n')),(0,l.mdx)("p",null,"Alternately, starting in SDK version 1.4.0 (Identity version 1.1.0), you can call ",(0,l.mdx)("a",{parentName:"p",href:"#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},'Identity.getUrlVariables(new AdobeCallback<String>() {    \n    @Override    \n    public void call(String stringWithAdobeVisitorInfo) {        \n        //handle the URL query parameter string here \n        //For example, open the URL on the device browser        \n        //        \n        Intent i = new Intent(Intent.ACTION_VIEW);        \n        i.setData(Uri.parse("https://example.com?" + urlWithAdobeVisitorInfo));        \n        startActivity(i);    \n    }\n});\n')),(0,l.mdx)(s,{platform:"ios-aep",task:"implement",repeat:"10",mdxType:"Variant"}),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"#appendtourl-appendvisitorinfoforurl"},"appendToUrl"),": "),(0,l.mdx)("h4",{id:"swift-6"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},'let url = URL(string: "https://example.com")\nIdentity.appendTo(url: url) { appendedUrl, error in\n    if error != nil {\n        // handle error here\n    } else {\n        // handle appended url here\n    }\n}\n')),(0,l.mdx)("h4",{id:"objective-c-6"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSURL *sampleUrl = [NSURL URLWithString:@"https://example.com"];\n[AEPMobileIdentity appendToUrl:sampleUrl completion:^(NSURL * _Nullable appendedUrl, NSError *error) {\n    if (error != nil) {\n        // Handle error here\n    } else {\n        // Handle appended url here\n    }\n}];\n')),(0,l.mdx)("p",null,"Alternately, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("h4",{id:"swift-7"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},'Identity.getUrlVariables { urlVariables, error in\n    if error != nil {\n        // handle error here\n    } else {\n        if let url = URL(string: "https://example.com?\\(urlVariables ?? "")") {\n            DispatchQueue.main.async {\n                UIApplication.shared.open(url)\n            }\n        }\n    }\n}\n')),(0,l.mdx)("h4",{id:"objective-c-7"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},'[AEPMobileIdentity getUrlVariables:^(NSString * _Nullable urlVariables, NSError *error) {\n    NSString *sampleURLString = @"https://example.com";\n    if (error != nil) {\n        // Handle variables being nil\n    } else {\n        NSString *stringWithData = [NSString stringWithFormat:@"%@?%@", sampleURLString, urlVariables];\n        NSURL *appendedUrl = [NSURL URLWithString:stringWithData];\n        dispatch_async(dispatch_get_main_queue(), ^{\n            [[UIApplication sharedApplication] openURL:appendedUrl options:@{} completionHandler:nil];\n        });\n    }\n}];\n')),(0,l.mdx)(s,{platform:"ios-acp",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"objective-c-8"},"Objective-C"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"appendToUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},'NSURL* url = [[NSURL alloc] initWithString:@"www.example.com"];\n[ACPIdentity appendToUrl:url withCallback:^(NSURL * _Nullable urlWithVisitorData) {    \n// handle the appended url here\n}];\n')),(0,l.mdx)("p",null,"Alternately, starting with SDK version 2.3.0 (ACPIdentity version 2.1.0), you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},'[ACPIdentity getUrlVariables:^(NSString * _Nullable urlVariables) {    \n  // handle the URL query parameter string here\n  NSString* urlString = @"https://example.com";\n  NSString* urlStringWithVisitorData = [NSString stringWithFormat:@"%@?%@", urlString, urlVariables];\n  NSURL* urlWithVisitorData = [NSURL URLWithString:urlStringWithVisitorData];\n  [[UIApplication sharedApplication] openURL:urlWithVisitorData options:@{} completionHandler:^(BOOL success) {\n    // handle openURL success\n  }];\n}];\n')),(0,l.mdx)(s,{platform:"react-native",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"javascript-2"},"JavaScript"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"appendVisitorInfoForUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.appendVisitorInfoForURL("www.example.com").then(urlWithVistorData => console.log("Url with Visitor Data = " + urlWithVisitorData));\n')),(0,l.mdx)("p",null,"Alternately, starting with SDK version 1.0.5, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.getUrlVariables().then(urlVariables => console.log("query params = " + urlVariables));\n')),(0,l.mdx)(s,{platform:"flutter",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"dart-2"},"Dart"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"appendVisitorInfoForUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dart"},'String result = "";\n\ntry {\n  result = await FlutterACPIdentity.appendToUrl("www.example.com");\n} on PlatformException {\n  log("Failed to append URL");\n}\n')),(0,l.mdx)("p",null,"Alternately, starting with SDK version 1.0.0-beta.1, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dart"},'String result = "";\n\ntry {\n  result = await FlutterACPIdentity.urlVariables;\n} on PlatformException {\n  log("Failed to get url variables");\n}\n')),(0,l.mdx)(s,{platform:"cordova",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"cordova-2"},"Cordova"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"appendVisitorInfoForUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.appendVisitorInfoForUrl("https://example.com", function(handleCallback) {\n  console.log("AdobeExperenceSDK: Url with Visitor Data = " + handleCallback);\n}, function(handleError) {\n  console.log("AdobeExperenceSDK: Failed to append URL : " + handleError);\n});\n')),(0,l.mdx)("p",null,"Alternately, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"getUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPIdentity.getUrlVariables(function (handleCallback) {\n  console.log("AdobeExperienceSDK: Url variables: " + handleCallback);\n}, function (handleError) {\n  console.log("AdobeExperenceSDK: Failed to retrieve url variables : " + handleError);\n});\n')),(0,l.mdx)(s,{platform:"unity",task:"implement",repeat:"5",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-6"},"C#"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"AppendToUrl"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'[MonoPInvokeCallback(typeof(AdobeIdentityAppendToUrlCallback))]\npublic static void HandleAdobeIdentityAppendToUrlCallback(string url)\n{\n    print("Url is : " + url);\n}\nACPIdentity.AppendToUrl("https://www.adobe.com", HandleAdobeIdentityAppendToUrlCallback);\n')),(0,l.mdx)("p",null,"Alternately, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"GetUrlVariables")," and build your own URL:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'[MonoPInvokeCallback(typeof(AdobeGetUrlVariables))]\npublic static void HandleAdobeGetUrlVariables(string urlVariables)\n{\n    print("Url variables are : " + urlVariables);\n}\nACPIdentity.GetUrlVariables(HandleAdobeGetUrlVariables);\n')),(0,l.mdx)(s,{platform:"xamarin",task:"implement",repeat:"12",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-7"},"C#"),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"AppendToUrl"),":"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"iOS")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'ACPIdentity.AppendToUrl(url, callback => {\n  Console.WriteLine("Appended url: " + callback);\n});\n')),(0,l.mdx)("p",null,"To append visitor information to the URL that is being used to open the web view, call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#appendtourl-appendvisitorinfoforurl"},"AppendVisitorInfoForUrl"),":"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Android")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'ACPIdentity.AppendVisitorInfoForURL("https://example.com", new StringCallback());\n\nclass StringCallback : Java.Lang.Object, IAdobeCallback\n{\n  public void Call(Java.Lang.Object stringContent)\n  {\n    if (stringContent != null)\n    {\n      Console.WriteLine("Appended url: " + stringContent);\n    } \n    else \n    {\n      Console.WriteLine("null content in string callback");\n    }\n  }\n}\n')),(0,l.mdx)("p",null,"Alternately, you can call ",(0,l.mdx)("a",{parentName:"p",href:"api-reference.md#geturlvariables"},"GetUrlVariables")," and build your own URL:"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"iOS")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'ACPIdentity.GetUrlVariables(callback => {\n  Console.WriteLine("Url variables: " + callback);\n});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Android")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'ACPIdentity.GetUrlVariables(new StringCallback());\n\nclass StringCallback : Java.Lang.Object, IAdobeCallback\n{\n  public void Call(Java.Lang.Object stringContent)\n  {\n    if (stringContent != null)\n    {\n      Console.WriteLine("Url variables: " + stringContent);\n    } \n    else \n    {\n      Console.WriteLine("null content in string callback");\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=008412390d98b5dc91683e85d03400ad046c9e92-a3f48120d9b58557c658.js.map