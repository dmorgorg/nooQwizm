let QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR002 = (qNumber) => {
    // common for import?
    let uId = QWIZM.state.uId,
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

    let qId = 1000033, // question ID number, unique to this question
        seed = qId > uId ? qId % uId : uId === qId ? uId : uId % qId,
        lcrng = new utils.LCRNG(seed);

    thisQuiz[qNumber] = []; // thisQuiz is created at valid login so may cause errors when building new questions; reset and login should handle those.
    let tQ = thisQuiz[qNumber];

    //inputs
    // console.log(stringify(lcrng.getNext(2, 4, 0.025)))
    let c = stringify(lcrng.getNext(2, 4, 0.025)),
        a = stringify(lcrng.getNext(1.5, 1.64, 0.01) * c),
        b = stringify(lcrng.getNext(1.95, 1.975, 0.01) * c),
        A = stringify(acos((b * b + c * c - a * a) / (2 * b * c)));

    //calcs
    let a2 = Math.sqrt(b * b + c * c - 2 * b * c * cos(A)),
        B = acos((a * a + c * c - b * b) / (2 * a * c));

    let statement = `Determine the length of !$BC!$ and the angle !$ABC!$.`,
        img = `../../images/math02.png`,
        iV1 = ov({
            input: A + '&deg;',
            left: 31,
            top: 84,
            background: 'linen'
        }),
        iV2 = ov({
            input: c + ' cm',
            left: 50,
            top: 93,
            background: 'none'
        }),
        iV3 = ov({
            input: b + ' cm',
            left: 46,
            top: 49,
            rot: 55,
            background: 'none'
        });

    //stringify
    a2 = stringify(a);
    B = stringify(B);

    // thisQuiz.push(questionPart)
    tQ.push(qp({
        partStatement: `!$ BC !$`,
        units: 'm',
        marks: 5,
        correctSoln: a2
    }));
    tQ.push(qp({
        partStatement: ` !$ \\angle ABC !$`,
        units: '!$^\\circ!$',
        marks: 4,
        correctSoln: B
    }));


    return `<div class='statement width50'><h3>Q${qNumber}</h3>: ${statement}<br>
         </div>
    <div id = '${qId}img' class='image width30'>
    <img src= ${img}>
    ${iV1}
    ${iV2}
    ${iV3}</div>
    <form autocomplete="off"><div class='parts width45'>${QWIZM.methods.questionParts(qNumber)}</div></form>`;


};