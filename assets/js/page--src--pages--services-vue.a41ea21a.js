(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{310:function(e,t,i){},312:function(e,t,i){"use strict";var s=i(310);i.n(s).a},313:function(e,t,i){"use strict";var s={props:{pretitle:String}},r=(i(312),i(13)),a=Object(r.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-title"},[this.$props.pretitle?t("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$props.pretitle)}}):this._e(),t("h1",[this._t("default")],2)])}),[],!1,null,null,null);t.a=a.exports},318:function(e,t,i){},319:function(e,t,i){},320:function(e,t){},333:function(e,t,i){"use strict";var s=i(318);i.n(s).a},334:function(e,t,i){"use strict";var s=i(319);i.n(s).a},335:function(e,t,i){"use strict";var s=i(320),r=i.n(s);t.default=r.a},349:function(e,t,i){"use strict";i.r(t);var s={props:{service:Object},data:function(){return{hover:!1}},computed:{mailto:function(){return"mailto:".concat(this.service.contact)}}},r=(i(333),i(13)),a={metaInfo:{title:"Services incubés"},components:{ServiceCard:Object(r.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"service-card-container",on:{mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[i("g-link",{attrs:{to:e.service.service_url||e.service.beta_url}},[i("div",{staticClass:"service-card"},[i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"title",domProps:{innerHTML:e._s(e.service.name)}}),e.hover?i("font-awesome",{staticClass:"icon",attrs:{height:"1.5rem",width:"1.5rem",icon:["fas","external-link-alt"]}}):e._e(),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mission",domProps:{innerHTML:e._s(e.service.pitch)}}),i("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"status",domProps:{innerHTML:e._s(e.service.status)}}),i("div",{staticClass:"icon-links"},[e.service.contact?i("g-link",{attrs:{to:e.mailto}},[i("font-awesome",{attrs:{icon:["far","envelope"]}})],1):e._e(),e.service.repo_url?i("g-link",{attrs:{to:e.service.repo_url}},[i("font-awesome",{attrs:{icon:["fab","github"]}})],1):e._e(),e.service.stats_url?i("g-link",{attrs:{to:e.service.stats_url}},[i("font-awesome",{attrs:{icon:["far","chart-bar"]}})],1):e._e()],1)],1)])],1)}),[],!1,null,null,null).exports,PageTitle:i(313).a}},n=(i(334),i(335)),c=Object(r.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("Layout",[t("div",{staticClass:"services"},[t("PageTitle",[this._v("\n      Services numériques\n    ")]),t("div",{staticClass:"px-4 services-cards"},this._l(this.$page.services.edges,(function(e){var i=e.node;return t("ServiceCard",{key:i.id,attrs:{service:i}})})),1)],1)])}),[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(c);t.default=c.exports}}]);