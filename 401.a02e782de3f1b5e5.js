"use strict";(self.webpackChunkFarmatodoEtiquetado=self.webpackChunkFarmatodoEtiquetado||[]).push([[401],{9401:(L,u,n)=>{n.r(u),n.d(u,{ProfileComponentRoutingModule:()=>C});var l=n(8555),p=n(4195),a=n(3457),m=n(9223),t=n(5e3),f=n(8366),q=n(768),c=n(1496),A=n(9808),d=n(4623),h=n(4834),T=n(7423);function g(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"header",3)(2,"h3"),t._uU(3),t.ALo(4,"translate"),t.qZA()(),t.TgZ(5,"mat-list")(6,"mat-list-item")(7,"label",4),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"label",5),t._uU(11),t.qZA()(),t._UZ(12,"mat-divider"),t.TgZ(13,"mat-list-item")(14,"label",4),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.TgZ(17,"label",5),t._uU(18),t.qZA()(),t._UZ(19,"mat-divider"),t.TgZ(20,"mat-list-item")(21,"label",4),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"label",5),t._uU(25),t.qZA()(),t._UZ(26,"mat-divider"),t.TgZ(27,"mat-list-item")(28,"label",6),t._uU(29),t.ALo(30,"translate"),t.qZA()(),t._UZ(31,"mat-divider"),t.qZA(),t.TgZ(32,"div",7)(33,"button",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return s.sendPrintTest(s.currentUser.defaultShop.country_ldap_code)}),t._uU(34),t.ALo(35,"translate"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.hij(" ",t.lcZ(4,10,"TAG_PROFILE_TITLE")," "),t.xp6(5),t.hij("",t.lcZ(9,12,"TAG_PROFILE_NAME"),":"),t.xp6(3),t.hij(" ",e.currentUser.nameUser,""),t.xp6(4),t.hij("",t.lcZ(16,14,"TAG_PROFILE_DEFAULT_COUNTRY"),":"),t.xp6(3),t.hij(" ",e.currentCountry,""),t.xp6(4),t.hij("",t.lcZ(23,16,"TAG_PROFILE_DEFAULT_SHOP"),":"),t.xp6(3),t.AsE(" ",e.currentUser.defaultShop.ussh_shops_id," - ",e.currentStore,""),t.xp6(4),t.Oqu(t.lcZ(30,18,"TAG_PROFILE_LABEL")),t.xp6(5),t.hij(" ",t.lcZ(35,20,"TAG_PROFILE_LABEL_PRINT")," ")}}function P(o,i){1&o&&(t.TgZ(0,"a",9),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij("",t.lcZ(2,1,"TAG_PROFILE_LOGIN"),". "))}const N=[{path:"profile",component:(()=>{class o{constructor(e,r,s){this.profileService=e,this.token=r,this.translate=s,this.profileRequest=new p.c,this.requestTo=new a.bY,this.requestToInit=new a.hm,this.setAttributesGenericRequest=Z=>{this[Z].setAttributesGenericRequest(this.requestTo)},s.setDefaultLang("es"),s.use("es")}ngOnInit(){setup();const e=this.translate.instant("TAG_PROMOTION_TITLE");this.requestTo.setRequestTo(this.requestToInit,e,m.g.TRANSACTION_TYPE.get),this.currentUser=this.token.getUser(),this.getStores();for(let r of this.currentUser.countries)this.currentUser.defaultShop.country_ldap_code===r.ctr_ldap_code&&(this.currentCountry=r.ctr_name)}sendPrintTest(e){let r;"CO"===e?r="N\r\nZB\r\nq430\r\nQ216,B40+168\r\nA430,220,2,3,1,1,N,&quot;//SPORUM 2% SHAMPOO FRASCO X120ML. SIEGFRIE&quot;\r\nA430,185,2,4,2,3,N,&quot;   $101,600   &quot;\r\nA430,105,2,4,1,1,N,&quot;       ml a:$846.67        &quot;\r\nB330,80,2,1E,2,2,35,N,&quot;7707355050157&quot;\r\nA430,40,2,1,1,1,N,&quot;              7707355050157               &quot;\r\nA430,20,2,1,1,1,N,&quot;   Imp:04/02/2021 sku:101001516 max:1-1&quot;\r\nP1\r\n":"VE"===e&&(r="N\r\nq456\r\nQ256,24\r\nA50,5,0,1,1,2,N,&quot;       GLIMEPIRIDE ELT 2 MG 16 TAB       &quot;\r\nA120,205,0,1,1,1,N,&quot;1&quot;\r\nA290,40,0,1,1,1,N,&quot;6.800,00&quot;\r\nB220,180,0,1,2,1,50,A,&quot;111391894&quot;\r\nA120,190,0,1,1,1,N,&quot;0&quot;\r\nA120,235,0,1,1,1,N,&quot;12/06/2019&quot;\r\nA270,235,0,1,1,1,N,&quot;111391894&quot;\r\nA120,175,0,1,1,1,N,&quot;0&quot;\r\nA60,40,0,1,1,1,N,&quot;P.M.V.P&quot;\r\nA120,220,0,1,1,1,N,&quot;5&quot;\r\nA60,205,0,1,1,1,N,&quot;M-Img:&quot;\r\nA60,235,0,1,1,1,N,&quot;Fecha:&quot;\r\nA60,220,0,1,1,1,N,&quot;Mes: &quot;\r\nA60,190,0,1,1,1,N,&quot;Caras:&quot;\r\nA60,175,0,1,1,1,N,&quot;Max:&quot;\r\nA210,40,0,1,0,0,N,&quot;Bs.&quot;\r\nA60,100,0,4,1,3,N,&quot;       Bs. 6.800,00       &quot;\r\nA140,80,0,2,0,0,N,&quot;Total a Pagar&quot;\r\nP1\r\n"),writeToSelectedPrinter(r)}getStores(){this.profileRequest.storeId=this.currentUser.defaultShop.ussh_shops_id,this.setAttributesGenericRequest("profileRequest"),this.profileService.profileStores(this.profileRequest).subscribe(e=>{"FTD-200"===e.cod&&(this.storesList=e.storeRehubList,this.storesObj=this.storesList.find(r=>r.storeId===this.currentUser.defaultShop.ussh_shops_id),this.currentStore=this.storesObj.storeName)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.H),t.Y36(q.i),t.Y36(c.sK))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-profile-component"]],decls:3,vars:2,consts:[["class","container",4,"ngIf","ngIfElse"],["loggedOut",""],[1,"container"],[1,"jumbotron"],[1,"small-text","bold","left"],[1,"small-text","bold","left","paddingLeft"],[1,"bold"],[1,"paddingTop"],["mat-raised-button","","color","primary",3,"click"],["href","login"]],template:function(e,r){if(1&e&&(t.YNc(0,g,36,22,"div",0),t.YNc(1,P,3,3,"ng-template",null,1,t.W1O)),2&e){const s=t.MAs(2);t.Q6J("ngIf",r.currentUser)("ngIfElse",s)}},directives:[A.O5,d.i$,d.Tg,h.d,T.lW],pipes:[c.X$],styles:[".bold[_ngcontent-%COMP%]{font-weight:700}.paddingLeft[_ngcontent-%COMP%]{padding-left:2%}.small-text[_ngcontent-%COMP%]{font-size:smaller}.left[_ngcontent-%COMP%]{text-align:left}.paddingTop[_ngcontent-%COMP%]{padding-top:3%}"]}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.Bz.forChild(N)],l.Bz]}),o})()}}]);