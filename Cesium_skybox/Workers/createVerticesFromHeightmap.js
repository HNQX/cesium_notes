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
define(["./defined-b9ff0e39","./Check-e6691f86","./freezeObject-2d5b18ce","./defaultValue-199f5aa8","./Math-2145e044","./Cartesian2-40ed5530","./defineProperties-ae15c9d5","./Transforms-94513c2d","./RuntimeError-d5522ee3","./WebGLConstants-554ddbe2","./ComponentDatatype-9477db2c","./when-c208a7cf","./AttributeCompression-a7396e6f","./IntersectionTests-f6d27a39","./Plane-297770b0","./WebMercatorProjection-a290a2f5","./createTaskProcessorWorker","./EllipsoidTangentPlane-1ba7ce65","./OrientedBoundingBox-d258fabd","./EllipsoidalOccluder-58305577","./TerrainEncoding-b01d1123"],function(je,qe,e,Ge,Qe,Je,t,Ke,l,i,a,r,n,s,o,$e,f,et,tt,it,at){"use strict";var u=e.freezeObject({NONE:0,LERC:1}),rt={};rt.DEFAULT_STRUCTURE=e.freezeObject({heightScale:1,heightOffset:0,elementsPerHeight:1,stride:1,elementMultiplier:256,isBigEndian:!1});var nt=new Je.Cartesian3,st=new Ke.Matrix4,lt=new Je.Cartesian3,ot=new Je.Cartesian3;rt.computeVertices=function(e){if(!je.defined(e)||!je.defined(e.heightmap))throw new qe.DeveloperError("options.heightmap is required.");if(!je.defined(e.width)||!je.defined(e.height))throw new qe.DeveloperError("options.width and options.height are required.");if(!je.defined(e.nativeRectangle))throw new qe.DeveloperError("options.nativeRectangle is required.");if(!je.defined(e.skirtHeight))throw new qe.DeveloperError("options.skirtHeight is required.");var t,i,a,r,n=Math.cos,s=Math.sin,l=Math.sqrt,o=Math.atan,f=Math.exp,u=Qe.CesiumMath.PI_OVER_TWO,d=Qe.CesiumMath.toRadians,h=e.heightmap,c=e.width,m=e.height,g=e.skirtHeight,p=Ge.defaultValue(e.isGeographic,!0),w=Ge.defaultValue(e.ellipsoid,Je.Ellipsoid.WGS84),x=1/w.maximumRadius,k=e.nativeRectangle,y=e.rectangle;r=je.defined(y)?(t=y.west,i=y.south,a=y.east,y.north):p?(t=d(k.west),i=d(k.south),a=d(k.east),d(k.north)):(t=k.west*x,i=u-2*o(f(-k.south*x)),a=k.east*x,u-2*o(f(-k.north*x)));var I=e.relativeToCenter,v=je.defined(I);I=v?I:Je.Cartesian3.ZERO;var b=Ge.defaultValue(e.exaggeration,1),U=Ge.defaultValue(e.includeWebMercatorT,!1),T=Ge.defaultValue(e.structure,rt.DEFAULT_STRUCTURE),M=Ge.defaultValue(T.heightScale,rt.DEFAULT_STRUCTURE.heightScale),V=Ge.defaultValue(T.heightOffset,rt.DEFAULT_STRUCTURE.heightOffset),A=Ge.defaultValue(T.elementsPerHeight,rt.DEFAULT_STRUCTURE.elementsPerHeight),D=Ge.defaultValue(T.stride,rt.DEFAULT_STRUCTURE.stride),B=Ge.defaultValue(T.elementMultiplier,rt.DEFAULT_STRUCTURE.elementMultiplier),S=Ge.defaultValue(T.isBigEndian,rt.DEFAULT_STRUCTURE.isBigEndian),P=Je.Rectangle.computeWidth(k),E=Je.Rectangle.computeHeight(k),C=P/(c-1),F=E/(m-1);p||(P*=x,E*=x);var O,L,N=w.radiiSquared,R=N.x,z=N.y,H=N.z,_=65536,Y=-65536,W=Ke.Transforms.eastNorthUpToFixedFrame(I,w),X=Ke.Matrix4.inverseTransformation(W,st);U&&(O=$e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(i),L=1/($e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(r)-O));var Z=lt;Z.x=Number.POSITIVE_INFINITY,Z.y=Number.POSITIVE_INFINITY,Z.z=Number.POSITIVE_INFINITY;var j=ot;j.x=Number.NEGATIVE_INFINITY,j.y=Number.NEGATIVE_INFINITY,j.z=Number.NEGATIVE_INFINITY;var q=Number.POSITIVE_INFINITY,G=c+(0<g?2:0),Q=m+(0<g?2:0),J=G*Q,K=new Array(J),$=new Array(J),ee=new Array(J),te=U?new Array(J):[],ie=0,ae=m,re=0,ne=c;0<g&&(--ie,++ae,--re,++ne);for(var se=0,le=ie;le<ae;++le){var oe=le;oe<0&&(oe=0),m<=oe&&(oe=m-1);var fe,ue=k.north-F*oe,de=n(ue=p?d(ue):u-2*o(f(-ue*x))),he=s(ue),ce=H*he,me=(ue-i)/(r-i);me=Qe.CesiumMath.clamp(me,0,1),U&&(fe=($e.WebMercatorProjection.geodeticLatitudeToMercatorAngle(ue)-O)*L);for(var ge=re;ge<ne;++ge){var pe=ge;pe<0&&(pe=0),c<=pe&&(pe=c-1);var we=k.west+C*pe;p?we=d(we):we*=x;var xe,ke,ye=oe*(c*D)+pe*D;if(1===A)xe=h[ye];else if(xe=0,S)for(ke=0;ke<A;++ke)xe=xe*B+h[ye+ke];else for(ke=A-1;0<=ke;--ke)xe=xe*B+h[ye+ke];xe=(xe*M+V)*b;var Ie=(we-t)/(a-t);if(Ie=Qe.CesiumMath.clamp(Ie,0,1),ee[se]=new Je.Cartesian2(Ie,me),Y=Math.max(Y,xe),_=Math.min(_,xe),ge!==pe||le!==oe){ge<0?we-=1e-5*P:we+=1e-5*P,le<0?ue+=1e-5*E:ue-=1e-5*E,de=n(ue),ce=H*(he=s(ue)),xe-=g}var ve=de*n(we),be=de*s(we),Ue=R*ve,Te=z*be,Me=1/l(Ue*ve+Te*be+ce*he),Ve=Ue*Me,Ae=Te*Me,De=ce*Me,Be=new Je.Cartesian3;Be.x=Ve+ve*xe,Be.y=Ae+be*xe,Be.z=De+he*xe,K[se]=Be,$[se]=xe,U&&(te[se]=fe),se++,Ke.Matrix4.multiplyByPoint(X,Be,nt),Je.Cartesian3.minimumByComponent(nt,Z,Z),Je.Cartesian3.maximumByComponent(nt,j,j),q=Math.min(q,xe)}}var Se,Pe,Ee=Ke.BoundingSphere.fromPoints(K);je.defined(y)&&y.width<Qe.CesiumMath.PI_OVER_TWO+Qe.CesiumMath.EPSILON5&&(Se=tt.OrientedBoundingBox.fromRectangle(y,_,Y,w)),v&&(Pe=new it.EllipsoidalOccluder(w).computeHorizonCullingPoint(I,K));for(var Ce,Fe,Oe,Le,Ne=new et.AxisAlignedBoundingBox(Z,j,I),Re=new at.TerrainEncoding(Ne,q,Y,W,!1,U),ze=new Float32Array(J*Re.getStride()),He=0,_e=0;_e<J;++_e)He=Re.encode(ze,He,K[_e],ee[_e],$[_e],void 0,te[_e]);if(0<g){Le=[],Fe=[];for(var Ye=0;Ye<c;++Ye)Le.push(G+1+Ye),Fe.push(G*(Q-1)-2-Ye);Ce=[],Oe=[];for(var We=0;We<m;++We)Oe.push((We+1)*G+c),Ce.push((m-We)*G+1)}else{Le=[],Fe=[];for(var Xe=0;Xe<c;++Xe)Le.push(Xe),Fe.push(c*m-1-Xe);Ce=[],Oe=[];for(var Ze=0;Ze<m;++Ze)Oe.push((Ze+1)*c-1),Ce.push((m-Ze-1)*c)}return{vertices:ze,maximumHeight:Y,minimumHeight:_,encoding:Re,boundingSphere3D:Ee,orientedBoundingBox:Se,occludeePointInScaledSpace:Pe,westIndicesSouthToNorth:Ce,southIndicesEastToWest:Fe,eastIndicesNorthToSouth:Oe,northIndicesWestToEast:Le}};var d,h,c,m,g,D,V,A,B,S,P,E,z,C,p,w,x,k,y,I,v={};d={defaultNoDataValue:-34027999387901484e22,decode:function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,a=g(e,t.inputOffset||0,i),r=null!==t.noDataValue?t.noDataValue:d.defaultNoDataValue,n=h(a,t.pixelType||Float32Array,t.encodedMaskData,r,t.returnMask),s={width:a.width,height:a.height,pixelData:n.resultPixels,minValue:n.minValue,maxValue:a.pixels.maxValue,noDataValue:r};return n.resultMask&&(s.maskData=n.resultMask),t.returnEncodedMask&&a.mask&&(s.encodedMaskData=a.mask.bitset?a.mask.bitset:null),t.returnFileInfo&&(s.fileInfo=c(a),t.computeUsedBitDepths&&(s.fileInfo.bitDepths=m(a))),s}},h=function(e,t,i,a,r){var n,s,l,o=0,f=e.pixels.numBlocksX,u=e.pixels.numBlocksY,d=Math.floor(e.width/f),h=Math.floor(e.height/u),c=2*e.maxZError,m=Number.MAX_VALUE;i=i||(e.mask?e.mask.bitset:null),s=new t(e.width*e.height),r&&i&&(l=new Uint8Array(e.width*e.height));for(var g,p,w=new Float32Array(d*h),x=0;x<=u;x++){var k=x!==u?h:e.height%u;if(0!==k)for(var y=0;y<=f;y++){var I=y!==f?d:e.width%f;if(0!==I){var v,b,U,T,M=x*e.width*h+y*d,V=e.width-I,A=e.pixels.blocks[o];if(A.encoding<2?(v=0===A.encoding?A.rawData:(D(A.stuffedData,A.bitsPerPixel,A.numValidPixels,A.offset,c,w,e.pixels.maxValue),w),b=0):U=2===A.encoding?0:A.offset,i)for(p=0;p<k;p++){for(7&M&&(T=i[M>>3],T<<=7&M),g=0;g<I;g++)7&M||(T=i[M>>3]),128&T?(l&&(l[M]=1),m=(n=A.encoding<2?v[b++]:U)<m?n:m,s[M++]=n):(l&&(l[M]=0),s[M++]=a),T<<=1;M+=V}else if(A.encoding<2)for(p=0;p<k;p++){for(g=0;g<I;g++)m=(n=v[b++])<m?n:m,s[M++]=n;M+=V}else for(m=U<m?U:m,p=0;p<k;p++){for(g=0;g<I;g++)s[M++]=U;M+=V}if(1===A.encoding&&b!==A.numValidPixels)throw"Block and Mask do not match";o++}}}return{resultPixels:s,resultMask:l,minValue:m}},c=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,noDataValue:e.noDataValue}}},m=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},a=0;a<t;a++){var r=e.pixels.blocks[a];0===r.encoding?i.float32=!0:1===r.encoding?i[r.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},g=function(e,t,i){var a={},r=new Uint8Array(e,t,10);if(a.fileIdentifierString=String.fromCharCode.apply(null,r),"CntZImage"!==a.fileIdentifierString.trim())throw"Unexpected file identifier string: "+a.fileIdentifierString;t+=10;var n=new DataView(e,t,24);if(a.fileVersion=n.getInt32(0,!0),a.imageType=n.getInt32(4,!0),a.height=n.getUint32(8,!0),a.width=n.getUint32(12,!0),a.maxZError=n.getFloat64(16,!0),t+=24,!i)if(n=new DataView(e,t,16),a.mask={},a.mask.numBlocksY=n.getUint32(0,!0),a.mask.numBlocksX=n.getUint32(4,!0),a.mask.numBytes=n.getUint32(8,!0),a.mask.maxValue=n.getFloat32(12,!0),t+=16,0<a.mask.numBytes){var s=new Uint8Array(Math.ceil(a.width*a.height/8)),l=(n=new DataView(e,t,a.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(0<l)for(;l--;)s[f++]=n.getUint8(o++);else{var u=n.getUint8(o++);for(l=-l;l--;)s[f++]=u}l=n.getInt16(o,!0),o+=2}while(o<a.mask.numBytes);if(-32768!==l||f<s.length)throw"Unexpected end of mask RLE encoding";a.mask.bitset=s,t+=a.mask.numBytes}else 0==(a.mask.numBytes|a.mask.numBlocksY|a.mask.maxValue)&&(a.mask.bitset=new Uint8Array(Math.ceil(a.width*a.height/8)));n=new DataView(e,t,16),a.pixels={},a.pixels.numBlocksY=n.getUint32(0,!0),a.pixels.numBlocksX=n.getUint32(4,!0),a.pixels.numBytes=n.getUint32(8,!0),a.pixels.maxValue=n.getFloat32(12,!0),t+=16;var d=a.pixels.numBlocksX,h=a.pixels.numBlocksY,c=d+(0<a.width%d?1:0),m=h+(0<a.height%h?1:0);a.pixels.blocks=new Array(c*m);for(var g=0,p=0;p<m;p++)for(var w=0;w<c;w++){var x=0,k=e.byteLength-t;n=new DataView(e,t,Math.min(10,k));var y={};a.pixels.blocks[g++]=y;var I=n.getUint8(0);if(x++,y.encoding=63&I,3<y.encoding)throw"Invalid block encoding ("+y.encoding+")";if(2!==y.encoding){if(0!==I&&2!==I){if(I>>=6,2===(y.offsetType=I))y.offset=n.getInt8(1),x++;else if(1===I)y.offset=n.getInt16(1,!0),x+=2;else{if(0!==I)throw"Invalid block offset type";y.offset=n.getFloat32(1,!0),x+=4}if(1===y.encoding)if(I=n.getUint8(x),x++,y.bitsPerPixel=63&I,I>>=6,2===(y.numValidPixelsType=I))y.numValidPixels=n.getUint8(x),x++;else if(1===I)y.numValidPixels=n.getUint16(x,!0),x+=2;else{if(0!==I)throw"Invalid valid pixel count type";y.numValidPixels=n.getUint32(x,!0),x+=4}}var v;if(t+=x,3!==y.encoding)if(0===y.encoding){var b=(a.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*b),new Uint8Array(v).set(new Uint8Array(e,t,4*b));var U=new Float32Array(v);y.rawData=U,t+=4*b}else if(1===y.encoding){var T=Math.ceil(y.numValidPixels*y.bitsPerPixel/8),M=Math.ceil(T/4);v=new ArrayBuffer(4*M),new Uint8Array(v).set(new Uint8Array(e,t,T)),y.stuffedData=new Uint32Array(v),t+=T}}else t++}return a.eofOffset=t,a},D=function(e,t,i,a,r,n,s){var l,o,f,u=(1<<t)-1,d=0,h=0,c=Math.ceil((s-a)/r),m=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*m,l=0;l<i;l++){if(0===h&&(f=e[d++],h=32),t<=h)o=f>>>h-t&u,h-=t;else{var g=t-h;o=(f&u)<<g&u,o+=(f=e[d++])>>>(h=32-g)}n[l]=o<c?a+o*r:s}return n},x=d,V=function(e,t,i,a,r,n,s,l){var o,f,u,d,h,c=(1<<i)-1,m=0,g=0,p=4*e.length-Math.ceil(i*a/8);if(e[e.length-1]<<=8*p,r)for(o=0;o<a;o++)0===g&&(u=e[m++],g=32),i<=g?(f=u>>>g-i&c,g-=i):(f=(u&c)<<(d=i-g)&c,f+=(u=e[m++])>>>(g=32-d)),t[o]=r[f];else for(h=Math.ceil((l-n)/s),o=0;o<a;o++)0===g&&(u=e[m++],g=32),i<=g?(f=u>>>g-i&c,g-=i):(f=(u&c)<<(d=i-g)&c,f+=(u=e[m++])>>>(g=32-d)),t[o]=f<h?n+f*s:l},A=function(e,t,i,a,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,d=0,h=0,c=[],m=4*e.length-Math.ceil(t*i/8);e[e.length-1]<<=8*m;var g=Math.ceil((n-a)/r);for(f=0;f<i;f++)0===d&&(s=e[o++],d=32),t<=d?(h=s>>>d-t&l,d-=t):(h=(s&l)<<(u=t-d)&l,h+=(s=e[o++])>>>(d=32-u)),c[f]=h<g?a+h*r:n;return c.unshift(a),c},B=function(e,t,i,a,r,n,s,l){var o,f,u,d,h=(1<<i)-1,c=0,m=0,g=0;if(r)for(o=0;o<a;o++)0===m&&(u=e[c++],m=32,g=0),i<=m?(f=u>>>g&h,m-=i,g+=i):(f=u>>>g&h,m=32-(d=i-m),f|=((u=e[c++])&(1<<d)-1)<<i-d,g=d),t[o]=r[f];else{var p=Math.ceil((l-n)/s);for(o=0;o<a;o++)0===m&&(u=e[c++],m=32,g=0),i<=m?(f=u>>>g&h,m-=i,g+=i):(f=u>>>g&h,m=32-(d=i-m),f|=((u=e[c++])&(1<<d)-1)<<i-d,g=d),t[o]=f<p?n+f*s:l}return t},S=function(e,t,i,a,r,n){var s,l=(1<<t)-1,o=0,f=0,u=0,d=0,h=0,c=0,m=[],g=Math.ceil((n-a)/r);for(f=0;f<i;f++)0===d&&(s=e[o++],d=32,c=0),t<=d?(h=s>>>c&l,d-=t,c+=t):(h=s>>>c&l,d=32-(u=t-d),h|=((s=e[o++])&(1<<u)-1)<<t-u,c=u),m[f]=h<g?a+h*r:n;return m.unshift(a),m},P=function(e,t,i,a){var r,n,s,l,o=(1<<i)-1,f=0,u=0,d=4*e.length-Math.ceil(i*a/8);for(e[e.length-1]<<=8*d,r=0;r<a;r++)0===u&&(s=e[f++],u=32),i<=u?(n=s>>>u-i&o,u-=i):(n=(s&o)<<(l=i-u)&o,n+=(s=e[f++])>>>(u=32-l)),t[r]=n;return t},E=function(e,t,i,a){var r,n,s,l,o=(1<<i)-1,f=0,u=0,d=0;for(r=0;r<a;r++)0===u&&(s=e[f++],u=32,d=0),i<=u?(n=s>>>d&o,u-=i,d+=i):(n=s>>>d&o,u=32-(l=i-u),n|=((s=e[f++])&(1<<l)-1)<<i-l,d=l),t[r]=n;return t},z={HUFFMAN_LUT_BITS_MAX:12,computeChecksumFletcher32:function(e){for(var t=65535,i=65535,a=e.length,r=Math.floor(a/2),n=0;r;){var s=359<=r?359:r;for(r-=s;t+=e[n++]<<8,i+=t+=e[n++],--s;);t=(65535&t)+(t>>>16),i=(65535&i)+(i>>>16)}return 1&a&&(i+=t+=e[n]<<8),((i=(65535&i)+(i>>>16))<<16|(t=(65535&t)+(t>>>16)))>>>0},readHeaderInfo:function(e,t){var i=t.ptr,a=new Uint8Array(e,i,6),r={};if(r.fileIdentifierString=String.fromCharCode.apply(null,a),0!==r.fileIdentifierString.lastIndexOf("Lerc2",0))throw"Unexpected file identifier string (expect Lerc2 ): "+r.fileIdentifierString;i+=6;var n,s=new DataView(e,i,8),l=s.getInt32(0,!0);if(i+=4,3<=(r.fileVersion=l)&&(r.checksum=s.getUint32(4,!0),i+=4),s=new DataView(e,i,12),r.height=s.getUint32(0,!0),r.width=s.getUint32(4,!0),i+=8,4<=l?(r.numDims=s.getUint32(8,!0),i+=4):r.numDims=1,s=new DataView(e,i,40),r.numValidPixel=s.getUint32(0,!0),r.microBlockSize=s.getInt32(4,!0),r.blobSize=s.getInt32(8,!0),r.imageType=s.getInt32(12,!0),r.maxZError=s.getFloat64(16,!0),r.zMin=s.getFloat64(24,!0),r.zMax=s.getFloat64(32,!0),i+=40,t.headerInfo=r,t.ptr=i,3<=l&&(n=4<=l?52:48,this.computeChecksumFletcher32(new Uint8Array(e,i-n,r.blobSize-14))!==r.checksum))throw"Checksum failed.";return!0},checkMinMaxRanges:function(e,t){var i=t.headerInfo,a=this.getDataTypeArray(i.imageType),r=i.numDims*this.getDataTypeSize(i.imageType),n=this.readSubArray(e,t.ptr,a,r),s=this.readSubArray(e,t.ptr+r,a,r);t.ptr+=2*r;var l,o=!0;for(l=0;l<i.numDims;l++)if(n[l]!==s[l]){o=!1;break}return i.minValues=n,i.maxValues=s,o},readSubArray:function(e,t,i,a){var r;if(i===Uint8Array)r=new Uint8Array(e,t,a);else{var n=new ArrayBuffer(a);new Uint8Array(n).set(new Uint8Array(e,t,a)),r=new i(n)}return r},readMask:function(e,t){var i,a,r=t.ptr,n=t.headerInfo,s=n.width*n.height,l=n.numValidPixel,o=new DataView(e,r,4),f={};if(f.numBytes=o.getUint32(0,!0),r+=4,(0===l||s===l)&&0!==f.numBytes)throw"invalid mask";if(0===l)i=new Uint8Array(Math.ceil(s/8)),f.bitset=i,a=new Uint8Array(s),t.pixels.resultMask=a,r+=f.numBytes;else if(0<f.numBytes){i=new Uint8Array(Math.ceil(s/8));var u=(o=new DataView(e,r,f.numBytes)).getInt16(0,!0),d=2,h=0,c=0;do{if(0<u)for(;u--;)i[h++]=o.getUint8(d++);else for(c=o.getUint8(d++),u=-u;u--;)i[h++]=c;u=o.getInt16(d,!0),d+=2}while(d<f.numBytes);if(-32768!==u||h<i.length)throw"Unexpected end of mask RLE encoding";a=new Uint8Array(s);var m=0,g=0;for(g=0;g<s;g++)7&g?(m=i[g>>3],m<<=7&g):m=i[g>>3],128&m&&(a[g]=1);t.pixels.resultMask=a,f.bitset=i,r+=f.numBytes}return t.ptr=r,t.mask=f,!0},readDataOneSweep:function(e,t,i){var a,r=t.ptr,n=t.headerInfo,s=n.numDims,l=n.width*n.height,o=n.imageType,f=n.numValidPixel*z.getDataTypeSize(o)*s,u=t.pixels.resultMask;if(i===Uint8Array)a=new Uint8Array(e,r,f);else{var d=new ArrayBuffer(f);new Uint8Array(d).set(new Uint8Array(e,r,f)),a=new i(d)}if(a.length===l*s)t.pixels.resultPixels=a;else{t.pixels.resultPixels=new i(l*s);var h=0,c=0,m=0,g=0;if(1<s)for(m=0;m<s;m++)for(g=m*l,c=0;c<l;c++)u[c]&&(t.pixels.resultPixels[g+c]=a[h++]);else for(c=0;c<l;c++)u[c]&&(t.pixels.resultPixels[c]=a[h++])}return r+=f,t.ptr=r,!0},readHuffmanTree:function(e,t){var i=this.HUFFMAN_LUT_BITS_MAX,a=new DataView(e,t.ptr,16);if(t.ptr+=16,a.getInt32(0,!0)<2)throw"unsupported Huffman version";var r=a.getInt32(4,!0),n=a.getInt32(8,!0),s=a.getInt32(12,!0);if(s<=n)return!1;var l=new Uint32Array(s-n);z.decodeBits(e,t,l);var o,f,u,d,h=[];for(o=n;o<s;o++)h[f=o-(o<r?0:r)]={first:l[o-n],second:null};var c=e.byteLength-t.ptr,m=Math.ceil(c/4),g=new ArrayBuffer(4*m);new Uint8Array(g).set(new Uint8Array(e,t.ptr,c));var p,w=new Uint32Array(g),x=0,k=0;for(p=w[0],o=n;o<s;o++)0<(d=h[f=o-(o<r?0:r)].first)&&(h[f].second=p<<x>>>32-d,d<=32-x?32===(x+=d)&&(x=0,p=w[++k]):(x+=d-32,p=w[++k],h[f].second|=p>>>32-x));var y=0,I=0,v=new C;for(o=0;o<h.length;o++)void 0!==h[o]&&(y=Math.max(y,h[o].first));I=i<=y?i:y,30<=y&&console.log("WARning, large NUM LUT BITS IS "+y);var b,U,T,M,V,A=[];for(o=n;o<s;o++)if(0<(d=h[f=o-(o<r?0:r)].first))if(b=[d,f],d<=I)for(U=h[f].second<<I-d,T=1<<I-d,u=0;u<T;u++)A[U|u]=b;else for(U=h[f].second,V=v,M=d-1;0<=M;M--)V=U>>>M&1?(V.right||(V.right=new C),V.right):(V.left||(V.left=new C),V.left),0!==M||V.val||(V.val=b[1]);return{decodeLut:A,numBitsLUTQick:I,numBitsLUT:y,tree:v,stuffedData:w,srcPtr:k,bitPos:x}},readHuffman:function(e,t,i){var a,r,n,s,l,o,f,u,d,h=t.headerInfo,c=h.numDims,m=t.headerInfo.height,g=t.headerInfo.width,p=g*m,w=this.readHuffmanTree(e,t),x=w.decodeLut,k=w.tree,y=w.stuffedData,I=w.srcPtr,v=w.bitPos,b=w.numBitsLUTQick,U=w.numBitsLUT,T=0===t.headerInfo.imageType?128:0,M=t.pixels.resultMask,V=0;0<v&&(I++,v=0);var A,D=y[I],B=1===t.encodeMode,S=new i(p*c),P=S;for(A=0;A<h.numDims;A++){if(1<c&&(P=new i(S.buffer,p*A,p),V=0),t.headerInfo.numValidPixel===g*m)for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++){if(r=0,l=s=D<<v>>>32-b,32-v<b&&(l=s|=y[I+1]>>>64-v-b),x[l])r=x[l][1],v+=x[l][0];else for(l=s=D<<v>>>32-U,32-v<U&&(l=s|=y[I+1]>>>64-v-U),a=k,d=0;d<U;d++)if(!(a=s>>>U-d-1&1?a.right:a.left).left&&!a.right){r=a.val,v=v+d+1;break}32<=v&&(v-=32,D=y[++I]),n=r-T,B?(n+=0<f?V:0<o?P[u-g]:V,n&=255,V=P[u]=n):P[u]=n}else for(o=u=0;o<m;o++)for(f=0;f<g;f++,u++)if(M[u]){if(r=0,l=s=D<<v>>>32-b,32-v<b&&(l=s|=y[I+1]>>>64-v-b),x[l])r=x[l][1],v+=x[l][0];else for(l=s=D<<v>>>32-U,32-v<U&&(l=s|=y[I+1]>>>64-v-U),a=k,d=0;d<U;d++)if(!(a=s>>>U-d-1&1?a.right:a.left).left&&!a.right){r=a.val,v=v+d+1;break}32<=v&&(v-=32,D=y[++I]),n=r-T,B?(0<f&&M[u-1]?n+=V:0<o&&M[u-g]?n+=P[u-g]:n+=V,n&=255,V=P[u]=n):P[u]=n}t.ptr=t.ptr+4*(I+1)+(0<v?4:0)}t.pixels.resultPixels=S},decodeBits:function(e,t,i,a,r){var n=t.headerInfo,s=n.fileVersion,l=0,o=5<=e.byteLength-t.ptr?5:e.byteLength-t.ptr,f=new DataView(e,t.ptr,o),u=f.getUint8(0);l++;var d=u>>6,h=0==d?4:3-d,c=0<(32&u),m=31&u,g=0;if(1==h)g=f.getUint8(l),l++;else if(2==h)g=f.getUint16(l,!0),l+=2;else{if(4!=h)throw"Invalid valid pixel count type";g=f.getUint32(l,!0),l+=4}var p,w,x,k,y,I,v,b,U,T=2*n.maxZError,M=1<n.numDims?n.maxValues[r]:n.zMax;if(c){for(t.counter.lut++,b=f.getUint8(l),l++,k=Math.ceil((b-1)*m/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),x=new Uint8Array(w),t.ptr+=l,x.set(new Uint8Array(e,t.ptr,k)),v=new Uint32Array(w),t.ptr+=k,U=0;b-1>>>U;)U++;k=Math.ceil(g*U/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),(x=new Uint8Array(w)).set(new Uint8Array(e,t.ptr,k)),p=new Uint32Array(w),t.ptr+=k,I=3<=s?S(v,m,b-1,a,T,M):A(v,m,b-1,a,T,M),3<=s?B(p,i,U,g,I):V(p,i,U,g,I)}else t.counter.bitstuffer++,U=m,t.ptr+=l,0<U&&(k=Math.ceil(g*U/8),y=Math.ceil(k/4),w=new ArrayBuffer(4*y),(x=new Uint8Array(w)).set(new Uint8Array(e,t.ptr,k)),p=new Uint32Array(w),t.ptr+=k,3<=s?null===a?E(p,i,U,g):B(p,i,U,g,!1,a,T,M):null===a?P(p,i,U,g):V(p,i,U,g,!1,a,T,M))},readTiles:function(e,t,i){var a=t.headerInfo,r=a.width,n=a.height,s=a.microBlockSize,l=a.imageType,o=z.getDataTypeSize(l),f=Math.ceil(r/s),u=Math.ceil(n/s);t.pixels.numBlocksY=u,t.pixels.numBlocksX=f;var d,h,c,m,g,p,w,x,k=t.pixels.ptr=0,y=0,I=0,v=0,b=0,U=0,T=0,M=0,V=0,A=0,D=0,B=0,S=0,P=0,E=0,C=new i(s*s),F=n%s||s,O=r%s||s,L=a.numDims,N=t.pixels.resultMask,R=t.pixels.resultPixels;for(I=0;I<u;I++)for(b=I!==u-1?s:F,v=0;v<f;v++)for(A=I*r*s+v*s,D=r-(U=v!==f-1?s:O),x=0;x<L;x++){if(1<L&&(R=new i(t.pixels.resultPixels.buffer,r*n*x*o,r*n)),T=e.byteLength-t.ptr,h={},E=0,E++,V=(M=(d=new DataView(e,t.ptr,Math.min(10,T))).getUint8(0))>>6&255,(M>>2&15)!==(v*s>>3&15))throw"integrity issue";if(3<(g=3&M))throw t.ptr+=E,"Invalid block encoding ("+g+")";if(2!=g)if(0==g){if(t.counter.uncompressed++,t.ptr+=E,B=(B=b*U*o)<(S=e.byteLength-t.ptr)?B:S,c=new ArrayBuffer(B%o==0?B:B+o-B%o),new Uint8Array(c).set(new Uint8Array(e,t.ptr,B)),m=new i(c),P=0,N)for(k=0;k<b;k++){for(y=0;y<U;y++)N[A]&&(R[A]=m[P++]),A++;A+=D}else for(k=0;k<b;k++){for(y=0;y<U;y++)R[A++]=m[P++];A+=D}t.ptr+=P*o}else if(p=z.getDataTypeUsed(l,V),w=z.getOnePixel(h,E,p,d),E+=z.getDataTypeSize(p),3==g)if(t.ptr+=E,t.counter.constantoffset++,N)for(k=0;k<b;k++){for(y=0;y<U;y++)N[A]&&(R[A]=w),A++;A+=D}else for(k=0;k<b;k++){for(y=0;y<U;y++)R[A++]=w;A+=D}else if(t.ptr+=E,z.decodeBits(e,t,C,w,x),E=0,N)for(k=0;k<b;k++){for(y=0;y<U;y++)N[A]&&(R[A]=C[E++]),A++;A+=D}else for(k=0;k<b;k++){for(y=0;y<U;y++)R[A++]=C[E++];A+=D}else t.counter.constant++,t.ptr+=E}},formatFileInfo:function(e){return{fileIdentifierString:e.headerInfo.fileIdentifierString,fileVersion:e.headerInfo.fileVersion,imageType:e.headerInfo.imageType,height:e.headerInfo.height,width:e.headerInfo.width,numValidPixel:e.headerInfo.numValidPixel,microBlockSize:e.headerInfo.microBlockSize,blobSize:e.headerInfo.blobSize,maxZError:e.headerInfo.maxZError,pixelType:z.getPixelType(e.headerInfo.imageType),eofOffset:e.eofOffset,mask:e.mask?{numBytes:e.mask.numBytes}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,maxValue:e.headerInfo.zMax,minValue:e.headerInfo.zMin,noDataValue:e.noDataValue}}},constructConstantSurface:function(e){var t=e.headerInfo.zMax,i=e.headerInfo.numDims,a=e.headerInfo.height*e.headerInfo.width,r=a*i,n=0,s=0,l=0,o=e.pixels.resultMask;if(o)if(1<i)for(n=0;n<i;n++)for(l=n*a,s=0;s<a;s++)o[s]&&(e.pixels.resultPixels[l+s]=t);else for(s=0;s<a;s++)o[s]&&(e.pixels.resultPixels[s]=t);else if(e.pixels.resultPixels.fill)e.pixels.resultPixels.fill(t);else for(s=0;s<r;s++)e.pixels.resultPixels[s]=t},getDataTypeArray:function(e){var t;switch(e){case 0:t=Int8Array;break;case 1:t=Uint8Array;break;case 2:t=Int16Array;break;case 3:t=Uint16Array;break;case 4:t=Int32Array;break;case 5:t=Uint32Array;break;case 6:t=Float32Array;break;case 7:t=Float64Array;break;default:t=Float32Array}return t},getPixelType:function(e){var t;switch(e){case 0:t="S8";break;case 1:t="U8";break;case 2:t="S16";break;case 3:t="U16";break;case 4:t="S32";break;case 5:t="U32";break;case 6:t="F32";break;case 7:t="F64";break;default:t="F32"}return t},isValidPixelValue:function(e,t){if(null===t)return!1;var i;switch(e){case 0:i=-128<=t&&t<=127;break;case 1:i=0<=t&&t<=255;break;case 2:i=-32768<=t&&t<=32767;break;case 3:i=0<=t&&t<=65536;break;case 4:i=-2147483648<=t&&t<=2147483647;break;case 5:i=0<=t&&t<=4294967296;break;case 6:i=-34027999387901484e22<=t&&t<=34027999387901484e22;break;case 7:i=5e-324<=t&&t<=17976931348623157e292;break;default:i=!1}return i},getDataTypeSize:function(e){var t=0;switch(e){case 0:case 1:t=1;break;case 2:case 3:t=2;break;case 4:case 5:case 6:t=4;break;case 7:t=8;break;default:t=e}return t},getDataTypeUsed:function(e,t){var i=e;switch(e){case 2:case 4:i=e-t;break;case 3:case 5:i=e-2*t;break;case 6:i=0===t?e:1===t?2:1;break;case 7:i=0===t?e:e-2*t+1;break;default:i=e}return i},getOnePixel:function(e,t,i,a){var r=0;switch(i){case 0:r=a.getInt8(t);break;case 1:r=a.getUint8(t);break;case 2:r=a.getInt16(t,!0);break;case 3:r=a.getUint16(t,!0);break;case 4:r=a.getInt32(t,!0);break;case 5:r=a.getUInt32(t,!0);break;case 6:r=a.getFloat32(t,!0);break;case 7:r=a.getFloat64(t,!0);break;default:throw"the decoder does not understand this pixel type"}return r}},C=function(e,t,i){this.val=e,this.left=t,this.right=i},k={decode:function(e,t){var i=(t=t||{}).noDataValue,a=0,r={};r.ptr=t.inputOffset||0,r.pixels={},z.readHeaderInfo(e,r);var n=r.headerInfo,s=n.fileVersion,l=z.getDataTypeArray(n.imageType);z.readMask(e,r),n.numValidPixel===n.width*n.height||r.pixels.resultMask||(r.pixels.resultMask=t.maskData);var o,f=n.width*n.height;if(r.pixels.resultPixels=new l(f*n.numDims),r.counter={onesweep:0,uncompressed:0,lut:0,bitstuffer:0,constant:0,constantoffset:0},0!==n.numValidPixel)if(n.zMax===n.zMin)z.constructConstantSurface(r);else if(4<=s&&z.checkMinMaxRanges(e,r))z.constructConstantSurface(r);else{var u=new DataView(e,r.ptr,2),d=u.getUint8(0);if(r.ptr++,d)z.readDataOneSweep(e,r,l);else if(1<s&&n.imageType<=1&&Math.abs(n.maxZError-.5)<1e-5){var h=u.getUint8(1);if(r.ptr++,2<(r.encodeMode=h)||s<4&&1<h)throw"Invalid Huffman flag "+h;h?z.readHuffman(e,r,l):z.readTiles(e,r,l)}else z.readTiles(e,r,l)}r.eofOffset=r.ptr,t.inputOffset?(o=r.headerInfo.blobSize+t.inputOffset-r.ptr,1<=Math.abs(o)&&(r.eofOffset=t.inputOffset+r.headerInfo.blobSize)):(o=r.headerInfo.blobSize-r.ptr,1<=Math.abs(o)&&(r.eofOffset=r.headerInfo.blobSize));var c={width:n.width,height:n.height,pixelData:r.pixels.resultPixels,minValue:n.zMin,maxValue:n.zMax,validPixelCount:n.numValidPixel,dimCount:n.numDims,dimStats:{minValues:n.minValues,maxValues:n.maxValues},maskData:r.pixels.resultMask};if(r.pixels.resultMask&&z.isValidPixelValue(n.imageType,i)){var m=r.pixels.resultMask;for(a=0;a<f;a++)m[a]||(c.pixelData[a]=i);c.noDataValue=i}return r.noDataValue=i,t.returnFileInfo&&(c.fileInfo=z.formatFileInfo(r)),c},getBandCount:function(e){for(var t=0,i=0,a={ptr:0,pixels:{}};i<e.byteLength-58;)z.readHeaderInfo(e,a),i+=a.headerInfo.blobSize,t++,a.ptr=i;return t}},p=new ArrayBuffer(4),w=new Uint8Array(p),y=(new Uint32Array(p)[0]=1)===w[0],I={decode:function(e,t){if(!y)throw"Big endian system is not supported.";var i,a,r=(t=t||{}).inputOffset||0,n=new Uint8Array(e,r,10),s=String.fromCharCode.apply(null,n);if("CntZImage"===s.trim())i=x,a=1;else{if("Lerc2"!==s.substring(0,5))throw"Unexpected file identifier string: "+s;i=k,a=2}for(var l,o,f,u,d,h,c=0,m=e.byteLength-10,g=[],p={width:0,height:0,pixels:[],pixelType:t.pixelType,mask:null,statistics:[]};r<m;){var w=i.decode(e,{inputOffset:r,encodedMaskData:l,maskData:f,returnMask:0===c,returnEncodedMask:0===c,returnFileInfo:!0,pixelType:t.pixelType||null,noDataValue:t.noDataValue||null});r=w.fileInfo.eofOffset,0===c&&(l=w.encodedMaskData,f=w.maskData,p.width=w.width,p.height=w.height,p.dimCount=w.dimCount||1,p.pixelType=w.pixelType||w.fileInfo.pixelType,p.mask=w.maskData),1<a&&w.fileInfo.mask&&0<w.fileInfo.mask.numBytes&&g.push(w.maskData),c++,p.pixels.push(w.pixelData),p.statistics.push({minValue:w.minValue,maxValue:w.maxValue,noDataValue:w.noDataValue,dimStats:w.dimStats})}if(1<a&&1<g.length){for(h=p.width*p.height,p.bandMasks=g,(f=new Uint8Array(h)).set(g[0]),u=1;u<g.length;u++)for(o=g[u],d=0;d<h;d++)f[d]=f[d]&o[d];p.maskData=f}return p}},v.Lerc=I;var b=v.Lerc;return f(function(e,t){if(e.encoding===u.LERC){var i;try{i=b.decode(e.heightmap)}catch(e){throw new l.RuntimeError(e)}if(i.statistics[0].minValue===Number.MAX_VALUE)throw new l.RuntimeError("Invalid tile data");e.heightmap=i.pixels[0],e.width=i.width,e.height=i.height}var a=e.width,r=e.height;0<e.skirtHeight&&(a+=2,r+=2),e.ellipsoid=Je.Ellipsoid.clone(e.ellipsoid),e.rectangle=Je.Rectangle.clone(e.rectangle);var n=rt.computeVertices(e),s=n.vertices;return t.push(s.buffer),{vertices:s.buffer,numberOfAttributes:n.encoding.getStride(),minimumHeight:n.minimumHeight,maximumHeight:n.maximumHeight,gridWidth:a,gridHeight:r,boundingSphere3D:n.boundingSphere3D,orientedBoundingBox:n.orientedBoundingBox,occludeePointInScaledSpace:n.occludeePointInScaledSpace,encoding:n.encoding,westIndicesSouthToNorth:n.westIndicesSouthToNorth,southIndicesEastToWest:n.southIndicesEastToWest,eastIndicesNorthToSouth:n.eastIndicesNorthToSouth,northIndicesWestToEast:n.northIndicesWestToEast}})});
