"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6682],{44926:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return x}});var a,o=t(87462),l=t(63366),s=(t(15007),t(64983)),r=t(91515),m=["components"],p={},d=(a="Variant",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),i={_frontmatter:p},c=r.Z;function x(e){var n=e.components,t=(0,l.Z)(e,m);return(0,s.mdx)(c,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(d,{platform:"android",api:"extension-version",repeat:"8",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static String extensionVersion();\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"String extensionVersion = Consent.extensionVersion();\n")),(0,s.mdx)("h4",{id:"kotlin"},"Kotlin"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"val extensionVersion = Consent.extensionVersion()\n")),(0,s.mdx)(d,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift"},"Swift"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"static var extensionVersion: String\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"let extensionVersion = Consent.extensionVersion\n")),(0,s.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (nonnull NSString*) extensionVersion;\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"NSString *extensionVersion = [AEPMobileEdgeConsent extensionVersion];\n")),(0,s.mdx)(d,{platform:"android",api:"get-consents",repeat:"9",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java-1"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static void getConsents(final AdobeCallback<Map<String, Object>> callback);\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"callback")," - callback invoked with the current consents of the extension. If an ",(0,s.mdx)("inlineCode",{parentName:"li"},"AdobeCallbackWithError")," is provided, an ",(0,s.mdx)("inlineCode",{parentName:"li"},"AdobeError"),", can be returned in the eventuality of any error that occurred while getting the user consents. The callback may be invoked on a different thread.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"Consent.getConsents(new AdobeCallback<Map<String, Object>>() {\n    @Override\n    public void call(Map<String, Object> currentConsents) {\n        // Handle currentConsents\n    }\n});\n")),(0,s.mdx)("h4",{id:"kotlin-1"},"Kotlin"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"Consent.getConsents { currentConsents ->\n    // Handle currentConsents\n}\n")),(0,s.mdx)(d,{platform:"ios",api:"get-consents",repeat:"11",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift-1"},"Swift"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"static func getConsents(completion: @escaping ([String: Any]?, Error?) -> Void)\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"completion")," - Invoked with the current consent preferences or an ",(0,s.mdx)("inlineCode",{parentName:"li"},"AEPError")," if an unexpected error occurs or the request timed out. It may be invoked on a different thread.")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"Consent.getConsents { currentConsents, error in\n    // Handle currentConsents\n}\n")),(0,s.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) getConsents:^ (NSDictionary<NSString *,id> * _Nullable, NSError * _Nullable)\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[AEPMobileEdgeConsent getConsents:^(NSDictionary *currentConsents, NSError *error){\n    // Handle currentConsents\n}];\n")),(0,s.mdx)(d,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java-2"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension();\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"Consent.registerExtension();\n")),(0,s.mdx)(d,{platform:"ios",api:"register-extension",repeat:"12",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift-2"},"Swift"),(0,s.mdx)("p",null,"Use the MobileCore API to register the Edge Consent extension."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"static func registerExtensions(_ extensions: [NSObject.Type], \n                               _ completion: (() -> Void)? = nil)\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"import AEPEdgeConsent\n\n...\nMobileCore.registerExtensions([Consent.self])\n")),(0,s.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,s.mdx)("p",null,"Use the AEPMobileCore API to register the Edge Consent extension."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) registerExtensions: (NSArray<Class*>* _Nonnull) extensions \n                  completion: (void (^ _Nullable)(void)) completion;\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"@import AEPEdgeConsent;\n\n...\n[AEPMobileCore registerExtensions:@[AEPMobileEdgeConsent.class] completion:nil];\n")),(0,s.mdx)(d,{platform:"android",api:"update-consents",repeat:"9",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"java-3"},"Java"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},"public static void update(final Map<String, Object> consents);\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"consents")," - A ",(0,s.mdx)("inlineCode",{parentName:"li"},"Map")," of consents defined based on ",(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md"},"Privacy/Personalization/Marketing Preferences ","(","Consents",")"," XDM Schema"),".")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},'// Example 1, updating users collect consent to \'yes\'\nfinal Map<String, Object> collectConsents = new HashMap<>();\ncollectConsents.put("collect", new HashMap<String, String>() {\n    {\n        put("val", "y");\n    }\n});\n\nfinal Map<String, Object> consents = new HashMap<>();\nconsents.put("consents", collectConsents);\n\nConsent.update(consents);\n\n// Example 2, updating users collect consent to \'no\'\nfinal Map<String, Object> collectConsents = new HashMap<>();\ncollectConsents.put("collect", new HashMap<String, String>() {\n    {\n        put("val", "n");\n    }\n});\n\nfinal Map<String, Object> consents = new HashMap<>();\nconsents.put("consents", collectConsents);\n\nConsent.update(consents);\n')),(0,s.mdx)("h4",{id:"kotlin-2"},"Kotlin"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-java"},'// Example 1, updating users collect consent to \'yes\'\nval collectConsents = mutableMapOf<String, Any>()\ncollectConsents["collect"] = mutableMapOf("val" to "y")\n\nval consents = mutableMapOf<String, Any>()\nconsents["consents"] = collectConsents\n\nConsent.update(consents)\n\n// Example 2, updating users collect consent to \'no\'\nval collectConsents = mutableMapOf<String, Any>()\ncollectConsents["collect"] = mutableMapOf("val" to "n")\n\nval consents = mutableMapOf<String, Any>()\nconsents["consents"] = collectConsents\n\nConsent.update(consents)\n')),(0,s.mdx)(d,{platform:"ios",api:"update-consents",repeat:"11",mdxType:"Variant"}),(0,s.mdx)("h4",{id:"swift-3"},"Swift"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},"static func update(with consents: [String: Any])\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("em",{parentName:"li"},"consents")," - A ",(0,s.mdx)("inlineCode",{parentName:"li"},"[String: Any]")," of consents defined based on ",(0,s.mdx)("a",{parentName:"li",href:"https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-consents.schema.md"},"Privacy/Personalization/Marketing Preferences ","(","Consents",")"," XDM Schema"),".")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-swift"},'// Example 1, updating users collect consent to \'yes\'\nlet collectConsent = ["collect": ["val": "y"]]\nlet currentConsents = ["consents": collectConsent]\nConsent.update(with: currentConsents)\n\n// Example 2, updating users collect consent to \'no\'\nlet collectConsent = ["collect": ["val": "n"]]\nlet currentConsents = ["consents": collectConsent]\nConsent.update(with: currentConsents)\n')),(0,s.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Syntax")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) updateWithConsents:(NSDictionary<NSString *,id> * _Nonnull)\n")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Example")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-objc"},'// Example 1, updating users collect consent to \'yes\'\nNSDictionary *collectConsent = @{ @"collect": @{@"val": @"y"};\n[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];\n\n// Example 2, updating users collect consent to \'no\'\nNSDictionary *collectConsent = @{ @"collect": @{@"val": @"n"};\n[AEPMobileEdgeConsent updateWithConsents:@{@"consents": collectConsent}];\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-edge-consent-for-edge-network-tabs-api-reference-md-0836308cad1e2cd0465a.js.map