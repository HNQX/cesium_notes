define(["exports","./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-bd456c30","./GeometryAttribute-b16b580b"],function(t,p,n,v,O,a,f){"use strict";var b=Math.cos,G=Math.sin,x=Math.sqrt,r={computePosition:function(t,n,a,r,e,o,s){var i,c=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,u=g.latitude-t.granYCos*r+e*t.granXSin,C=b(u),l=G(u),d=c.z*l,S=g.longitude+r*t.granYSin+e*t.granXCos,w=C*b(S),M=C*G(S),X=c.x*w,Y=c.y*M,m=x(X*w+Y*M+d*l);o.x=X/m,o.y=Y/m,o.z=d/m,a&&(i=t.stNwCorner,p.defined(i)?(u=i.latitude-t.stGranYCos*r+e*t.stGranXSin,S=i.longitude+r*t.stGranYSin+e*t.stGranXCos,s.x=(S-t.stWest)*t.lonScalar,s.y=(u-t.stSouth)*t.latScalar):(s.x=(S-h.west)*t.lonScalar,s.y=(u-h.south)*t.latScalar))}},R=new f.Matrix2,y=new O.Cartesian3,P=new O.Cartographic,W=new O.Cartesian3,_=new a.GeographicProjection;function T(t,n,a,r,e,o,s){var i=Math.cos(n),c=r*i,g=a*i,h=Math.sin(n),u=r*h,C=a*h;y=_.project(t,y),y=O.Cartesian3.subtract(y,W,y);var l=f.Matrix2.fromRotation(n,R);y=f.Matrix2.multiplyByVector(l,y,y),y=O.Cartesian3.add(y,W,y),--o,--s;var d=(t=_.unproject(y,t)).latitude,S=d+o*C,w=d-c*s,M=d-c*s+o*C,X=Math.max(d,S,w,M),Y=Math.min(d,S,w,M),m=t.longitude,p=m+o*g,b=m+s*u,G=m+s*u+o*g;return{north:X,south:Y,east:Math.max(m,p,b,G),west:Math.min(m,p,b,G),granYCos:c,granYSin:u,granXCos:g,granXSin:C,nwCorner:t}}r.computeOptions=function(t,n,a,r,e,o,s){var i=t.east,c=t.west,g=t.north,h=t.south,u=!1,C=!1;g===v.CesiumMath.PI_OVER_TWO&&(u=!0),h===-v.CesiumMath.PI_OVER_TWO&&(C=!0);var l,d,S,w=g-h,M=(l=i<c?v.CesiumMath.TWO_PI-c+i:i-c)/((d=Math.ceil(l/n)+1)-1),X=w/((S=Math.ceil(w/n)+1)-1),Y=O.Rectangle.northwest(t,o),m=O.Rectangle.center(t,P);0===a&&0===r||(m.longitude<Y.longitude&&(m.longitude+=v.CesiumMath.TWO_PI),W=_.project(m,W));var p,b,G,f=X,x=M,R=O.Rectangle.clone(t,e),y={granYCos:f,granYSin:0,granXCos:x,granXSin:0,nwCorner:Y,boundingRectangle:R,width:d,height:S,northCap:u,southCap:C};return 0!==a&&(g=(p=T(Y,a,M,X,0,d,S)).north,h=p.south,i=p.east,c=p.west,y.granYCos=p.granYCos,y.granYSin=p.granYSin,y.granXCos=p.granXCos,y.granXSin=p.granXSin,R.north=g,R.south=h,R.east=i,R.west=c),0!==r&&(a-=r,G=T(b=O.Rectangle.northwest(R,s),a,M,X,0,d,S),y.stGranYCos=G.granYCos,y.stGranXCos=G.granXCos,y.stGranYSin=G.granYSin,y.stGranXSin=G.granXSin,y.stNwCorner=b,y.stWest=G.west,y.stSouth=G.south),y},t.RectangleGeometryLibrary=r});
