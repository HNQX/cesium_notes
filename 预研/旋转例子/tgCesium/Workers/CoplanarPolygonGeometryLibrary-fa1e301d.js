define(["exports","./Check-6c0211bc","./Cartesian2-bddc1162","./Transforms-bd456c30","./OrientedBoundingBox-7f31ca51"],function(n,t,f,x,B){"use strict";var e={},s=new f.Cartesian3,P=new f.Cartesian3,M=new f.Cartesian3,h=new f.Cartesian3,v=new B.OrientedBoundingBox;function o(n,t,e,r,a){var i=f.Cartesian3.subtract(n,t,s),o=f.Cartesian3.dot(e,i),u=f.Cartesian3.dot(r,i);return f.Cartesian2.fromElements(o,u,a)}e.validOutline=function(n){var t=B.OrientedBoundingBox.fromPoints(n,v).halfAxes,e=x.Matrix3.getColumn(t,0,P),r=x.Matrix3.getColumn(t,1,M),a=x.Matrix3.getColumn(t,2,h),i=f.Cartesian3.magnitude(e),o=f.Cartesian3.magnitude(r),u=f.Cartesian3.magnitude(a);return!(0===i&&(0===o||0===u)||0===o&&0===u)},e.computeProjectTo2DArguments=function(n,t,e,r){var a,i,o=B.OrientedBoundingBox.fromPoints(n,v),u=o.halfAxes,s=x.Matrix3.getColumn(u,0,P),c=x.Matrix3.getColumn(u,1,M),C=x.Matrix3.getColumn(u,2,h),m=f.Cartesian3.magnitude(s),d=f.Cartesian3.magnitude(c),g=f.Cartesian3.magnitude(C),l=Math.min(m,d,g);return(0!==m||0!==d&&0!==g)&&(0!==d||0!==g)&&(l!==d&&l!==g||(a=s),l===m?a=c:l===g&&(i=c),l!==m&&l!==d||(i=C),f.Cartesian3.normalize(a,e),f.Cartesian3.normalize(i,r),f.Cartesian3.clone(o.center,t),!0)},e.createProjectPointsTo2DFunction=function(r,a,i){return function(n){for(var t=new Array(n.length),e=0;e<n.length;e++)t[e]=o(n[e],r,a,i);return t}},e.createProjectPointTo2DFunction=function(e,r,a){return function(n,t){return o(n,e,r,a,t)}},n.CoplanarPolygonGeometryLibrary=e});
