_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{GtyO:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/deploy-app-engine-from-circleci",function(){return t("PC13")}])},PC13:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),o=t.n(n),l=t("HaE+"),c=t("nKUr"),r=(t("q1tI"),t("Yp5c")),i=t("rePB"),u=t("Ff2n"),p=t("7ljp");function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){Object(i.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var b={};function m(e){var a=e.components,t=Object(u.a)(e,["components"]);return Object(p.a)("wrapper",d(d(d({},b),t),{},{components:a,mdxType:"MDXLayout"}),Object(p.a)("p",null,"I have implemented continuous delivery of Google AppEngine applications using CircleCI:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Deploy to staging on pushing to ",Object(p.a)("inlineCode",{parentName:"li"},"master")," branch."),Object(p.a)("li",{parentName:"ul"},"Deploy to production on pushing a tag matching ",Object(p.a)("inlineCode",{parentName:"li"},"/^v\\d+\\.\\d+\\.\\d+$/"),".")),Object(p.a)("p",null,"This configuration is quite useful and I'm sure I'll have a chance to reuse it. In this article I describe the implementation details."),Object(p.a)("h2",null,"Create a Service Account"),Object(p.a)("p",null,"At first, I created a service account that will be used to authenticate Cloud SDK in CircleCI:"),Object(p.a)("ol",null,Object(p.a)("li",{parentName:"ol"},"Create a new account at ",Object(p.a)("a",d({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/serviceaccounts"}),"Service Accounts")," of Google Cloud Platform Console:",Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},'Named "circleci" to make it easy to guess what is\'s for.'),Object(p.a)("li",{parentName:"ul"},"Created a key and download it in JSON."))),Object(p.a)("li",{parentName:"ol"},"Attach roles to the created service account at ",Object(p.a)("a",d({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/iam"}),"IAM")," page:",Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"App Engine Deployer (",Object(p.a)("inlineCode",{parentName:"li"},"appengine.deployer"),")"),Object(p.a)("li",{parentName:"ul"},"App Engine Service Admin (",Object(p.a)("inlineCode",{parentName:"li"},"appengine.serviceAdmin"),")"),Object(p.a)("li",{parentName:"ul"},"Cloud Build Editor (",Object(p.a)("inlineCode",{parentName:"li"},"cloudbuild.builds.editor"),")"),Object(p.a)("li",{parentName:"ul"},"Storage Object Creator (",Object(p.a)("inlineCode",{parentName:"li"},"storage.objectCreator"),")"),Object(p.a)("li",{parentName:"ul"},"Storage Object Viewer (",Object(p.a)("inlineCode",{parentName:"li"},"storage.objectViewer"),")")))),Object(p.a)("p",null,"Note that it may take a few minutes for the results to be reflected."),Object(p.a)("p",null,"When you create a new GCP project, a ",Object(p.a)("inlineCode",{parentName:"p"},"xxx@cloudbuild.gserviceaccount.com")," service account which has a Cloud Build Service Account role is created. You also need to attach the following role to the service account:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Storage Object Viewer")),Object(p.a)("h2",null,"Configure CircleCI"),Object(p.a)("p",null,"My GAE application uses ",Object(p.a)("inlineCode",{parentName:"p"},"nodejs10")," runtime. I added following npm run scripts:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"npm run test"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Run tests"))),Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"npm run build"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Build project and put artifacts to the ",Object(p.a)("inlineCode",{parentName:"li"},"/build")," directory.")))),Object(p.a)("p",null,"And I implemented CD using those scripts."),Object(p.a)("h3",null,"Cloud SDK"),Object(p.a)("p",null,"I use ",Object(p.a)("a",d({parentName:"p"},{href:"https://hub.docker.com/r/google/cloud-sdk/"}),"google/cloud-sdk")," image which was described in ",Object(p.a)("a",d({parentName:"p"},{href:"/blog/2019/01/google-cloud-sdk-in-docker"}),"How to Use Google Cloud SDK Using Docker"),":"),Object(p.a)("p",null,"Set the downloaded JSON key as ",Object(p.a)("inlineCode",{parentName:"p"},"GCLOUD_SERVICE_KEY")," environment variable, then do following command to authenticate Cloud SDK:"),Object(p.a)("pre",d({},{className:"language-bash"}),Object(p.a)("code",d({parentName:"pre"},{className:"language-bash"}),Object(p.a)("span",d({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(p.a)("span",d({parentName:"code"},{className:"token variable"}),"$GCLOUD_SERVICE_KEY")," ",Object(p.a)("span",d({parentName:"code"},{className:"token operator"}),"|")," gcloud auth activate-service-account --key-file",Object(p.a)("span",d({parentName:"code"},{className:"token operator"}),"="),"-\n")),Object(p.a)("h3",null,"workspace"),Object(p.a)("p",null,"Build artifacts (generated by ",Object(p.a)("inlineCode",{parentName:"p"},"npm run build"),") are required to deploy."),Object(p.a)("p",null,"Node.js is required to run ",Object(p.a)("inlineCode",{parentName:"p"},"npm")," command but the google/cloud-sdk image does not contain Node.js runtime. There are some way to solve this problem:"),Object(p.a)("ol",null,Object(p.a)("li",{parentName:"ol"},"Create a Docker image with both Node.js and Cloud SDK and use it."),Object(p.a)("li",{parentName:"ol"},"Store build artifacts somewhere and use it in the Cloud SDK container.")),Object(p.a)("p",null,"I started by 1. but finally found that ",Object(p.a)("a",d({parentName:"p"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"I can use workspaces to share files across jobs")," so adopted 2."),Object(p.a)("h3",null,"Deploy"),Object(p.a)("p",null,Object(p.a)("inlineCode",{parentName:"p"},"gcloud app deploy")," command deploys your application to GAE. I used the following options:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"--version"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Give the version name."),Object(p.a)("li",{parentName:"ul"},"You can replace an existing version by specifing the same version name."))),Object(p.a)("li",{parentName:"ul"},Object(p.a)("inlineCode",{parentName:"li"},"--no-promote"),Object(p.a)("ul",{parentName:"li"},Object(p.a)("li",{parentName:"ul"},"Don't route traffic to the newly created version after deployment.")))),Object(p.a)("h2",null,"Conclusion"),Object(p.a)("p",null,"You may think it's hard to set up continuous delivery in the early stages of a project. However, from a medium- to long-term perspective, I think these efforts are worthwhile."),Object(p.a)("h2",null,"References"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",d({parentName:"li"},{href:"https://circleci.com/docs/2.0/google-auth/"}),"Authorizing the Google Cloud SDK - CircleCI")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",d({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/authorizing#authorizing_with_a_service_account"}),"Authorizing Cloud SDK tools \xa0|\xa0 Cloud SDK Documentation \xa0|\xa0 Google Cloud")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",d({parentName:"li"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"Using Workflows to Schedule Jobs - CircleCI")),Object(p.a)("li",{parentName:"ul"},Object(p.a)("a",d({parentName:"li"},{href:"https://cloud.google.com/sdk/gcloud/reference/app/deploy"}),"gcloud app deploy \xa0|\xa0 Cloud SDK \xa0|\xa0 Google Cloud"))))}m.isMDXComponent=!0;var j=function(e){var a=e.meta;return Object(c.jsx)(r.a,{meta:a,children:Object(c.jsx)(m,{})})};j.getInitialProps=Object(l.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t("n1xW"),n=a.entries,e.abrupt("return",{meta:n["blog/2019/01/deploy-app-engine-from-circleci"]});case 2:case"end":return e.stop()}}),e)})));a.default=j}},[["GtyO",0,1,4,2,3,5,6]]]);