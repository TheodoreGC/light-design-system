import{r as s,c as t,h as e,H as i,g as o}from"./p-aba0bbf6.js";const a=class{constructor(e){s(this,e),this.change=t(this,"onchange",7),this.value=""}connectedCallback(){this.handleSelect=this.handleSelect.bind(this)}componentWillLoad(){var s;this.childrens=Array.from(this.select.children),this.value=null===(s=this.childrens[0])||void 0===s?void 0:s.value,this.select.innerHTML=""}handleSelect(s){s.preventDefault(),this.value=s.target.value,this.change.emit(this.value)}render(){return e(i,null,e("select",{class:"lids-select",onInput:this.handleSelect},this.childrens.map((s=>e("option",{class:"lids-select-option",value:s.value,selected:this.value===s.value},s.innerText)))))}get select(){return o(this)}};a.style=':host{display:block;position:relative}:host::after{position:absolute;margin-top:-4px;top:50%;right:8px;content:"";width:0.8rem;height:0.5rem;background-color:var(--lids-color-gray-darkest);clip-path:polygon(100% 0%, 0 0%, 50% 100%)}:host .lids-select{width:100%;margin:0;padding:var(--lids-space-medium);border-radius:var(--lids-radius-default);box-shadow:0 0 4px 0 var(--lids-color-gray-lighter);border:none;outline:none;appearance:none;cursor:pointer}:host .lids-select::-ms-expand{display:none}';export{a as lids_select}