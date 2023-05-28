import{isNullOrWhiteSpaces,elementIsExistWithLog}from"./general.js";export var SubmenuOpenIvents;!function(e){e[e.Click=0]="Click",e[e.Hover=1]="Hover"}(SubmenuOpenIvents||(SubmenuOpenIvents={}));export default class Submenu{constructor(e,...t){isNullOrWhiteSpaces(e.menuActiveClass,e.buttonActiveClass)&&console.log("[Submenu] Please specify the classes for the elements when they are active."),Submenu.buttonActiveClass=e.buttonActiveClass,Submenu.menuActiveClass=e.menuActiveClass,Submenu.submenuElements.push(...t),e.disableOnEsc&&document.addEventListener("keydown",(e=>"Escape"==e.code&&Submenu.hideAllClickSubmenu()))}static showOrHideSubmenu(e,t){for(let n=0;n<e.buttonElements.length;n++)e.buttonElements[n]==t?(e.buttonElements[n].classList.toggle(Submenu.buttonActiveClass),e.menuElements[n].classList.toggle(Submenu.menuActiveClass)):(e.buttonElements[n].classList.remove(Submenu.buttonActiveClass),e.menuElements[n].classList.remove(Submenu.menuActiveClass))}static hideAllClickSubmenu(){for(let e of Submenu.submenuElements)if(e.openIvent==SubmenuOpenIvents.Click)for(let t=0;t<e.buttonElements.length;t++)e.buttonElements[t].classList.remove(Submenu.buttonActiveClass),e.menuElements[t].classList.remove(Submenu.menuActiveClass)}}Submenu.submenuElements=new Array;export class SubmenuElementGroup{constructor(e){if(elementIsExistWithLog("SubmenuElementGroup",e.buttonsSelector,e.menusSelector))if(this.menuElements=document.querySelectorAll(e.menusSelector),this.buttonElements=document.querySelectorAll(e.buttonsSelector),this.openIvent=e.openIvent,this.openIvent==SubmenuOpenIvents.Click)for(let t of this.buttonElements)t.addEventListener("click",(()=>Submenu.showOrHideSubmenu(this,t)));else if(this.openIvent==SubmenuOpenIvents.Hover)for(let t of this.buttonElements)t.addEventListener("mouseover",(()=>Submenu.showOrHideSubmenu(this,t))),t.addEventListener("mouseout",(()=>Submenu.showOrHideSubmenu(this,t)))}}