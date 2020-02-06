const models = require('../models');

const inspiredPrompt = models.InspiredPrompt;

// 
const makePage = (req,res) => {
  return res.render('thoughtDrop');
}


// Create a new response to this prompt
const answerPrompt = (req,res) => {
    if(!req.body.answer){
        return res.status(400).json({error:'Please fill in your answer'});
    }

    const promptData = {
        answer: req.body.answer,
    };
    
    const newInspired = new prompt.InspiredPrompt(promptData);
    const inspirePromise = newInspired.save();
    
    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

    inspirePromise.catch((err) => {
        if(err.code === 11000){
            return res.status(400).json({error:"An error has occured"});
        }
        return res.status(400).json({error: 'An error has occured'});
    });
    
    return inspirePromise;
}

module.exports = {
    make: makePage,
    answerPrompt,
};
