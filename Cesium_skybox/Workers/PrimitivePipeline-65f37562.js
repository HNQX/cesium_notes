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
define(["exports","./defined-b9ff0e39","./Check-e6691f86","./defaultValue-199f5aa8","./Cartesian2-40ed5530","./defineProperties-ae15c9d5","./Transforms-94513c2d","./ComponentDatatype-9477db2c","./GeometryAttribute-4754007e","./GeometryAttributes-c3465b51","./GeometryPipeline-bd87b3b1","./IndexDatatype-668aa2f9","./WebMercatorProjection-a290a2f5"],function(e,b,G,x,u,t,P,k,C,w,S,A,c){"use strict";function m(e,t,r){e=x.defaultValue(e,0),t=x.defaultValue(t,0),r=x.defaultValue(r,0),this.value=new Float32Array([e,t,r])}function V(e,t){var r=e.attributes,n=r.position,i=n.values.length/n.componentsPerAttribute;r.batchId=new C.GeometryAttribute({componentDatatype:k.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(i)});for(var o=r.batchId.values,a=0;a<i;++a)o[a]=t}function v(e){var t,r,n,i=e.instances,o=e.projection,a=e.elementIndexUintSupported,s=e.scene3DOnly,d=e.vertexCacheOptimize,p=e.compressVertices,f=e.modelMatrix,u=i.length;for(t=0;t<u;++t)if(b.defined(i[t].geometry)){n=i[t].geometry.primitiveType;break}for(t=1;t<u;++t)if(b.defined(i[t].geometry)&&i[t].geometry.primitiveType!==n)throw new G.DeveloperError("All instance geometries must have the same primitiveType.");if(!function(e,t,r){var n,i=!r,o=e.length;if(!i&&1<o){var a=e[0].modelMatrix;for(n=1;n<o;++n)if(!P.Matrix4.equals(a,e[n].modelMatrix)){i=!0;break}}if(i)for(n=0;n<o;++n)b.defined(e[n].geometry)&&S.GeometryPipeline.transformToWorldCoordinates(e[n]);else P.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(i,f,s),!s)for(t=0;t<u;++t)b.defined(i[t].geometry)&&S.GeometryPipeline.splitLongitude(i[t]);if(!function(e){for(var t=e.length,r=0;r<t;++r){var n=e[r];b.defined(n.geometry)?V(n.geometry,r):b.defined(n.westHemisphereGeometry)&&b.defined(n.eastHemisphereGeometry)&&(V(n.westHemisphereGeometry,r),V(n.eastHemisphereGeometry,r))}}(i),d)for(t=0;t<u;++t){var c=i[t];b.defined(c.geometry)?(S.GeometryPipeline.reorderForPostVertexCache(c.geometry),S.GeometryPipeline.reorderForPreVertexCache(c.geometry)):b.defined(c.westHemisphereGeometry)&&b.defined(c.eastHemisphereGeometry)&&(S.GeometryPipeline.reorderForPostVertexCache(c.westHemisphereGeometry),S.GeometryPipeline.reorderForPreVertexCache(c.westHemisphereGeometry),S.GeometryPipeline.reorderForPostVertexCache(c.eastHemisphereGeometry),S.GeometryPipeline.reorderForPreVertexCache(c.eastHemisphereGeometry))}var m=S.GeometryPipeline.combineInstances(i);for(u=m.length,t=0;t<u;++t){var l,h=(r=m[t]).attributes;if(s)for(l in h)h.hasOwnProperty(l)&&h[l].componentDatatype===k.ComponentDatatype.DOUBLE&&S.GeometryPipeline.encodeAttribute(r,l,l+"3DHigh",l+"3DLow");else for(l in h)if(h.hasOwnProperty(l)&&h[l].componentDatatype===k.ComponentDatatype.DOUBLE){var g=l+"3D",y=l+"2D";S.GeometryPipeline.projectTo2D(r,l,g,y,o),b.defined(r.boundingSphere)&&"position"===l&&(r.boundingSphereCV=P.BoundingSphere.fromVertices(r.attributes.position2D.values)),S.GeometryPipeline.encodeAttribute(r,g,g+"High",g+"Low"),S.GeometryPipeline.encodeAttribute(r,y,y+"High",y+"Low")}p&&S.GeometryPipeline.compressVertices(r)}if(!a){var v=[];for(u=m.length,t=0;t<u;++t)r=m[t],v=v.concat(S.GeometryPipeline.fitToUnsignedShortIndices(r));m=v}return m}function D(e,t,r,n){var i,o,a,s=n.length-1;if(0<=s){var d=n[s];i=d.offset+d.count,o=r[a=d.index].indices.length}else o=r[a=i=0].indices.length;for(var p=e.length,f=0;f<p;++f){var u=e[f][t];if(b.defined(u)){var c=u.indices.length;o<i+c&&(i=0,o=r[++a].indices.length),n.push({index:a,offset:i,count:c}),i+=c}}}t.defineProperties(m.prototype,{componentDatatype:{get:function(){return k.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),m.fromCartesian3=function(e){return G.Check.defined("offset",e),new m(e.x,e.y,e.z)},m.toValue=function(e,t){return G.Check.defined("offset",e),b.defined(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};var l={};function i(e,t){var r=e.attributes;for(var n in r)if(r.hasOwnProperty(n)){var i=r[n];b.defined(i)&&b.defined(i.values)&&t.push(i.values.buffer)}b.defined(e.indices)&&t.push(e.indices.buffer)}function o(e){var t=e.length,r=1+(P.BoundingSphere.packedLength+1)*t,n=new Float32Array(r),i=0;n[i++]=t;for(var o=0;o<t;++o){var a=e[o];b.defined(a)?(n[i++]=1,P.BoundingSphere.pack(e[o],n,i)):n[i++]=0,i+=P.BoundingSphere.packedLength}return n}function r(e){for(var t=new Array(e[0]),r=0,n=1;n<e.length;)1===e[n++]&&(t[r]=P.BoundingSphere.unpack(e,n)),++r,n+=P.BoundingSphere.packedLength;return t}l.combineGeometry=function(e){var t,r,n,i,o,a,s,d=e.instances,p=d.length,f=!1;0<p&&(0<(t=v(e)).length&&(r=S.GeometryPipeline.createAttributeLocations(t[0]),e.createPickOffsets&&(D(o=d,"geometry",a=t,s=[]),D(o,"westHemisphereGeometry",a,s),D(o,"eastHemisphereGeometry",a,s),n=s)),b.defined(d[0].attributes)&&b.defined(d[0].attributes.offset)&&(i=new Array(p),f=!0));for(var u=new Array(p),c=new Array(p),m=0;m<p;++m){var l=d[m],h=l.geometry;b.defined(h)&&(u[m]=h.boundingSphere,c[m]=h.boundingSphereCV,f&&(i[m]=l.geometry.offsetAttribute));var g=l.eastHemisphereGeometry,y=l.westHemisphereGeometry;b.defined(g)&&b.defined(y)&&(b.defined(g.boundingSphere)&&b.defined(y.boundingSphere)&&(u[m]=P.BoundingSphere.union(g.boundingSphere,y.boundingSphere)),b.defined(g.boundingSphereCV)&&b.defined(y.boundingSphereCV)&&(c[m]=P.BoundingSphere.union(g.boundingSphereCV,y.boundingSphereCV)))}return{geometries:t,modelMatrix:e.modelMatrix,attributeLocations:r,pickOffsets:n,offsetInstanceExtend:i,boundingSpheres:u,boundingSpheresCV:c}},l.packCreateGeometryResults=function(e,t){var r=new Float64Array(function(e){for(var t=1,r=e.length,n=0;n<r;n++){var i=e[n];if(++t,b.defined(i)){var o=i.attributes;for(var a in t+=7+2*P.BoundingSphere.packedLength+(b.defined(i.indices)?i.indices.length:0),o){if(o.hasOwnProperty(a)&&b.defined(o[a]))t+=5+o[a].values.length}}}return t}(e)),n=[],i={},o=e.length,a=0;r[a++]=o;for(var s=0;s<o;s++){var d=e[s],p=b.defined(d);if(r[a++]=p?1:0,p){r[a++]=d.primitiveType,r[a++]=d.geometryType,r[a++]=x.defaultValue(d.offsetAttribute,-1);var f=b.defined(d.boundingSphere)?1:0;(r[a++]=f)&&P.BoundingSphere.pack(d.boundingSphere,r,a),a+=P.BoundingSphere.packedLength;var u=b.defined(d.boundingSphereCV)?1:0;(r[a++]=u)&&P.BoundingSphere.pack(d.boundingSphereCV,r,a),a+=P.BoundingSphere.packedLength;var c=d.attributes,m=[];for(var l in c)c.hasOwnProperty(l)&&b.defined(c[l])&&(m.push(l),b.defined(i[l])||(i[l]=n.length,n.push(l)));r[a++]=m.length;for(var h=0;h<m.length;h++){var g=m[h],y=c[g];r[a++]=i[g],r[a++]=y.componentDatatype,r[a++]=y.componentsPerAttribute,r[a++]=y.normalize?1:0,r[a++]=y.values.length,r.set(y.values,a),a+=y.values.length}var v=b.defined(d.indices)?d.indices.length:0;0<(r[a++]=v)&&(r.set(d.indices,a),a+=v)}}return t.push(r.buffer),{stringTable:n,packedData:r}},l.unpackCreateGeometryResults=function(e){for(var t,r=e.stringTable,n=e.packedData,i=new Array(n[0]),o=0,a=1;a<n.length;){if(1===n[a++]){var s,d,p,f,u,c=n[a++],m=n[a++],l=n[a++];-1===l&&(l=void 0),1===n[a++]&&(s=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength,1===n[a++]&&(d=P.BoundingSphere.unpack(n,a)),a+=P.BoundingSphere.packedLength;var h,g=new w.GeometryAttributes,y=n[a++];for(t=0;t<y;t++){var v=r[n[a++]],b=n[a++];u=n[a++];var G=0!==n[a++];p=n[a++],f=k.ComponentDatatype.createTypedArray(b,p);for(var x=0;x<p;x++)f[x]=n[a++];g[v]=new C.GeometryAttribute({componentDatatype:b,componentsPerAttribute:u,normalize:G,values:f})}if(0<(p=n[a++])){var S=f.length/u;for(h=A.IndexDatatype.createTypedArray(S,p),t=0;t<p;t++)h[t]=n[a++]}i[o++]=new C.Geometry({primitiveType:c,geometryType:m,boundingSphere:s,boundingSphereCV:d,indices:h,attributes:g,offsetAttribute:l})}else i[o++]=void 0}return i},l.packCombineGeometryParameters=function(e,t){for(var r=e.createGeometryResults,n=r.length,i=0;i<n;i++)t.push(r[i].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:function(e,t){var r=e.length,n=new Float64Array(1+19*r),i=0;n[i++]=r;for(var o=0;o<r;o++){var a=e[o];if(P.Matrix4.pack(a.modelMatrix,n,i),i+=P.Matrix4.packedLength,b.defined(a.attributes)&&b.defined(a.attributes.offset)){var s=a.attributes.offset.value;n[i]=s[0],n[i+1]=s[1],n[i+2]=s[2]}i+=3}return t.push(n.buffer),n}(e.instances,t),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof P.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},l.unpackCombineGeometryParameters=function(e){for(var t=function(e){for(var t=e,r=new Array(t[0]),n=0,i=1;i<t.length;){var o,a=P.Matrix4.unpack(t,i);i+=P.Matrix4.packedLength,b.defined(t[i])&&(o={offset:new m(t[i],t[i+1],t[i+2])}),i+=3,r[n++]={modelMatrix:a,attributes:o}}return r}(e.packedInstances),r=e.createGeometryResults,n=r.length,i=0,o=0;o<n;o++)for(var a=l.unpackCreateGeometryResults(r[o]),s=a.length,d=0;d<s;d++){var p=a[d];t[i].geometry=p,++i}var f=u.Ellipsoid.clone(e.ellipsoid);return{instances:t,ellipsoid:f,projection:e.isGeographic?new P.GeographicProjection(f):new c.WebMercatorProjection(f),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:P.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},l.packCombineGeometryResults=function(e,t){b.defined(e.geometries)&&function(e,t){for(var r=e.length,n=0;n<r;++n)i(e[n],t)}(e.geometries,t);var r=o(e.boundingSpheres),n=o(e.boundingSpheresCV);return t.push(r.buffer,n.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r,boundingSpheresCV:n}},l.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:r(e.boundingSpheres),boundingSpheresCV:r(e.boundingSpheresCV)}},e.PrimitivePipeline=l});
