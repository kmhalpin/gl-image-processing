(this["webpackJsonpimage-transform"]=this["webpackJsonpimage-transform"]||[]).push([[0],{70:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(10),c=t.n(a),o=t(107),s=t(45),u=t(14),b=t(6),l=i.a.createContext(null),g=function(e){return function(n){return Object(b.jsx)(l.Consumer,{children:function(t){return Object(b.jsx)(e,Object(u.a)(Object(u.a)({},n),{},{store:t}))}})}},m=l,j=t(52);var d=function(){return Object(j.a)((function(){var e=arguments.length>1?arguments[1]:void 0;return{img:e.img,uniform:e.uniform}}))};var v=g((function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){var t=new s.Canvas(n.current,{vertexString:e.shader.vertex,fragmentString:e.shader.fragment}),r=function(){var n=e.store.getState();t.loadTexture("u_img",n.img),t.setUniforms(n.uniform)},i=e.store.subscribe(r);r();var a=function(){return function(e,n){var t=window.innerWidth/480;e.style.width=Math.min(400*t,480)+"px",e.style.height=Math.min(300*t,360)+"px"}(n.current,e.store.getState().img)};return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a),i(),t.destroy()}}),[e.store,e.shader]),Object(b.jsx)("div",{style:{width:"100%",height:"100%"},children:Object(b.jsx)("canvas",{ref:n})})})),h=t(51);var f=g((function(e){var n=Object(r.useState)(e.state),t=Object(h.a)(n,2),i=t[0],a=t[1];return e.store.dispatch(Object(u.a)({type:"UPDATE"},e.dispatch(i,e.store.getState()))),e.form(i,a)})),p=t(101),x=t(105),O=t(111),y=t(108),_=t(112),w=t(106),C=t(109),k=t(113),P=t(71),S=["./sample/Chrysanthemum.jpg","./sample/Desert.jpg","./sample/Hydrangeas.jpg","./sample/Jellyfish.jpg","./sample/Koala.jpg","./sample/Lighthouse.jpg","./sample/Penguins.jpg","./sample/Tulips.jpg"],T={img:S[0],bnw:!1,negative:!1,binary:!1,binaryValue:120,brightness:0},B=function(e){return{img:e.img,uniform:{u_doGray:e.bnw,u_doNegative:e.negative,u_doBinary:e.binary,u_binaryT:e.binaryValue/255,u_brightness:e.brightness/255}}},D=function(e,n){return Object(b.jsxs)(p.a,{children:[Object(b.jsxs)(x.a,{variant:"outlined",children:[Object(b.jsx)(O.a,{id:"demo-simple-select-outlined-label",children:"Pilih gambar"}),Object(b.jsx)(y.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.img,onChange:function(t){return n(Object(u.a)(Object(u.a)({},e),{},{img:t.target.value}))},label:"Pilih gambar",children:S.map((function(e,n){return Object(b.jsxs)(_.a,{value:e,children:[Object(b.jsx)("img",{src:e,alt:e,height:25})," ",e]},n)}))})]}),Object(b.jsx)(w.a,{control:Object(b.jsx)(C.a,{checked:e.bnw,onChange:function(t){return n(Object(u.a)(Object(u.a)({},e),{},{bnw:t.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Hitam putih"}),Object(b.jsx)(w.a,{control:Object(b.jsx)(C.a,{checked:e.negative,onChange:function(t){return n(Object(u.a)(Object(u.a)({},e),{},{negative:t.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Negatif"}),Object(b.jsx)(w.a,{control:Object(b.jsx)(C.a,{checked:e.binary,onChange:function(t){return n(Object(u.a)(Object(u.a)({},e),{},{binary:t.target.checked}))},inputProps:{"aria-label":"primary checkbox"}}),label:"Binerisasi"}),Object(b.jsx)(k.a,{disabled:!e.binary,color:"secondary",value:e.binaryValue,valueLabelDisplay:"auto",step:1,min:0,max:255,onChange:function(t,r){return r>=0&&r<=255&&n(Object(u.a)(Object(u.a)({},e),{},{binaryValue:r}))}}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(P.a,{id:"brightness-slider",gutterBottom:!0,children:"Kecerahan"}),Object(b.jsx)(k.a,{"aria-labelledby":"brightness-slider",value:e.brightness,valueLabelDisplay:"auto",step:1,min:0,max:255,onChange:function(t,r){return r>=0&&r<=255&&n(Object(u.a)(Object(u.a)({},e),{},{brightness:r}))}})]})]})};var L=function(){return Object(b.jsxs)(o.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:2,children:[Object(b.jsx)(o.a,{item:!0,children:Object(b.jsx)(v,{shader:{fragment:"\nprecision lowp float;\n\nuniform sampler2D u_img;\n\nuniform bool u_doGray;\nuniform bool u_doNegative;\nuniform bool u_doBinary;\n\nuniform float u_binaryT;\nuniform float u_brightness;\n\nvarying vec2 v_texcoord;\n\nfloat rgbtobw (vec3 imgin) {\n  return dot(imgin, vec3(1.0/3.0));\n}\n\nvec3 clipping (vec3 imgin) {\n  return max(min(imgin, 1.0), 0.0);\n}\n\nvec3 brightnessfunc (vec3 imgin) {\n  return clipping(imgin + u_brightness);\n}\n\nvec3 binaryfunc (vec3 imgin) {\n  float gray = rgbtobw(imgin);\n  if(gray < u_binaryT){\n    return vec3(0.0);\n  } else {\n    return vec3(1.0);\n  }\n}\n\nvec3 negativefunc (vec3 imgin) {\n  return 1.0 - imgin;\n}\n\nvoid main(){\n  vec4 texture = texture2D(u_img, v_texcoord);\n  vec3 rgb = texture.rgb;\n\n  if(u_doGray){\n    rgb = vec3(rgbtobw(rgb));\n  }\n\n  rgb = brightnessfunc(rgb);\n\n  if(u_doBinary){\n    rgb = binaryfunc(rgb);\n  }\n\n  if(u_doNegative){\n    rgb = negativefunc(rgb);\n  }\n\n  gl_FragColor = vec4(rgb, texture.a);\n}\n",vertex:"\nattribute vec2 a_position;\nattribute vec2 a_texcoord;\nattribute vec2 a_normal;\nattribute vec2 a_color;\n\nvarying vec2 v_texcoord;\nvarying vec2 v_normal;\nvarying vec2 v_color;\n\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n\n  v_texcoord = a_texcoord;\n  v_normal = a_normal;\n  v_color = a_color;\n}\n"}})}),Object(b.jsx)(o.a,{item:!0,xs:10,sm:10,md:10,lg:6,xl:4,children:Object(b.jsx)(f,{form:D,state:T,dispatch:B})})]})},E=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,114)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m.Provider,{value:d(),children:Object(b.jsx)(L,{})})}),document.getElementById("root")),E()}},[[70,1,2]]]);
//# sourceMappingURL=main.04d5f146.chunk.js.map