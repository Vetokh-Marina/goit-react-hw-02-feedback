(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,c){t.exports={section:"Section_section__3XMSM"}},12:function(t,e,c){t.exports={notification:"Notification_notification__3atEW"}},20:function(t,e,c){},29:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(1),a=c.n(i),s=c(6),o=c.n(s),r=(c(20),c(7)),l=c(8),d=c(9),b=c(14),j=c(13),u=c(10),h=c.n(u);var f=function(t){var e=t.title,c=t.children;return Object(n.jsxs)("div",{className:h.a.section,children:[Object(n.jsx)("h1",{children:e}),c]})},v=c(11),O=c.n(v),x=c(4),p=c.n(x);var k=function(t){var e=t.options,c=t.onLeaveFeedback;return Object(n.jsx)("ul",{className:p.a.list,children:e.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{onClick:function(){return c(t)},className:p.a.button,name:t,children:t})},O.a.generate())}))})},g=c(5),_=c.n(g);var m=function(t){var e=t.good,c=t.neutral,i=t.bad,a=t.total,s=t.positivePercentage;return Object(n.jsxs)("ul",{className:_.a.statisticList,children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Good: ",e]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Neutral: ",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Bad: ",i]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{children:["Total: ",a]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:_.a.positivefeed,children:["Positive feedback: ",s,"%"]})})]})},F=c(12),N=c.n(F);var P=function(t){var e=t.message;return Object(n.jsx)("p",{className:N.a.notification,children:e})},S=function(t){Object(b.a)(c,t);var e=Object(j.a)(c);function c(){var t;Object(l.a)(this,c);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.clickActiveItem=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(100*t.state.good/t.countTotalFeedback())},t}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(f,{title:"Please leave feedback",children:Object(n.jsx)(k,{options:["good","neutral","bad"],onLeaveFeedback:this.clickActiveItem})}),Object(n.jsx)(f,{title:"Statistics",children:0===this.countTotalFeedback()?Object(n.jsx)(P,{message:"No feedback given"}):Object(n.jsx)(m,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),c}(i.Component);o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,c){t.exports={list:"Feedback_list__26lvh",button:"Feedback_button__3xHcq"}},5:function(t,e,c){t.exports={statisticList:"Statistics_statisticList__3OCke",positivefeed:"Statistics_positivefeed__1CqV6"}}},[[29,1,2]]]);
//# sourceMappingURL=main.7db072e2.chunk.js.map