const models = require('../models');

const excitedPrompt = models.ExcitedPrompt;

// 
const makePage = (req,res) => {
  return res.render('thoughtDrop');
}


// Create a new response to this prompt
const answerPrompt = (req,res) => {
    if(!req.body.answer){
        return res.status(400).json({error:'Please fill in your answer'});
    }
}

const promptData = {
    answer: req.body.answer,
};

const newLove = new prompt.LovePrompt(promptData);
