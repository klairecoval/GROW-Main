const models = require('../models');

const happiestPrompt = models.HappiestPrompt;

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
    
    const newHappiest = new prompt.HappiestPrompt(promptData);
    const happiestPromise = newHappiest.save();
    
    /*
    thankPromise.then(() => {
        //res.json({});
    })
    */

    happiestPromise.catch((err) => {
        if(err.code === 11000){
            return res.status(400).json({error:"An error has occured"});
        }
        return res.status(400).json({error: 'An error has occured'});
    });
    
    return happiestPromise;
}

module.exports = {
    make: makePage,
    answerPrompt,
};