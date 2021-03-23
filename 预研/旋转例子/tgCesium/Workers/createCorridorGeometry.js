define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-bd456c30","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-b16b580b","./GeometryAttributes-4fcfcf40","./IndexDatatype-53503fee","./IntersectionTests-cbe5c767","./Plane-8499b136","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./arrayRemoveDuplicates-ebc732b0","./EllipsoidTangentPlane-400aadfb","./EllipsoidRhumbLine-c704bf4c","./PolygonPipeline-6b70a7a3","./PolylineVolumeGeometryLibrary-3f229a8b","./EllipsoidGeodesic-30fae80b","./PolylinePipeline-b333eace","./CorridorGeometryLibrary-730ecaa1"],function(at,t,it,ot,h,e,r,nt,st,lt,dt,a,i,x,N,g,o,n,D,c,s,l,ut){"use strict";var mt=new ot.Cartesian3,yt=new ot.Cartesian3,ft=new ot.Cartesian3,ct=new ot.Cartesian3,M=new ot.Cartesian3,pt=new ot.Cartesian3,ht=new ot.Cartesian3,gt=new ot.Cartesian3;function b(t,e){for(var r=0;r<t.length;r++)t[r]=e.scaleToGeodeticSurface(t[r],t[r]);return t}function bt(t,e,r,a,i,o){var n=t.normals,s=t.tangents,l=t.bitangents,d=ot.Cartesian3.normalize(ot.Cartesian3.cross(r,e,ht),ht);o.normal&&ut.CorridorGeometryLibrary.addAttribute(n,e,a,i),o.tangent&&ut.CorridorGeometryLibrary.addAttribute(s,d,a,i),o.bitangent&&ut.CorridorGeometryLibrary.addAttribute(l,r,a,i)}function O(t,e,r){var a,i=t.positions,o=t.corners,n=t.endPositions,s=t.lefts,l=t.normals,d=new lt.GeometryAttributes,u=0,m=0,y=0;for(D=0;D<i.length;D+=2)u+=a=i[D].length-3,y+=2*a,m+=i[D+1].length-3;for(u+=3,m+=3,D=0;D<o.length;D++){z=o[D];var f=o[D].leftPositions;at.defined(f)?u+=a=f.length:m+=a=o[D].rightPositions.length,y+=a}var c,p=at.defined(n);p&&(u+=c=n[0].length-3,m+=c,y+=6*(c/=3));var h,g,b,C,v,A,_=u+m,w=new Float64Array(_),T={normals:e.normal?new Float32Array(_):void 0,tangents:e.tangent?new Float32Array(_):void 0,bitangents:e.bitangent?new Float32Array(_):void 0},G=0,E=_-1,V=mt,F=yt,L=c/2,P=dt.IndexDatatype.createTypedArray(_/3,y),x=0;if(p){A=ft,v=ct;for(var N=n[0],V=ot.Cartesian3.fromArray(l,0,V),F=ot.Cartesian3.fromArray(s,0,F),D=0;D<L;D++)A=ot.Cartesian3.fromArray(N,3*(L-1-D),A),v=ot.Cartesian3.fromArray(N,3*(L+D),v),ut.CorridorGeometryLibrary.addAttribute(w,v,G),ut.CorridorGeometryLibrary.addAttribute(w,A,void 0,E),bt(T,V,F,G,E,e),C=(g=G/3)+1,b=(h=(E-2)/3)-1,P[x++]=h,P[x++]=g,P[x++]=b,P[x++]=b,P[x++]=g,P[x++]=C,G+=3,E-=3}var M,O,I=0,S=0,R=i[I++],k=i[I++];for(w.set(R,G),w.set(k,E-k.length+1),F=ot.Cartesian3.fromArray(s,S,F),a=k.length-3,D=0;D<a;D+=3)M=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(R,D,ht),ht),O=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(k,a-D,gt),gt),bt(T,V=ot.Cartesian3.normalize(ot.Cartesian3.add(M,O,V),V),F,G,E,e),C=(g=G/3)+1,b=(h=(E-2)/3)-1,P[x++]=h,P[x++]=g,P[x++]=b,P[x++]=b,P[x++]=g,P[x++]=C,G+=3,E-=3;for(M=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(R,a,ht),ht),O=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(k,a,gt),gt),V=ot.Cartesian3.normalize(ot.Cartesian3.add(M,O,V),V),S+=3,D=0;D<o.length;D++){var H,z,U,B,Y=(z=o[D]).leftPositions,W=z.rightPositions,q=pt,J=ft,j=ct;if(V=ot.Cartesian3.fromArray(l,S,V),at.defined(Y)){for(bt(T,V,F,void 0,E,e),E-=3,U=C,B=b,H=0;H<Y.length/3;H++)q=ot.Cartesian3.fromArray(Y,3*H,q),P[x++]=U,P[x++]=B-H-1,P[x++]=B-H,ut.CorridorGeometryLibrary.addAttribute(w,q,void 0,E),J=ot.Cartesian3.fromArray(w,3*(B-H-1),J),j=ot.Cartesian3.fromArray(w,3*U,j),bt(T,V,F=ot.Cartesian3.normalize(ot.Cartesian3.subtract(J,j,F),F),void 0,E,e),E-=3;q=ot.Cartesian3.fromArray(w,3*U,q),J=ot.Cartesian3.subtract(ot.Cartesian3.fromArray(w,3*B,J),q,J),j=ot.Cartesian3.subtract(ot.Cartesian3.fromArray(w,3*(B-H),j),q,j),bt(T,V,F=ot.Cartesian3.normalize(ot.Cartesian3.add(J,j,F),F),G,void 0,e),G+=3}else{for(bt(T,V,F,G,void 0,e),G+=3,U=b,B=C,H=0;H<W.length/3;H++)q=ot.Cartesian3.fromArray(W,3*H,q),P[x++]=U,P[x++]=B+H,P[x++]=B+H+1,ut.CorridorGeometryLibrary.addAttribute(w,q,G),J=ot.Cartesian3.fromArray(w,3*U,J),j=ot.Cartesian3.fromArray(w,3*(B+H),j),bt(T,V,F=ot.Cartesian3.normalize(ot.Cartesian3.subtract(J,j,F),F),G,void 0,e),G+=3;q=ot.Cartesian3.fromArray(w,3*U,q),J=ot.Cartesian3.subtract(ot.Cartesian3.fromArray(w,3*(B+H),J),q,J),j=ot.Cartesian3.subtract(ot.Cartesian3.fromArray(w,3*B,j),q,j),bt(T,V,F=ot.Cartesian3.normalize(ot.Cartesian3.negate(ot.Cartesian3.add(j,J,F),F),F),void 0,E,e),E-=3}for(R=i[I++],k=i[I++],R.splice(0,3),k.splice(k.length-3,3),w.set(R,G),w.set(k,E-k.length+1),a=k.length-3,S+=3,F=ot.Cartesian3.fromArray(s,S,F),H=0;H<k.length;H+=3)M=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(R,H,ht),ht),O=r.geodeticSurfaceNormal(ot.Cartesian3.fromArray(k,a-H,gt),gt),bt(T,V=ot.Cartesian3.normalize(ot.Cartesian3.add(M,O,V),V),F,G,E,e),g=(C=G/3)-1,h=(b=(E-2)/3)+1,P[x++]=h,P[x++]=g,P[x++]=b,P[x++]=b,P[x++]=g,P[x++]=C,G+=3,E-=3;G-=3,E+=3}if(bt(T,V=ot.Cartesian3.fromArray(l,l.length-3,V),F,G,E,e),p){G+=3,E-=3,A=ft,v=ct;var K=n[1];for(D=0;D<L;D++)A=ot.Cartesian3.fromArray(K,3*(c-D-1),A),v=ot.Cartesian3.fromArray(K,3*D,v),ut.CorridorGeometryLibrary.addAttribute(w,A,void 0,E),ut.CorridorGeometryLibrary.addAttribute(w,v,G),bt(T,V,F,G,E,e),g=(C=G/3)-1,h=(b=(E-2)/3)+1,P[x++]=h,P[x++]=g,P[x++]=b,P[x++]=b,P[x++]=g,P[x++]=C,G+=3,E-=3}if(d.position=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:w}),e.st){var Q=new Float32Array(_/3*2),X=0;if(p){u/=3,m/=3;var Z,$=Math.PI/(c+1),tt=1/(u-c+1),et=1/(m-c+1),rt=c/2;for(D=1+rt;D<c+1;D++)Z=it.CesiumMath.PI_OVER_TWO+$*D,Q[X++]=et*(1+Math.cos(Z)),Q[X++]=.5*(1+Math.sin(Z));for(D=1;D<m-c+1;D++)Q[X++]=D*et,Q[X++]=0;for(D=c;rt<D;D--)Z=it.CesiumMath.PI_OVER_TWO-D*$,Q[X++]=1-et*(1+Math.cos(Z)),Q[X++]=.5*(1+Math.sin(Z));for(D=rt;0<D;D--)Z=it.CesiumMath.PI_OVER_TWO-$*D,Q[X++]=1-tt*(1+Math.cos(Z)),Q[X++]=.5*(1+Math.sin(Z));for(D=u-c;0<D;D--)Q[X++]=D*tt,Q[X++]=1;for(D=1;D<1+rt;D++)Z=it.CesiumMath.PI_OVER_TWO+$*D,Q[X++]=tt*(1+Math.cos(Z)),Q[X++]=.5*(1+Math.sin(Z))}else{for(tt=1/((u/=3)-1),et=1/((m/=3)-1),D=0;D<m;D++)Q[X++]=D*et,Q[X++]=0;for(D=u;0<D;D--)Q[X++]=(D-1)*tt,Q[X++]=1}d.st=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:Q})}return e.normal&&(d.normal=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T.normals})),e.tangent&&(d.tangent=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T.tangents})),e.bitangent&&(d.bitangent=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T.bitangents})),{attributes:d,indices:P}}function I(t,e,r){r[e++]=t[0],r[e++]=t[1],r[e++]=t[2];for(var a=3;a<t.length;a+=3){var i=t[a],o=t[a+1],n=t[a+2];r[e++]=i,r[e++]=o,r[e++]=n,r[e++]=i,r[e++]=o,r[e++]=n}return r[e++]=t[0],r[e++]=t[1],r[e++]=t[2],r}function C(t,e){var r=new N.VertexFormat({position:e.position,normal:e.normal||e.bitangent||t.shadowVolume,tangent:e.tangent,bitangent:e.normal||e.bitangent,st:e.st}),a=t.ellipsoid,i=O(ut.CorridorGeometryLibrary.computePositions(t),r,a),o=t.height,n=t.extrudedHeight,s=i.attributes,l=i.indices,d=s.position.values,u=d.length,m=new Float64Array(6*u),y=new Float64Array(u);y.set(d);var f=new Float64Array(4*u),f=I(d=D.PolygonPipeline.scaleToGeodeticHeight(d,o,a),0,f);f=I(y=D.PolygonPipeline.scaleToGeodeticHeight(y,n,a),2*u,f),m.set(d),m.set(y,u),m.set(f,2*u),s.position.values=m,s=function(t,e){if(!(e.normal||e.tangent||e.bitangent||e.st))return t;var r,a,i=t.position.values;(e.normal||e.bitangent)&&(r=t.normal.values,a=t.bitangent.values);var o=t.position.values.length/18,n=3*o,s=2*o,l=2*n;if(e.normal||e.bitangent||e.tangent){for(var d,u=e.normal?new Float32Array(6*n):void 0,m=e.tangent?new Float32Array(6*n):void 0,y=e.bitangent?new Float32Array(6*n):void 0,f=mt,c=yt,p=ft,h=ct,g=M,b=pt,C=l,v=0;v<n;v+=3){var A=C+l,f=ot.Cartesian3.fromArray(i,v,f),c=ot.Cartesian3.fromArray(i,v+n,c),p=ot.Cartesian3.fromArray(i,(v+3)%n,p);c=ot.Cartesian3.subtract(c,f,c),p=ot.Cartesian3.subtract(p,f,p),h=ot.Cartesian3.normalize(ot.Cartesian3.cross(c,p,h),h),e.normal&&(ut.CorridorGeometryLibrary.addAttribute(u,h,A),ut.CorridorGeometryLibrary.addAttribute(u,h,A+3),ut.CorridorGeometryLibrary.addAttribute(u,h,C),ut.CorridorGeometryLibrary.addAttribute(u,h,C+3)),(e.tangent||e.bitangent)&&(b=ot.Cartesian3.fromArray(r,v,b),e.bitangent&&(ut.CorridorGeometryLibrary.addAttribute(y,b,A),ut.CorridorGeometryLibrary.addAttribute(y,b,A+3),ut.CorridorGeometryLibrary.addAttribute(y,b,C),ut.CorridorGeometryLibrary.addAttribute(y,b,C+3)),e.tangent&&(g=ot.Cartesian3.normalize(ot.Cartesian3.cross(b,h,g),g),ut.CorridorGeometryLibrary.addAttribute(m,g,A),ut.CorridorGeometryLibrary.addAttribute(m,g,A+3),ut.CorridorGeometryLibrary.addAttribute(m,g,C),ut.CorridorGeometryLibrary.addAttribute(m,g,C+3))),C+=6}if(e.normal){for(u.set(r),v=0;v<n;v+=3)u[v+n]=-r[v],u[v+n+1]=-r[v+1],u[v+n+2]=-r[v+2];t.normal.values=u}else t.normal=void 0;e.bitangent?(y.set(a),y.set(a,n),t.bitangent.values=y):t.bitangent=void 0,e.tangent&&(d=t.tangent.values,m.set(d),m.set(d,n),t.tangent.values=m)}if(e.st){var _=t.st.values,w=new Float32Array(6*s);w.set(_),w.set(_,s);for(var T=2*s,G=0;G<2;G++){for(w[T++]=_[0],w[T++]=_[1],v=2;v<s;v+=2){var E=_[v],V=_[v+1];w[T++]=E,w[T++]=V,w[T++]=E,w[T++]=V}w[T++]=_[0],w[T++]=_[1]}t.st.values=w}return t}(s,e);var c,p,h=u/3;if(t.shadowVolume){for(var g=s.normal.values,u=g.length,b=new Float32Array(6*u),C=0;C<u;C++)g[C]=-g[C];b.set(g,u),b=I(g,4*u,b),s.extrudeDirection=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:b}),e.normal||(s.normal=void 0)}at.defined(t.offsetAttribute)&&(p=new Uint8Array(6*h),p=t.offsetAttribute===x.GeometryOffsetAttribute.TOP?(p=x.arrayFill(p,1,0,h),x.arrayFill(p,1,2*h,4*h)):(c=t.offsetAttribute===x.GeometryOffsetAttribute.NONE?0:1,x.arrayFill(p,c)),s.applyOffset=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p}));var v=l.length,A=h+h,_=dt.IndexDatatype.createTypedArray(m.length/3,2*v+3*A);_.set(l);var w,T,G,E,V=v;for(C=0;C<v;C+=3){var F=l[C],L=l[C+1],P=l[C+2];_[V++]=P+h,_[V++]=L+h,_[V++]=F+h}for(C=0;C<A;C+=2)G=(w=C+A)+1,E=(T=w+A)+1,_[V++]=w,_[V++]=T,_[V++]=G,_[V++]=G,_[V++]=T,_[V++]=E;return{attributes:s,indices:_}}var p=new ot.Cartesian3,v=new ot.Cartesian3,A=new ot.Cartographic;function _(t,e,r,a,i,o){var n=ot.Cartesian3.subtract(e,t,p);ot.Cartesian3.normalize(n,n);var s=r.geodeticSurfaceNormal(t,v),l=ot.Cartesian3.cross(n,s,p);ot.Cartesian3.multiplyByScalar(l,a,l);var d=i.latitude,u=i.longitude,m=o.latitude,y=o.longitude;ot.Cartesian3.add(t,l,v),r.cartesianToCartographic(v,A);var f=A.latitude,c=A.longitude,d=Math.min(d,f),u=Math.min(u,c),m=Math.max(m,f),y=Math.max(y,c);ot.Cartesian3.subtract(t,l,v),r.cartesianToCartographic(v,A),f=A.latitude,c=A.longitude,d=Math.min(d,f),u=Math.min(u,c),m=Math.max(m,f),y=Math.max(y,c),i.latitude=d,i.longitude=u,o.latitude=m,o.longitude=y}var w=new ot.Cartesian3,T=new ot.Cartesian3,G=new ot.Cartographic,E=new ot.Cartographic;function d(t,e,r,a,i){t=b(t,e);var o=g.arrayRemoveDuplicates(t,ot.Cartesian3.equalsEpsilon),n=o.length;if(n<2||r<=0)return new ot.Rectangle;var s,l,d,u=.5*r;G.latitude=Number.POSITIVE_INFINITY,G.longitude=Number.POSITIVE_INFINITY,E.latitude=Number.NEGATIVE_INFINITY,E.longitude=Number.NEGATIVE_INFINITY,a===c.CornerType.ROUNDED&&(d=o[0],ot.Cartesian3.subtract(d,o[1],w),ot.Cartesian3.normalize(w,w),ot.Cartesian3.multiplyByScalar(w,u,w),ot.Cartesian3.add(d,w,T),e.cartesianToCartographic(T,A),s=A.latitude,l=A.longitude,G.latitude=Math.min(G.latitude,s),G.longitude=Math.min(G.longitude,l),E.latitude=Math.max(E.latitude,s),E.longitude=Math.max(E.longitude,l));for(var m=0;m<n-1;++m)_(o[m],o[m+1],e,u,G,E);var y=o[n-1];ot.Cartesian3.subtract(y,o[n-2],w),ot.Cartesian3.normalize(w,w),ot.Cartesian3.multiplyByScalar(w,u,w),ot.Cartesian3.add(y,w,T),_(y,T,e,u,G,E),a===c.CornerType.ROUNDED&&(e.cartesianToCartographic(T,A),s=A.latitude,l=A.longitude,G.latitude=Math.min(G.latitude,s),G.longitude=Math.min(G.longitude,l),E.latitude=Math.max(E.latitude,s),E.longitude=Math.max(E.longitude,l));var f=at.defined(i)?i:new ot.Rectangle;return f.north=E.latitude,f.south=G.latitude,f.east=E.longitude,f.west=G.longitude,f}function V(t){var e=(t=at.defaultValue(t,at.defaultValue.EMPTY_OBJECT)).positions,r=t.width,a=at.defaultValue(t.height,0),i=at.defaultValue(t.extrudedHeight,a);this._positions=e,this._ellipsoid=ot.Ellipsoid.clone(at.defaultValue(t.ellipsoid,ot.Ellipsoid.WGS84)),this._vertexFormat=N.VertexFormat.clone(at.defaultValue(t.vertexFormat,N.VertexFormat.DEFAULT)),this._width=r,this._height=Math.max(a,i),this._extrudedHeight=Math.min(a,i),this._cornerType=at.defaultValue(t.cornerType,c.CornerType.ROUNDED),this._granularity=at.defaultValue(t.granularity,it.CesiumMath.RADIANS_PER_DEGREE),this._shadowVolume=at.defaultValue(t.shadowVolume,!1),this._workerName="createCorridorGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this.packedLength=1+e.length*ot.Cartesian3.packedLength+ot.Ellipsoid.packedLength+N.VertexFormat.packedLength+7}V.pack=function(t,e,r){r=at.defaultValue(r,0);var a=t._positions,i=a.length;e[r++]=i;for(var o=0;o<i;++o,r+=ot.Cartesian3.packedLength)ot.Cartesian3.pack(a[o],e,r);return ot.Ellipsoid.pack(t._ellipsoid,e,r),r+=ot.Ellipsoid.packedLength,N.VertexFormat.pack(t._vertexFormat,e,r),r+=N.VertexFormat.packedLength,e[r++]=t._width,e[r++]=t._height,e[r++]=t._extrudedHeight,e[r++]=t._cornerType,e[r++]=t._granularity,e[r++]=t._shadowVolume?1:0,e[r]=at.defaultValue(t._offsetAttribute,-1),e};var F=ot.Ellipsoid.clone(ot.Ellipsoid.UNIT_SPHERE),L=new N.VertexFormat,P={positions:void 0,ellipsoid:F,vertexFormat:L,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,shadowVolume:void 0,offsetAttribute:void 0};return V.unpack=function(t,e,r){e=at.defaultValue(e,0);for(var a=t[e++],i=new Array(a),o=0;o<a;++o,e+=ot.Cartesian3.packedLength)i[o]=ot.Cartesian3.unpack(t,e);var n=ot.Ellipsoid.unpack(t,e,F);e+=ot.Ellipsoid.packedLength;var s=N.VertexFormat.unpack(t,e,L);e+=N.VertexFormat.packedLength;var l=t[e++],d=t[e++],u=t[e++],m=t[e++],y=t[e++],f=1===t[e++],c=t[e];return at.defined(r)?(r._positions=i,r._ellipsoid=ot.Ellipsoid.clone(n,r._ellipsoid),r._vertexFormat=N.VertexFormat.clone(s,r._vertexFormat),r._width=l,r._height=d,r._extrudedHeight=u,r._cornerType=m,r._granularity=y,r._shadowVolume=f,r._offsetAttribute=-1===c?void 0:c,r):(P.positions=i,P.width=l,P.height=d,P.extrudedHeight=u,P.cornerType=m,P.granularity=y,P.shadowVolume=f,P.offsetAttribute=-1===c?void 0:c,new V(P))},V.computeRectangle=function(t,e){var r=(t=at.defaultValue(t,at.defaultValue.EMPTY_OBJECT)).positions,a=t.width;return d(r,at.defaultValue(t.ellipsoid,ot.Ellipsoid.WGS84),a,at.defaultValue(t.cornerType,c.CornerType.ROUNDED),e)},V.createGeometry=function(t){var e=t._positions,r=t._width,a=t._ellipsoid,e=b(e,a),i=g.arrayRemoveDuplicates(e,ot.Cartesian3.equalsEpsilon);if(!(i.length<2||r<=0)){var o,n,s,l,d=t._height,u=t._extrudedHeight,m=!it.CesiumMath.equalsEpsilon(d,u,0,it.CesiumMath.EPSILON2),y=t._vertexFormat,f={ellipsoid:a,positions:i,width:r,cornerType:t._cornerType,granularity:t._granularity,saveAttributes:!0};m?(f.height=d,f.extrudedHeight=u,f.shadowVolume=t._shadowVolume,f.offsetAttribute=t._offsetAttribute,l=C(f,y)):((l=O(ut.CorridorGeometryLibrary.computePositions(f),y,a)).attributes.position.values=D.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,d,a),at.defined(t._offsetAttribute)&&(o=t._offsetAttribute===x.GeometryOffsetAttribute.NONE?0:1,n=l.attributes.position.values.length,s=new Uint8Array(n/3),x.arrayFill(s,o),l.attributes.applyOffset=new st.GeometryAttribute({componentDatatype:nt.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:s})));var c=l.attributes,p=h.BoundingSphere.fromVertices(c.position.values,void 0,3);return y.position||(l.attributes.position.values=void 0),new st.Geometry({attributes:c,indices:l.indices,primitiveType:st.PrimitiveType.TRIANGLES,boundingSphere:p,offsetAttribute:t._offsetAttribute})}},V.createShadowVolume=function(t,e,r){var a=t._granularity,i=t._ellipsoid,o=e(a,i),n=r(a,i);return new V({positions:t._positions,width:t._width,cornerType:t._cornerType,ellipsoid:i,granularity:a,extrudedHeight:o,height:n,vertexFormat:N.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(V.prototype,{rectangle:{get:function(){return at.defined(this._rectangle)||(this._rectangle=d(this._positions,this._ellipsoid,this._width,this._cornerType)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return[0,0,0,1,1,0]}}}),function(t,e){return at.defined(e)&&(t=V.unpack(t,e)),t._ellipsoid=ot.Ellipsoid.clone(t._ellipsoid),V.createGeometry(t)}});
