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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./Transforms-94513c2d","./IntersectionTests-f6d27a39","./Plane-297770b0","./EllipsoidRhumbLine-d5ed1c3f","./EllipsoidGeodesic-b257688e"],function(a,w,T,P,y,E,A,v,m,b,e){"use strict";var S={numberOfPoints:function(a,e,r){var i=E.Cartesian3.distance(a,e);return Math.ceil(i/r)},numberOfPointsRhumbLine:function(a,e,r){var i=Math.pow(a.longitude-e.longitude,2)+Math.pow(a.latitude-e.latitude,2);return Math.ceil(Math.sqrt(i/(r*r)))}},o=new E.Cartographic;S.extractHeights=function(a,e){for(var r=a.length,i=new Array(r),t=0;t<r;t++){var n=a[t];i[t]=e.cartesianToCartographic(n,o).height}return i};var R=new A.Matrix4,D=new E.Cartesian3,M=new E.Cartesian3,G=new m.Plane(E.Cartesian3.UNIT_X,0),x=new E.Cartesian3,N=new m.Plane(E.Cartesian3.UNIT_X,0),I=new E.Cartesian3,V=new E.Cartesian3,k=[];function L(a,e,r){var i,t=k;if(t.length=a,e===r){for(i=0;i<a;i++)t[i]=e;return t}var n=(r-e)/a;for(i=0;i<a;i++){var o=e+i*n;t[i]=o}return t}var _=new E.Cartographic,O=new E.Cartographic,B=new E.Cartesian3,U=new E.Cartesian3,q=new E.Cartesian3,z=new e.EllipsoidGeodesic,X=new b.EllipsoidRhumbLine;function W(a,e,r,i,t,n,o,s){var c=i.scaleToGeodeticSurface(a,U),l=i.scaleToGeodeticSurface(e,q),u=S.numberOfPoints(a,e,r),f=i.cartesianToCartographic(c,_),h=i.cartesianToCartographic(l,O),d=L(u,t,n);z.setEndPoints(f,h);var p=z.surfaceDistance/u,C=s;f.height=t;var g=i.cartographicToCartesian(f,B);E.Cartesian3.pack(g,o,C),C+=3;for(var v=1;v<u;v++){var m=z.interpolateUsingSurfaceDistance(v*p,O);m.height=d[v],g=i.cartographicToCartesian(m,B),E.Cartesian3.pack(g,o,C),C+=3}return C}function Y(a,e,r,i,t,n,o,s){var c=i.scaleToGeodeticSurface(a,U),l=i.scaleToGeodeticSurface(e,q),u=i.cartesianToCartographic(c,_),f=i.cartesianToCartographic(l,O),h=S.numberOfPointsRhumbLine(u,f,r),d=L(h,t,n);X.ellipsoid.equals(i)||(X=new b.EllipsoidRhumbLine(void 0,void 0,i)),X.setEndPoints(u,f);var p=X.surfaceDistance/h,C=s;u.height=t;var g=i.cartographicToCartesian(u,B);E.Cartesian3.pack(g,o,C),C+=3;for(var v=1;v<h;v++){var m=X.interpolateUsingSurfaceDistance(v*p,O);m.height=d[v],g=i.cartographicToCartesian(m,B),E.Cartesian3.pack(g,o,C),C+=3}return C}S.wrapLongitude=function(a,e){var r=[],i=[];if(w.defined(a)&&0<a.length){e=P.defaultValue(e,A.Matrix4.IDENTITY);var t=A.Matrix4.inverseTransformation(e,R),n=A.Matrix4.multiplyByPoint(t,E.Cartesian3.ZERO,D),o=E.Cartesian3.normalize(A.Matrix4.multiplyByPointAsVector(t,E.Cartesian3.UNIT_Y,M),M),s=m.Plane.fromPointNormal(n,o,G),c=E.Cartesian3.normalize(A.Matrix4.multiplyByPointAsVector(t,E.Cartesian3.UNIT_X,x),x),l=m.Plane.fromPointNormal(n,c,N),u=1;r.push(E.Cartesian3.clone(a[0]));for(var f=r[0],h=a.length,d=1;d<h;++d){var p=a[d];if(m.Plane.getPointDistance(l,f)<0||m.Plane.getPointDistance(l,p)<0){var C=v.IntersectionTests.lineSegmentPlane(f,p,s,I);if(w.defined(C)){var g=E.Cartesian3.multiplyByScalar(o,5e-9,V);m.Plane.getPointDistance(s,f)<0&&E.Cartesian3.negate(g,g),r.push(E.Cartesian3.add(C,g,new E.Cartesian3)),i.push(u+1),E.Cartesian3.negate(g,g),r.push(E.Cartesian3.add(C,g,new E.Cartesian3)),u=1}}r.push(E.Cartesian3.clone(a[d])),u++,f=p}i.push(u)}return{positions:r,lengths:i}},S.generateArc=function(a){w.defined(a)||(a={});var e=a.positions;if(!w.defined(e))throw new T.DeveloperError("options.positions is required.");var r=e.length,i=P.defaultValue(a.ellipsoid,E.Ellipsoid.WGS84),t=P.defaultValue(a.height,0),n=A.isArray(t);if(r<1)return[];if(1===r){var o=i.scaleToGeodeticSurface(e[0],U);if(0!==(t=n?t[0]:t)){var s=i.geodeticSurfaceNormal(o,B);E.Cartesian3.multiplyByScalar(s,t,s),E.Cartesian3.add(o,s,o)}return[o.x,o.y,o.z]}var c=a.minDistance;if(!w.defined(c)){var l=P.defaultValue(a.granularity,y.CesiumMath.RADIANS_PER_DEGREE);c=y.CesiumMath.chordLength(l,i.maximumRadius)}var u,f=0;for(u=0;u<r-1;u++)f+=S.numberOfPoints(e[u],e[u+1],c);var h=3*(f+1),d=new Array(h),p=0;for(u=0;u<r-1;u++){p=W(e[u],e[u+1],c,i,n?t[u]:t,n?t[u+1]:t,d,p)}k.length=0;var C=e[r-1],g=i.cartesianToCartographic(C,_);g.height=n?t[r-1]:t;var v=i.cartographicToCartesian(g,B);return E.Cartesian3.pack(v,d,h-3),d};var H=new E.Cartographic,Z=new E.Cartographic;S.generateRhumbArc=function(a){w.defined(a)||(a={});var e=a.positions;if(!w.defined(e))throw new T.DeveloperError("options.positions is required.");var r=e.length,i=P.defaultValue(a.ellipsoid,E.Ellipsoid.WGS84),t=P.defaultValue(a.height,0),n=A.isArray(t);if(r<1)return[];if(1===r){var o=i.scaleToGeodeticSurface(e[0],U);if(0!==(t=n?t[0]:t)){var s=i.geodeticSurfaceNormal(o,B);E.Cartesian3.multiplyByScalar(s,t,s),E.Cartesian3.add(o,s,o)}return[o.x,o.y,o.z]}var c,l,u=P.defaultValue(a.granularity,y.CesiumMath.RADIANS_PER_DEGREE),f=0,h=i.cartesianToCartographic(e[0],H);for(c=0;c<r-1;c++)l=i.cartesianToCartographic(e[c+1],Z),f+=S.numberOfPointsRhumbLine(h,l,u),h=E.Cartographic.clone(l,H);var d=3*(f+1),p=new Array(d),C=0;for(c=0;c<r-1;c++){C=Y(e[c],e[c+1],u,i,n?t[c]:t,n?t[c+1]:t,p,C)}k.length=0;var g=e[r-1],v=i.cartesianToCartographic(g,_);v.height=n?t[r-1]:t;var m=i.cartographicToCartesian(v,B);return E.Cartesian3.pack(m,p,d-3),p},S.generateCartesianArc=function(a){for(var e=S.generateArc(a),r=e.length/3,i=new Array(r),t=0;t<r;t++)i[t]=E.Cartesian3.unpack(e,3*t);return i},S.generateCartesianRhumbArc=function(a){for(var e=S.generateRhumbArc(a),r=e.length/3,i=new Array(r),t=0;t<r;t++)i[t]=E.Cartesian3.unpack(e,3*t);return i},a.PolylinePipeline=S});
