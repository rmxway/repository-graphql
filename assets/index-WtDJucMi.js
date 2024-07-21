import{j as d,B as j,p as m,G as $,e as v,m as w,c as k,$ as y,r as u}from"./index-_TQD0Y1q.js";import{d as M}from"./index-fFXo6fwo.js";const B=({children:o,...a})=>d.jsx(j,{...a,children:o}),P=m.div`
	position: relative;
	opacity: 1;

	& > ${$} {
	}

	${({$isLoading:o})=>o&&v`
			pointer-events: none;
			opacity: 0.5;
		`}

	${w.greaterThan("medium")`
			& > ${$} {
				grid-auto-flow: column;		
			}
		`}
`,L=m.div`
	${({theme:o})=>v`
		color: ${o.colors.gray.$6};
	`}
`,R=m($)`
	overflow: hidden;
	overflow-x: auto;
	padding-bottom: 20px;

	${w.greaterThan("medium")`
		padding-bottom: 0;
	`}

	& > ${j} {
		min-width: 34px;

		.to-start {
			min-width: 70px;
		}
	}
`,S=({items:o,changePage:a,maxCount:n})=>{const{page:t,perPage:i}=k(y),e=u.useMemo(()=>Math.ceil(o/i),[o,i]),r=Math.ceil(e>=n?n:e),l=M(p=>{a(p)},400),s=Math.round(n/2),h=u.useMemo(()=>e<=r||t-s<0?0:e-s<t?e-n:t-s,[r,s,n,t,e]),f=u.useMemo(()=>e<=r||e-s<t?e:t>=s+1?n+t-s:n,[r,s,n,t,e]),b=u.useMemo(()=>e!==t?t*i:o,[o,t,i,e]),x=u.useCallback(()=>{const p=Array.from({length:r});for(let c=h;c<f;c++){const g=c+1;if(p[c]=d.jsx(B,{"data-key":c,$secondary:t===g,$inactive:t===g,onClick:()=>l(g),children:g},c),c===f)break}return p},[r,h,f,t,l]);return{perPage:i,renderButtons:x,start:h,viewed:b}},E=({isLoading:o,items:a,changePage:n,maxCount:t})=>{const{renderButtons:i,start:e,perPage:r,viewed:l}=S({items:a,changePage:n,maxCount:t});return a>r&&d.jsx(P,{$isLoading:o,children:d.jsxs($,{$justify:"space-between",$direction:"row",$align:"center",children:[d.jsxs(R,{$gap:4,$direction:"column",children:[e>0&&d.jsx(B,{$dark:!0,disabled:e<1,className:"to-start",onClick:()=>n(1),children:"To Start"}),...i()]}),d.jsxs(L,{children:["viewed: ",l.toLocaleString("ru-RU")," /"," ",a.toLocaleString("ru-RU")]})]})})};export{E as Pagination,E as default};
