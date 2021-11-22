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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./defineProperties-ae15c9d5","./Transforms-94513c2d","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-9477db2c","./GeometryAttribute-4754007e","./when-c208a7cf","./GeometryAttributes-c3465b51","./IndexDatatype-668aa2f9","./GeometryOffsetAttribute-5aa2ee88","./EllipsoidRhumbLine-d5ed1c3f","./PolygonPipeline-eaa2424e","./RectangleGeometryLibrary-70e4007b"],function(h,d,e,p,y,c,t,m,i,r,E,A,a,w,G,b,n,R,P){"use strict";var v=new m.BoundingSphere,_=new m.BoundingSphere,D=new c.Cartesian3,L=new c.Rectangle;function C(e,t){var i=e._ellipsoid,r=t.height,a=t.width,n=t.northCap,o=t.southCap,l=r,u=2,s=0,d=4;n&&(--u,--l,s+=1,d-=2),o&&(--u,--l,s+=1,d-=2),s+=u*a+2*l-d;var p,c=new Float64Array(3*s),f=0,g=0,h=D;if(n)P.RectangleGeometryLibrary.computePosition(t,i,!1,g,0,h),c[f++]=h.x,c[f++]=h.y,c[f++]=h.z;else for(p=0;p<a;p++)P.RectangleGeometryLibrary.computePosition(t,i,!1,g,p,h),c[f++]=h.x,c[f++]=h.y,c[f++]=h.z;for(p=a-1,g=1;g<r;g++)P.RectangleGeometryLibrary.computePosition(t,i,!1,g,p,h),c[f++]=h.x,c[f++]=h.y,c[f++]=h.z;if(g=r-1,!o)for(p=a-2;0<=p;p--)P.RectangleGeometryLibrary.computePosition(t,i,!1,g,p,h),c[f++]=h.x,c[f++]=h.y,c[f++]=h.z;for(p=0,g=r-2;0<g;g--)P.RectangleGeometryLibrary.computePosition(t,i,!1,g,p,h),c[f++]=h.x,c[f++]=h.y,c[f++]=h.z;for(var y=c.length/3*2,m=G.IndexDatatype.createTypedArray(c.length/3,y),b=0,v=0;v<c.length/3-1;v++)m[b++]=v,m[b++]=v+1;m[b++]=c.length/3-1,m[b++]=0;var _=new A.Geometry({attributes:new w.GeometryAttributes,primitiveType:A.PrimitiveType.LINES});return _.attributes.position=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:c}),_.indices=m,_}function f(e){var t=(e=p.defaultValue(e,p.defaultValue.EMPTY_OBJECT)).rectangle,i=p.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),r=p.defaultValue(e.ellipsoid,c.Ellipsoid.WGS84),a=p.defaultValue(e.rotation,0);if(!h.defined(t))throw new d.DeveloperError("rectangle is required.");if(c.Rectangle.validate(t),t.north<t.south)throw new d.DeveloperError("options.rectangle.north must be greater than options.rectangle.south");var n=p.defaultValue(e.height,0),o=p.defaultValue(e.extrudedHeight,n);this._rectangle=c.Rectangle.clone(t),this._granularity=i,this._ellipsoid=r,this._surfaceHeight=Math.max(n,o),this._rotation=a,this._extrudedHeight=Math.min(n,o),this._offsetAttribute=e.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}f.packedLength=c.Rectangle.packedLength+c.Ellipsoid.packedLength+5,f.pack=function(e,t,i){if(!h.defined(e))throw new d.DeveloperError("value is required");if(!h.defined(t))throw new d.DeveloperError("array is required");return i=p.defaultValue(i,0),c.Rectangle.pack(e._rectangle,t,i),i+=c.Rectangle.packedLength,c.Ellipsoid.pack(e._ellipsoid,t,i),i+=c.Ellipsoid.packedLength,t[i++]=e._granularity,t[i++]=e._surfaceHeight,t[i++]=e._rotation,t[i++]=e._extrudedHeight,t[i]=p.defaultValue(e._offsetAttribute,-1),t};var g=new c.Rectangle,x=c.Ellipsoid.clone(c.Ellipsoid.UNIT_SPHERE),H={rectangle:g,ellipsoid:x,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};f.unpack=function(e,t,i){if(!h.defined(e))throw new d.DeveloperError("array is required");t=p.defaultValue(t,0);var r=c.Rectangle.unpack(e,t,g);t+=c.Rectangle.packedLength;var a=c.Ellipsoid.unpack(e,t,x);t+=c.Ellipsoid.packedLength;var n=e[t++],o=e[t++],l=e[t++],u=e[t++],s=e[t];return h.defined(i)?(i._rectangle=c.Rectangle.clone(r,i._rectangle),i._ellipsoid=c.Ellipsoid.clone(a,i._ellipsoid),i._surfaceHeight=o,i._rotation=l,i._extrudedHeight=u,i._offsetAttribute=-1===s?void 0:s,i):(H.granularity=n,H.height=o,H.rotation=l,H.extrudedHeight=u,H.offsetAttribute=-1===s?void 0:s,new f(H))};var O=new c.Cartographic;return f.createGeometry=function(e){var t,i,r=e._rectangle,a=e._ellipsoid,n=P.RectangleGeometryLibrary.computeOptions(r,e._granularity,e._rotation,0,L,O);if(!y.CesiumMath.equalsEpsilon(r.north,r.south,y.CesiumMath.EPSILON10)&&!y.CesiumMath.equalsEpsilon(r.east,r.west,y.CesiumMath.EPSILON10)){var o,l=e._surfaceHeight,u=e._extrudedHeight;if(!y.CesiumMath.equalsEpsilon(l,u,0,y.CesiumMath.EPSILON2)){if(t=function(e,t){var i=e._surfaceHeight,r=e._extrudedHeight,a=e._ellipsoid,n=r,o=i,l=C(e,t),u=t.height,s=t.width,d=R.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,o,a,!1),p=d.length,c=new Float64Array(2*p);c.set(d);var f=R.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,n,a);c.set(f,p),l.attributes.position.values=c;var g=t.northCap,h=t.southCap,y=4;g&&--y,h&&--y;var m=2*(c.length/3+y),b=G.IndexDatatype.createTypedArray(c.length/3,m);p=c.length/6;for(var v,_=0,E=0;E<p-1;E++)b[_++]=E,b[_++]=E+1,b[_++]=E+p,b[_++]=E+p+1;if(b[_++]=p-1,b[_++]=0,b[_++]=p+p-1,b[_++]=p,b[_++]=0,b[_++]=p,g)v=u-1;else{var A=s-1;b[_++]=A,b[_++]=A+p,v=s+u-2}if(b[_++]=v,b[_++]=v+p,!h){var w=s+v-1;b[_++]=w,b[_]=w+p}return l.indices=b,l}(e,n),h.defined(e._offsetAttribute)){var s=t.attributes.position.values.length/3,d=new Uint8Array(s);d=e._offsetAttribute===b.GeometryOffsetAttribute.TOP?b.arrayFill(d,1,0,s/2):(o=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(d,o)),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:d})}var p=m.BoundingSphere.fromRectangle3D(r,a,l,_),c=m.BoundingSphere.fromRectangle3D(r,a,u,v);i=m.BoundingSphere.union(p,c)}else{if((t=C(e,n)).attributes.position.values=R.PolygonPipeline.scaleToGeodeticHeight(t.attributes.position.values,l,a,!1),h.defined(e._offsetAttribute)){var f=t.attributes.position.values.length,g=new Uint8Array(f/3);o=e._offsetAttribute===b.GeometryOffsetAttribute.NONE?0:1,b.arrayFill(g,o),t.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:E.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}i=m.BoundingSphere.fromRectangle3D(r,a,l)}return new A.Geometry({attributes:t.attributes,indices:t.indices,primitiveType:A.PrimitiveType.LINES,boundingSphere:i,offsetAttribute:e._offsetAttribute})}},function(e,t){return h.defined(t)&&(e=f.unpack(e,t)),e._ellipsoid=c.Ellipsoid.clone(e._ellipsoid),e._rectangle=c.Rectangle.clone(e._rectangle),f.createGeometry(e)}});
