"use strict";

var QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR003 = function (qNumber) {
  // common for import?
  var uId = QWIZM.state.uId,
      sd = QWIZM.methods.toSigDigs,
      stringify = QWIZM.methods.stringify,
      sin = utils.sin,
      cos = utils.cos,
      asin = utils.asin,
      acos = utils.acos,
      tan = utils.tan,
      atan = utils.atan,
      thisQuiz = QWIZM.state.thisQuiz,
      ov = QWIZM.methods.overlayVariable,
      qp = QWIZM.methods.questionPart;
  var qId = 1000037,
      // question ID number, unique to this question        
  seed = qId > uId ? qId % uId : uId === qId ? uId : uId % qId,
      lcrng = new utils.LCRNG(seed);
  thisQuiz[qNumber] = []; // thisQuiz is created at valid login so may cause errors when building new questions; reset and login should handle those.

  var tQ = thisQuiz[qNumber]; //inputs

  var topChord = sd(lcrng.getNext(30, 40, 0.5)),
      multiplier = tan(topChord),
      x1 = sd(lcrng.getNext(2, 3.5, 0.1)); //calcs

  var y = stringify(Math.round(x1 * multiplier * 5) / 5),
      x = stringify(Math.round(x1 * 2 / 3 * 5) / 5),
      phi = stringify(atan(y / (x / 2))),
      theta = 90 - stringify(atan(y / (1.5 * x)));
  var statement = "Determine angles !$\\theta!$ and !$\\phi!$.",
      img = "../../images/math03.png",
      iV1 = ov({
    input: x + ' m',
    left: 27,
    top: 86
  }),
      iV2 = ov({
    input: x + ' m',
    left: 51.5,
    top: 86
  }),
      iV3 = ov({
    input: x + ' m',
    left: 75.5,
    top: 86
  }),
      iV4 = ov({
    input: y + ' m',
    left: 7,
    top: 38
  }); // thisQuiz.push(questionPart)

  tQ.push(qp({
    partStatement: "!$ \\theta !$",
    units: '!$^\\circ!$',
    marks: 5,
    correctSoln: theta
  }));
  tQ.push(qp({
    partStatement: "!$ \\phi !$",
    units: '!$^\\circ!$',
    marks: 5,
    correctSoln: phi
  }));
  return "<div class='statement width40'><h3>Q".concat(qNumber, "</h3>: ").concat(statement, "    \n    </div>\n    <div class='image width60'><img src= ").concat(img, ">\n    ").concat(iV1, "\n    ").concat(iV2, "\n    ").concat(iV3, "\n    ").concat(iV4, "\n    </div>\n    <form autocomplete=\"off\"><div class='parts width40'>").concat(QWIZM.methods.questionParts(qNumber), "</div></form>");
};