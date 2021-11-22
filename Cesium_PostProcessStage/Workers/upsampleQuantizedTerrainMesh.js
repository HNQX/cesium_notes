/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./defineProperties-ae15c9d5","./Transforms-94513c2d","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-9477db2c","./when-c208a7cf","./AttributeCompression-a7396e6f","./IndexDatatype-668aa2f9","./IntersectionTests-f6d27a39","./Plane-297770b0","./createTaskProcessorWorker","./EllipsoidTangentPlane-1ba7ce65","./OrientedBoundingBox-d258fabd","./EllipsoidalOccluder-58305577","./TerrainEncoding-b01d1123"],function(v,C,e,i,ce,ge,r,me,t,n,s,h,u,we,o,d,p,a,xe,ve,Ce){"use strict";var ye={clipTriangleAtAxisAlignedThreshold:function(e,i,r,t,n,s){if(!v.defined(e))throw new C.DeveloperError("threshold is required.");if(!v.defined(i))throw new C.DeveloperError("keepAbove is required.");if(!v.defined(r))throw new C.DeveloperError("u0 is required.");if(!v.defined(t))throw new C.DeveloperError("u1 is required.");if(!v.defined(n))throw new C.DeveloperError("u2 is required.");var h,u,o;v.defined(s)?s.length=0:s=[],o=i?(h=r<e,u=t<e,n<e):(h=e<r,u=e<t,e<n);var d,p,a,f,l,c,g=h+u+o;return 1===g?h?(d=(e-r)/(t-r),p=(e-r)/(n-r),s.push(1),s.push(2),1!==p&&(s.push(-1),s.push(0),s.push(2),s.push(p)),1!==d&&(s.push(-1),s.push(0),s.push(1),s.push(d))):u?(a=(e-t)/(n-t),f=(e-t)/(r-t),s.push(2),s.push(0),1!==f&&(s.push(-1),s.push(1),s.push(0),s.push(f)),1!==a&&(s.push(-1),s.push(1),s.push(2),s.push(a))):o&&(l=(e-n)/(r-n),c=(e-n)/(t-n),s.push(0),s.push(1),1!==c&&(s.push(-1),s.push(2),s.push(1),s.push(c)),1!==l&&(s.push(-1),s.push(2),s.push(0),s.push(l))):2===g?h||r===e?u||t===e?o||n===e||(p=(e-r)/(n-r),a=(e-t)/(n-t),s.push(2),s.push(-1),s.push(0),s.push(2),s.push(p),s.push(-1),s.push(1),s.push(2),s.push(a)):(c=(e-n)/(t-n),d=(e-r)/(t-r),s.push(1),s.push(-1),s.push(2),s.push(1),s.push(c),s.push(-1),s.push(0),s.push(1),s.push(d)):(f=(e-t)/(r-t),l=(e-n)/(r-n),s.push(0),s.push(-1),s.push(1),s.push(0),s.push(f),s.push(-1),s.push(2),s.push(0),s.push(l)):3!==g&&(s.push(0),s.push(1),s.push(2)),s},computeBarycentricCoordinates:function(e,i,r,t,n,s,h,u,o){if(!v.defined(e))throw new C.DeveloperError("x is required.");if(!v.defined(i))throw new C.DeveloperError("y is required.");if(!v.defined(r))throw new C.DeveloperError("x1 is required.");if(!v.defined(t))throw new C.DeveloperError("y1 is required.");if(!v.defined(n))throw new C.DeveloperError("x2 is required.");if(!v.defined(s))throw new C.DeveloperError("y2 is required.");if(!v.defined(h))throw new C.DeveloperError("x3 is required.");if(!v.defined(u))throw new C.DeveloperError("y3 is required.");var d=r-h,p=h-n,a=s-u,f=t-u,l=1/(a*d+p*f),c=i-u,g=e-h,m=(a*g+p*c)*l,w=(-f*g+d*c)*l,x=1-m-w;return v.defined(o)?(o.x=m,o.y=w,o.z=x,o):new ge.Cartesian3(m,w,x)},computeLineSegmentLineSegmentIntersection:function(e,i,r,t,n,s,h,u,o){C.Check.typeOf.number("x00",e),C.Check.typeOf.number("y00",i),C.Check.typeOf.number("x01",r),C.Check.typeOf.number("y01",t),C.Check.typeOf.number("x10",n),C.Check.typeOf.number("y10",s),C.Check.typeOf.number("x11",h),C.Check.typeOf.number("y11",u);var d=(u-s)*(r-e)-(h-n)*(t-i);if(0!=d){var p=((h-n)*(i-s)-(u-s)*(e-n))/d,a=((r-e)*(i-s)-(t-i)*(e-n))/d;return 0<=p&&p<=1&&0<=a&&a<=1?(v.defined(o)||(o=new ge.Cartesian2),o.x=e+p*(r-e),o.y=i+p*(t-i),o):void 0}}},be=32767,Be=16383,Ie=[],Ae=[],Ee=[],Oe=new ge.Cartographic,De=new ge.Cartesian3,Te=[],ze=[],Ve=[],ke=[],Me=[],Ne=new ge.Cartesian3,qe=new me.BoundingSphere,He=new xe.OrientedBoundingBox,Re=new ge.Cartesian2,Fe=new ge.Cartesian3;function Pe(){this.vertexBuffer=void 0,this.index=void 0,this.first=void 0,this.second=void 0,this.ratio=void 0}Pe.prototype.clone=function(e){return v.defined(e)||(e=new Pe),e.uBuffer=this.uBuffer,e.vBuffer=this.vBuffer,e.heightBuffer=this.heightBuffer,e.normalBuffer=this.normalBuffer,e.index=this.index,e.first=this.first,e.second=this.second,e.ratio=this.ratio,e},Pe.prototype.initializeIndexed=function(e,i,r,t,n){this.uBuffer=e,this.vBuffer=i,this.heightBuffer=r,this.normalBuffer=t,this.index=n,this.first=void 0,this.second=void 0,this.ratio=void 0},Pe.prototype.initializeFromClipResult=function(e,i,r){var t=i+1;return-1!==e[i]?r[e[i]].clone(this):(this.vertexBuffer=void 0,this.index=void 0,this.first=r[e[t]],++t,this.second=r[e[t]],++t,this.ratio=e[t],++t),t},Pe.prototype.getKey=function(){return this.isIndexed()?this.index:JSON.stringify({first:this.first.getKey(),second:this.second.getKey(),ratio:this.ratio})},Pe.prototype.isIndexed=function(){return v.defined(this.index)},Pe.prototype.getH=function(){return v.defined(this.index)?this.heightBuffer[this.index]:ce.CesiumMath.lerp(this.first.getH(),this.second.getH(),this.ratio)},Pe.prototype.getU=function(){return v.defined(this.index)?this.uBuffer[this.index]:ce.CesiumMath.lerp(this.first.getU(),this.second.getU(),this.ratio)},Pe.prototype.getV=function(){return v.defined(this.index)?this.vBuffer[this.index]:ce.CesiumMath.lerp(this.first.getV(),this.second.getV(),this.ratio)};var f=new ge.Cartesian2,l=-1,c=[new ge.Cartesian3,new ge.Cartesian3],g=[new ge.Cartesian3,new ge.Cartesian3];function m(e,i){var r=c[++l],t=g[l];return r=u.AttributeCompression.octDecode(e.first.getNormalX(),e.first.getNormalY(),r),t=u.AttributeCompression.octDecode(e.second.getNormalX(),e.second.getNormalY(),t),De=ge.Cartesian3.lerp(r,t,e.ratio,De),ge.Cartesian3.normalize(De,De),u.AttributeCompression.octEncode(De,i),--l,i}Pe.prototype.getNormalX=function(){return v.defined(this.index)?this.normalBuffer[2*this.index]:(f=m(this,f)).x},Pe.prototype.getNormalY=function(){return v.defined(this.index)?this.normalBuffer[2*this.index+1]:(f=m(this,f)).y};var w=[];function Se(e,i,r,t,n,s,h,u,o){if(0!==h.length){for(var d=0,p=0;p<h.length;)p=w[d++].initializeFromClipResult(h,p,u);for(var a=0;a<d;++a){var f=w[a];if(f.isIndexed())f.newIndex=s[f.index],f.uBuffer=e,f.vBuffer=i,f.heightBuffer=r,o&&(f.normalBuffer=t);else{var l=f.getKey();if(v.defined(s[l]))f.newIndex=s[l];else{var c=e.length;e.push(f.getU()),i.push(f.getV()),r.push(f.getH()),o&&(t.push(f.getNormalX()),t.push(f.getNormalY())),f.newIndex=c,s[l]=c}}}3===d?(n.push(w[0].newIndex),n.push(w[1].newIndex),n.push(w[2].newIndex)):4===d&&(n.push(w[0].newIndex),n.push(w[1].newIndex),n.push(w[2].newIndex),n.push(w[0].newIndex),n.push(w[2].newIndex),n.push(w[3].newIndex))}}return w.push(new Pe),w.push(new Pe),w.push(new Pe),w.push(new Pe),p(function(e,i){var r=e.isEastChild,t=e.isNorthChild,n=r?Be:0,s=r?be:Be,h=t?Be:0,u=t?be:Be,o=Te,d=ze,p=Ve,a=Me;o.length=0,d.length=0,p.length=0,a.length=0;var f=ke;f.length=0;var l={},c=e.vertices,g=e.indices;g=g.subarray(0,e.skirtIndex);var m,w,x,v,C,y=Ce.TerrainEncoding.clone(e.encoding),b=y.hasVertexNormals,B=e.exaggeration,I=0,A=e.vertexCountWithoutSkirts,E=e.minimumHeight,O=e.maximumHeight,D=new Array(A),T=new Array(A),z=new Array(A),V=b?new Array(2*A):void 0;for(x=w=0;w<A;++w,x+=2){var k=y.decodeTextureCoordinates(c,w,Re);if(m=y.decodeHeight(c,w)/B,v=ce.CesiumMath.clamp(k.x*be|0,0,be),C=ce.CesiumMath.clamp(k.y*be|0,0,be),z[w]=ce.CesiumMath.clamp((m-E)/(O-E)*be|0,0,be),v<20&&(v=0),C<20&&(C=0),be-v<20&&(v=be),be-C<20&&(C=be),D[w]=v,T[w]=C,b){var M=y.getOctEncodedNormal(c,w,Fe);V[x]=M.x,V[x+1]=M.y}(r&&Be<=v||!r&&v<=Be)&&(t&&Be<=C||!t&&C<=Be)&&(l[w]=I,o.push(v),d.push(C),p.push(z[w]),b&&(a.push(V[x]),a.push(V[x+1])),++I)}var N=[];N.push(new Pe),N.push(new Pe),N.push(new Pe);var q,H=[];for(H.push(new Pe),H.push(new Pe),H.push(new Pe),w=0;w<g.length;w+=3){var R=g[w],F=g[w+1],P=g[w+2],S=D[R],U=D[F],X=D[P];N[0].initializeIndexed(D,T,z,V,R),N[1].initializeIndexed(D,T,z,V,F),N[2].initializeIndexed(D,T,z,V,P);var K=ye.clipTriangleAtAxisAlignedThreshold(Be,r,S,U,X,Ie);(q=0)>=K.length||(q=H[0].initializeFromClipResult(K,q,N))>=K.length||(q=H[1].initializeFromClipResult(K,q,N))>=K.length||(q=H[2].initializeFromClipResult(K,q,N),Se(o,d,p,a,f,l,ye.clipTriangleAtAxisAlignedThreshold(Be,t,H[0].getV(),H[1].getV(),H[2].getV(),Ae),H,b),q<K.length&&(H[2].clone(H[1]),H[2].initializeFromClipResult(K,q,N),Se(o,d,p,a,f,l,ye.clipTriangleAtAxisAlignedThreshold(Be,t,H[0].getV(),H[1].getV(),H[2].getV(),Ae),H,b)))}var L=r?-be:0,W=t?-be:0,Y=[],_=[],j=[],G=[],J=Number.MAX_VALUE,Z=-J,Q=Ee;Q.length=0;var $=ge.Ellipsoid.clone(e.ellipsoid),ee=e.childRectangle,ie=ee.north,re=ee.south,te=ee.east,ne=ee.west;for(te<ne&&(te+=ce.CesiumMath.TWO_PI),w=0;w<o.length;++w)v=(v=Math.round(o[w]))<=n?(Y.push(w),0):s<=v?(j.push(w),be):2*v+L,o[w]=v,C=(C=Math.round(d[w]))<=h?(_.push(w),0):u<=C?(G.push(w),be):2*C+W,d[w]=C,(m=ce.CesiumMath.lerp(E,O,p[w]/be))<J&&(J=m),Z<m&&(Z=m),p[w]=m,Oe.longitude=ce.CesiumMath.lerp(ne,te,v/be),Oe.latitude=ce.CesiumMath.lerp(re,ie,C/be),Oe.height=m,$.cartographicToCartesian(Oe,De),Q.push(De.x),Q.push(De.y),Q.push(De.z);var se=me.BoundingSphere.fromVertices(Q,ge.Cartesian3.ZERO,3,qe),he=xe.OrientedBoundingBox.fromRectangle(ee,J,Z,$,He),ue=new ve.EllipsoidalOccluder($).computeHorizonCullingPointFromVertices(se.center,Q,3,se.center,Ne),oe=Z-J,de=new Uint16Array(o.length+d.length+p.length);for(w=0;w<o.length;++w)de[w]=o[w];var pe=o.length;for(w=0;w<d.length;++w)de[pe+w]=d[w];for(pe+=d.length,w=0;w<p.length;++w)de[pe+w]=be*(p[w]-J)/oe;var ae,fe=we.IndexDatatype.createTypedArray(o.length,f);if(b){var le=new Uint8Array(a);i.push(de.buffer,fe.buffer,le.buffer),ae=le.buffer}else i.push(de.buffer,fe.buffer);return{vertices:de.buffer,encodedNormals:ae,indices:fe.buffer,minimumHeight:J,maximumHeight:Z,westIndices:Y,southIndices:_,eastIndices:j,northIndices:G,boundingSphere:se,orientedBoundingBox:he,horizonOcclusionPoint:ue}})});
