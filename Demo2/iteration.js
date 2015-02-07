/**
 * Created by abmitra on 2/6/2015.
 */
var _ = require("lodash");
var surfaceData = [
    {
        Values:[
            {
                id: 1
            },
            {
                id:2
            }
        ]
    },
    {
        Values:[
            {
                id: 3
            },
            {
                id:4
            }
        ]
    },
    {
        Values:[
            {
                id: 5
            },
            {
                id:6
            }
        ]
    }
]



//$.each(surfaceData, function(index, lineSurface) {
//    if (lineSurface.Values && lineSurface.Values.length > 0) {
//        $.each(lineSurface.Values, function(index1, lineSurfaceMediaSourceId) {
//            lineMediaSourceIds.push(lineSurfaceMediaSourceId.Id);
//        });
//    }
//});
function sanitize(elem) {
    return elem.Values && elem.Values.length;
}

console.log(_.chain(surfaceData).filter(sanitize).pluck("Values").flatten().pluck('id'));






//console.log(ids.value());
//console.log(ids.filter(function(elem){ return elem%2==0}).value());