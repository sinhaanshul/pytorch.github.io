"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5760],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43868:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294);const a="surveyLinkBox_bC1w";function i(e){let{docTitle:t}=e;return r.createElement("a",{href:"https://github.com/pytorch/live/issues/new?assignees=&labels=Tutorial+Feedback&template=tutorial_feedback.yml",target:"_blank"},r.createElement("div",{className:a},"Share what we can improve!"))}},55965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(83117),a=(n(67294),n(3905)),i=n(43868);const o={id:"connecting-to-a-server",sidebar_position:6,title:"Connecting to a Server Model"},l=void 0,s={unversionedId:"tutorials/connecting-to-a-server",id:"tutorials/connecting-to-a-server",title:"Connecting to a Server Model",description:"In this tutorial, we will connect our PyTorch Live demo to the server we created in the GPT server model tutorial.",source:"@site/docs/tutorials/connecting-to-a-server.mdx",sourceDirName:"tutorials",slug:"/tutorials/connecting-to-a-server",permalink:"/live/docs/next/tutorials/connecting-to-a-server",draft:!1,editUrl:"https://github.com/pytorch/live/edit/main/website/docs/tutorials/connecting-to-a-server.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"connecting-to-a-server",sidebar_position:6,title:"Connecting to a Server Model"},sidebar:"docs",previous:{title:"Server Model",permalink:"/live/docs/next/tutorials/server-model"},next:{title:"Frequently Asked Questions",permalink:"/live/docs/next/tutorials/faq"}},d={},m=[{value:"Create a new React Native project",id:"create-a-new-react-native-project",level:2},{value:"Adding UI",id:"adding-ui",level:2},{value:"Handling user input",id:"handling-user-input",level:2},{value:"Making a request to the server",id:"making-a-request-to-the-server",level:2},{value:"Triggering server request from UI",id:"triggering-server-request-from-ui",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Give us feedback",id:"give-us-feedback",level:2}],u={toc:m};function c(e){let{components:t,...o}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("div",{className:"tutorial-page"},(0,a.mdx)("div",{className:"tutorial-oneliner"},"In this tutorial, we will connect our PyTorch Live demo to the server we created in [the GPT server model tutorial](/docs/tutorials/server-model)."),(0,a.mdx)("p",null,"You will need to have completed that tutorial for this one to work as is. If you haven't installed the PyTorch Live CLI yet, please ",(0,a.mdx)("a",{parentName:"p",href:"/live/docs/next/tutorials/get-started"},"follow this tutorial")," to get started."),(0,a.mdx)("p",null,"If you are just looking for an example of how to connect to your own server model, feel free to follow along and adapt what we do to your situation."),(0,a.mdx)("h2",{id:"create-a-new-react-native-project"},"Create a new React Native project"),(0,a.mdx)("p",null,"We will start by creating a new React Native project with the PyTorch Live template using the CLI. Run the following command:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"npx torchlive-cli init GPTClient\n")),(0,a.mdx)("p",null,"Once that is done, let's go into a our newly created project and run it!"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-shell"},"cd GPTClient\nyarn android\n")),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:n(4288).Z,title:"Screenshot of app after fresh init with CLI",width:"300",height:"650"})),(0,a.mdx)("h2",{id:"adding-ui"},"Adding UI"),(0,a.mdx)("p",null,"The aim of this tutorial is to help you integrate your PyTorch Live apps with server models, so we will not spend much time on the UI. We will add some handling for interactions, but won't discuss layout or styling."),(0,a.mdx)("p",null,"That being said, we will start by copying the following code into the file ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/demos/MyDemos.tsx"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyDemos.tsx"',title:'"MyDemos.tsx"'},"import React from 'react';\nimport {\n  Text,\n  TextInput,\n  TouchableOpacity,\n  StyleSheet,\n  View,\n  ScrollView,\n  SafeAreaView,\n} from 'react-native';\n\nexport default function MyDemo() {\n  return (\n    <SafeAreaView style={styles.container}>\n      <ScrollView\n        style={styles.scrollContainer}\n        keyboardShouldPersistTaps=\"handled\">\n        <View style={styles.row}>\n          <Text style={styles.label}>\n            This example shows how to send and receive text data via POST\n            request. You can repurpose this to build an NLP prototype (eg,\n            GPT-3) if you implement a server-side AI model.\n          </Text>\n          <View style={styles.promptBox}>\n            <TextInput\n              style={styles.textArea}\n              placeholder=\"Once upon a time...\"\n              placeholderTextColor=\"#00000033\"\n              multiline={true}\n              numberOfLines={6}\n              autoCorrect={false}\n            />\n            <TouchableOpacity>\n              <View style={styles.sendButton}>\n                <Text style={styles.buttonText}>Send</Text>\n              </View>\n            </TouchableOpacity>\n          </View>\n        </View>\n\n        <View style={[styles.row]}>\n          <Text style={styles.label}>Response:</Text>\n          <Text style={styles.answer}></Text>\n        </View>\n      </ScrollView>\n    </SafeAreaView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  scrollContainer: {\n    backgroundColor: '#ffcac2',\n    padding: 30,\n  },\n  row: {\n    flex: 1,\n    padding: 15,\n    flexDirection: 'column',\n    alignItems: 'flex-start',\n  },\n  rowHidden: {\n    opacity: 0,\n  },\n  label: {\n    fontSize: 14,\n    color: '#00000099',\n    marginBottom: 5,\n  },\n  textArea: {\n    flex: 1,\n    alignSelf: 'stretch',\n    textAlignVertical: 'top',\n    marginLeft: 5,\n    color: '#112233',\n    fontSize: 16,\n  },\n  promptBox: {\n    flex: 1,\n    flexDirection: 'column',\n    borderColor: '#ff4c2c33',\n    backgroundColor: '#ffffff',\n    fontSize: 16,\n    borderRadius: 5,\n    borderWidth: 1,\n    padding: 10,\n    marginRight: 5,\n    marginVertical: 20,\n    alignItems: 'flex-end',\n    alignSelf: 'stretch',\n  },\n  sendButton: {\n    backgroundColor: '#812ce5',\n    paddingVertical: 15,\n    paddingHorizontal: 40,\n    alignSelf: 'auto',\n    borderRadius: 5,\n  },\n  buttonText: {\n    color: '#ffffff',\n    fontSize: 14,\n    fontWeight: 'bold',\n    marginBottom: 2,\n  },\n  answer: {\n    fontSize: 21,\n    color: '#000000',\n  },\n  smallLabel: {\n    fontSize: 12,\n    color: '#667788',\n    fontFamily: 'Courier New',\n  },\n});\n")),(0,a.mdx)("p",null,"Now you should be see the UI that looks exactly like the screenshot below. However, note that nothing happens when you touch the button. We'll fix that in the next section."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:n(37681).Z,title:"Screenshot of UI created with initial code",width:"300",height:"650"})),(0,a.mdx)("h2",{id:"handling-user-input"},"Handling user input"),(0,a.mdx)("p",null,"Before we make a request to our server, let's make sure we can handle button clicks and capture the user input."),(0,a.mdx)("p",null,"Our changes are simple. They include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Add ",(0,a.mdx)("inlineCode",{parentName:"li"},"useState")," to our import statement from ",(0,a.mdx)("inlineCode",{parentName:"li"},"react")),(0,a.mdx)("li",{parentName:"ul"},"Add ",(0,a.mdx)("inlineCode",{parentName:"li"},"Keyboard")," to our import statement from ",(0,a.mdx)("inlineCode",{parentName:"li"},"react-native")),(0,a.mdx)("li",{parentName:"ul"},"Track state of the ",(0,a.mdx)("inlineCode",{parentName:"li"},"result")," of our model and the ",(0,a.mdx)("inlineCode",{parentName:"li"},"prompt")," the user inputs"),(0,a.mdx)("li",{parentName:"ul"},"Create a placeholder function, ",(0,a.mdx)("inlineCode",{parentName:"li"},"generateText()"),", that simply dismisses the keyboard and makes the ",(0,a.mdx)("inlineCode",{parentName:"li"},"result")," equal to the prompt the user inputs"),(0,a.mdx)("li",{parentName:"ul"},"Update the ",(0,a.mdx)("inlineCode",{parentName:"li"},"prompt")," state value when the text changes in the input box"),(0,a.mdx)("li",{parentName:"ul"},"Trigger our placeholder function, ",(0,a.mdx)("inlineCode",{parentName:"li"},"generateText()"),', when the user presses the "Send" button'),(0,a.mdx)("li",{parentName:"ul"},"Display the ",(0,a.mdx)("inlineCode",{parentName:"li"},"result")," state value below the input")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyDemos.tsx" {1,10,14-19,39-42,51}',title:'"MyDemos.tsx"',"{1,10,14-19,39-42,51}":!0},"import React, {useState} from 'react';\nimport {\n  Text,\n  TextInput,\n  TouchableOpacity,\n  StyleSheet,\n  View,\n  ScrollView,\n  SafeAreaView,\n  Keyboard,\n} from 'react-native';\n\nexport default function MyDemo() {\n  const [result, setResult] = useState('');\n  const [prompt, setPrompt] = useState('');\n  function generateText() {\n    Keyboard.dismiss();\n    setResult(prompt);\n  }\n  return (\n    <SafeAreaView style={styles.container}>\n      <ScrollView\n        style={styles.scrollContainer}\n        keyboardShouldPersistTaps=\"handled\">\n        <View style={styles.row}>\n          <Text style={styles.label}>\n            This example shows how to send and receive text data via POST\n            request. You can repurpose this to build an NLP prototype (eg,\n            GPT-3) if you implement a server-side AI model.\n          </Text>\n          <View style={styles.promptBox}>\n            <TextInput\n              style={styles.textArea}\n              placeholder=\"Once upon a time...\"\n              placeholderTextColor=\"#00000033\"\n              multiline={true}\n              numberOfLines={6}\n              autoCorrect={false}\n              onChangeText={setPrompt}\n              value={prompt}\n            />\n            <TouchableOpacity onPress={generateText}>\n              <View style={styles.sendButton}>\n                <Text style={styles.buttonText}>Send</Text>\n              </View>\n            </TouchableOpacity>\n          </View>\n        </View>\n        <View style={[styles.row]}>\n          <Text style={styles.label}>Response:</Text>\n          <Text style={styles.answer}>{result}</Text>\n        </View>\n      </ScrollView>\n    </SafeAreaView>\n  );\n}\n .\n .\n .\n")),(0,a.mdx)("p",null,"Once you add these changes and the app refreshes you should see the following behavior:"),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:n(13033).Z,width:"1920",height:"1080"})),(0,a.mdx)("h2",{id:"making-a-request-to-the-server"},"Making a request to the server"),(0,a.mdx)("p",null,"With our interaction handling ready to go, we can write the code that will make a request to our server."),(0,a.mdx)("p",null,"We will add one function called ",(0,a.mdx)("inlineCode",{parentName:"p"},"fetchData"),". It does the following:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Checks to make sure we have set our IP address"),(0,a.mdx)("li",{parentName:"ul"},"Creates the URL of our server using our IP address"),(0,a.mdx)("li",{parentName:"ul"},"Creates a FormData object that is used to send input to the server"),(0,a.mdx)("li",{parentName:"ul"},"Adds the user input prompt to the form data with the key ",(0,a.mdx)("inlineCode",{parentName:"li"},'"prompt"')," (what our server is expecting)"),(0,a.mdx)("li",{parentName:"ul"},"Kicks off a request using the ",(0,a.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"},(0,a.mdx)("inlineCode",{parentName:"a"},"fetch")," API")," and waits for the Response"),(0,a.mdx)("li",{parentName:"ul"},'Checks if the request succeeded and then returns either the generated text from the server or the string "Error" if it failed')),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyDemos.tsx" {6-34}',title:'"MyDemos.tsx"',"{6-34}":!0},"import React, {useState} from 'react';\n.\n.\n.\n\nasync function fetchData(prompt: string): Promise<string> {\n  // IMPORTANT: You MUST set `ipAddress` to your computer's IP address\n  // You also must make sure that your computer and your device are on the same network\n  const ipAddress = null;\n  if (ipAddress === null) {\n    throw Error('You must fill in your own IP address!');\n  }\n  const url = `http://${ipAddress}:5000/gpt`;\n\n  // compose the formdata object to be sent via POST\n  const formdata = new FormData();\n  formdata.append('prompt', prompt);\n\n  // fetch with a POST request\n  const data = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'multipart/form-data',\n    },\n    body: formdata,\n  });\n\n  if (data.ok) {\n    const jsonResponse = await data.json();\n    return jsonResponse.generated_text;\n  } else {\n    return 'Error';\n  }\n}\n\n export default function MyDemo() {\n.\n.\n.\n")),(0,a.mdx)("h2",{id:"triggering-server-request-from-ui"},"Triggering server request from UI"),(0,a.mdx)("p",null,"The last step is to integrate the ",(0,a.mdx)("inlineCode",{parentName:"p"},"fetchData")," function we just created into the UI that we have built."),(0,a.mdx)("p",null,"In addition to calling the function, we will also make sure to handle the loading state, as the model is a bit slow."),(0,a.mdx)("p",null,"Here's a list of the changes:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Import ",(0,a.mdx)("inlineCode",{parentName:"li"},"ActivityIndicator")," from ",(0,a.mdx)("inlineCode",{parentName:"li"},"react-native")," so we can display a spinner while the server is doing it's work"),(0,a.mdx)("li",{parentName:"ul"},"Create a new state variable to track ",(0,a.mdx)("inlineCode",{parentName:"li"},"loading")," (when we are waiting on our server)"),(0,a.mdx)("li",{parentName:"ul"},"Re-write our ",(0,a.mdx)("inlineCode",{parentName:"li"},"generateText")," function:",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Make it an ",(0,a.mdx)("inlineCode",{parentName:"li"},"async")," function so the server call happens in the background and doesn't freeze the device"),(0,a.mdx)("li",{parentName:"ul"},"Before fetching, set ",(0,a.mdx)("inlineCode",{parentName:"li"},"loading")," to true and clear out any previous ",(0,a.mdx)("inlineCode",{parentName:"li"},"result")),(0,a.mdx)("li",{parentName:"ul"},"Kick off and wait for the response from our server with our ",(0,a.mdx)("inlineCode",{parentName:"li"},"fetchData")," function"),(0,a.mdx)("li",{parentName:"ul"},"When we get the data back, set our ",(0,a.mdx)("inlineCode",{parentName:"li"},"result")," to the returned text and set loading to ",(0,a.mdx)("inlineCode",{parentName:"li"},"false")))),(0,a.mdx)("li",{parentName:"ul"},"Disable our button while ",(0,a.mdx)("inlineCode",{parentName:"li"},"loading")," so the user doesn't send requests twice"),(0,a.mdx)("li",{parentName:"ul"},"Display an ",(0,a.mdx)("inlineCode",{parentName:"li"},"<ActivityIndicator />")," in the results box while the server is loading")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-tsx",metastring:'title="MyDemos.tsx" {11,21,23-32,56,67}',title:'"MyDemos.tsx"',"{11,21,23-32,56,67}":!0},"import React, {useState} from 'react';\nimport {\n  Text,\n  TextInput,\n  TouchableOpacity,\n  StyleSheet,\n  View,\n  ScrollView,\n  SafeAreaView,\n  Keyboard,\n  ActivityIndicator,\n} from 'react-native';\n\n.\n.\n.\n\nexport default function MyDemo() {\n  const [result, setResult] = useState('');\n  const [prompt, setPrompt] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  const generateText = async () => {\n    Keyboard.dismiss();\n    setLoading(true);\n    setResult('');\n\n    const data: string = await fetchData(prompt);\n\n    setResult(data);\n    setLoading(false);\n  };\n\n  return (\n    <SafeAreaView style={styles.container}>\n      <ScrollView\n        style={styles.scrollContainer}\n        keyboardShouldPersistTaps=\"handled\">\n        <View style={styles.row}>\n          <Text style={styles.label}>\n            This example shows how to send and receive text data via POST\n            request. You can repurpose this to build an NLP prototype (eg,\n            GPT-3) if you implement a server-side AI model.\n          </Text>\n          <View style={styles.promptBox}>\n            <TextInput\n              style={styles.textArea}\n              onChangeText={txt => setPrompt(txt)}\n              placeholder=\"Once upon a time...\"\n              placeholderTextColor=\"#00000033\"\n              multiline={true}\n              numberOfLines={6}\n              autoCorrect={false}\n              value={prompt}\n            />\n            <TouchableOpacity disabled={loading} onPress={generateText}>\n              <View style={styles.sendButton}>\n                <Text style={styles.buttonText}>Send</Text>\n              </View>\n            </TouchableOpacity>\n          </View>\n        </View>\n\n        <View style={[styles.row]}>\n          <Text style={styles.label}>Response:</Text>\n          <Text style={styles.answer}>\n            {loading && <ActivityIndicator size=\"small\" color=\"tomato\" />}\n            {result}\n          </Text>\n        </View>\n      </ScrollView>\n    </SafeAreaView>\n  );\n}\n.\n.\n.\n")),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"If you are trying to run this from a physical Android device, you will also have to edit the file ",(0,a.mdx)("inlineCode",{parentName:"p"},"network_security_config.xml")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"GPTClient/android/app/src/main/res/xml/")," directory to add support for your IP address. Emulators should already work.\nSee below what that change should look like."))),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-xml",metastring:'title="network_security_config.xml (only needed for testing with physical Android devices)" {6}',title:'"network_security_config.xml',"(only":!0,needed:!0,for:!0,testing:!0,with:!0,physical:!0,Android:!0,'devices)"':!0,"{6}":!0},'<?xml version="1.0" encoding="utf-8"?>\n<network-security-config>\n    <domain-config cleartextTrafficPermitted="true">\n        <domain includeSubdomains="true">10.0.2.2</domain>\n        <domain includeSubdomains="true">localhost</domain>\n        <domain includeSubdomains="true">your.ip.address</domain>\n    </domain-config>\n</network-security-config>\n')),(0,a.mdx)("p",null,"With those changes completed, make sure your server is running and ready to go and you should be able to see results of the GPT model on your app!"),(0,a.mdx)("p",null,"Note that the GIF below is drastically sped up. Inference with the GPT model takes some time."),(0,a.mdx)("p",null,(0,a.mdx)("img",{src:n(24789).Z,width:"1280",height:"720"})),(0,a.mdx)("p",null,"You can find the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/pytorch/live/tree/main/examples/gpt3-server-tutorials/GPTClient"},"completed versions of the source code")," we've written in this tutorial in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"examples")," folder Pytorch Live GitHub repo."),(0,a.mdx)("h2",{id:"next-steps"},"Next steps"),(0,a.mdx)("p",null,"Want to enhance your server to support a model with more complex input like images? Check out our tutorial with VQGAN + CLIP to generate images from text descriptions."),(0,a.mdx)("h2",{id:"give-us-feedback"},"Give us feedback"),(0,a.mdx)(i.Z,{docTitle:"Connecting to a Server Model",mdxType:"SurveyLinkButton"})))}c.isMDXComponent=!0},4288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cli-fresh-install-f8766f4580de85052172aa5fd1f17f40.png"},13033:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/echo-working-2404e219aa476991e586b32d3449bb62.gif"},37681:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},24789:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/working-gpt-demo-39e8d23b22385c57f3f6b2ba62a57ab6.gif"}}]);