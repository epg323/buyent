(this["webpackJsonpprice-dem"]=this["webpackJsonpprice-dem"]||[]).push([[0],{18:function(e,t,a){e.exports=a(31)},23:function(e,t,a){},24:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),c=a.n(r),s=(a(23),a(14)),o=a(15),l=a(8),m=a(17),h=a(16),u=a(6),d=a(10),p=a(7),f=a(11),v=(a(24),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={costs:1,fairness:"fair",itemName:"",itemPrice:null,show:!1},n.enterItem=n.enterItem.bind(Object(l.a)(n)),n.enterPrice=n.enterPrice.bind(Object(l.a)(n)),n.priceCheck=n.priceCheck.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"enterItem",value:function(e){var t=e.currentTarget.value;this.setState({itemName:t})}},{key:"enterPrice",value:function(e){var t=e.currentTarget.value;this.setState({itemPrice:t})}},{key:"priceCheck",value:function(e){e.preventDefault();var t=this.state.itemPrice<this.state.costs,a="Hand Sanitizer"===this.state.itemName;if(!0===t){this.setState({fairness:"Bargain \ud83d\ude07",show:a})}else{this.setState({fairness:"Ripoff \ud83e\udd2c",show:a})}}},{key:"render",value:function(){var e="Bargain \ud83d\ude07"===this.state.fairness?"Give an awesome review \u2b50":"Snitch on a store \ud83d\udc00",t="Bargain \ud83d\ude07"===this.state.fairness?"onclick='location.href='https://www.yelp.com/'":"onclick='location.href='https://www.lacityattorney.org/covid19'",a=this.state.show&&i.a.createElement(u.a,{style:{width:"18rem",margin:"1rem auto"}},i.a.createElement(u.a.Img,{variant:"top",src:"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1200&h=800&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F04%2F23%2Fsanitizer_new_6oz_1200x6301.jpg"}),i.a.createElement(u.a.Body,null,i.a.createElement(u.a.Title,null,this.state.itemName," avg. cost:"),i.a.createElement(u.a.Text,null,"$",this.state.costs," per ounce"),i.a.createElement(u.a.Title,null,"Price fairness:"),i.a.createElement(u.a.Text,null,this.state.fairness),i.a.createElement(d.a,{variant:"primary",onClick:t},e)));return i.a.createElement("div",{style:{display:"flex",padding:"10px",flexDirection:"Column",justifyContent:"Center",backgroundColor:"#ff6200"}},i.a.createElement("h3",{style:{color:"#212529",marginBottom:"1rem"}},"\ud83e\uddf4Commodity Democracy\u2696\ufe0f"),i.a.createElement(p.a,{className:"mb-3"},i.a.createElement(p.a.Prepend,null,i.a.createElement(p.a.Text,{id:"basic-addon1"},"\ud83e\udd5b Commodity Name")),i.a.createElement(f.a,{placeholder:"Name","aria-label":"Name","aria-describedby":"basic-addon1",onChange:this.enterItem,value:this.state.itemName})),i.a.createElement(p.a,{className:"mb-3"},i.a.createElement(p.a.Prepend,null,i.a.createElement(p.a.Text,{id:"basic-addon1"},"\ud83d\udcb8 Price per ounce \xa0\xa0\xa0")),i.a.createElement(f.a,{placeholder:"enter amount","aria-label":"amount","aria-describedby":"basic-addon1",onChange:this.enterPrice,value:this.state.itemPrice})),i.a.createElement(d.a,{variant:"primary",onClick:this.priceCheck},"\ud83c\udff7\ufe0f Get that price!"),a)}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(30);c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.86bc1a61.chunk.js.map