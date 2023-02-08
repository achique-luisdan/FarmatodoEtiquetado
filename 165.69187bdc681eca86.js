"use strict";(self.webpackChunkFarmatodoEtiquetado=self.webpackChunkFarmatodoEtiquetado||[]).push([[165],{165:(E,x,i)=>{i.r(x),i.d(x,{LoginModule:()=>F});var u=i(1496),M=i(4788),h=i(8555),S=i(8978),C=i(2654),t=i(5e3),m=i(520),p=i(9605),L=i(9223);new m.WM({"Content-Type":"application/json"});let A=(()=>{class o{constructor(e){this.http=e,this.httpHeaders=new m.WM({Accept:"application/json","Cache-Control":"no-cache","Access-Control-Allow-Origin":"*"})}autenticateUser(e){return this.http.post(p.X.settings.urlAPI.domainUrlLdap.toString()+"/users/autenticateUser",e,{headers:L.g.HTTP_HEADERS})}modulesByUser(e){return this.http.get(p.X.settings.urlAPI.domainUrlLdap.toString()+"/modules/modulesByUser/"+e,{responseType:"text"})}functionalitiesByUserModule(e,s,n){return this.http.get(p.X.settings.urlAPI.domainUrlLdap.toString()+"/functionalities/functionalitiesByUserModule/"+e+"/"+s+"/"+n,{responseType:"text"})}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var O=i(768),P=i(2140),v=i(9808),g=i(3075),f=i(7322),T=i(7531),y=i(7423),_=i(5245);function w(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"TAG_USER_REQ_LOGIN")," "))}function U(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"TAG_PASS_REQ_LOGIN")," "))}function Z(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"form",5,6),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.MAs(1),r=t.oxw();return n.form.valid&&r.onSubmit()}),t.TgZ(2,"fieldset")(3,"legend")(4,"b"),t._uU(5),t.ALo(6,"translate"),t.qZA()(),t._UZ(7,"br"),t.TgZ(8,"mat-form-field")(9,"mat-label"),t._uU(10),t.ALo(11,"translate"),t.qZA(),t.TgZ(12,"input",7,8),t.NdJ("ngModelChange",function(n){return t.CHM(e),t.oxw().form.username=n})("ngModelChange",function(n){return t.CHM(e),t.oxw().form.username=n.toLowerCase()}),t.qZA(),t.YNc(14,w,3,3,"mat-error",9),t.qZA(),t._UZ(15,"br"),t.TgZ(16,"mat-form-field")(17,"mat-label"),t._uU(18),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"input",10,11),t.NdJ("ngModelChange",function(n){return t.CHM(e),t.oxw().form.password=n}),t.qZA(),t.YNc(22,U,3,3,"mat-error",9),t.qZA(),t._UZ(23,"br")(24,"br"),t.TgZ(25,"button",12),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.MAs(1),r=t.oxw();return n.form.valid&&r.onSubmit()}),t._uU(26),t.ALo(27,"translate"),t.TgZ(28,"mat-icon",13),t._uU(29,"login"),t.qZA()()()()}if(2&o){const e=t.MAs(13),s=t.MAs(21),n=t.oxw();t.xp6(5),t.hij(" ",t.lcZ(6,8,"TAG_LOGIN")," "),t.xp6(5),t.Oqu(t.lcZ(11,10,"TAG_USER_LOGIN")),t.xp6(2),t.Q6J("ngModel",n.form.username),t.xp6(2),t.Q6J("ngIf",!e.valid),t.xp6(4),t.Oqu(t.lcZ(19,12,"TAG_PASSWORD_LOGIN")),t.xp6(2),t.Q6J("ngModel",n.form.password),t.xp6(2),t.Q6J("ngIf",!s.valid),t.xp6(4),t.hij(" ",t.lcZ(27,14,"TAG_ENTER")," ")}}let b=(()=>{class o{constructor(e,s,n,r,d){this.authService=e,this.tokenStorage=s,this.translate=n,this.router=r,this.dialogBaseComponent=d,this.form={},this.isLoggedIn=!1,this.isLoginFailed=!1,this.isDontAccess=!1,this.isDontShops=!1,this.errorMessage="",this.roles=[],this.return="",this.loadingPanelVisible=!1,this.subscriptions=new C.w,n.setDefaultLang("es"),n.use("es")}ngOnInit(){this.form.username="",this.tokenStorage.getToken()&&(this.isLoggedIn=!0,this.roles=this.tokenStorage.getUser().roles,this.router.navigate(["/home"]))}onSubmit(){this.isDontAccess=!1,this.isDontShops=!1,this.loadingPanelVisible=!this.loadingPanelVisible,this.authService.autenticateUser(this.form).subscribe(e=>{this.tokenStorage.saveToken(e.token),this.tokenStorage.saveUsername(this.form.username),this.authService.modulesByUser(e.idUser).subscribe(s=>{const n=[],r=JSON.parse(s);let d;if(null!=e.shops){if(e.defaultShop=e.shops[0],null!=r.CO)for(let a of r.CO)"Etiquetado"===a.name&&(a.country="CO",sessionStorage.setItem("countrySelect",a.country),n.push(a),"CO"===e.defaultShop.country_ldap_code&&(d=a));if(null!=r.VE)for(let a of r.VE)"Etiquetado"===a.name&&(sessionStorage.setItem("countrySelect",a.country),a.country="VE",n.push(a),"VE"===e.defaultShop.country_ldap_code&&(d=a));n.length>0?(e.defaultModule=d,this.authService.functionalitiesByUserModule(e.idUser,n[0].id,n[0].countryId).subscribe(a=>{e.defaultModule===n[0]&&(e.funcionalities=JSON.parse(a)[0]),n[0].funcionalities=JSON.parse(a)[0],n.length>1?this.authService.functionalitiesByUserModule(e.idUser,n[1].id,n[1].countryId).subscribe(c=>{e.defaultModule===n[1]&&(e.funcionalities=JSON.parse(c)[0]),n[1].funcionalities=JSON.parse(c)[0],e.modulesList=n,this.tokenStorage.saveUser(e),this.isLoginFailed=!1,this.isLoggedIn=!0,this.loadingPanelVisible=!this.loadingPanelVisible,this.roles=this.tokenStorage.getUser().roles,this.reloadPage()},c=>{this.errorMessage=c.statusText,this.isLoginFailed=!0,this.loadingPanelVisible=!this.loadingPanelVisible,window.sessionStorage.clear()}):(e.modulesList=n,this.tokenStorage.saveUser(e),this.isLoginFailed=!1,this.isLoggedIn=!0,this.loadingPanelVisible=!this.loadingPanelVisible,this.roles=this.tokenStorage.getUser().roles,this.reloadPage())},a=>{this.errorMessage=a.statusText,this.isLoginFailed=!0,this.loadingPanelVisible=!this.loadingPanelVisible,window.sessionStorage.clear()})):(this.isLoginFailed=!0,this.isDontAccess=!0,this.loadingPanelVisible=!this.loadingPanelVisible,this.logout())}else this.isLoginFailed=!0,this.isDontShops=!0,this.loadingPanelVisible=!this.loadingPanelVisible,window.sessionStorage.clear()},s=>{console.log("error",s),this.errorMessage=s.statusText,this.isLoginFailed=!0,this.loadingPanelVisible=!this.loadingPanelVisible,window.sessionStorage.clear()})},e=>{console.log("error",e),this.errorMessage=e.statusText,this.isLoginFailed=!0,this.loadingPanelVisible=!this.loadingPanelVisible})}reloadPage(){window.location.reload()}logout(){this.subscriptions.add(this.dialogBaseComponent.openDialogConfirm("TAG_FAIL_LOGIN","TAG_DONT_ACCESS_LOGIN").subscribe(e=>{window.sessionStorage.clear(),this.tokenStorage.signOut(),window.location.reload()}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A),t.Y36(O.i),t.Y36(u.sK),t.Y36(h.F0),t.Y36(S.a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],features:[t._Bn([S.a])],decls:5,vars:1,consts:[[1,"login-container",2,"background-color","#e2e2e2","margin-top","3%"],["aria-label","Color selection",1,"mat-chip-list-stacked","mat-chip-adjust",2,"position","absolute","bottom","1%","right","1%"],[1,"login"],["id","profile-img","src","assets/img/logo.png",1,"profile-img-card"],["name","form","novalidate","",3,"ngSubmit",4,"ngIf"],["name","form","novalidate","",3,"ngSubmit"],["f","ngForm"],["id","username","name","username","required","","autofocus","","matInput","",3,"ngModel","ngModelChange"],["username","ngModel"],[4,"ngIf"],["matInput","","type","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["mat-raised-button","","color","primary","mat-raised-button","","color","primary",1,"mat-raised-button","mat-button","mat-primary",3,"ngSubmit"],["inline","true"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"mat-chip-list",1),t.TgZ(2,"section",2),t._UZ(3,"img",3),t.YNc(4,Z,30,16,"form",4),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngIf",!s.isLoggedIn))},directives:[P.qn,v.O5,g._Y,g.JL,g.F,f.KE,f.hX,T.Nt,g.Fj,g.Q7,g.JJ,g.On,f.TO,y.lW,_.Hw],pipes:[u.X$],styles:["label[_ngcontent-%COMP%]{display:block;margin-top:10px}.card-container.card[_ngcontent-%COMP%]{max-width:300px!important;padding:20px}.card[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:20px 25px 30px;border-radius:2px;box-shadow:0 2px 2px #0000004d}.profile-img-card[_ngcontent-%COMP%]{width:100px;height:121px;margin:0 auto 10px;display:block}.k-loading-panel[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;height:100%;position:absolute;top:0;left:0;z-index:100}.k-loading-panel-mask[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;opacity:.8}.k-loading-panel-wrapper[_ngcontent-%COMP%]{position:relative;z-index:2}.section[_ngcontent-%COMP%]{position:relative}.k-loading-panel-text[_ngcontent-%COMP%]{margin-top:20px;text-align:center;color:#fff}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100%;align-items:center;background-color:#f5f5f5}fieldset[_ngcontent-%COMP%]{border:none}legend[_ngcontent-%COMP%]{color:#333;font-size:1.8rem}.login[_ngcontent-%COMP%]{width:100%;max-width:330px;text-align:center;border-style:solid;border-color:#d3d3d3;border-width:1px;border-radius:10px;box-shadow:2px 1px 1px #d3d3d3;background-color:#fff;solid-color:#0f6674}.ancho[_ngcontent-%COMP%]{width:80%}.button[_ngcontent-%COMP%]{height:50%}.spinner[_ngcontent-%COMP%]{margin:0 auto}mat-chip[_ngcontent-%COMP%]{max-width:70px;max-height:20px;font-size:xx-small}.mat-chip-adjust[_ngcontent-%COMP%]{z-index:100000;position:absolute}"]}),o})();const I=[{path:"",component:b}];let V=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.Bz.forChild(I)],h.Bz]}),o})();var N=i(5349);let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o,bootstrap:[b]}),o.\u0275inj=t.cJS({imports:[[u.aw,N.m8,V,M.L]]}),o})()}}]);