
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://FarziKumar:farzi123456789@cluster0.svwae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

const data ={ "data":
[
    {
      "pose": {
        "score": 0.40588661584564867,
        "keypoints": [
          {
            "score": 0.9539816975593567,
            "part": "nose",
            "position": {
              "x": 155.60994969881497,
              "y": 95.18739256492027
            }
          },
          {
            "score": 0.9152172803878784,
            "part": "leftEye",
            "position": {
              "x": 164.6157105886019,
              "y": 72.363176712623
            }
          },
          {
            "score": 0.8884870409965515,
            "part": "rightEye",
            "position": {
              "x": 129.36473485598196,
              "y": 68.25163083810072
            }
          },
          {
            "score": 0.668577253818512,
            "part": "leftEar",
            "position": {
              "x": 188.09240328463224,
              "y": 63.291892957228875
            }
          },
          {
            "score": 0.7021554708480835,
            "part": "rightEar",
            "position": {
              "x": 117.30978303689223,
              "y": 65.05650809636482
            }
          },
          {
            "score": 0.7634788155555725,
            "part": "leftShoulder",
            "position": {
              "x": 218.16327909322885,
              "y": 155.08800315856934
            }
          },
          {
            "score": 0.8025147318840027,
            "part": "rightShoulder",
            "position": {
              "x": 91.4848618874183,
              "y": 134.56265132243817
            }
          },
          {
            "score": 0.2507006525993347,
            "part": "leftElbow",
            "position": {
              "x": 262.5451847406534,
              "y": 271.714319559244
            }
          },
          {
            "score": 0.20017549395561218,
            "part": "rightElbow",
            "position": {
              "x": 14.100327345041128,
              "y": 252.00116221492107
            }
          },
          {
            "score": 0.23182028532028198,
            "part": "leftWrist",
            "position": {
              "x": 228.98219699126022,
              "y": 250.29061823280958
            }
          },
          {
            "score": 0.30122822523117065,
            "part": "rightWrist",
            "position": {
              "x": 76.20926532378563,
              "y": 241.9464493714846
            }
          },
          {
            "score": 0.09060270339250565,
            "part": "leftHip",
            "position": {
              "x": 240.53245381208566,
              "y": 268.2027261807368
            }
          },
          {
            "score": 0.05341207608580589,
            "part": "rightHip",
            "position": {
              "x": 77.63351588982802,
              "y": 275.5141474650456
            }
          },
          {
            "score": 0.04575171694159508,
            "part": "leftKnee",
            "position": {
              "x": 259.0890959776365,
              "y": 258.69922614097595
            }
          },
          {
            "score": 0.009315614588558674,
            "part": "rightKnee",
            "position": {
              "x": 59.50026711592307,
              "y": 275.83139419555664
            }
          },
          {
            "score": 0.019597826525568962,
            "part": "leftAnkle",
            "position": {
              "x": 246.2279497201626,
              "y": 264.69624440486615
            }
          },
          {
            "score": 0.0030555836856365204,
            "part": "rightAnkle",
            "position": {
              "x": 69.32045946671413,
              "y": 261.46543935629035
            }
          }
        ]
      },
      "skeleton": [
        [
          {
            "score": 0.7634788155555725,
            "part": "leftShoulder",
            "position": {
              "x": 218.16327909322885,
              "y": 155.08800315856934
            }
          },
          {
            "score": 0.8025147318840027,
            "part": "rightShoulder",
            "position": {
              "x": 91.4848618874183,
              "y": 134.56265132243817
            }
          }
        ]
      ]
    },
    {
      "pose": {
        "score": 0.1707955838235862,
        "keypoints": [
          {
            "score": 0.4610755145549774,
            "part": "nose",
            "position": {
              "x": 147.28142518263596,
              "y": 87.25388783674974
            }
          },
          {
            "score": 0.8286758661270142,
            "part": "leftEye",
            "position": {
              "x": 161.09053428356464,
              "y": 72.40233542368962
            }
          },
          {
            "score": 0.8884870409965515,
            "part": "rightEye",
            "position": {
              "x": 129.36473485598196,
              "y": 68.25163083810072
            }
          },
          {
            "score": 0.668577253818512,
            "part": "leftEar",
            "position": {
              "x": 188.09240328463224,
              "y": 63.291892957228875
            }
          },
          {
            "score": 0.7021554708480835,
            "part": "rightEar",
            "position": {
              "x": 117.30978303689223,
              "y": 65.05650809636482
            }
          },
          {
            "score": 0.8574504852294922,
            "part": "leftShoulder",
            "position": {
              "x": 63.6632565592344,
              "y": 110.86599573722252
            }
          },
          {
            "score": 0.8321784138679504,
            "part": "rightShoulder",
            "position": {
              "x": 218.42875693394586,
              "y": 154.26846126409677
            }
          },
          {
            "score": 0.46507397294044495,
            "part": "leftElbow",
            "position": {
              "x": 16.420959399296688,
              "y": 233.51920311267557
            }
          },
          {
            "score": 0.18562254309654236,
            "part": "rightElbow",
            "position": {
              "x": 263.710979956847,
              "y": 281.09795555701623
            }
          },
          {
            "score": 0.1603461354970932,
            "part": "leftWrist",
            "position": {
              "x": 42.60834041008582,
              "y": 243.43507900604834
            }
          },
          {
            "score": 0.2056627720594406,
            "part": "rightWrist",
            "position": {
              "x": 232.5055493941674,
              "y": 254.06266816762778
            }
          },
          {
            "score": 0.06719360500574112,
            "part": "leftHip",
            "position": {
              "x": 69.79542275575491,
              "y": 278.52538930452783
            }
          },
          {
            "score": 0.07180389761924744,
            "part": "rightHip",
            "position": {
              "x": 243.6482969063979,
              "y": 271.48422354918256
            }
          },
          {
            "score": 0.008639536798000336,
            "part": "leftKnee",
            "position": {
              "x": 53.817598617993866,
              "y": 276.75203825877264
            }
          },
          {
            "score": 0.023670459166169167,
            "part": "rightKnee",
            "position": {
              "x": 257.8803001642227,
              "y": 256.56384922907904
            }
          },
          {
            "score": 0.004714819602668285,
            "part": "leftAnkle",
            "position": {
              "x": 66.83399636011858,
              "y": 262.12866629087006
            }
          },
          {
            "score": 0.021168284118175507,
            "part": "rightAnkle",
            "position": {
              "x": 246.36744830241568,
              "y": 262.92472100257874
            }
          }
        ]
      },
      "skeleton": [
        [
          {
            "score": 0.8574504852294922,
            "part": "leftShoulder",
            "position": {
              "x": 63.6632565592344,
              "y": 110.86599573722252
            }
          },
          {
            "score": 0.8321784138679504,
            "part": "rightShoulder",
            "position": {
              "x": 218.42875693394586,
              "y": 154.26846126409677
            }
          }
        ]
      ]
    }
  ]}

import {poses} from './index.js';
console.log(poses);

db.collection('posenet').insertOne(data, (err, res) => {
    if(err) console.log(err);
    else{
        console.log("Data added: " + data);
    }
});
