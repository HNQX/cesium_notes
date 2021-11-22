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
define(["exports","./defined-b9ff0e39","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./Transforms-94513c2d","./ComponentDatatype-9477db2c","./AttributeCompression-a7396e6f"],function(t,M,e,b,f,T,N,s,l){"use strict";var g=e.freezeObject({NONE:0,BITS12:1}),v=new T.Cartesian3,S=new T.Cartesian3,C=new T.Cartesian2,B=new N.Matrix4,E=new N.Matrix4,A=Math.pow(2,12);function r(t,e,r,i,a,n){var o,s,m,u=g.NONE;if(M.defined(t)&&M.defined(e)&&M.defined(r)&&M.defined(i)){var c=t.minimum,d=t.maximum,h=T.Cartesian3.subtract(d,c,S),p=r-e;u=Math.max(T.Cartesian3.maximumComponent(h),p)<A-1?g.BITS12:g.NONE,o=t.center,s=N.Matrix4.inverseTransformation(i,new N.Matrix4);var x=T.Cartesian3.negate(c,v);N.Matrix4.multiply(N.Matrix4.fromTranslation(x,B),s,s);var f=v;f.x=1/h.x,f.y=1/h.y,f.z=1/h.z,N.Matrix4.multiply(N.Matrix4.fromScale(f,B),s,s),m=N.Matrix4.clone(i),N.Matrix4.setTranslation(m,T.Cartesian3.ZERO,m),i=N.Matrix4.clone(i,new N.Matrix4);var l=N.Matrix4.fromTranslation(c,B),C=N.Matrix4.fromScale(h,E),y=N.Matrix4.multiply(l,C,B);N.Matrix4.multiply(i,y,i),N.Matrix4.multiply(m,y,m)}this.quantization=u,this.minimumHeight=e,this.maximumHeight=r,this.center=o,this.toScaledENU=s,this.fromScaledENU=i,this.matrix=m,this.hasVertexNormals=a,this.hasWebMercatorT=b.defaultValue(n,!1)}r.prototype.encode=function(t,e,r,i,a,n,o){var s=i.x,m=i.y;if(this.quantization===g.BITS12){(r=N.Matrix4.multiplyByPoint(this.toScaledENU,r,v)).x=f.CesiumMath.clamp(r.x,0,1),r.y=f.CesiumMath.clamp(r.y,0,1),r.z=f.CesiumMath.clamp(r.z,0,1);var u=this.maximumHeight-this.minimumHeight,c=f.CesiumMath.clamp((a-this.minimumHeight)/u,0,1);T.Cartesian2.fromElements(r.x,r.y,C);var d=l.AttributeCompression.compressTextureCoordinates(C);T.Cartesian2.fromElements(r.z,c,C);var h=l.AttributeCompression.compressTextureCoordinates(C);T.Cartesian2.fromElements(s,m,C);var p=l.AttributeCompression.compressTextureCoordinates(C);if(t[e++]=d,t[e++]=h,t[e++]=p,this.hasWebMercatorT){T.Cartesian2.fromElements(o,0,C);var x=l.AttributeCompression.compressTextureCoordinates(C);t[e++]=x}}else T.Cartesian3.subtract(r,this.center,v),t[e++]=v.x,t[e++]=v.y,t[e++]=v.z,t[e++]=a,t[e++]=s,t[e++]=m,this.hasWebMercatorT&&(t[e++]=o);return this.hasVertexNormals&&(t[e++]=l.AttributeCompression.octPackFloat(n)),e},r.prototype.decodePosition=function(t,e,r){if(M.defined(r)||(r=new T.Cartesian3),e*=this.getStride(),this.quantization!==g.BITS12)return r.x=t[e],r.y=t[e+1],r.z=t[e+2],T.Cartesian3.add(r,this.center,r);var i=l.AttributeCompression.decompressTextureCoordinates(t[e],C);r.x=i.x,r.y=i.y;var a=l.AttributeCompression.decompressTextureCoordinates(t[e+1],C);return r.z=a.x,N.Matrix4.multiplyByPoint(this.fromScaledENU,r,r)},r.prototype.decodeTextureCoordinates=function(t,e,r){return M.defined(r)||(r=new T.Cartesian2),e*=this.getStride(),this.quantization===g.BITS12?l.AttributeCompression.decompressTextureCoordinates(t[e+2],r):T.Cartesian2.fromElements(t[e+4],t[e+5],r)},r.prototype.decodeHeight=function(t,e){return e*=this.getStride(),this.quantization!==g.BITS12?t[e+3]:l.AttributeCompression.decompressTextureCoordinates(t[e+1],C).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight},r.prototype.decodeWebMercatorT=function(t,e){return e*=this.getStride(),this.quantization===g.BITS12?l.AttributeCompression.decompressTextureCoordinates(t[e+3],C).x:t[e+6]},r.prototype.getOctEncodedNormal=function(t,e,r){var i=t[e=(e+1)*this.getStride()-1]/256,a=Math.floor(i),n=256*(i-a);return T.Cartesian2.fromElements(a,n,r)},r.prototype.getStride=function(){var t;switch(this.quantization){case g.BITS12:t=3;break;default:t=6}return this.hasWebMercatorT&&++t,this.hasVertexNormals&&++t,t};var m={position3DAndHeight:0,textureCoordAndEncodedNormals:1},u={compressed0:0,compressed1:1};r.prototype.getAttributes=function(t){var e,r=s.ComponentDatatype.FLOAT,i=s.ComponentDatatype.getSizeInBytes(r);if(this.quantization===g.NONE){var a=2;return this.hasWebMercatorT&&++a,this.hasVertexNormals&&++a,[{index:m.position3DAndHeight,vertexBuffer:t,componentDatatype:r,componentsPerAttribute:4,offsetInBytes:0,strideInBytes:e=(4+a)*i},{index:m.textureCoordAndEncodedNormals,vertexBuffer:t,componentDatatype:r,componentsPerAttribute:a,offsetInBytes:4*i,strideInBytes:e}]}var n=3,o=0;return(this.hasWebMercatorT||this.hasVertexNormals)&&++n,this.hasWebMercatorT&&this.hasVertexNormals?[{index:u.compressed0,vertexBuffer:t,componentDatatype:r,componentsPerAttribute:n,offsetInBytes:0,strideInBytes:e=(n+ ++o)*i},{index:u.compressed1,vertexBuffer:t,componentDatatype:r,componentsPerAttribute:o,offsetInBytes:n*i,strideInBytes:e}]:[{index:u.compressed0,vertexBuffer:t,componentDatatype:r,componentsPerAttribute:n}]},r.prototype.getAttributeLocations=function(){return this.quantization===g.NONE?m:u},r.clone=function(t,e){return M.defined(e)||(e=new r),e.quantization=t.quantization,e.minimumHeight=t.minimumHeight,e.maximumHeight=t.maximumHeight,e.center=T.Cartesian3.clone(t.center),e.toScaledENU=N.Matrix4.clone(t.toScaledENU),e.fromScaledENU=N.Matrix4.clone(t.fromScaledENU),e.matrix=N.Matrix4.clone(t.matrix),e.hasVertexNormals=t.hasVertexNormals,e.hasWebMercatorT=t.hasWebMercatorT,e},t.TerrainEncoding=r});
