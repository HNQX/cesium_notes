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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./defineProperties-ae15c9d5","./Transforms-94513c2d","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-9477db2c","./GeometryAttribute-4754007e","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-668aa2f9","./IntersectionTests-f6d27a39","./Plane-297770b0","./ArcType-c72d871a","./EllipsoidRhumbLine-d5ed1c3f","./EllipsoidGeodesic-b257688e","./PolylinePipeline-5ad419cb","./Color-43d6d8f5"],function(S,f,e,c,I,O,o,R,r,t,M,U,a,q,N,i,l,F,n,d,z,H){"use strict";function W(e,o,r,t,a,i,l){var n,d=z.PolylinePipeline.numberOfPoints(e,o,a),s=r.red,p=r.green,f=r.blue,c=r.alpha,u=t.red,y=t.green,h=t.blue,C=t.alpha;if(H.Color.equals(r,t)){for(n=0;n<d;n++)i[l++]=H.Color.floatToByte(s),i[l++]=H.Color.floatToByte(p),i[l++]=H.Color.floatToByte(f),i[l++]=H.Color.floatToByte(c);return l}var g=(u-s)/d,T=(y-p)/d,v=(h-f)/d,m=(C-c)/d,E=l;for(n=0;n<d;n++)i[E++]=H.Color.floatToByte(s+n*g),i[E++]=H.Color.floatToByte(p+n*T),i[E++]=H.Color.floatToByte(f+n*v),i[E++]=H.Color.floatToByte(c+n*m);return E}function u(e){var o=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).positions,r=e.colors,t=c.defaultValue(e.colorsPerVertex,!1);if(!S.defined(o)||o.length<2)throw new f.DeveloperError("At least two positions are required.");if(S.defined(r)&&(t&&r.length<o.length||!t&&r.length<o.length-1))throw new f.DeveloperError("colors has an invalid length.");this._positions=o,this._colors=r,this._colorsPerVertex=t,this._arcType=c.defaultValue(e.arcType,F.ArcType.GEODESIC),this._granularity=c.defaultValue(e.granularity,I.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=c.defaultValue(e.ellipsoid,O.Ellipsoid.WGS84),this._workerName="createSimplePolylineGeometry";var a=1+o.length*O.Cartesian3.packedLength;a+=S.defined(r)?1+r.length*H.Color.packedLength:1,this.packedLength=a+O.Ellipsoid.packedLength+3}u.pack=function(e,o,r){if(!S.defined(e))throw new f.DeveloperError("value is required");if(!S.defined(o))throw new f.DeveloperError("array is required");var t;r=c.defaultValue(r,0);var a=e._positions,i=a.length;for(o[r++]=i,t=0;t<i;++t,r+=O.Cartesian3.packedLength)O.Cartesian3.pack(a[t],o,r);var l=e._colors;for(i=S.defined(l)?l.length:0,o[r++]=i,t=0;t<i;++t,r+=H.Color.packedLength)H.Color.pack(l[t],o,r);return O.Ellipsoid.pack(e._ellipsoid,o,r),r+=O.Ellipsoid.packedLength,o[r++]=e._colorsPerVertex?1:0,o[r++]=e._arcType,o[r]=e._granularity,o},u.unpack=function(e,o,r){if(!S.defined(e))throw new f.DeveloperError("array is required");var t;o=c.defaultValue(o,0);var a=e[o++],i=new Array(a);for(t=0;t<a;++t,o+=O.Cartesian3.packedLength)i[t]=O.Cartesian3.unpack(e,o);var l=0<(a=e[o++])?new Array(a):void 0;for(t=0;t<a;++t,o+=H.Color.packedLength)l[t]=H.Color.unpack(e,o);var n=O.Ellipsoid.unpack(e,o);o+=O.Ellipsoid.packedLength;var d=1===e[o++],s=e[o++],p=e[o];return S.defined(r)?(r._positions=i,r._colors=l,r._ellipsoid=n,r._colorsPerVertex=d,r._arcType=s,r._granularity=p,r):new u({positions:i,colors:l,ellipsoid:n,colorsPerVertex:d,arcType:s,granularity:p})};var Y=new Array(2),j=new Array(2),J={positions:Y,height:j,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return u.createGeometry=function(e){var o,r,t,a,i,l=e._positions,n=e._colors,d=e._colorsPerVertex,s=e._arcType,p=e._granularity,f=e._ellipsoid,c=I.CesiumMath.chordLength(p,f.maximumRadius),u=S.defined(n)&&!d,y=l.length,h=0;if(s===F.ArcType.GEODESIC||s===F.ArcType.RHUMB){var C,g,T;T=s===F.ArcType.GEODESIC?(C=I.CesiumMath.chordLength(p,f.maximumRadius),g=z.PolylinePipeline.numberOfPoints,z.PolylinePipeline.generateArc):(C=p,g=z.PolylinePipeline.numberOfPointsRhumbLine,z.PolylinePipeline.generateRhumbArc);var v=z.PolylinePipeline.extractHeights(l,f),m=J;if(s===F.ArcType.GEODESIC?m.minDistance=c:m.granularity=p,m.ellipsoid=f,u){var E=0;for(o=0;o<y-1;o++)E+=g(l[o],l[o+1],C)+1;r=new Float64Array(3*E),a=new Uint8Array(4*E),m.positions=Y,m.height=j;var b=0;for(o=0;o<y-1;++o){Y[0]=l[o],Y[1]=l[o+1],j[0]=v[o],j[1]=v[o+1];var P=T(m);if(S.defined(n)){var _=P.length/3;i=n[o];for(var A=0;A<_;++A)a[b++]=H.Color.floatToByte(i.red),a[b++]=H.Color.floatToByte(i.green),a[b++]=H.Color.floatToByte(i.blue),a[b++]=H.Color.floatToByte(i.alpha)}r.set(P,h),h+=P.length}}else if(m.positions=l,m.height=v,r=new Float64Array(T(m)),S.defined(n)){for(a=new Uint8Array(r.length/3*4),o=0;o<y-1;++o){h=W(l[o],l[o+1],n[o],n[o+1],c,a,h)}var B=n[y-1];a[h++]=H.Color.floatToByte(B.red),a[h++]=H.Color.floatToByte(B.green),a[h++]=H.Color.floatToByte(B.blue),a[h++]=H.Color.floatToByte(B.alpha)}}else{t=u?2*y-2:y,r=new Float64Array(3*t),a=S.defined(n)?new Uint8Array(4*t):void 0;var w=0,k=0;for(o=0;o<y;++o){var D=l[o];if(u&&0<o&&(O.Cartesian3.pack(D,r,w),w+=3,i=n[o-1],a[k++]=H.Color.floatToByte(i.red),a[k++]=H.Color.floatToByte(i.green),a[k++]=H.Color.floatToByte(i.blue),a[k++]=H.Color.floatToByte(i.alpha)),u&&o===y-1)break;O.Cartesian3.pack(D,r,w),w+=3,S.defined(n)&&(i=n[o],a[k++]=H.Color.floatToByte(i.red),a[k++]=H.Color.floatToByte(i.green),a[k++]=H.Color.floatToByte(i.blue),a[k++]=H.Color.floatToByte(i.alpha))}}var G=new q.GeometryAttributes;G.position=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:r}),S.defined(n)&&(G.color=new U.GeometryAttribute({componentDatatype:M.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:a,normalize:!0}));var L=2*((t=r.length/3)-1),V=N.IndexDatatype.createTypedArray(t,L),x=0;for(o=0;o<t-1;++o)V[x++]=o,V[x++]=o+1;return new U.Geometry({attributes:G,indices:V,primitiveType:U.PrimitiveType.LINES,boundingSphere:R.BoundingSphere.fromPoints(l)})},function(e,o){return S.defined(o)&&(e=u.unpack(e,o)),e._ellipsoid=O.Ellipsoid.clone(e._ellipsoid),u.createGeometry(e)}});