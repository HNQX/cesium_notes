define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-bd456c30","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-b16b580b","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-ade3eb1b","./EncodedCartesian3-e9c71cf0","./IndexDatatype-53503fee","./IntersectionTests-cbe5c767","./Plane-8499b136","./GeometryOffsetAttribute-7350d9af","./VertexFormat-7572c785","./EllipseGeometryLibrary-a275d6fa","./GeometryInstance-cfb61001","./EllipseGeometry-53d7c7ac"],function(o,e,t,n,i,r,a,s,l,d,m,c,u,p,y,_,h,G,x,f,g){"use strict";function b(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new g.EllipseGeometry(i),this._workerName="createCircleGeometry"}b.packedLength=g.EllipseGeometry.packedLength,b.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var v=new g.EllipseGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),E={center:new n.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return b.unpack=function(e,t,i){var r=g.EllipseGeometry.unpack(e,t,v);return E.center=n.Cartesian3.clone(r._center,E.center),E.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,E.ellipsoid),E.height=r._height,E.extrudedHeight=r._extrudedHeight,E.granularity=r._granularity,E.vertexFormat=G.VertexFormat.clone(r._vertexFormat,E.vertexFormat),E.stRotation=r._stRotation,E.shadowVolume=r._shadowVolume,o.defined(i)?(E.semiMajorAxis=r._semiMajorAxis,E.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new g.EllipseGeometry(E),i):(E.radius=r._semiMajorAxis,new b(E))},b.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},b.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,n=t(r,o),a=i(r,o);return new b({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:n,height:a,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(b.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=b.unpack(e,t)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),b.createGeometry(e)}});
