(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,function(e,t,r){e.exports={infoCard:"InfoCard_infoCard__18roZ",info:"InfoCard_info__xubH1",number:"InfoCard_number__aiBTf",bar:"InfoCard_bar__2qG3m"}},function(e,t,r){e.exports={forecastHeader:"ForecastCard_forecastHeader__2gIa0",infoCard:"ForecastCard_infoCard__Q9zdS",date:"ForecastCard_date__IeR94",info:"ForecastCard_info__19ko8",number:"ForecastCard_number__1blym",bar:"ForecastCard_bar__t8USH"}},,function(e,t,r){e.exports={mainCard:"MainCard_mainCard__1SXsd",leftContent:"MainCard_leftContent__2diQ3",slider:"MainCard_slider__3NUFq",rightContent:"MainCard_rightContent__nbcAp"}},function(e,t,r){e.exports={slider:"SliderBtn_slider__2QBc1",btn:"SliderBtn_btn__145xW",btnOn:"SliderBtn_btnOn__2UrW9"}},,function(e,t,r){e.exports={hourHeader:"Hourly_hourHeader__3KRF-",test:"Hourly_test__3OuvT",scrollHour:"Hourly_scrollHour__-90YI"}},function(e,t,r){},,,,,function(e,t,r){e.exports={form:"Form_form__1YqNX",formCompleted:"Form_formCompleted__2bE6n"}},function(e,t,r){e.exports={backdrop:"Error_backdrop__1Kaeb",error:"Error_error__18cok"}},,function(e,t,r){e.exports={home:"Home_home__2hXXS"}},function(e,t,r){e.exports={intro:"Intro_intro__3x22X"}},function(e,t,r){e.exports={card:"Card_card__3EDYq"}},,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},,,,,,function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(8),n=r.n(a),s=(r(26),r(27),r(13)),i=r.n(s),o=r(17),d=r(5),j=r(18),b=r.n(j),h=(r(29),r(19)),l=r.n(h),u=r(20),m=r.n(u),x=r(0),f=function(e){return Object(x.jsx)("div",{className:"".concat(m.a.card," ").concat(e.className),children:e.children})},O=function(){return Object(x.jsxs)(f,{className:l.a.intro,children:[Object(x.jsxs)("h1",{children:["App created by ",Object(x.jsx)("a",{target:"_blank",href:"https://github.com/weissdotexe",children:"WeissDotExe"})]}),Object(x.jsxs)("p",{children:["For this website , I used ",Object(x.jsx)("a",{href:"https://rapidapi.com/weatherapi/api/weatherapi-com/",children:" WeatherAPI.com"})," for fetching data."]}),Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=383&q=80"})]})},_=r(6),p=r.n(_),v=r(7),w=r.n(v),C=r(2),y=function(e){var t=Object(C.b)(),r=Object(c.useState)(!1),a=Object(d.a)(r,2),n=a[0],s=a[1],i=n?w.a.btnOn:w.a.btn;return Object(x.jsx)("div",{className:"".concat(w.a.slider," ").concat(w.a.className),onClick:function(){s(!n),t({type:"changeUnits"})},children:Object(x.jsx)("div",{className:"".concat(i)})})},N=function(e){var t=Object(C.c)((function(e){return e.american}));return Object(x.jsxs)(f,{className:p.a.mainCard,children:[Object(x.jsxs)("div",{className:p.a.leftContent,children:[Object(x.jsx)("h1",{children:e.weather.location.name}),Object(x.jsxs)("div",{className:p.a.slider,children:[Object(x.jsx)("p",{children:"Kph/\xb0C"}),Object(x.jsx)(y,{}),Object(x.jsx)("p",{children:"Mph/\xb0F"})]})]}),Object(x.jsxs)("div",{className:p.a.rightContent,children:[Object(x.jsx)("h1",{children:t?e.weather.current.temp_f+"\xb0F":e.weather.current.temp_c+"\xb0C"}),Object(x.jsx)("img",{id:p.a.icon,src:e.weather.current.condition.icon}),Object(x.jsx)("p",{children:e.weather.current.condition.text})]})]})},g=r(3),H=r.n(g),F=function(e){var t=Object(C.c)((function(e){return e.american}));return Object(x.jsxs)(f,{className:H.a.infoCard,children:[Object(x.jsxs)("div",{className:H.a.info,children:[Object(x.jsx)("h1",{children:"Feels like"}),Object(x.jsx)("h1",{id:H.a.number,children:t?e.weather.current.feelslike_f+"\xb0F":e.weather.current.feelslike_c+"\xb0C"})]}),Object(x.jsx)("div",{className:H.a.bar}),Object(x.jsxs)("div",{className:H.a.info,children:[Object(x.jsx)("h1",{children:"Wind"}),Object(x.jsx)("h1",{id:H.a.number,children:t?e.weather.current.wind_mph+" Mph":e.weather.current.wind_kph+" Kph"})]}),Object(x.jsx)("div",{className:H.a.bar}),Object(x.jsxs)("div",{className:H.a.info,children:[Object(x.jsx)("h1",{children:"Precipitation"}),Object(x.jsxs)("h1",{id:H.a.number,children:[e.weather.current.precip_in,"mm"]})]}),Object(x.jsx)("div",{className:H.a.bar}),Object(x.jsxs)("div",{className:H.a.info,children:[Object(x.jsx)("h1",{children:"Clouds"}),Object(x.jsxs)("h1",{id:H.a.number,children:[e.weather.current.cloud,"%"]})]}),Object(x.jsx)("div",{className:H.a.bar}),Object(x.jsxs)("div",{className:H.a.info,children:[Object(x.jsx)("h1",{children:"Humidity"}),Object(x.jsxs)("h1",{id:H.a.number,children:[e.weather.current.humidity,"%"]})]})]})},k=r(4),S=r.n(k),E=r(9),M=r.n(E),I=function(e){var t=e.weather.hour.map((function(t){return Object(x.jsxs)("div",{className:M.a.scrollHour,children:[Object(x.jsx)("img",{src:t.condition.icon}),Object(x.jsx)("p",{children:e.unit?t.temp_f+"\xb0F":t.temp_c+"\xb0C"}),Object(x.jsx)("p",{children:t.time.substring(10)})]})}));return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)("h1",{id:M.a.hourHeader,children:"Forecast by hour"}),Object(x.jsx)(f,{className:M.a.test,children:t})]})},B=function(e){var t=Object(C.c)((function(e){return e.american})),r=e.weather.forecast.forecastday.map((function(e){return Object(x.jsxs)(f,{className:S.a.infoCard,children:[Object(x.jsx)("h1",{id:S.a.date,children:e.date}),Object(x.jsxs)("div",{className:S.a.info,children:[Object(x.jsx)("h1",{children:"Avg Temperature"}),Object(x.jsx)("h1",{id:S.a.number,children:t?e.day.avgtemp_f+"\xb0F":e.day.avgtemp_c+"\xb0C"})]}),Object(x.jsx)("div",{className:S.a.bar}),Object(x.jsxs)("div",{className:S.a.info,children:[Object(x.jsx)("h1",{children:"Chance of rain"}),Object(x.jsx)("h1",{id:S.a.number,children:e.day.daily_chance_of_rain+"%"})]}),Object(x.jsx)("div",{className:S.a.bar}),Object(x.jsxs)("div",{className:S.a.info,children:[Object(x.jsx)("h1",{children:"Avg Temperature"}),Object(x.jsx)("h1",{id:S.a.number,children:t?e.day.avgtemp_f:e.day.avgtemp_c})]}),Object(x.jsx)("div",{className:S.a.bar}),Object(x.jsxs)("div",{className:S.a.info,children:[Object(x.jsx)("h1",{children:"Max Wind Speed"}),Object(x.jsx)("h1",{id:S.a.number,children:t?e.day.maxwind_mph+" Mph":e.day.maxwind_kph+" Kph"})]}),Object(x.jsx)(I,{weather:e,unit:t})]})}));return Object(x.jsxs)(f,{children:[Object(x.jsx)("h1",{id:S.a.forecastHeader,children:"Forecast for next 3 days"}),r]})},D=function(e){return Object(x.jsx)(c.Fragment,{children:"undefined"!=typeof e.weather.location?Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)(N,{weather:e.weather}),Object(x.jsx)(F,{weather:e.weather}),Object(x.jsx)(B,{weather:e.weather})]}):Object(x.jsx)(O,{})})},T=r(15),W=r.n(T),X=r(10),A=r.n(X),q=function(e){return Object(x.jsx)("button",{type:"".concat(e.type),onClick:e.onClick,className:"".concat(A.a.button," ").concat(A.a.className),id:"".concat(A.a.id),children:e.children})},U=function(e){var t=Object(c.useState)(""),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(C.b)();return Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.submit(),s({type:"userInput",value:a})},className:W.a.form,children:[Object(x.jsx)("h1",{children:"Weather App"}),Object(x.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},value:a}),Object(x.jsx)(q,{id:W.a.submitBtn,type:"submit",children:"Search"})]})},G=r(16),K=r.n(G),Y=function(e){Object(C.b)();return Object(x.jsxs)(c.Fragment,{children:[Object(x.jsx)("div",{className:K.a.backdrop,onClick:e.closeHandler}),Object(x.jsxs)(f,{className:K.a.error,children:[Object(x.jsx)("i",{class:"fas fa-exclamation"}),Object(x.jsx)("h1",{children:e.errorMessage}),Object(x.jsx)(q,{onClick:e.closeHandler,children:"Okay."})]})]})},R=function(){var e=Object(C.c)((function(e){return e.city})),t=Object(c.useState)(!1),r=Object(d.a)(t,2),a=r[0],n=r[1],s=Object(c.useState)({}),j=Object(d.a)(s,2),h=j[0],l=j[1],u=Object(c.useState)(""),m=Object(d.a)(u,2),f=m[0],O=m[1],_=function(){var t=Object(o.a)(i.a.mark((function t(){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://weatherapi-com.p.rapidapi.com/forecast.json?q=".concat(e,"&days=3"),{method:"GET",headers:{"x-rapidapi-key":"bd6985da2dmshd632258bb79ccd3p191fb7jsn37a783f68cf1","x-rapidapi-host":"weatherapi-com.p.rapidapi.com"}});case 3:return r=t.sent,t.next=6,r.json();case 6:c=t.sent,console.log(c),l(c),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),O(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){_()}),[e]);return Object(x.jsxs)("div",{className:b.a.home,children:[Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80"}),Object(x.jsx)(U,{submit:_}),Object(x.jsx)(D,{weather:h}),a&&Object(x.jsx)(Y,{errorMessage:f,closeHandler:function(){n(!a)}})]})};var V=function(){return Object(x.jsx)(R,{})},Q=r(21),J={city:"",american:!1,error:!1},L=Object(Q.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;return"userInput"===t.type?{city:t.value,american:e.american,error:e.error}:"changeUnits"===t.type?{american:!e.american,city:e.city,error:e.error}:"errorHandler"===t.type?{american:e.american,city:e.city,error:!e.error}:e}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n.a.render(Object(x.jsx)(C.a,{store:L,children:Object(x.jsx)(V,{})}),document.getElementById("root"))}],[[35,1,2]]]);
//# sourceMappingURL=main.585bc72f.chunk.js.map