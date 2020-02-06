const models = require('../models');

const thankfulPrompt = models.ThankfulPrompt;

// 
const makePage = (req,res) => {
  return res.render('thoughtDrop');
}

const 

// Create a new response to this prompt
const answerPrompt = (req,res) => {
    if(!req.body.answer){
        return res.status(400).json({error:'Please fill in your answer'});
    }

    const promptData = {
        answer: req.body.answer,
    };
    
    const newThankful = new prompt.ThankfulPrompt(promptData);
    const thankPromise = newThankful.save();
    
    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

    thankPromise.catch((err) => {
        if(err.code === 11000){
            return res.status(400).json({error:"An error has occured"});
        }
        return res.status(400).json({error: 'An error has occured'});
    });
    
    return thankPromise;
}


module.exports = {
    make: makePage,
    answerPrompt,
};
